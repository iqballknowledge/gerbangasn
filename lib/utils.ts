import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return score.toString();
}

export function getScoreStatus(score: number, passing: number = 430): {
  label: string;
  color: string;
  passed: boolean;
} {
  if (score >= passing) {
    return { label: "LULUS", color: "#10B981", passed: true };
  }
  return { label: "BELUM LULUS", color: "#EF4444", passed: false };
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

export function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

export const PASSING_TWK = 65;
export const PASSING_TIU = 80;
export const PASSING_TKP = 143;
export const TOTAL_PASSING = 430;
