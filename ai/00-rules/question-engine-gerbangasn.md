# Question Engine GerbangASN

Version : 2.0

---

# Tujuan

Question Engine GerbangASN merupakan master orchestrator yang mengatur seluruh proses penyusunan soal GerbangASN.

Question Engine bukan kumpulan markdown yang berdiri sendiri.

Question Engine adalah sebuah pipeline yang mengintegrasikan seluruh engine sehingga setiap soal dihasilkan melalui proses berpikir yang sistematis, konsisten, dan sesuai karakteristik CAT SKD BKN.

Generator wajib menggunakan seluruh engine sebagai satu kesatuan.

Generator tidak boleh memilih sebagian engine atau mengubah urutan proses.

---

# Filosofi

Question Engine dibangun berdasarkan prinsip berikut.

- Mengukur kompetensi, bukan menguji hafalan.
- Menguji kemampuan peserta menentukan nilai yang paling dominan.
- Menghasilkan distraktor yang sama-sama masuk akal.
- Menghindari jawaban yang dapat ditebak melalui pola penulisan.
- Menyerupai karakter soal CAT SKD BKN, bukan soal latihan sekolah.
- Seluruh soal harus melalui reasoning process sebelum ditulis.

---

# Arsitektur Engine

Question Engine terdiri dari empat layer.

## Layer 1

### Knowledge Layer

Engine pada layer ini menentukan apa yang akan diukur.

Engine:

- Topic Identity Engine
- Competency Engine
- Assessment Pattern
- Knowledge
- References

Output:

- identitas topik
- kompetensi utama
- indikator kompetensi
- ruang lingkup materi
- batas materi

Generator belum boleh membuat skenario.

---

## Layer 2

### Reasoning Layer

Engine pada layer ini membangun logika soal.

Engine:

- Scenario Engine
- Conflict Engine
- Value Boundary

Output:

- skenario
- konflik utama
- nilai dominan
- boundary analysis

Generator belum boleh membuat pilihan jawaban.

---

## Layer 3

### Construction Layer

Engine pada layer ini membangun soal.

Engine:

- Stem Engine
- CAT Writing Style Engine
- Option Hierarchy
- Option Psychology
- Option Naturalness
- Option Calibration

Output:

- stem final
- lima opsi
- satu jawaban terbaik

---

## Layer 4

### Evaluation Layer

Engine pada layer ini melakukan quality assurance.

Engine:

- Difficulty Engine
- Comparison Engine
- Review Engine
- Answer Distribution

Output:

- tingkat kompleksitas
- pembahasan komparatif
- validasi kualitas soal
- distribusi jawaban

---

# Engine Flow

Generator WAJIB mengikuti Question Engine Flow.

Urutan pengerjaan diatur pada file:

question-engine-flow.md

Generator tidak boleh mengubah urutan tersebut.

---

# Mandatory Engine

Seluruh engine berikut wajib dijalankan.

- Topic Identity Engine
- Competency Engine
- Assessment Pattern
- Knowledge
- Scenario Engine
- Conflict Engine
- Value Boundary
- Stem Engine
- CAT Writing Style Engine
- Option Hierarchy
- Option Psychology
- Option Naturalness
- Option Calibration
- Difficulty Engine
- Comparison Engine
- Review Engine
- Answer Distribution

Tidak ada engine yang boleh dilewati.

---

# Internal Thinking Process

Generator dilarang langsung membuat soal.

Generator wajib berpikir menggunakan tahapan berikut.

TOPIC

↓

TOPIC IDENTITY

↓

COMPETENCY

↓

ASSESSMENT PATTERN

↓

KNOWLEDGE

↓

SCENARIO

↓

CONFLICT

↓

VALUE BOUNDARY

↓

STEM

↓

CAT WRITING STYLE

↓

OPTION HIERARCHY

↓

OPTION PSYCHOLOGY

↓

OPTION NATURALNESS

↓

OPTION CALIBRATION

↓

DIFFICULTY

↓

COMPARISON

↓

REVIEW

↓

ANSWER DISTRIBUTION

↓

FINAL OUTPUT

---

# Priority Engine

## Critical Priority

Engine berikut memiliki prioritas tertinggi.

- Topic Identity Engine
- Value Boundary
- CAT Writing Style Engine
- Option Hierarchy
- Option Psychology
- Option Naturalness
- Option Calibration
- Comparison Engine
- Review Engine

Kesalahan pada engine ini akan menghasilkan soal yang tidak menyerupai CAT SKD BKN.

---

## High Priority

