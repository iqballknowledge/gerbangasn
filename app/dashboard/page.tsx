"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import SectionProgress from "@/components/SectionProgress";
import StreakCalendar from "@/components/StreakCalendar";
import { Trophy, Target, TrendingUp, Star, Play, ChevronRight, Award, Lock } from "lucide-react";
import { mockStats, mockTryoutHistory } from "@/lib/mock-data";

const officialHistory = mockTryoutHistory.filter(t => t.mode === "official");

function TryoutHistoryRow({ t, isLast }: { t: typeof mockTryoutHistory[0], isLast: boolean }) {
  const badge = t.mode === "official"
    ? <span style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>Resmi</span>
    : <span style={{ background: "rgba(37,99,235,0.15)", color: "#60A5FA", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>Practice</span>;

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 0",
      borderBottom: isLast ? "none" : "1px solid var(--border)"
    }}>
      <div className="flex items-center gap-3">
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "var(--bg-elevated)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, color: "var(--text-secondary)"
        }}>
          #{t.number}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>
            Official Tryout #{t.number}
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
            {t.mode === "official" ? "Percobaan resmi" : "Mode latihan"}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {badge}
        <span style={{ fontSize: 20, fontWeight: 800, color: t.total >= 430 ? "#10B981" : "var(--text-primary)" }}>
          {t.total}
        </span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const lastThree = officialHistory.slice(-3).reverse();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar variant="app" />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>
              Pusat Belajar
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
              Selamat datang kembali, <strong style={{ color: "var(--text-primary)" }}>Rizki</strong> 👋
            </p>
          </div>
          <Link href="/tryout" className="btn-primary flex items-center gap-2" style={{ fontSize: 14 }}>
            <Play size={15} fill="white" /> Mulai Tryout
          </Link>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <ScoreCard
            label="Official Score"
            value={mockStats.officialScore}
            subtitle="Skor resmi terakhir"
            icon={<Star size={16} color="#F59E0B" />}
            accentColor="#F59E0B"
            highlight
          />
          <ScoreCard
            label="Ranking Nasional"
            value={`#${mockStats.nationalRank}`}
            subtitle="Peringkat saat ini"
            icon={<Trophy size={16} color="#2563EB" />}
            accentColor="#2563EB"
          />
          <ScoreCard
            label="Progress Minggu Ini"
            value={`+${mockStats.weeklyGain}`}
            subtitle="Dibanding minggu lalu"
            trend="up"
            trendValue="Naik"
            icon={<TrendingUp size={16} color="#10B981" />}
            accentColor="#10B981"
          />
          <ScoreCard
            label="Target Nilai"
            value={mockStats.targetScore}
            subtitle={`Kurang ${mockStats.targetScore - mockStats.officialScore} poin`}
            icon={<Target size={16} color="#8B5CF6" />}
            accentColor="#8B5CF6"
          />
        </div>

        {/* Section Progress + Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Section Progress */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>Progress Per Section</h2>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Update otomatis</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <SectionProgress label="TWK" score={mockStats.twk} maxScore={150} passingScore={65} color="#2563EB" />
              <SectionProgress label="TIU" score={mockStats.tiu} maxScore={175} passingScore={80} color="#10B981" />
              <SectionProgress label="TKP" score={mockStats.tkp} maxScore={225} passingScore={143} color="#F59E0B" />
            </div>
          </div>

          {/* Calendar + Streak */}
          <div className="card">
            <StreakCalendar streak={mockStats.streak} />
            <div style={{ borderTop: "1px solid var(--border)", marginTop: 20, paddingTop: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 12 }}>Target Progress</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{
                  width: `${(mockStats.officialScore / mockStats.targetScore) * 100}%`,
                  background: "linear-gradient(90deg, #2563EB80, #2563EB)"
                }} />
              </div>
              <div className="flex justify-between mt-2">
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{mockStats.officialScore}</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Target: {mockStats.targetScore}</span>
              </div>
            </div>

            {/* Quick score display */}
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { l: "TWK", v: mockStats.twk, c: "#2563EB" },
                { l: "TIU", v: mockStats.tiu, c: "#10B981" },
                { l: "TKP", v: mockStats.tkp, c: "#F59E0B" },
              ].map(s => (
                <div key={s.l} style={{ textAlign: "center", background: "var(--bg-elevated)", borderRadius: 10, padding: "10px 6px" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: s.c }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Riwayat Official Tryout + Available Tryouts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* History */}
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>Riwayat Official Tryout</h2>
              <Link href="/progress" style={{ fontSize: 13, color: "#60A5FA", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                Lihat Semua <ChevronRight size={14} />
              </Link>
            </div>
            {lastThree.map((t, i) => (
              <TryoutHistoryRow key={t.id} t={t} isLast={i === lastThree.length - 1} />
            ))}
          </div>

          {/* Next Tryout */}
          <div className="card" style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>Official Tryout</h2>

            {/* Completed tryouts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              {[1, 2, 3, 4, 5, 6, 7].map(n => (
                <div key={n} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 12px", borderRadius: 10,
                  background: "var(--bg-elevated)", border: "1px solid var(--border)"
                }}>
                  <div className="flex items-center gap-2">
                    <Award size={14} color="#F59E0B" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>Tryout #{n}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#10B981" }}>
                    {mockTryoutHistory.find(t => t.number === n && t.mode === "official")?.total || "-"}
                  </span>
                </div>
              ))}

              {/* Next available */}
              <Link href="/tryout" style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 12px", borderRadius: 10,
                  background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(29,78,216,0.08))",
                  border: "1px solid rgba(37,99,235,0.3)",
                  cursor: "pointer", transition: "all 0.2s"
                }}>
                  <div className="flex items-center gap-2">
                    <Play size={14} color="#60A5FA" fill="#60A5FA" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#60A5FA" }}>Tryout #8</span>
                  </div>
                  <span style={{ fontSize: 11, background: "#2563EB", color: "white", padding: "2px 8px", borderRadius: 4, fontWeight: 600 }}>MULAI</span>
                </div>
              </Link>

              {/* Locked tryouts */}
              {[9, 10].map(n => (
                <div key={n} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 12px", borderRadius: 10,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  opacity: 0.5
                }}>
                  <div className="flex items-center gap-2">
                    <Lock size={14} color="var(--text-muted)" />
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Tryout #{n}</span>
                  </div>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Terkunci</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
