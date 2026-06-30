# GerbangASN — Platform Latihan CPNS & PPPK

Platform tryout CPNS & PPPK berbasis analisis field report terbaru. Simulasi CAT realistis, bank soal terkurasi, pembahasan mendalam, ranking nasional, dan analisis progress belajar.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 + Custom Design System
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: Supabase (Auth + PostgreSQL)
- **Deployment**: Vercel

---

## Struktur Halaman

| Route | Halaman | Deskripsi |
|-------|---------|-----------|
| `/` | Landing Page | Hero, Field Report, Fitur, Cara Kerja, Harga, FAQ |
| `/login` | Login | Form masuk dengan email & password |
| `/register` | Register | Pendaftaran akun baru + target skor |
| `/forgot-password` | Lupa Password | Reset password via email |
| `/dashboard` | Pusat Belajar | Stats, progress section, streak, riwayat tryout |
| `/tryout` | Halaman Tryout | Timer, navigasi soal, bookmark, submit konfirmasi |
| `/result` | Hasil Tryout | Skor TWK/TIU/TKP, analisis, pembahasan soal |
| `/ranking` | Ranking | Nasional, Mingguan, Bulanan, Kota |
| `/progress` | Progress | Grafik tren, statistik per section, riwayat lengkap |

---

## Logika Official vs Practice

```
Official Tryout #N
   └── Submit SEKALI → Official Score → Masuk Ranking Nasional
   └── Setelah submit → Practice Mode (unlimited, tidak masuk ranking)

Practice Mode
   └── Submit berkali-kali → Skor tersimpan di Progress History
   └── Ranking nasional TETAP menggunakan Official Score
```

### Database Enforcement
- `UNIQUE INDEX` pada `(user_id, tryout_id)` WHERE `mode = 'official'`
- Function `has_official_submission()` untuk cek sebelum submit
- App-level validation di `/tryout` page

---

## Setup & Deployment

### 1. Clone & Install

```bash
git clone https://github.com/yourname/gerbangasn.git
cd gerbangasn
npm install
```

### 2. Setup Supabase

1. Buat project baru di [supabase.com](https://supabase.com)
2. Buka **SQL Editor** → paste isi file `supabase/schema.sql` → Run
3. Aktifkan **Email Auth** di Authentication → Providers
4. Salin **Project URL** dan **Anon Key** dari Settings → API

### 3. Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Jalankan Lokal

```bash
npm run dev
# Buka http://localhost:3000
```

### 5. Deploy ke Vercel

```bash
npm install -g vercel
vercel

# Set environment variables di Vercel Dashboard:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Atau via Vercel Dashboard → Import Git → Add env vars → Deploy.

---

## Struktur Direktori

```
gerbangasn/
├── app/
│   ├── globals.css          # Design system & CSS variables
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Landing page
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── forgot-password/page.tsx
│   ├── dashboard/page.tsx   # Pusat Belajar
│   ├── tryout/page.tsx      # CAT simulation
│   ├── result/page.tsx      # Hasil & analisis
│   ├── ranking/page.tsx     # Ranking nasional/mingguan/kota
│   └── progress/page.tsx    # Grafik & riwayat
├── components/
│   ├── Navbar.tsx           # Landing & app nav
│   ├── ScoreCard.tsx        # Reusable stat card
│   ├── SectionProgress.tsx  # TWK/TIU/TKP progress bar
│   └── StreakCalendar.tsx   # 7-day streak calendar
├── lib/
│   ├── supabase.ts          # Supabase client + types
│   ├── mock-data.ts         # Demo data (replace with Supabase)
│   └── utils.ts             # Helpers & constants
├── supabase/
│   └── schema.sql           # Full database schema
├── .env.local.example
├── vercel.json
└── next.config.ts
```

---

## Passing Grade CPNS/PPPK

| Section | Nilai Minimum | Nilai Maks |
|---------|--------------|------------|
| TWK | 65 | 150 |
| TIU | 80 | 175 |
| TKP | 143 | 225 |
| **Total** | **≥ 430** | **550** |

> ⚠️ Passing grade kumulatif final bergantung formasi instansi masing-masing.

---

## Pengembangan Selanjutnya (Post-MVP)

- [ ] Integrasi Supabase Auth (ganti mock data)
- [ ] Upload bank soal via admin panel
- [ ] Notifikasi jadwal tryout baru
- [ ] Export progress ke PDF
- [ ] Mobile app (React Native / Expo)
- [ ] Payment gateway (Midtrans / Xendit)

---

## Lisensi

© 2025 GerbangASN. All rights reserved.
