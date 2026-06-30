"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Trophy, Medal, Search, MapPin, Crown } from "lucide-react";
import { mockRanking } from "@/lib/mock-data";

const tabs = [
  { id: "national", label: "Nasional" },
  { id: "weekly", label: "Mingguan" },
  { id: "monthly", label: "Bulanan" },
  { id: "city", label: "Kota" },
];

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Crown size={16} color="#FFD700" fill="#FFD700" />;
  if (rank === 2) return <Medal size={16} color="#C0C0C0" fill="#C0C0C0" />;
  if (rank === 3) return <Medal size={16} color="#CD7F32" fill="#CD7F32" />;
  return null;
}

const weeklyData = [
  { rank: 1, name: "Dewi Kusuma", city: "Medan", score: 501, isCurrentUser: false },
  { rank: 2, name: "Hendra Putra", city: "Makassar", score: 498, isCurrentUser: false },
  { rank: 3, name: "Rizki Firmansyah", city: "Yogyakarta", score: 490, isCurrentUser: true },
  { rank: 4, name: "Siti Rahayu", city: "Surabaya", score: 487, isCurrentUser: false },
  { rank: 5, name: "Ahmad Fauzi", city: "Jakarta", score: 484, isCurrentUser: false },
];

const monthlyData = [
  { rank: 1, name: "Ahmad Fauzi", city: "Jakarta", score: 538, isCurrentUser: false },
  { rank: 2, name: "Siti Rahayu", city: "Surabaya", score: 531, isCurrentUser: false },
  { rank: 3, name: "Budi Santoso", city: "Bandung", score: 525, isCurrentUser: false },
  { rank: 4, name: "Rizki Firmansyah", city: "Yogyakarta", score: 497, isCurrentUser: true },
  { rank: 5, name: "Dewi Kusuma", city: "Medan", score: 494, isCurrentUser: false },
];

const cityData = [
  { rank: 1, name: "Lina Susanti", city: "Yogyakarta", score: 518, isCurrentUser: false },
  { rank: 2, name: "Teguh Wibowo", city: "Yogyakarta", score: 502, isCurrentUser: false },
  { rank: 3, name: "Rizki Firmansyah", city: "Yogyakarta", score: 482, isCurrentUser: true },
  { rank: 4, name: "Sari Dewi", city: "Yogyakarta", score: 476, isCurrentUser: false },
  { rank: 5, name: "Bintang Pratama", city: "Yogyakarta", score: 471, isCurrentUser: false },
];