- Competency Engine
- Assessment Pattern
- Scenario Engine
- Conflict Engine

---

## Medium Priority

- Difficulty Engine
- Answer Distribution

---

# Anti Shortcut Rule

Generator dilarang:

- membuat soal sebelum memahami kompetensi yang diukur;
- menentukan jawaban benar sebelum seluruh opsi selesai dibuat;
- membuat stem setelah menentukan jawaban;
- menentukan nilai dominan berdasarkan kata kunci permukaan;
- membuat opsi yang jelas salah;
- membuat satu opsi jauh lebih panjang daripada opsi lain;
- membuat satu opsi jauh lebih spesifik daripada opsi lain;
- membuat satu opsi jauh lebih konkret daripada opsi lain;
- menggunakan kata absolut (selalu, pasti, seluruh, hanya) sebagai penanda opsi salah kecuali memang merupakan inti materi;
- menggunakan pola bahasa yang membuat jawaban mudah dikenali;
- menggunakan distraktor yang tidak memiliki logika;
- menggunakan opsi yang berbeda hanya karena sinonim;
- mengulang struktur kalimat yang sama pada seluruh opsi;
- membuat jawaban benar menjadi paling lengkap;
- membuat jawaban benar menjadi paling sopan;
- membuat jawaban benar menjadi paling ideal;
- membuat jawaban benar menjadi paling moderat tanpa alasan kompetensi.

---

# Prinsip Penentuan Nilai Dominan

Generator wajib menentukan nilai dominan berdasarkan inti konflik.

Bukan berdasarkan:

- kata kunci;
- tema permukaan;
- objek pada soal;
- profesi tokoh;
- lokasi kejadian.

Apabila satu soal memuat lebih dari satu nilai Pancasila,

Generator wajib menggunakan Value Boundary untuk menentukan kompetensi yang benar-benar sedang diuji.

---

# Prinsip Penyusunan Distraktor

Distraktor bukan jawaban salah.

Distraktor adalah alternatif yang:

- logis;
- realistis;
- masih sesuai nilai Pancasila;
- tetapi tidak menjadi kompetensi utama yang sedang diukur.

Setiap distraktor harus memiliki alasan mengapa peserta mungkin memilihnya.

---

# Prinsip Gaya Penulisan

Generator wajib mengikuti CAT Writing Style Engine.

Stem harus:

- natural;
- kontekstual;
- efisien;
- tidak berbunga-bunga;
- tidak menjelaskan terlalu banyak.

Pilihan jawaban harus:

- panjang relatif seimbang;
- struktur relatif seimbang;
- tingkat formalitas relatif sama;
- sama-sama terdengar benar;
- tidak memiliki penanda linguistik jawaban benar.

---

# Validasi Internal

Sebelum soal ditampilkan,

Generator wajib memastikan seluruh checklist berikut terpenuhi.

## Knowledge

✓ Topik telah dipahami.

✓ Kompetensi telah ditentukan.

✓ Assessment Pattern sesuai.

---

## Reasoning

✓ Konflik utama hanya satu.

✓ Nilai dominan telah dipilih.

✓ Boundary telah dianalisis.

---

## Construction

✓ Stem selesai.

✓ Lima opsi selesai.

✓ Hierarchy selesai.

✓ Psychology selesai.

✓ Naturalness selesai.

✓ Calibration selesai.

---

## Evaluation

✓ Tingkat kompleksitas sesuai.

✓ Comparison selesai.

✓ Review selesai.

✓ CAT Writing Style sesuai.

✓ Distribusi jawaban sesuai.

Checklist ini hanya digunakan sebagai validasi internal.

Generator tidak boleh menampilkannya kepada pengguna.

---

# Final Output

Setiap soal minimal memuat:

- stem;
- lima opsi;
- satu jawaban terbaik;
- pembahasan komparatif;
- kompetensi utama;
- nilai dominan;
- tingkat kompleksitas.

Setelah seluruh soal selesai,

Generator wajib memberikan:

- ringkasan kompetensi;
- ringkasan nilai dominan;
- distribusi jawaban;
- validasi akhir.

---

# Final Principle

Question Engine GerbangASN adalah sistem berpikir.

Generator tidak ditugaskan mengingat materi.

Generator ditugaskan melakukan reasoning menggunakan seluruh engine.

Semakin konsisten generator mengikuti pipeline, semakin tinggi kualitas soal yang dihasilkan.

Tidak ada engine yang berdiri sendiri.

Seluruh engine bekerja sebagai satu kesatuan untuk menghasilkan soal yang menyerupai karakter CAT SKD BKN.
