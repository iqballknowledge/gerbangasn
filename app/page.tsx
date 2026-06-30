"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  BarChart2, Shield, Clock, Trophy, TrendingUp, Target,
  ChevronRight, CheckCircle, Star, Users, FileText, Zap,
  GraduationCap, ArrowRight, Plus, Minus
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: <BarChart2 size={22} color="#2563EB" />,
    title: "Simulasi CAT Realistis",
    desc: "Antarmuka dan sistem penilaian identik dengan sistem CAT BKN. Timer, navigasi soal, dan passing grade sesuai standar resmi.",
    color: "#2563EB"
  },
  {
    icon: <FileText size={22} color="#10B981" />,
    title: "Bank Soal Terkurasi",
    desc: "Ribuan soal dianalisis dari field report peserta CPNS & PPPK terbaru. Setiap soal dilengkapi pembahasan mendalam.",
    color: "#10B981"
  },
  {
    icon: <Trophy size={22} color="#F59E0B" />,
    title: "Ranking Nasional",
    desc: "Pantau posisi Anda di antara peserta se-Indonesia. Ranking berdasarkan official score yang hanya bisa disubmit satu kali.",
    color: "#F59E0B"
  },
  {
    icon: <Target size={22} color="#8B5CF6" />,
    title: "Target Nilai",
    desc: "Set target passing grade Anda dan pantau progres menuju target. Analisis gap antara skor saat ini dan target.",
    color: "#8B5CF6"
  },
  {
    icon: <TrendingUp size={22} color="#06B6D4" />,
    title: "Analisis Progress",
    desc: "Grafik tren nilai TWK, TIU, TKP per minggu. Identifikasi kekuatan dan kelemahan materi Anda.",
    color: "#06B6D4"
  },
  {
    icon: <Shield size={22} color="#EF4444" />,
    title: "Sistem Official & Practice",
    desc: "Official tryout hanya bisa submit sekali untuk ranking. Setelahnya, latih ulang berkali-kali dengan mode practice.",
    color: "#EF4444"
  },
];

const steps = [
  { n: "01", title: "Daftar & Mulai", desc: "Buat akun gratis dan langsung akses soal latihan serta tryout perdana." },
  { n: "02", title: "Kerjakan Tryout", desc: "Simulasi 110 soal (TWK+TIU+TKP) dalam 100 menit persis seperti ujian asli." },
  { n: "03", title: "Lihat Hasil & Ranking", desc: "Official score langsung masuk ranking nasional. Lihat posisi Anda di antara peserta lain." },
  { n: "04", title: "Analisis & Ulangi", desc: "Baca pembahasan soal yang salah, latihan mode practice, dan tingkatkan skor di tryout berikutnya." },
];

const faqs = [
  { q: "Apa perbedaan Official Tryout dan Practice Mode?", a: "Official Tryout hanya bisa dikerjakan satu kali per nomor tryout. Skor resmi yang Anda submit menjadi Official Score dan digunakan untuk ranking nasional. Setelah submit, Anda bisa masuk Practice Mode untuk mengerjakan ulang soal yang sama berkali-kali, namun skor practice tidak masuk ranking." },
  { q: "Apakah soal GerbangASN sama dengan soal CPNS resmi?", a: "Soal GerbangASN dibuat berdasarkan analisis pola soal dari field report peserta CPNS & PPPK terbaru. Soal dikurasi oleh tim yang berpengalaman di bidang seleksi ASN, namun bukan soal yang bocor dari BKN." },
  { q: "Bagaimana sistem passing grade?", a: "Passing grade sesuai ketentuan BKN: TWK minimal 65, TIU minimal 80, TKP minimal 143. Namun kelulusan akhir bergantung formasi dan passing grade kumulatif yang ditetapkan instansi masing-masing." },
  { q: "Berapa lama akses berlangganan?", a: "Paket Bulanan berlaku 30 hari, Paket Tahunan berlaku 365 hari sejak tanggal pembelian. Anda bisa upgrade paket kapan saja." },
  { q: "Apakah ada tryout gratis?", a: "Ya! Pengguna baru mendapatkan 1 Official Tryout gratis dan akses ke 50 soal latihan. Untuk akses penuh, upgrade ke paket Premium." },
];

