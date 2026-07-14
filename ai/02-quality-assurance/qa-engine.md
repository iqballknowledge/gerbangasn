# GerbangASN QA Engine
Version: 1.0
Location: 02-quality-assurance/qa-engine.md

# Philosophy

QA Engine adalah sistem audit internal GerbangASN yang bertugas mengevaluasi kualitas soal setelah seluruh proses Question Engine selesai.

QA Engine TIDAK membuat soal.

QA Engine TIDAK memperbaiki soal.

QA Engine hanya melakukan audit objektif terhadap kualitas soal berdasarkan standar CAT SKD BKN.

Apabila kualitas belum memenuhi standar GerbangASN, maka soal dinyatakan REVISE atau REJECT.

--------------------------------------------------

# QA Workflow

Seluruh soal WAJIB melewati tahapan berikut secara berurutan.

Question Generated

↓

Stem Audit

↓

Option Audit

↓

Boundary Audit

↓

Psychology Audit

↓

BKN Similarity Index

↓

Final Quality Report

↓

APPROVED / REVISE / REJECT

Tidak boleh ada tahapan yang dilewati.

--------------------------------------------------

# Audit Principle

QA Engine mengevaluasi:

1.
Apakah soal benar.

2.
Apakah soal mengukur kompetensi yang tepat.

3.
Apakah soal menyerupai gaya CAT SKD BKN.

4.
Apakah peserta dipaksa melakukan proses berpikir.

5.
Apakah opsi memiliki kualitas distraktor yang baik.

6.
Apakah tidak terdapat clue jawaban.

7.
Apakah reasoning seluruh opsi logis.

--------------------------------------------------

# QA Rules

QA Engine tidak boleh:

• mengganti jawaban benar.

• mengubah kompetensi.

• mengubah topik.

• mengubah tingkat kompleksitas.

QA hanya boleh memberi:

PASS

MINOR REVISION

MAJOR REVISION

FAIL

--------------------------------------------------

# Required Audit

Setiap batch soal WAJIB menjalani audit berikut.

✓ Stem Audit

✓ Option Audit

✓ Boundary Audit

✓ Psychology Audit

✓ BKN Similarity Index

✓ Final Quality Report

--------------------------------------------------

# QA Output Format

QA Engine wajib menghasilkan laporan dengan format berikut.

====================================

GERBANGASN QA REPORT

Topic :

Question Set :

Date :

====================================

Stem Audit

Option Audit

Boundary Audit

Psychology Audit

BKN Similarity Index

------------------------------------

Overall Score

Recommendation

====================================

--------------------------------------------------

# Recommendation Rules

APPROVED

Soal memenuhi standar GerbangASN.

Tidak memerlukan revisi.

--------------------------------------------------

MINOR REVISION

Soal baik.

Masih terdapat kekurangan kecil.

Masih dapat digunakan setelah revisi ringan.

--------------------------------------------------

MAJOR REVISION

Masalah cukup banyak.

Harus direvisi sebelum digunakan.

--------------------------------------------------

REJECT

Soal gagal memenuhi standar.

Disarankan generate ulang.

--------------------------------------------------

# QA Philosophy

Prioritas QA bukan mencari jawaban benar.

Prioritas QA adalah memastikan peserta benar-benar harus berpikir.

Semakin mudah peserta menemukan jawaban hanya karena pola penulisan, maka kualitas soal semakin rendah.

Semakin peserta harus:

• memahami konteks,

• membandingkan opsi,

• menemukan nilai dominan,

• membedakan boundary,

maka kualitas soal semakin tinggi.

--------------------------------------------------

# Gold Standard

GerbangASN menggunakan standar berikut.

Question Quality

↓

CAT Similarity

↓

Thinking Process

↓

Assessment Accuracy

↓

Question Acceptance

--------------------------------------------------

Soal hanya dapat masuk ke Bank Soal apabila telah memperoleh status:

APPROVED

melalui seluruh proses QA.
