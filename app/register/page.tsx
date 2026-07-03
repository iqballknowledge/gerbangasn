"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { GraduationCap, Eye, EyeOff, ArrowRight, Mail, Lock, User, CheckCircle } from "lucide-react";
import RegionCombobox from "@/components/RegionCombobox";

/**
 * Register Page — GerbangASN
 *
 * Perubahan pada revisi ini (lihat task UX):
 * - Field "Target Nilai" dihapus total (label, input, state, validasi, submit payload).
 *   Target skor sekarang dihitung otomatis dari hasil Tryout pertama, bukan diminta di sini.
 * - Field Kota diganti dari <select> statis ke RegionCombobox (searchable, 514 kab/kota,
 *   data di lib/regions.ts) — lihat components/RegionCombobox.tsx.
 * - Validasi inline real-time + pesan error per field.
 * - Checkbox persetujuan Syarat & Ketentuan wajib dicentang sebelum tombol aktif.
 * - Desain visual (dark theme, glass card, gradient blob, warna, layout, routing,
 *   dan alur submit dummy) TIDAK diubah — hanya isi & UX form yang direvisi.
 */

type FormState = {
  name: string;
  email: string;
  password: string;
  city: string; // diisi via RegionCombobox, harus persis salah satu value di lib/regions.ts
};

type TouchedState = Partial<Record<keyof FormState, boolean>>;

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!form.name.trim()) {
    errors.name = "Nama lengkap wajib diisi.";
  } else if (form.name.trim().length < 3) {
    errors.name = "Nama minimal 3 karakter.";
  }

  if (!form.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!form.password) {
    errors.password = "Password wajib diisi.";
  } else if (form.password.length < 8) {
    errors.password = "Password minimal 8 karakter.";
  }

  if (!form.city) {
    errors.city = "Pilih kota/kabupaten dari daftar.";
  }

  return errors;
}

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState<TouchedState>({});
  const [form, setForm] = useState<FormState>({ name: "", email: "", password: "", city: "" });

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0 && agreed;

  function markTouched(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, city: true });
    if (!isValid) return;

    setLoading(true);
    // NOTE: alur submit sengaja tetap dummy (tidak menyentuh Supabase/API) sesuai
    // instruksi task ini. Payload yang dikirim sudah TIDAK menyertakan target_score —
    // kolom itu punya default di database (lihat supabase/schema.sql) sehingga aman.
    await new Promise((r) => setTimeout(r, 1200));
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
          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Nama Lengkap */}
            <div>
              <label htmlFor="name" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
                Nama Lengkap
              </label>
              <div style={{ position: "relative" }}>
                <User size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input
                  id="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                  className="input-field"
                  style={{ paddingLeft: 42, borderColor: touched.name && errors.name ? "var(--danger)" : undefined }}
                  placeholder="Nama sesuai KTP"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => markTouched("name")}
                />
              </div>
              {touched.name && errors.name && (
                <p id="name-error" role="alert" style={{ marginTop: 6, fontSize: 12.5, color: "var(--danger)" }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
                Email
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                  className="input-field"
                  style={{ paddingLeft: 42, borderColor: touched.email && errors.email ? "var(--danger)" : undefined }}
                  placeholder="nama@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => markTouched("email")}
                />
              </div>
              {touched.email && errors.email && (
                <p id="email-error" role="alert" style={{ marginTop: 6, fontSize: 12.5, color: "var(--danger)" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock size={16} color="var(--text-muted)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  required
                  aria-required="true"
                  aria-invalid={touched.password && !!errors.password}
                  aria-describedby={touched.password && errors.password ? "password-error" : undefined}
                  className="input-field"
                  style={{ paddingLeft: 42, paddingRight: 42, borderColor: touched.password && errors.password ? "var(--danger)" : undefined }}
                  placeholder="Min. 8 karakter"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  onBlur={() => markTouched("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? "Sembunyikan password" : "Tampilkan password"}
                  aria-pressed={showPass}
                  style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {touched.password && errors.password && (
                <p id="password-error" role="alert" style={{ marginTop: 6, fontSize: 12.5, color: "var(--danger)" }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Kota / Kabupaten — searchable combobox, wajib pilih dari daftar */}
            <div>
              <RegionCombobox
                id="city"
                label="Kota / Kabupaten"
                required
                value={form.city}
                onChange={(value) => setForm({ ...form, city: value })}
                onBlurValidate={() => markTouched("city")}
                error={touched.city ? errors.city : undefined}
              />
              {touched.city && errors.city && (
                <p role="alert" style={{ marginTop: 6, fontSize: 12.5, color: "var(--danger)" }}>
                  {errors.city}
                </p>
              )}
            </div>

            {/* Persetujuan Syarat & Ketentuan */}
            <label
              htmlFor="agree-terms"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 13,
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                cursor: "pointer",
              }}
            >
              <input
                id="agree-terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ marginTop: 2, width: 16, height: 16, accentColor: "var(--accent-primary)", cursor: "pointer", flexShrink: 0 }}
              />
              <span>
                Saya menyetujui{" "}
                <Link href="/terms" style={{ color: "#60A5FA", textDecoration: "none" }}>
                  Syarat &amp; Ketentuan
                </Link>{" "}
                serta{" "}
                <Link href="/privacy" style={{ color: "#60A5FA", textDecoration: "none" }}>
                  Kebijakan Privasi
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="btn-primary"
              style={{
                fontSize: 15,
                padding: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 4,
                opacity: loading || !isValid ? 0.5 : 1,
                cursor: loading || !isValid ? "not-allowed" : "pointer",
                pointerEvents: loading ? "none" : "auto",
              }}
              disabled={loading || !isValid}
              aria-disabled={loading || !isValid}
            >
              {loading ? (
                <div style={{ width: 18, height: 18, border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              ) : (
                <>
                  <span>Daftar Gratis</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "var(--text-secondary)" }}>
            Sudah punya akun?{" "}
            <Link href="/login" style={{ color: "#60A5FA", fontWeight: 600, textDecoration: "none" }}>
              Masuk
            </Link>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
