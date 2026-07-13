# Question Engine GerbangASN

## Tujuan

Question Engine GerbangASN adalah sistem terpadu yang digunakan untuk menghasilkan soal TWK berkualitas setara SKD CAT BKN.

Seluruh markdown yang terdapat pada Project merupakan bagian dari satu sistem dan harus digunakan secara bersamaan.

Tidak ada modul yang berdiri sendiri.

Generator harus memahami hubungan antar modul sebelum menghasilkan soal.

---

# Arsitektur Engine

Question Engine GerbangASN terdiri atas lima lapisan.

## Layer 1 — Core Engine

Tujuan:

Menentukan filosofi dan standar utama penyusunan soal.

Modul:

- gerbangasn-rules.md

---

## Layer 2 — Question Construction Engine

Tujuan:

Mengatur bagaimana soal dibangun.

Modul:

- stem-engine.md
- option-design-rules.md
- option-calibration.md
- comparison-engine.md
- difficulty-engine.md

---

## Layer 3 — Assessment Engine

Tujuan:

Menentukan kompetensi yang diukur.

Modul:

- competency-engine.md
- assessment-psychology.md
- topic-identity-engine.md

---

## Layer 4 — Validation Engine

Tujuan:

Melakukan evaluasi kualitas soal sebelum ditampilkan.

Modul:

- answer-distribution.md
- review-engine.md

---

## Layer 5 — Knowledge Engine

Tujuan:

Menentukan materi dan kompetensi berdasarkan topik.

Modul:

- knowledge.md
- assessment-focus.md
- assessment-pattern.md
- decision-pattern.md
- fact-bank.md
- references.md
- pattern-mining.md

---

# Workflow

Setiap kali menghasilkan soal, generator harus menggunakan seluruh layer secara berurutan.

Core Engine

↓

Question Construction Engine

↓

Assessment Engine

↓

Knowledge Engine

↓

Validation Engine

↓

Output

Generator tidak boleh melewati salah satu layer.

---

# Prioritas

Apabila terjadi konflik antar modul:

Core Engine

↓

Question Construction Engine

↓

Assessment Engine

↓

Knowledge Engine

↓

Materi Referensi (PDF)

---

# Prinsip

Question Engine GerbangASN adalah satu sistem.

Seluruh modul saling melengkapi.

Generator harus menganggap seluruh markdown sebagai satu kesatuan.

## Siklus Penyusunan Soal

1. Pahami kompetensi topik.
2. Tentukan kompetensi yang akan diukur.
3. Bangun stem.
4. Bangun opsi.
5. Kalibrasi distraktor.
6. Tentukan jawaban terbaik menggunakan Comparison Engine.
7. Validasi tingkat kesulitan.
8. Validasi distribusi jawaban.
9. Lakukan Review Engine.
10. Tampilkan soal.
