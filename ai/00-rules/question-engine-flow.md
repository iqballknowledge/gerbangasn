# Question Engine Flow

Versi : 1.0

---

# Tujuan

Question Engine Flow mengatur urutan kerja seluruh engine dalam GerbangASN Question Engine.

Engine tidak boleh dijalankan secara acak.

Setiap engine menghasilkan output yang menjadi input bagi engine berikutnya.

Generator wajib mengikuti flow ini hingga selesai sebelum soal ditampilkan.

---

# Filosofi

Question Engine bukan kumpulan markdown yang berdiri sendiri.

Question Engine adalah sebuah pipeline.

Kesalahan pada tahap awal akan memengaruhi seluruh proses berikutnya.

Oleh karena itu setiap fase harus diselesaikan sebelum berpindah ke fase berikutnya.

Generator dilarang melompati engine.

Generator juga dilarang menjalankan engine di luar urutan.

---

# FLOW

```
TOPIC
    │
    ▼
Phase 1
Topic Identity Engine
    │
    ▼
Competency Engine
    │
    ▼
Assessment Pattern
    │
    ▼
Knowledge Analysis

────────────────────────────

Phase 2
Scenario Construction
    │
    ▼
Conflict Construction
    │
    ▼
Value Boundary Analysis

────────────────────────────

Phase 3
Stem Engine
    │
    ▼
Candidate Option Generation
    │
    ▼
Option Hierarchy
    │
    ▼
Option Psychology
    │
    ▼
Option Naturalness
    │
    ▼
Option Calibration

────────────────────────────

Phase 4
Difficulty Engine
    │
    ▼
Comparison Engine
    │
    ▼
CAT Writing Style Engine
    │
    ▼
Review Engine
    │
    ▼
Answer Distribution

────────────────────────────

FINAL OUTPUT
```

---

# Penjelasan Setiap Phase

## Phase 1

Tujuan:

Menentukan **apa** yang akan diukur.

Engine pada fase ini membangun fondasi soal.

Generator belum boleh membuat skenario.

Output:

- identitas topik
- kompetensi
- indikator
- pola assessment
- ruang lingkup materi

---

## Phase 2

Tujuan:

Membangun situasi.

Generator mulai menyusun konflik.

Pada fase ini generator harus menentukan nilai dominan apabila terdapat irisan beberapa nilai.

Output:

- skenario
- konflik utama
- boundary analysis

Generator belum membuat pilihan jawaban.

---

## Phase 3

Tujuan:

Menghasilkan soal.

Generator mulai membuat stem dan seluruh opsi jawaban.

Seluruh Option Engine wajib dijalankan secara berurutan.

Urutan wajib:

Stem

↓

Candidate Option

↓

Hierarchy

↓

Psychology

↓

Naturalness

↓

Calibration

Generator tidak boleh langsung membuat opsi final.

Opsi wajib melalui seluruh proses tersebut.

---

## Phase 4

Tujuan:

Melakukan quality assurance.

Generator mengevaluasi soal yang telah selesai.

Engine pada fase ini tidak membuat soal baru.

Engine hanya melakukan validasi.

Output:

- tingkat kompleksitas
- pembahasan komparatif
- gaya CAT
- distribusi jawaban
- final review

---

# Dependency

Generator wajib memahami dependency berikut.

Topic Identity

↓

Competency

↓

Scenario

↓

Conflict

↓

Value Boundary

↓

Stem

↓

Option

↓

Difficulty

↓

Comparison

↓

Writing Style

↓

Review

↓

Output

Apabila salah satu dependency belum selesai,

generator wajib kembali ke engine sebelumnya.

---

# Engine Priority

Priority 1

- Topic Identity
- Competency
- Assessment Pattern
- Knowledge

Priority 2

- Scenario
- Conflict
- Value Boundary

Priority 3

- Stem
- Option Hierarchy
- Option Psychology
- Option Naturalness
- Option Calibration

Priority 4

- Difficulty
- Comparison
- CAT Writing Style
- Review
- Answer Distribution

Engine pada Priority berikutnya tidak boleh dijalankan sebelum Priority sebelumnya selesai.

---

# Validation Gate

Generator wajib memastikan setiap fase telah selesai sebelum berpindah.

Checklist internal:

Phase 1
✔ Topik telah ditentukan
✔ Kompetensi telah dipilih
✔ Assessment Pattern telah sesuai
✔ Knowledge telah dipahami

↓

Phase 2
✔ Konflik tunggal telah dibuat
✔ Nilai dominan telah dipilih
✔ Boundary telah dianalisis

↓

Phase 3
✔ Stem selesai
✔ Lima opsi selesai
✔ Hierarchy selesai
✔ Psychology selesai
✔ Naturalness selesai
✔ Calibration selesai

↓

Phase 4
✔ Difficulty sesuai
✔ Comparison selesai
✔ CAT Writing Style sesuai
✔ Review selesai
✔ Distribusi jawaban sesuai

Checklist ini hanya digunakan sebagai validasi internal.

Generator tidak boleh menampilkannya kepada pengguna.

---

# Rule

Generator dilarang:

- membuat soal sebelum Phase 1 selesai;
- membuat opsi sebelum Value Boundary selesai;
- melakukan Comparison sebelum Option Calibration selesai;
- melakukan Review sebelum CAT Writing Style selesai.

---

# Final Principle

Question Engine bekerja secara berurutan.

Setiap engine memperbaiki hasil engine sebelumnya.

Generator tidak boleh melewati urutan ini.

Kualitas soal ditentukan oleh konsistensi mengikuti pipeline, bukan oleh kemampuan mengingat materi.
