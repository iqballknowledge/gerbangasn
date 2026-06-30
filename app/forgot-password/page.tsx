"use client";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "30%", left: "15%", width: 350, height: 350, background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      <div style={{ width: "100%", maxWidth: 400, position: "relative", zIndex: 1 }}>
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 12, padding: 10 }}>
              <GraduationCap size={22} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: 20, color: "var(--text-primary)" }}>GerbangASN</span>
          </Link>
        </div>

        <div className="glass-bright" style={{ borderRadius: 20, padding: 32 }}>
          {!sent ? (
            <>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Lupa Password?</h1>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
                  Masukkan email akun Anda. Kami akan mengirim tautan untuk mengatur ulang password.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Email</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input type="email" required className="input-field" style={{ paddingLeft: 42 }}
                      placeholder="nama@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ fontSize: 15, padding: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }} disabled={loading}>
                  {loading
                    ? <div style={{ width: 18, height: 18, border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    : "Kirim Tautan Reset"}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 64, height: 64, background: "rgba(16,185,129,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <CheckCircle size={32} color="#10B981" />
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>Email Terkirim!</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Cek inbox <strong style={{ color: "var(--text-primary)" }}>{email}</strong> untuk tautan reset password. Cek juga folder spam.
              </p>
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/login" style={{ color: "#60A5FA", fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
              <ArrowLeft size={14} /> Kembali ke Login
            </Link>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
