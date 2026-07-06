---
title: Option Calibration
version: 1.0
status: Frozen
scope: Global
applies_to:
  - TWK
---

# Option Calibration

## Purpose

Dokumen ini mengatur bagaimana kualitas lima opsi jawaban dikalibrasi agar menyerupai karakter soal CAT BKN.

Tujuan utama bukan membuat satu jawaban benar dan empat jawaban salah, tetapi menghasilkan lima opsi yang sama-sama layak dipertimbangkan sehingga peserta harus melakukan penalaran untuk menentukan jawaban PALING tepat.

---

# Core Philosophy

Generator harus membangun kompetisi antar opsi.

Peserta tidak boleh dapat menemukan jawaban hanya dengan mengeliminasi opsi yang tampak buruk.

Soal yang baik membuat peserta membandingkan beberapa opsi yang sama-sama kuat.

---

# Target Option Distribution

Setiap soal harus memiliki distribusi kualitas berikut.

| Level | Deskripsi |
|--------|-----------|
| Best | Jawaban paling tepat dan paling memenuhi seluruh indikator kompetensi. |
| Strong | Sangat baik, tetapi masih kurang pada satu aspek penting. |
| Strong | Sama-sama masuk akal, namun kurang sesuai dengan fokus utama soal. |
| Moderate | Relevan, tetapi kurang lengkap atau kurang prioritas. |
| Weak | Masih logis, namun paling jauh dari kompetensi yang diukur. |

Generator tidak boleh menghasilkan distribusi:

Best

↓

Wrong

Wrong

Wrong

Wrong

---

# Calibration Principle

Distraktor tidak dibuat untuk terlihat salah.

Distraktor dibuat agar terlihat layak dipilih oleh peserta yang memiliki pemahaman parsial.

---

# Strong Distractor Pattern

Distraktor kuat biasanya memiliki salah satu karakteristik berikut.

- benar secara umum tetapi kurang sesuai konteks;
- menyelesaikan sebagian masalah, bukan akar masalah;
- mewakili nilai positif lain yang tidak menjadi fokus utama;
- realistis tetapi kurang komprehensif;
- sesuai prosedur namun kurang efektif;
- sesuai tujuan tetapi kurang tepat urutan prioritasnya.

---

# Moderate Distractor Pattern

Distraktor sedang dapat berupa:

- solusi yang terlalu sempit;
- solusi jangka pendek;
- tindakan yang benar tetapi kurang strategis;
- tindakan yang hanya menyasar gejala.

---

# Weak Distractor Pattern

Distraktor lemah tetap harus logis.

Hindari opsi yang:

- jelas melanggar hukum;
- jelas tidak etis;
- tidak relevan dengan konteks;
- terlalu ekstrem;
- mudah dieliminasi dalam sekali baca.

Weak bukan berarti absurd.

Weak berarti merupakan pilihan yang paling sedikit memenuhi indikator kompetensi.

---

# Relative Evaluation Rule

Jawaban benar dipilih secara relatif.

Artinya generator harus mengevaluasi seluruh opsi terlebih dahulu, kemudian menentukan opsi yang PALING memenuhi indikator.

Generator tidak boleh menetapkan jawaban sebelum seluruh opsi selesai dibuat.

---

# Option Similarity Rule

Seluruh opsi harus memiliki:

- tingkat formalitas yang sama;
- panjang kalimat yang relatif seimbang;
- kualitas bahasa yang setara;
- tingkat rasionalitas yang setara.

Perbedaan kualitas hanya boleh berasal dari kualitas keputusan, bukan kualitas redaksi.

---

# Elimination Resistance

Generator harus menghindari opsi yang dapat dieliminasi hanya karena:

- terlalu pendek;
- terlalu panjang;
- terlalu ekstrem;
- terlalu negatif;
- terlalu emosional;
- berada di luar kewenangan tokoh.

---

# Priority Calibration

Apabila dua opsi sama-sama baik, jawaban dipilih berdasarkan urutan berikut.

1. Paling sesuai kompetensi yang diukur.
2. Paling sesuai konteks.
3. Menyelesaikan akar masalah.
4. Berdampak paling luas.
5. Berkelanjutan.
6. Proporsional.
7. Sesuai kewenangan tokoh.

---

# Self Calibration Checklist

Sebelum soal dinyatakan selesai, generator harus memeriksa:

□ Apakah minimal tiga opsi terlihat layak dipilih?

□ Apakah seluruh opsi masih relevan dengan konteks?

□ Apakah tidak ada opsi yang tampak jelas salah?

□ Apakah jawaban benar unggul karena kualitas keputusan, bukan redaksi?

□ Apakah peserta yang hanya hafal teori berpotensi memilih distraktor kuat?

Jika salah satu jawaban adalah "Tidak", lakukan revisi sebelum menghasilkan soal.
