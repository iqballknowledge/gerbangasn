"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CheckCircle, XCircle, Trophy, TrendingUp, RotateCcw, ChevronRight, BookOpen, Star } from "lucide-react";
import { mockQuestions } from "@/lib/mock-data";
import { useState } from "react";

const result = { twk: 72, tiu: 85, tkp: 168, total: 482, tryoutNum: 8 };
const passing = { twk: 65, tiu: 80, tkp: 143, total: 430 };

const analysis = [
  { section: "TWK", score: result.twk, min: passing.twk, passed: result.twk >= passing.twk, strongest: "Sejarah Nasional", weakest: "Bela Negara", tip: "Fokus lebih pada materi Bela Negara dan Wawasan Kebangsaan" },
  { section: "TIU", score: result.tiu, min: passing.tiu, passed: result.tiu >= passing.tiu, strongest: "Verbal Analogi", weakest: "Deret Angka", tip: "Latih soal deret angka dan penalaran matematika" },
  { section: "TKP", score: result.tkp, min: passing.tkp, passed: result.tkp >= passing.tkp, strongest: "Integritas", weakest: "Mengelola Konflik", tip: "Pahami lebih dalam nilai-nilai ASN untuk skenario konflik" },
];

export default function ResultPage() {
  const [showReview, setShowReview] = useState(false);
  const [reviewQ, setReviewQ] = useState(0);
  const passed = result.twk >= passing.twk && result.tiu >= passing.tiu && result.tkp >= passing.tkp;

  const q = mockQuestions[reviewQ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar variant="app" />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>

        {/* Result Hero */}
        <div className="card" style={{
          textAlign: "center", marginBottom: 24,
          background: passed
            ? "linear-gradient(135deg, rgba(16,185,129,0.08), var(--bg-card))"
            : "linear-gradient(135deg, rgba(239,68,68,0.06), var(--bg-card))",
          borderColor: passed ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.2)"
        }}>
          <div style={{ marginBottom: 16 }}>
            {passed
              ? <CheckCircle size={52} color="#10B981" style={{ margin: "0 auto" }} />
              : <XCircle size={52} color="#EF4444" style={{ margin: "0 auto" }} />}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Official Tryout #{result.tryoutNum}
          </div>
          <div style={{ fontSize: 64, fontWeight: 900, color: passed ? "#10B981" : "var(--text-primary)", lineHeight: 1, marginBottom: 8 }}>
            {result.total}
          </div>
          <div style={{
            display: "inline-block", padding: "6px 20px", borderRadius: 20, fontSize: 14, fontWeight: 700,
            background: passed ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)",
            color: passed ? "#10B981" : "#EF4444"
          }}>
            {passed ? "✓ SEMUA SECTION LULUS" : "✗ ADA SECTION TIDAK MEMENUHI"}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 12 }}>
            Skor ini telah masuk ke Ranking Nasional • {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Section Scores */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {analysis.map((s) => (
            <div key={s.section} className="card" style={{ textAlign: "center" }}>
              <div className="badge" style={{
                margin: "0 auto 8px",
                background: s.passed ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                color: s.passed ? "#10B981" : "#EF4444",
                display: "inline-flex"
              }}>
                {s.section}
              </div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "var(--text-primary)", lineHeight: 1, marginBottom: 4 }}>
                {s.score}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>Min: {s.min}</div>
              <div style={{
                fontSize: 11, fontWeight: 700,
                color: s.passed ? "#10B981" : "#EF4444"
              }}>
                {s.passed ? "✓ LULUS" : "✗ TIDAK LULUS"}
              </div>

              <div className="progress-bar" style={{ marginTop: 10 }}>
                <div style={{
                  height: "100%", borderRadius: 3,
                  width: `${Math.min(100, (s.score / (s.section === "TWK" ? 150 : s.section === "TIU" ? 175 : 225)) * 100)}%`,
                  background: s.passed ? "#10B981" : "#EF4444",
                  transition: "width 1s ease"
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Analysis */}
        <div className="card" style={{ marginBottom: 24 }}>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} color="#2563EB" />
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Analisis Belajar</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {analysis.map((s) => (
              <div key={s.section} style={{ borderLeft: "3px solid", borderColor: s.passed ? "#10B981" : "#EF4444", paddingLeft: 16 }}>
                <div className="flex justify-between items-center mb-2">
                  <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>{s.section}</span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Skor: {s.score}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                  <div style={{ background: "rgba(16,185,129,0.08)", borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Terkuat</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#10B981" }}>{s.strongest}</div>
                  </div>
                  <div style={{ background: "rgba(239,68,68,0.08)", borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Perlu Fokus</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#EF4444" }}>{s.weakest}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>💡 {s.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pembahasan Soal */}
        <div className="card" style={{ marginBottom: 24 }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={18} color="#2563EB" />
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Pembahasan Soal</h2>
            </div>
            <button onClick={() => setShowReview(!showReview)}
              style={{ fontSize: 13, color: "#60A5FA", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
              {showReview ? "Sembunyikan" : "Tampilkan"}
            </button>
          </div>

          {showReview && (
            <div>
              {/* Nav buttons */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {mockQuestions.map((_, i) => (
                  <button key={i} onClick={() => setReviewQ(i)}
                    style={{
                      width: 34, height: 34, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
                      background: i === reviewQ ? "#2563EB" : "var(--bg-elevated)",
                      color: i === reviewQ ? "white" : "var(--text-secondary)"
                    }}>{i + 1}</button>
                ))}
              </div>

              <div style={{ background: "var(--bg-elevated)", borderRadius: 12, padding: 20 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-blue" style={{ fontSize: 11 }}>{q.section}</span>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", fontSize: 11 }}>{q.category}</span>
                </div>
                <p style={{ fontSize: 15, color: "var(--text-primary)", lineHeight: 1.7, marginBottom: 16 }}>{q.text}</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  {q.options.map(opt => (
                    <div key={opt.id} style={{
                      padding: "10px 14px", borderRadius: 8, display: "flex", gap: 10, alignItems: "center",
                      background: opt.id === q.correctAnswer ? "rgba(16,185,129,0.12)" : "var(--bg-card)",
                      border: `1px solid ${opt.id === q.correctAnswer ? "rgba(16,185,129,0.4)" : "var(--border)"}`
                    }}>
                      <span style={{
                        width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0,
                        background: opt.id === q.correctAnswer ? "#10B981" : "var(--bg-elevated)",
                        color: opt.id === q.correctAnswer ? "white" : "var(--text-muted)"
                      }}>{opt.id.toUpperCase()}</span>
                      <span style={{ fontSize: 14, color: opt.id === q.correctAnswer ? "#10B981" : "var(--text-secondary)" }}>{opt.text}</span>
                      {opt.id === q.correctAnswer && <CheckCircle size={14} color="#10B981" style={{ marginLeft: "auto" }} />}
                    </div>
                  ))}
                </div>

                <div style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 10, padding: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#60A5FA", marginBottom: 6 }}>📚 Pembahasan</div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{q.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/ranking" style={{ textDecoration: "none" }}>
            <div className="card" style={{ textAlign: "center", cursor: "pointer" }}>
              <Trophy size={28} color="#F59E0B" style={{ margin: "0 auto 8px" }} />
              <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>Lihat Ranking</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Posisi nasional Anda</div>
            </div>
          </Link>
          <div className="card" style={{ textAlign: "center", cursor: "pointer", opacity: 0.9 }}
            onClick={() => window.location.href = "/tryout"}>
            <RotateCcw size={28} color="#2563EB" style={{ margin: "0 auto 8px" }} />
            <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>Practice Mode</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Ulangi tanpa batas</div>
          </div>
          <Link href="/progress" style={{ textDecoration: "none" }}>
            <div className="card" style={{ textAlign: "center", cursor: "pointer" }}>
              <Star size={28} color="#10B981" style={{ margin: "0 auto 8px" }} />
              <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>Lihat Progress</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Grafik perkembangan</div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
