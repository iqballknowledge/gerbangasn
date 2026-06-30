"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Clock, AlertCircle, X, CheckCircle } from "lucide-react";
import { mockQuestions, TRYOUT_CONFIG } from "@/lib/mock-data";
import { formatDuration } from "@/lib/utils";

type Phase = "intro" | "tryout" | "confirm" | "submitted";

export default function TryoutPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(TRYOUT_CONFIG.duration);
  const [showNav, setShowNav] = useState(false);

  const q = mockQuestions[currentQ];
  const totalQ = mockQuestions.length;

  const handleSubmit = useCallback(() => {
    setPhase("submitted");
    setTimeout(() => { window.location.href = "/result"; }, 800);
  }, []);

  useEffect(() => {
    if (phase !== "tryout") return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); handleSubmit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, handleSubmit]);

  const pct = (timeLeft / TRYOUT_CONFIG.duration) * 100;
  const timerColor = timeLeft < 600 ? "#EF4444" : timeLeft < 1800 ? "#F59E0B" : "#10B981";

  const answered = Object.keys(answers).length;
  const sectionLabel = (i: number) => {
    if (i < 2) return "TWK";
    if (i < 4) return "TIU";
    return "TKP";
  };

  if (phase === "intro") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
        <Navbar variant="app" />
        <div style={{ maxWidth: 640, margin: "60px auto", padding: "0 16px" }}>
          <div className="card">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ width: 64, height: 64, background: "rgba(37,99,235,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <AlertCircle size={32} color="#2563EB" />
              </div>
              <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>
                Official Tryout #8
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
                Simulasi CAT CPNS & PPPK — Baca ketentuan sebelum memulai
              </p>
            </div>

            <div style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: 16, marginBottom: 24 }}>
              <div className="flex items-start gap-3">
                <AlertCircle size={16} color="#F59E0B" style={{ marginTop: 1, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F59E0B", marginBottom: 4 }}>Perhatian: Official Mode</div>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    Tryout ini hanya bisa disubmit satu kali. Skor Anda akan langsung masuk ke Ranking Nasional.
                    Setelah submit, Anda bisa mengerjakan ulang dalam Practice Mode (skor tidak masuk ranking).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { l: "Total Soal", v: "110 soal" },
                { l: "Durasi", v: "100 menit" },
                { l: "TWK", v: "30 soal" },
                { l: "TIU", v: "35 soal" },
                { l: "TKP", v: "45 soal" },
                { l: "Passing TWK", v: "≥ 65" },
                { l: "Passing TIU", v: "≥ 80" },
                { l: "Passing TKP", v: "≥ 143" },
              ].map((i, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{i.l}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{i.v}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link href="/dashboard" style={{
                flex: 1, textAlign: "center", padding: "12px", borderRadius: 10,
                border: "1px solid var(--border)", color: "var(--text-secondary)",
                textDecoration: "none", fontSize: 14, fontWeight: 600
              }}>Kembali</Link>
              <button className="btn-primary" style={{ flex: 2, fontSize: 15 }}
                onClick={() => setPhase("tryout")}>
                Mulai Official Tryout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "submitted") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 72, height: 72, background: "rgba(16,185,129,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={36} color="#10B981" />
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Tryout Tersubmit!</h2>
          <p style={{ color: "var(--text-secondary)" }}>Memuat hasil...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", flexDirection: "column" }}>
      {/* Timer Header */}
      <div style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "12px 16px" }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Official #8</span>
              <span className="badge badge-gold">{sectionLabel(currentQ)}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: timerColor }}>
              <Clock size={16} />
              <span style={{ fontSize: 18, fontWeight: 800, fontFamily: "monospace" }}>{formatDuration(timeLeft)}</span>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{answered}/{totalQ} dijawab</span>
              <button onClick={() => setShowNav(!showNav)}
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 12px", color: "var(--text-secondary)", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
                Navigasi
              </button>
              {phase === "tryout" && (
                <button onClick={() => setPhase("confirm")}
                  style={{ background: "#EF4444", border: "none", borderRadius: 8, padding: "6px 14px", color: "white", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
                  Submit
                </button>
              )}
            </div>
          </div>
          {/* Timer bar */}
          <div className="progress-bar">
            <div style={{ height: "100%", borderRadius: 3, background: timerColor, width: `${pct}%`, transition: "width 1s linear" }} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", padding: "24px 16px", width: "100%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question */}
          <div className="lg:col-span-2">
            <div className="card">
              {/* Question header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Soal</span>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)" }}>{currentQ + 1}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>dari {totalQ}</span>
                  </div>
                  <div className="badge badge-blue" style={{ fontSize: 11 }}>{q.category}</div>
                </div>
                <button
                  onClick={() => {
                    const nb = new Set(bookmarks);
                    if (nb.has(q.id)) nb.delete(q.id); else nb.add(q.id);
                    setBookmarks(nb);
                  }}
                  style={{ background: "none", border: "none", cursor: "pointer", color: bookmarks.has(q.id) ? "#F59E0B" : "var(--text-muted)" }}>
                  {bookmarks.has(q.id) ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                </button>
              </div>

              <p style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.7, marginBottom: 24 }}>
                {q.text}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options.map((opt) => (
                  <button key={opt.id}
                    className={`option-btn ${answers[q.id] === opt.id ? "selected" : ""}`}
                    onClick={() => setAnswers({ ...answers, [q.id]: opt.id })}>
                    <span style={{
                      minWidth: 26, height: 26, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                      background: answers[q.id] === opt.id ? "#2563EB" : "var(--bg-card)",
                      color: answers[q.id] === opt.id ? "white" : "var(--text-muted)",
                      fontSize: 12, fontWeight: 700, flexShrink: 0, transition: "all 0.15s"
                    }}>{opt.id.toUpperCase()}</span>
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                  disabled={currentQ === 0}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 10, border: "1px solid var(--border)", background: "none", color: "var(--text-secondary)", cursor: currentQ === 0 ? "not-allowed" : "pointer", opacity: currentQ === 0 ? 0.4 : 1, fontWeight: 600, fontSize: 14 }}>
                  <ChevronLeft size={16} /> Sebelumnya
                </button>
                {currentQ < totalQ - 1 ? (
                  <button onClick={() => setCurrentQ(currentQ + 1)}
                    className="btn-primary flex items-center gap-2" style={{ fontSize: 14 }}>
                    Selanjutnya <ChevronRight size={16} />
                  </button>
                ) : (
                  <button onClick={() => setPhase("confirm")}
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 10, background: "#10B981", border: "none", color: "white", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                    Selesai & Submit
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Side nav - desktop */}
          <div className="hidden lg:block">
            <div className="card" style={{ position: "sticky", top: 80 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Navigasi Soal</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {mockQuestions.map((q2, i) => (
                  <button key={i}
                    className={`question-nav-btn ${i === currentQ ? "current" : answers[q2.id] ? "answered" : bookmarks.has(q2.id) ? "bookmarked" : ""}`}
                    onClick={() => setCurrentQ(i)}>
                    {i + 1}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12, color: "var(--text-secondary)" }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: 14, height: 14, background: "#2563EB", borderRadius: 4 }} /> Dijawab ({answered})
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: 14, height: 14, background: "var(--gold-dim)", border: "1px solid var(--gold)", borderRadius: 4 }} /> Ditandai ({bookmarks.size})
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: 14, height: 14, background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 4 }} /> Belum ({totalQ - answered})
                </div>
              </div>
              <button onClick={() => setPhase("confirm")}
                style={{ marginTop: 16, width: "100%", padding: "11px", background: "#10B981", border: "none", borderRadius: 10, color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                Submit Tryout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {showNav && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} onClick={() => setShowNav(false)} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--bg-secondary)", borderRadius: "20px 20px 0 0", padding: 24 }}>
            <div className="flex justify-between items-center mb-4">
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>Navigasi Soal</span>
              <button onClick={() => setShowNav(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}><X size={20} /></button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {mockQuestions.map((q2, i) => (
                <button key={i}
                  className={`question-nav-btn ${i === currentQ ? "current" : answers[q2.id] ? "answered" : ""}`}
                  style={{ width: 44, height: 44 }}
                  onClick={() => { setCurrentQ(i); setShowNav(false); }}>
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={() => { setPhase("confirm"); setShowNav(false); }}
              style={{ width: "100%", padding: 12, background: "#10B981", border: "none", borderRadius: 10, color: "white", fontWeight: 700, cursor: "pointer" }}>
              Submit Tryout
            </button>
          </div>
        </div>
      )}

      {/* Confirm dialog */}
      {phase === "confirm" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)" }} onClick={() => setPhase("tryout")} />
          <div className="card" style={{ position: "relative", zIndex: 1, maxWidth: 400, width: "90%", textAlign: "center" }}>
            <AlertCircle size={40} color="#F59E0B" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Yakin Submit?</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
              Official Tryout hanya bisa disubmit <strong style={{ color: "#F59E0B" }}>satu kali</strong>.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div style={{ background: "var(--bg-elevated)", borderRadius: 8, padding: 10, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981" }}>{answered}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Dijawab</div>
              </div>
              <div style={{ background: "var(--bg-elevated)", borderRadius: 8, padding: 10, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#EF4444" }}>{totalQ - answered}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Belum</div>
              </div>
              <div style={{ background: "var(--bg-elevated)", borderRadius: 8, padding: 10, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B" }}>{bookmarks.size}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Ditandai</div>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setPhase("tryout")}
                style={{ flex: 1, padding: "12px", border: "1px solid var(--border)", borderRadius: 10, background: "none", color: "var(--text-secondary)", cursor: "pointer", fontWeight: 600 }}>
                Lanjut Kerjakan
              </button>
              <button onClick={handleSubmit}
                style={{ flex: 1, padding: "12px", background: "#10B981", border: "none", borderRadius: 10, color: "white", cursor: "pointer", fontWeight: 700 }}>
                Ya, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
