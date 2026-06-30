"use client";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { ReactNode } from "react";

interface ScoreCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  highlight?: boolean;
  icon?: ReactNode;
  accentColor?: string;
}

export default function ScoreCard({
  label, value, subtitle, trend, trendValue, highlight, icon, accentColor = "#2563EB"
}: ScoreCardProps) {
  return (
    <div className="card" style={highlight ? { borderColor: accentColor, boxShadow: `0 0 20px rgba(37,99,235,0.1)` } : {}}>
      <div className="flex items-start justify-between mb-3">
        <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 500 }}>{label}</span>
        {icon && (
          <div style={{ background: `${accentColor}20`, borderRadius: 8, padding: 6 }}>
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-end gap-3 mb-1">
        <span style={{ fontSize: 36, fontWeight: 800, color: highlight ? accentColor : "var(--text-primary)", lineHeight: 1 }}>
          {value}
        </span>
        {trend && trendValue && (
          <div className="flex items-center gap-1 mb-1" style={{
            color: trend === "up" ? "#10B981" : trend === "down" ? "#EF4444" : "var(--text-muted)",
            fontSize: 13, fontWeight: 600
          }}>
            {trend === "up" ? <TrendingUp size={14} /> : trend === "down" ? <TrendingDown size={14} /> : <Minus size={14} />}
            {trendValue}
          </div>
        )}
      </div>
      {subtitle && <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 2 }}>{subtitle}</p>}
    </div>
  );
}
