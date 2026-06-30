"use client";

const days = ["S", "S", "R", "K", "J", "S", "M"];
const activePattern = [true, true, true, true, true, true, false]; // last 7 days

export default function StreakCalendar({ streak = 6 }: { streak?: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>Konsistensi Belajar</span>
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 16 }}>🔥</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "var(--gold)" }}>{streak} hari</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
            <div style={{
              width: "100%", aspectRatio: "1",
              borderRadius: 8,
              background: activePattern[i]
                ? "linear-gradient(135deg, #2563EB, #1D4ED8)"
                : "var(--bg-elevated)",
              border: `1px solid ${activePattern[i] ? "#2563EB" : "var(--border)"}`,
              boxShadow: activePattern[i] ? "0 0 12px rgba(37,99,235,0.3)" : "none",
              transition: "all 0.2s"
            }} />
            <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600 }}>{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
