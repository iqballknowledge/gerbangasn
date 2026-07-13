# Question Engine GerbangASN

Versi : 1.1

Status : Active

Engine Type : TWK Question Generation Engine

---

# Tujuan

Question Engine GerbangASN adalah sistem modular yang digunakan untuk menghasilkan soal Tes Wawasan Kebangsaan (TWK) berkualitas tinggi dengan karakter menyerupai soal SKD CAT BKN terbaru.

Engine ini dirancang agar seluruh soal dihasilkan secara konsisten, terstandarisasi, original, dan mampu mengukur kompetensi sesuai topik yang sedang dikerjakan.

Seluruh markdown pada Project merupakan bagian dari satu sistem yang saling terhubung.

Tidak ada modul yang berdiri sendiri.

Generator harus memahami hubungan antar modul sebelum menghasilkan soal.

---

# Filosofi Engine

Question Engine GerbangASN dibangun berdasarkan prinsip berikut.

- Kompetensi lebih penting daripada hafalan.
- Kesulitan berasal dari kualitas analisis, bukan bahasa yang rumit.
- Seluruh opsi harus layak dipilih.
- Jawaban benar dipilih karena paling sesuai dengan kompetensi yang diukur.
- Soal harus menyerupai karakter asesmen SKD CAT BKN terbaru.
- Seluruh soal harus original.

---

# Arsitektur Engine

Question Engine GerbangASN terdiri atas lima layer.

---

# Layer 1 — Core Engine

Fungsi:

Menentukan filosofi utama penyusunan soal.

Modul:

- gerbangasn-rules.md

---

# Layer 2 — Question Construction Engine

Fungsi:

Mengatur bagaimana soal dibangun.

Modul:

- stem-engine.md
- scenario-engine.md
- conflict-engine.md
- dominant-value-engine.md
- option-design-rules.md
- option-calibration.md
- comparison-engine.md
- difficulty-engine.md

Output layer ini adalah soal yang memiliki:

- stem natural
- konteks realistis
- konflik berkualitas
- opsi seimbang
- jawaban terbaik
- tingkat kesulitan sesuai target

---

# Layer 3 — Assessment Engine

Fungsi:

Menentukan kompetensi yang akan diukur.

Modul:

- competency-engine.md
- assessment-psychology.md
- topic-identity-engine.md

Output layer ini memastikan soal tetap berada pada kompetensi utama topik.

---

# Layer 4 — Knowledge Engine

Fungsi:

Memberikan landasan materi dan pola asesmen.

Modul:

- knowledge.md
- assessment-focus.md
- assessment-pattern.md
- decision-pattern.md
- fact-bank.md
- references.md
- pattern-mining.md

Materi referensi (PDF) hanya digunakan sebagai sumber pembelajaran pola dan materi.

Materi referensi tidak boleh disalin maupun dimodifikasi menjadi soal.

---

# Layer 5 — Validation Engine

Fungsi:

Melakukan evaluasi kualitas soal sebelum ditampilkan.

Modul:

- answer-distribution.md
- review-engine.md

Validation Engine memastikan bahwa setiap soal telah memenuhi seluruh standar GerbangASN.

---

# Workflow Penyusunan Soal

Generator WAJIB mengikuti urutan berikut.

## Tahap 1

Pahami kompetensi utama topik.

↓

## Tahap 2

Pelajari Knowledge Engine.

↓

## Tahap 3

Tentukan kompetensi yang akan diukur menggunakan Assessment Engine.

↓

## Tahap 4

Bangun Scenario.

↓

## Tahap 5

Bangun Conflict.

↓

## Tahap 6

Susun Stem.

↓

## Tahap 7

Bangun lima opsi jawaban.

↓

## Tahap 8

Gunakan Dominant Value Engine untuk menentukan jawaban terbaik.

↓

## Tahap 9

Kalibrasi kualitas distraktor.

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

# Prioritas Modul

Apabila terdapat konflik antar modul, gunakan prioritas berikut.

1. Core Engine
2. Question Construction Engine
3. Assessment Engine
4. Knowledge Engine
5. Materi Referensi

---

# Prinsip Penyusunan Soal

Setiap soal harus memenuhi prinsip berikut.

- Mengukur satu kompetensi utama.
- Memiliki satu konflik utama.
- Menggunakan konteks yang realistis.
- Memiliki lima opsi yang layak dipilih.
- Tidak memiliki distraktor yang jelas salah.
- Tidak memberikan petunjuk menuju jawaban.
- Tidak menjadikan panjang kalimat sebagai indikator jawaban benar.
- Jawaban benar dipilih karena paling sesuai dengan kompetensi yang diukur.
- Pembahasan bersifat komparatif.

---

# Standar Output

Setiap soal minimal memuat:

1. Soal
2. Pilihan A–E
3. Jawaban
4. Pembahasan komparatif
5. Kompetensi yang diukur
6. Tingkat kesulitan

---

# Target Akhir

Question Engine GerbangASN bertujuan menghasilkan soal yang:

- original;
- konsisten;
- memiliki kualitas premium;
- sulit dibedakan dari soal SKD CAT BKN asli;
- dapat digunakan sebagai standar produksi bank soal GerbangASN.
