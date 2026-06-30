"use client";

interface SectionProgressProps {
  label: string;
  score: number;
  maxScore: number;
  passingScore: number;
  color: string;
}

export default function SectionProgress({ label, score, maxScore, passingScore, color }: SectionProgressProps) {
  const pct = Math.min(100, (score / maxScore) * 100);
  const passingPct = (passingScore / maxScore) * 100;
  const passed = score >= passingScore;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span style={{
            background: `${color}20`, color, fontSize: 11, fontWeight: 700,
            padding: "2px 8px", borderRadius: 4
          }}>{label}</span>
          <span style={{ fontSize: 12, color: passed ? "#10B981" : "#EF4444", fontWeight: 600 }}>
            {passed ? "✓ LULUS" : "✗ BELUM"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)" }}>{score}</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>/ {maxScore}</span>
        </div>
      </div>
      <div className="progress-bar" style={{ position: "relative" }}>
        {/* Passing threshold marker */}
        <div style={{
          position: "absolute", left: `${passingPct}%`, top: -4,
          width: 1, height: "calc(100% + 8px)", background: "rgba(255,255,255,0.3)", zIndex: 2
        }} />
        <div className="progress-fill" style={{
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}80, ${color})`
        }} />
      </div>
      <div className="flex justify-between mt-1">
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Min: {passingScore}</span>
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Maks: {maxScore}</span>
      </div>
    </div>
  );
}