const pricing = [
  {
    name: "Gratis",
    price: "Rp 0",
    period: "",
    features: ["1 Official Tryout", "50 soal latihan", "Pembahasan terbatas", "Ranking nasional"],
    cta: "Mulai Gratis",
    href: "/register",
    highlight: false,
  },
  {
    name: "Premium",
    price: "Rp 49.000",
    period: "/bulan",
    features: ["Semua Official Tryout", "Bank soal lengkap (2.000+)", "Pembahasan mendalam", "Ranking nasional + kota", "Analisis progress lengkap", "Practice mode unlimited"],
    cta: "Mulai Premium",
    href: "/register?plan=premium",
    highlight: true,
  },
  {
    name: "Tahunan",
    price: "Rp 299.000",
    period: "/tahun",
    badge: "Hemat 49%",
    features: ["Semua fitur Premium", "Akses 365 hari", "Prioritas bank soal baru", "Export progress PDF"],
    cta: "Pilih Tahunan",
    href: "/register?plan=annual",
    highlight: false,
  },
];

const fieldReports = [
  { area: "TWK", pct: 38, label: "Sejarah & Nasionalisme mendominasi 38% soal TWK tahun ini", color: "#2563EB" },
  { area: "TIU", pct: 45, label: "Silogisme dan penalaran analitis naik 45% dibanding tahun lalu", color: "#10B981" },
  { area: "TKP", pct: 52, label: "Skenario pelayanan publik real-world meningkat 52% dalam 2 tahun terakhir", color: "#F59E0B" },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar variant="landing" />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="badge badge-blue mb-6 mx-auto inline-flex">
            <Zap size={12} />
            Analisis Field Report CPNS & PPPK 2024/2025
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: 24,
            letterSpacing: "-0.02em"
          }}>
            Latihan Soal Berdasarkan<br />
            <span className="gradient-text">Analisis Field Report</span><br />
            CPNS & PPPK Terbaru
          </h1>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--text-secondary)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.7
          }}>
            Ribuan soal terkurasi, simulasi CAT realistis, pembahasan mendalam, serta analisis progres belajar
            yang membantu Anda fokus pada materi yang paling menentukan kelulusan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Coba Gratis Sekarang
            </Link>
            <a href="#cara-kerja" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "14px 24px", borderRadius: 10, border: "1px solid var(--border)",
              color: "var(--text-secondary)", fontSize: 15, fontWeight: 500,
              textDecoration: "none", transition: "all 0.2s"
            }}>
              Lihat Cara Kerja <ChevronRight size={16} />
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            {[
              { n: "12.400+", l: "Peserta aktif" },
              { n: "2.000+", l: "Soal terkurasi" },
              { n: "94%", l: "Lulus CPNS" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)" }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Report Analysis */}
      <section style={{ padding: "80px 0", background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-gold mb-4 inline-flex"><Star size={11} /> Berbasis Data</span>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>
              Soal Kami Dianalisis dari Field Report Nyata
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Tim kami mengumpulkan laporan soal dari peserta CPNS & PPPK untuk membuat latihan yang benar-benar relevan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fieldReports.map((r, i) => (
              <div key={i} className="card">
                <div style={{
                  fontSize: 48, fontWeight: 900,
                  background: `linear-gradient(135deg, ${r.color}, ${r.color}99)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: 8
                }}>{r.pct}%</div>
                <div className="badge" style={{ background: `${r.color}15`, color: r.color, marginBottom: 12 }}>
                  {r.area}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fitur" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>
              Semua yang Anda Butuhkan untuk Lulus
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>Platform lengkap dari latihan hingga ranking nasional</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card" style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${f.color}20`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}>
                <div style={{ background: `${f.color}15`, borderRadius: 10, padding: 10, display: "inline-flex", marginBottom: 14 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" style={{ padding: "80px 0", background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>
              Cara Kerja GerbangASN
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card flex gap-4">
                <div style={{
                  fontSize: 28, fontWeight: 900,
                  background: "linear-gradient(135deg, #2563EB20, #2563EB10)",
                  color: "#2563EB",
                  borderRadius: 12, minWidth: 56, height: 56,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(37,99,235,0.2)"
                }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" style={{ padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>
              Harga Terjangkau, Hasil Nyata
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>Mulai gratis, upgrade kapan saja</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <div key={i} className="card" style={p.highlight ? {
                borderColor: "#2563EB",
                background: "linear-gradient(135deg, rgba(37,99,235,0.08), var(--bg-card))",
                boxShadow: "0 0 40px rgba(37,99,235,0.15)"
              } : {}}>
                {p.highlight && (
                  <div style={{ background: "#2563EB", color: "white", fontSize: 11, fontWeight: 700,
                    padding: "4px 12px", borderRadius: 20, display: "inline-block", marginBottom: 16 }}>
                    TERPOPULER
                  </div>
                )}
                {"badge" in p && p.badge && (
                  <div className="badge badge-green mb-4 inline-flex">{p.badge}</div>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span style={{ fontSize: 32, fontWeight: 900, color: p.highlight ? "#60A5FA" : "var(--text-primary)" }}>
                    {p.price}
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: 14 }}>{p.period}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle size={15} color="#10B981" style={{ marginTop: 1, flexShrink: 0 }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={p.highlight ? "btn-primary" : ""}
                  style={!p.highlight ? {
                    display: "block", textAlign: "center", padding: "12px 24px",
                    border: "1px solid var(--border)", borderRadius: 10,
                    color: "var(--text-secondary)", fontWeight: 600, fontSize: 14,
                    textDecoration: "none", transition: "all 0.2s"
                  } : { display: "block", textAlign: "center", fontSize: 14 }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "80px 0", background: "var(--bg-secondary)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 40, textAlign: "center" }}>
            Pertanyaan Umum
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "18px 20px", background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-primary)", fontSize: 15, fontWeight: 600, textAlign: "left", gap: 12
                  }}>
                  {f.q}
                  {openFaq === i ? <Minus size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                    : <Plus size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px", color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(29,78,216,0.05))",
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: 24, padding: "60px 40px"
          }}>
            <GraduationCap size={48} color="#2563EB" style={{ margin: "0 auto 20px" }} />
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text-primary)", marginBottom: 16 }}>
              Mulai Perjalanan Menuju ASN Anda
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              Bergabung dengan lebih dari 12.000 peserta yang sudah mempersiapkan diri.<br />
              1 Official Tryout gratis, tanpa kartu kredit.
            </p>
            <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Daftar Gratis Sekarang <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 0", background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", borderRadius: 8, padding: 6 }}>
                  <GraduationCap size={16} color="white" />
                </div>
                <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>GerbangASN</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6 }}>
                Platform latihan CPNS & PPPK berbasis analisis field report terpercaya.
              </p>
            </div>
            {[
              { title: "Platform", links: ["Tryout", "Ranking", "Progress", "Harga"] },
              { title: "Informasi", links: ["Cara Kerja", "Blog", "FAQ", "Kontak"] },
              { title: "Legal", links: ["Syarat & Ketentuan", "Kebijakan Privasi"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, fontSize: 14 }}>{col.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" style={{ color: "var(--text-muted)", fontSize: 13, textDecoration: "none" }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>© 2025 GerbangASN. Hak cipta dilindungi.</span>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Dibuat untuk calon ASN Indonesia 🇮🇩</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
