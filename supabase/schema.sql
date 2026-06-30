-- GerbangASN Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================
-- PROFILES TABLE
-- =====================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  city TEXT DEFAULT '',
  target_score INTEGER DEFAULT 510,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', ''));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =====================
-- TRYOUTS TABLE (question bank)
-- =====================
CREATE TABLE tryouts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  number INTEGER NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO tryouts (number, title) VALUES
  (1, 'Official Tryout #1'), (2, 'Official Tryout #2'),
  (3, 'Official Tryout #3'), (4, 'Official Tryout #4'),
  (5, 'Official Tryout #5'), (6, 'Official Tryout #6'),
  (7, 'Official Tryout #7'), (8, 'Official Tryout #8'),
  (9, 'Official Tryout #9'), (10, 'Official Tryout #10');

-- =====================
-- TRYOUT RESULTS TABLE
-- =====================
CREATE TABLE tryout_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  tryout_id UUID REFERENCES tryouts(id) ON DELETE CASCADE NOT NULL,
  tryout_number INTEGER NOT NULL,
  twk_score INTEGER NOT NULL CHECK (twk_score >= 0 AND twk_score <= 150),
  tiu_score INTEGER NOT NULL CHECK (tiu_score >= 0 AND tiu_score <= 175),
  tkp_score INTEGER NOT NULL CHECK (tkp_score >= 0 AND tkp_score <= 225),
  total_score INTEGER GENERATED ALWAYS AS (twk_score + tiu_score + tkp_score) STORED,
  mode TEXT NOT NULL CHECK (mode IN ('official', 'practice')),
  answers JSONB DEFAULT '{}',
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  -- Enforce: only ONE official result per user per tryout
  CONSTRAINT unique_official_per_user_tryout UNIQUE NULLS NOT DISTINCT (user_id, tryout_id, mode)
    DEFERRABLE INITIALLY DEFERRED
);

-- We'll handle the "one official submission" logic at app level + unique constraint
-- Drop and recreate with correct logic:
ALTER TABLE tryout_results DROP CONSTRAINT IF EXISTS unique_official_per_user_tryout;

-- Partial unique index: enforce uniqueness only for official mode
CREATE UNIQUE INDEX idx_one_official_per_user_tryout
  ON tryout_results (user_id, tryout_id)
  WHERE mode = 'official';

ALTER TABLE tryout_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own results" ON tryout_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own results" ON tryout_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Public leaderboard view (anonymized or with consent)
CREATE POLICY "Anyone can view official results for ranking" ON tryout_results
  FOR SELECT USING (mode = 'official');

-- =====================
-- RANKING VIEW
-- =====================
-- National ranking: best official score per user
CREATE OR REPLACE VIEW national_ranking AS
SELECT
  p.id AS user_id,
  p.full_name,
  p.city,
  MAX(r.total_score) AS best_official_score,
  RANK() OVER (ORDER BY MAX(r.total_score) DESC) AS national_rank
FROM profiles p
JOIN tryout_results r ON p.id = r.user_id AND r.mode = 'official'
GROUP BY p.id, p.full_name, p.city
ORDER BY best_official_score DESC;

-- Weekly ranking
CREATE OR REPLACE VIEW weekly_ranking AS
SELECT
  p.id AS user_id,
  p.full_name,
  p.city,
  MAX(r.total_score) AS best_score,
  RANK() OVER (ORDER BY MAX(r.total_score) DESC) AS rank
FROM profiles p
JOIN tryout_results r ON p.id = r.user_id AND r.mode = 'official'
WHERE r.submitted_at >= NOW() - INTERVAL '7 days'
GROUP BY p.id, p.full_name, p.city
ORDER BY best_score DESC;

-- =====================
-- QUESTIONS TABLE
-- =====================
CREATE TABLE questions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  tryout_id UUID REFERENCES tryouts(id) ON DELETE CASCADE,
  section TEXT NOT NULL CHECK (section IN ('TWK', 'TIU', 'TKP')),
  number_in_section INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  option_e TEXT NOT NULL,
  correct_answer TEXT NOT NULL CHECK (correct_answer IN ('a','b','c','d','e')),
  explanation TEXT DEFAULT '',
  category TEXT DEFAULT '',
  difficulty TEXT DEFAULT 'medium' CHECK (difficulty IN ('easy','medium','hard')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Questions visible to authenticated users
CREATE POLICY "Authenticated users can view questions" ON questions
  FOR SELECT USING (auth.role() = 'authenticated');

-- =====================
-- INDEXES FOR PERFORMANCE
-- =====================
CREATE INDEX idx_results_user_id ON tryout_results(user_id);
CREATE INDEX idx_results_tryout_id ON tryout_results(tryout_id);
CREATE INDEX idx_results_mode ON tryout_results(mode);
CREATE INDEX idx_results_submitted_at ON tryout_results(submitted_at DESC);
CREATE INDEX idx_results_total_score ON tryout_results(total_score DESC);
CREATE INDEX idx_questions_tryout_section ON questions(tryout_id, section);

-- =====================
-- HELPER FUNCTIONS
-- =====================

-- Check if user has already submitted official tryout
CREATE OR REPLACE FUNCTION has_official_submission(p_user_id UUID, p_tryout_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM tryout_results
    WHERE user_id = p_user_id
      AND tryout_id = p_tryout_id
      AND mode = 'official'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Get user's official score (latest/highest official submission)
CREATE OR REPLACE FUNCTION get_official_score(p_user_id UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN COALESCE((
    SELECT total_score FROM tryout_results
    WHERE user_id = p_user_id AND mode = 'official'
    ORDER BY submitted_at DESC
    LIMIT 1
  ), 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
