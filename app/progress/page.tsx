"use client";
import Navbar from "@/components/Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Target, Star, BarChart2, Award, Calendar } from "lucide-react";
import { mockTryoutHistory } from "@/lib/mock-data";
import { useState } from "react";

const officialHistory = mockTryoutHistory.filter(t => t.mode === "official");
const allHistory = mockTryoutHistory;

const chartData = officialHistory.map(t => ({
  label: `#${t.number}`,
  total: t.total,
  TWK: t.twk,
  TIU: t.tiu,
  TKP: t.tkp,
  date: t.date,
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10, padding: 12 }}>
      <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>Tryout {label}</p>
      {payload.map((p: any) => (
        <div key={p.name} className="flex justify-between gap-6">
          <span style={{ color: p.color, fontSize: 13 }}>{p.name}</span>
          <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function ProgressPage() {
  const [chartMode, setChartMode] = useState<"total" | "section">("total");

  const personalBest = Math.max(...officialHistory.map(t => t.total));
  const avgScore = Math.round(officialHistory.reduce((s, t) => s + t.total, 0) / officialHistory.length);
  const targetScore = 510;
  const currentOfficialScore = officialHistory[officialHistory.length - 1].total;
  const improvement = currentOfficialScore - officialHistory[0].total;

  const sectionStats = {
    twk: { best: Math.max(...officialHistory.map(t => t.twk)), avg: Math.round(officialHistory.reduce((s, t) => s + t.twk, 0) / officialHistory.length), latest: officialHistory[officialHistory.length - 1].twk, color: "#2563EB" },
    tiu: { best: Math.max(...officialHistory.map(t => t.tiu)), avg: Math.round(officialHistory.reduce((s, t) => s + t.tiu, 0) / officialHistory.length), latest: officialHistory[officialHistory.length - 1].tiu, color: "#10B981" },
    tkp: { best: Math.max(...officialHistory.map(t => t.tkp)), avg: Math.round(officialHistory.reduce((s, t) => s + t.tkp, 0) / officialHistory.length), latest: officialHistory[officialHistory.length - 1].tkp, color: "#F59E0B" },
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar variant="app" />
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 16px" }}>

        <div className="flex items-center gap-3 mb-8">
          <div style={{ background: "rgba(37,99,235,0.15)", borderRadius: 12, padding: 10 }}>
            <TrendingUp size={24} color="#2563EB" />
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)" }}>Progress Belajar</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>Pantau perkembangan nilai Anda dari waktu ke waktu</p>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Personal Best", value: personalBest, icon: <Award size={16} color="#F59E0B" />, color: "#F59E0B", sub: "Nilai tertinggi" },
            { label: "Rata-rata Skor", value: avgScore, icon: <BarChart2 size={16} color="#10B981" />, color: "#10B981", sub: `Dari ${officialHistory.length} tryout` },
            { label: "Target Skor", value: targetScore, icon: <Target size={16} color="#8B5CF6" />, color: "#8B5CF6", sub: `Kurang ${targetScore - currentOfficialScore}` },
            { label: "Total Peningkatan", value: `+${improvement}`, icon: <TrendingUp size={16} color="#2563EB" />, color: "#2563EB", sub: "Dari tryout pertama" },
          ].map((s, i) => (
            <div key={i} className="card">
              <div className="flex justify-between items-start mb-3">
                <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>{s.label}</span>
                <div style={{ background: `${s.color}20`, borderRadius: 8, padding: 6 }}>{s.icon}</div>
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="card" style={{ marginBottom: 24 }}>
          <div className="flex items-center justify-between mb-6">
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Tren Nilai Official Tryout</h2>
            <div style={{ display: "flex", gap: 4, background: "var(--bg-elevated)", borderRadius: 8, padding: 3 }}>
              {[{ id: "total", label: "Total" }, { id: "section", label: "Per Section" }].map(m => (
                <button key={m.id} onClick={() => setChartMode(m.id as any)}
                  style={{
                    padding: "6px 14px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
                    background: chartMode === m.id ? "var(--bg-card)" : "none",
                    color: chartMode === m.id ? "var(--text-primary)" : "var(--text-secondary)"
                  }}>{m.label}</button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="label" tick={{ fill: "var(--text-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[400, 560]} tick={{ fill: "var(--text-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              {chartMode === "total" ? (
                <Line type="monotone" dataKey="total" stroke="#2563EB" strokeWidth={3} dot={{ fill: "#2563EB", r: 5, strokeWidth: 2, stroke: "var(--bg-primary)" }} activeDot={{ r: 7 }} name="Total" />
              ) : (
                <>
                  <Line type="monotone" dataKey="TWK" stroke="#2563EB" strokeWidth={2} dot={{ r: 4, fill: "#2563EB" }} name="TWK" />
                  <Line type="monotone" dataKey="TIU" stroke="#10B981" strokeWidth={2} dot={{ r: 4, fill: "#10B981" }} name="TIU" />
                  <Line type="monotone" dataKey="TKP" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4, fill: "#F59E0B" }} name="TKP" />
                  <Legend wrapperStyle={{ paddingTop: 16, fontSize: 12 }} />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>

          {/* Target line indicator */}
          <div className="flex items-center gap-2 mt-4 justify-center">
            <div style={{ width: 20, height: 2, background: "#8B5CF6", borderRadius: 1 }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Target: {targetScore}</span>
            <div style={{ width: 20, height: 2, background: "#2563EB", borderRadius: 1 }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Skor saat ini: {currentOfficialScore}</span>
          </div>
        </div>

        {/* Section breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(sectionStats).map(([key, val]) => (
            <div key={key} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span className="badge" style={{ background: `${val.color}15`, color: val.color, fontSize: 13, fontWeight: 700 }}>
                  {key.toUpperCase()}
                </span>
                <Star size={14} color={val.color} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { l: "Nilai Terakhir", v: val.latest },
                  { l: "Nilai Terbaik", v: val.best },
                  { l: "Rata-rata", v: val.avg },
                ].map(r => (
                  <div key={r.l} className="flex justify-between">
                    <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{r.l}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="progress-bar" style={{ marginTop: 14 }}>
                <div style={{
                  height: "100%", borderRadius: 3,
                  width: `${(val.latest / (key === "twk" ? 150 : key === "tiu" ? 175 : 225)) * 100}%`,
                  background: val.color
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Full history table */}
        <div className="card">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={18} color="#2563EB" />
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Riwayat Lengkap</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px" }}>
              <thead>
                <tr>
                  {["Tryout", "Mode", "TWK", "TIU", "TKP", "Total", "Status", "Tanggal"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "4px 12px", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allHistory.map((t) => (
                  <tr key={t.id}>
                    {[
                      { val: `#${t.number}`, bold: true },
                      {
                        val: t.mode === "official" ? "Resmi" : "Practice",
                        badge: true,
                        color: t.mode === "official" ? "#F59E0B" : "#60A5FA"
                      },
                      { val: t.twk, color: t.twk >= 65 ? "#10B981" : "#EF4444" },
                      { val: t.tiu, color: t.tiu >= 80 ? "#10B981" : "#EF4444" },
                      { val: t.tkp, color: t.tkp >= 143 ? "#10B981" : "#EF4444" },
                      { val: t.total, bold: true },
                      {
                        val: t.total >= 430 ? "Lulus" : "Belum",
                        color: t.total >= 430 ? "#10B981" : "#EF4444"
                      },
                      { val: new Date(t.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" }) },
                    ].map((cell, ci) => (
                      <td key={ci} style={{
                        padding: "10px 12px",
                        background: t.mode === "official" ? "var(--bg-elevated)" : "transparent",
                        borderRadius: ci === 0 ? "8px 0 0 8px" : ci === 7 ? "0 8px 8px 0" : 0,
                        fontSize: 13,
                        fontWeight: (cell as any).bold ? 700 : 500,
                        color: (cell as any).color || "var(--text-secondary)",
                        whiteSpace: "nowrap"
                      }}>
                        {(cell as any).badge ? (
                          <span style={{ background: `${(cell as any).color}15`, color: (cell as any).color, padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 700 }}>
                            {cell.val}
                          </span>
                        ) : cell.val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
