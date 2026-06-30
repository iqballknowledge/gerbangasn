"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, GraduationCap } from "lucide-react";

export default function Navbar({ variant = "landing" }: { variant?: "landing" | "app" }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (variant === "app") {
    return (
      <nav style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}
        className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 10 }}
              className="w-8 h-8 flex items-center justify-center">
              <GraduationCap size={18} color="white" />
            </div>
            <span className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>GerbangASN</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="nav-link">Pusat Belajar</Link>
            <Link href="/tryout" className="nav-link">Tryout</Link>
            <Link href="/ranking" className="nav-link">Ranking</Link>
            <Link href="/progress" className="nav-link">Progress</Link>
          </div>
          <Link href="/tryout"
            className="btn-primary hidden md:block text-sm"
            style={{ padding: "8px 18px" }}>
            Mulai Tryout
          </Link>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--text-secondary)" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
            className="md:hidden px-4 py-4 flex flex-col gap-4">
            <Link href="/dashboard" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Pusat Belajar</Link>
            <Link href="/tryout" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Tryout</Link>
            <Link href="/ranking" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Ranking</Link>
            <Link href="/progress" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Progress</Link>
            <Link href="/tryout" className="btn-primary text-center text-sm" onClick={() => setMobileOpen(false)}>
              Mulai Tryout
            </Link>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav style={{ background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 10 }}
            className="w-8 h-8 flex items-center justify-center">
            <GraduationCap size={18} color="white" />
          </div>
          <span className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>GerbangASN</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#fitur" className="nav-link">Fitur</a>
          <a href="#cara-kerja" className="nav-link">Cara Kerja</a>
          <a href="#harga" className="nav-link">Harga</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="nav-link hidden md:block">Masuk</Link>
          <Link href="/register" className="btn-primary text-sm" style={{ padding: "8px 18px" }}>
            Daftar Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
}
