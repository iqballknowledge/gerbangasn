# Question Engine GerbangASN

Versi : 1.2

Status : Active

Engine Type : TWK Question Generation Engine

---

# Tujuan

Question Engine GerbangASN merupakan sistem modular untuk menghasilkan soal Tes Wawasan Kebangsaan (TWK) berkualitas tinggi yang menyerupai karakter soal SKD CAT BKN terbaru.

Engine ini memastikan seluruh soal diproduksi secara:

- original;
- konsisten;
- terstandarisasi;
- berbasis kompetensi;
- sesuai karakter asesmen SKD BKN.

Seluruh markdown di dalam Project merupakan satu sistem yang saling terhubung.

Generator wajib memahami keseluruhan sistem sebelum menghasilkan soal.

---

# Filosofi Engine

Question Engine GerbangASN dibangun berdasarkan prinsip berikut.

- Kompetensi lebih penting daripada hafalan.
- Kesulitan berasal dari kualitas analisis.
- Seluruh opsi harus layak dipilih.
- Jawaban benar dipilih karena paling sesuai dengan kompetensi.
- Soal harus terasa natural.
- Soal harus menyerupai karakter SKD CAT BKN.
- Seluruh soal harus original.

---

# Arsitektur Engine

Question Engine terdiri atas lima layer.

---

# Layer 1 — Core Engine

Fungsi

Menjadi fondasi seluruh Question Engine.

Modul

- gerbangasn-rules.md

---

# Layer 2 — Assessment Engine

Fungsi

Menentukan identitas asesmen.

Assessment Engine memastikan bahwa setiap soal:

- tetap merupakan soal TWK;
- tetap berada pada kompetensi utama topik;
- mengukur kompetensi yang tepat.

Modul

- competency-engine.md
- assessment-psychology.md
- topic-identity-engine.md

Output

Generator memahami:

- topik;
- kompetensi;
- identitas soal.

---

# Layer 3 — Question Construction Engine

Fungsi

Membangun struktur soal.

Modul

- stem-engine.md
- scenario-engine.md
- conflict-engine.md
- dominant-value-engine.md
- option-design-rules.md
- option-calibration.md
- comparison-engine.md
- difficulty-engine.md

Output

Generator menghasilkan:

- scenario;
- konflik;
- stem;
- lima opsi;
- jawaban terbaik;
- tingkat kesulitan.

---

# Layer 4 — Knowledge Engine

Fungsi

Menyediakan materi dan pola asesmen.

Modul

- knowledge.md
- assessment-focus.md
- assessment-pattern.md
- decision-pattern.md
- fact-bank.md
- pattern-mining.md
- references.md

Catatan

PDF hanya menjadi referensi pembelajaran.

Generator dilarang menyalin isi PDF menjadi soal.

---

# Layer 5 — Validation Engine

Fungsi

Melakukan evaluasi kualitas soal sebelum ditampilkan.

Modul

- answer-distribution.md
- review-engine.md

Output

Generator memastikan soal memenuhi seluruh standar GerbangASN.

---

# Workflow Question Generation

Generator wajib mengikuti urutan berikut.

## Tahap 1

Identifikasi topik.

↓

## Tahap 2

Aktifkan Topic Identity.

↓

## Tahap 3

Pelajari seluruh Knowledge Engine.

↓

## Tahap 4

Tentukan kompetensi yang akan diukur.

↓

## Tahap 5

Bangun scenario.

↓

## Tahap 6

Bangun konflik.

↓

## Tahap 7

Susun stem.

↓

## Tahap 8

Bangun lima opsi jawaban.

↓

## Tahap 9

Gunakan Dominant Value Engine untuk menentukan jawaban terbaik.

↓

## Tahap 10

Kalibrasi tingkat kesulitan.

↓

## Tahap 11

Lakukan Comparison Engine.

↓

## Tahap 12

Lakukan Validation Engine.

↓

## Tahap 13

Tampilkan soal.

Generator tidak boleh melewati salah satu tahap di atas.

---

# Prioritas Engine

Apabila terdapat konflik antar aturan,

gunakan prioritas berikut.

1. Core Engine
2. Assessment Engine
3. Question Construction Engine
4. Knowledge Engine
5. Validation Engine
6. Materi Referensi

---

# Prinsip Penyusunan Soal

Setiap soal harus memenuhi prinsip berikut.

- Mengukur satu kompetensi utama.
- Memiliki satu konflik utama.
- Memiliki satu nilai dominan.
- Memiliki konteks realistis.
- Memiliki lima opsi yang layak dipilih.
- Distraktor tidak boleh jelas salah.
- Tidak memberikan petunjuk jawaban.
- Tidak menjadikan panjang kalimat sebagai indikator jawaban benar.
- Jawaban benar dipilih karena paling sesuai dengan kompetensi.
- Pembahasan bersifat komparatif.

---

# Standar Output

Setiap soal minimal memuat:

1. Soal.
2. Pilihan jawaban A–E.
3. Jawaban benar.
4. Pembahasan komparatif.
5. Kompetensi yang diukur.
6. Tingkat kesulitan.

---

# Siklus Berpikir Generator

Generator harus berpikir dengan urutan berikut.

TOPIK

↓

IDENTITAS

↓

KOMPETENSI

↓

KNOWLEDGE

↓

SCENARIO

↓

KONFLIK

↓

STEM

↓

OPSI

↓

DOMINANT VALUE

↓

DIFFICULTY

↓

COMPARISON

↓

VALIDATION

↓

OUTPUT

Generator tidak boleh langsung menghasilkan soal tanpa mengikuti siklus berpikir tersebut.

---

# Target Akhir

Question Engine GerbangASN bertujuan menghasilkan soal yang:

- original;
- konsisten;
- berkualitas premium;
- sulit dibedakan dari soal SKD CAT BKN;
- mampu mengukur kompetensi secara tepat;
- layak digunakan sebagai standar produksi bank soal GerbangASN.