function RankList({ data }: { data: typeof mockRanking.national }) {
  const [search, setSearch] = useState("");
  const filtered = data.filter(d =>
    d.name !== "..." && d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ position: "relative", marginBottom: 16 }}>
        <Search size={15} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
        <input type="text" className="input-field" style={{ paddingLeft: 40 }}
          placeholder="Cari peserta..." value={search}
          onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", padding: "8px 16px", marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>#</span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>Peserta</span>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>Skor</span>
      </div>

      {data.map((entry, i) => {
        if (entry.name === "...") {
          return (
            <div key={`dots-${i}`} style={{ textAlign: "center", padding: "10px", color: "var(--text-muted)", fontSize: 20 }}>
              ···
            </div>
          );
        }
        if (search && !entry.name.toLowerCase().includes(search.toLowerCase())) return null;

        return (
          <div key={`${entry.rank}-${entry.name}`} className="rank-row"
            style={entry.isCurrentUser ? {
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.25)",
              borderRadius: 10
            } : {}}>
            <div className="flex items-center justify-center" style={{ width: 40 }}>
              {entry.rank <= 3 ? (
                <RankBadge rank={entry.rank} />
              ) : (
                <span style={{
                  fontSize: 14, fontWeight: 700,
                  color: entry.isCurrentUser ? "#60A5FA" : "var(--text-muted)"
                }}>
                  {entry.rank}
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: entry.isCurrentUser ? "rgba(37,99,235,0.2)" : "var(--bg-elevated)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700,
                  color: entry.isCurrentUser ? "#60A5FA" : "var(--text-secondary)"
                }}>
                  {entry.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: entry.isCurrentUser ? 700 : 500, color: entry.isCurrentUser ? "var(--text-primary)" : "var(--text-secondary)" }}>
                    {entry.name}
                    {entry.isCurrentUser && <span style={{ fontSize: 11, background: "#2563EB", color: "white", padding: "1px 6px", borderRadius: 4, marginLeft: 6, fontWeight: 600 }}>Anda</span>}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={10} color="var(--text-muted)" />
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{entry.city}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: entry.rank === 1 ? "#FFD700" : entry.rank === 2 ? "#C0C0C0" : entry.rank === 3 ? "#CD7F32" : "var(--text-primary)" }}>
              {entry.score}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("national");
  const currentUser = { national: 157, weekly: 3, monthly: 4, city: 3 };

  const getTabData = () => {
    switch (activeTab) {
      case "weekly": return weeklyData;
      case "monthly": return monthlyData;
      case "city": return cityData;
      default: return mockRanking.national;
    }
  };

  const getRankForTab = () => currentUser[activeTab as keyof typeof currentUser];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <Navbar variant="app" />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>

        <div className="flex items-center gap-3 mb-8">
          <div style={{ background: "rgba(245,158,11,0.15)", borderRadius: 12, padding: 10 }}>
            <Trophy size={24} color="#F59E0B" />
          </div>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)" }}>Ranking</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>Berdasarkan official score</p>
          </div>
        </div>

        {/* Current user rank highlight */}
        <div className="card" style={{
          marginBottom: 24,
          background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(29,78,216,0.06))",
          borderColor: "rgba(37,99,235,0.3)"
        }}>
          <div className="flex items-center justify-between">
            <div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>Posisi Anda — {tabs.find(t => t.id === activeTab)?.label}</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#60A5FA" }}>
                #{getRankForTab()}
              </div>
            </div>
            <div className="text-right">
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 4 }}>Official Score</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "var(--text-primary)" }}>482</div>
            </div>
            <div className="hidden sm:block">
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(37,99,235,0.15)", border: "3px solid rgba(37,99,235,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Trophy size={32} color="#2563EB" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, background: "var(--bg-elevated)", borderRadius: 12, padding: 4, marginBottom: 20 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1, padding: "9px 12px", borderRadius: 9, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, transition: "all 0.2s",
                background: activeTab === tab.id ? "var(--bg-card)" : "none",
                color: activeTab === tab.id ? "var(--text-primary)" : "var(--text-secondary)",
                boxShadow: activeTab === tab.id ? "0 1px 4px rgba(0,0,0,0.3)" : "none"
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Top 3 podium */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {getTabData().slice(0, 3).map((entry, i) => {
            const heights = [90, 70, 60];
            const colors = ["#FFD700", "#C0C0C0", "#CD7F32"];
            return (
              <div key={entry.rank} className="card" style={{ textAlign: "center", paddingTop: heights[i] - 60 + 16 }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>{["🥇", "🥈", "🥉"][i]}</div>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${colors[i]}20`, border: `2px solid ${colors[i]}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: 14, fontWeight: 700, color: colors[i] }}>
                  {entry.name.charAt(0)}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: entry.isCurrentUser ? "#60A5FA" : "var(--text-primary)", marginBottom: 2 }}>
                  {entry.name.split(" ")[0]}
                  {entry.isCurrentUser && <span style={{ fontSize: 9, background: "#2563EB", color: "white", padding: "1px 5px", borderRadius: 3, marginLeft: 4 }}>Anda</span>}
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: colors[i] }}>{entry.score}</div>
              </div>
            );
          })}
        </div>

        {/* Full list */}
        <div className="card">
          <RankList data={getTabData()} />
        </div>
      </main>
    </div>
  );
}
