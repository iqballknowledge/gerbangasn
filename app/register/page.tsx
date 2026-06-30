"use client";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Eye, EyeOff, ArrowRight, Mail, Lock, User, MapPin, CheckCircle } from "lucide-react";

const cities = ["Jakarta", "Surabaya", "Bandung", "Medan", "Yogyakarta", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Bekasi", "Malang", "Lainnya"];

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ name: "", email: "", password: "", city: "", target: "510" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setStep("success");
  };

  if (step === "success") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div className="glass-bright" style={{ borderRadius: 24, padding: 48, textAlign: "center", maxWidth: 380 }}>
          <div style={{ width: 72, height: 72, background: "rgba(16,185,129,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle size={36} color="#10B981" />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Akun Berhasil Dibuat!</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
            Selamat datang di GerbangASN. Anda mendapatkan 1 Official Tryout gratis.
          </p>
          <Link href="/dashboard" className="btn-primary" style={{ display: "block", textAlign: "center", fontSize: 15 }}>
            Mulai Belajar →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", right: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      <div style={{ width: "100%", maxWidth: 440, position: "relative", zIndex: 1 }}>
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 12, padding: 10 }}>
              <GraduationCap size={22} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: 20, color: "var(--text-primary)" }}>GerbangASN</span>
          </Link>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Daftar Akun Gratis</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>1 Official Tryout gratis untuk Anda</p>
        </div>

        <div className="glass-bright" style={{ borderRadius: 20, padding: 32 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Nama Lengkap</label>
              <div style={{ position: "relative" }}>
                <User size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input type="text" required className="input-field" style={{ paddingLeft: 42 }}
                  placeholder="Nama sesuai KTP" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Email</label>
              <div style={{ position: "relative" }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input type="email" required className="input-field" style={{ paddingLeft: 42 }}
                  placeholder="nama@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Password</label>
              <div style={{ position: "relative" }}>
                <Lock size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input type={showPass ? "text" : "password"} required className="input-field"
                  style={{ paddingLeft: 42, paddingRight: 42 }}
                  placeholder="Min. 8 karakter" value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
                  <MapPin size={12} style={{ display: "inline", marginRight: 4 }} />Kota
                </label>
                <select className="input-field" value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  style={{ appearance: "none" }}>
                  <option value="">Pilih kota</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Target Nilai</label>
                <input type="number" min="430" max="550" className="input-field"
                  placeholder="510" value={form.target}
                  onChange={e => setForm({ ...form, target: e.target.value })} />
              </div>
            </div>

            <button type="submit" className="btn-primary"
              style={{ fontSize: 15, padding: "13px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 4 }}
              disabled={loading}>
              {loading ? (
                <div style={{ width: 18, height: 18, border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              ) : <><span>Buat Akun Gratis</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "var(--text-secondary)" }}>
            Sudah punya akun?{" "}
            <Link href="/login" style={{ color: "#60A5FA", fontWeight: 600, textDecoration: "none" }}>Masuk</Link>
          </div>
          <p style={{ textAlign: "center", fontSize: 11, color: "var(--text-muted)", marginTop: 12 }}>
            Dengan mendaftar, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi GerbangASN.
          </p>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
