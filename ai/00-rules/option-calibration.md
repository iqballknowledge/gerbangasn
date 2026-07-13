# Option Calibration

Versi : 2.0

Status : Active

---

# Tujuan

Option Calibration bertugas melakukan kalibrasi akhir terhadap seluruh opsi jawaban.

Engine ini tidak membuat opsi baru.

Engine ini tidak menentukan psikologi peserta.

Engine ini tidak menentukan hierarchy.

Engine ini memastikan bahwa lima opsi yang telah dihasilkan benar-benar siap digunakan sebagai soal CAT SKD BKN.

---

# Posisi dalam Question Engine

Scenario

↓

Conflict

↓

Stem

↓

Candidate Option Generation

↓

Option Hierarchy

↓

Option Psychology

↓

Option Naturalness

↓

Option Calibration

↓

Difficulty

↓

Comparison

↓

Review

---

# Filosofi

Option yang baik bukan option yang berbeda jauh.

Option yang baik adalah lima pilihan yang sama-sama layak dipilih tetapi hanya satu yang paling tepat.

Kalibrasi dilakukan setelah seluruh opsi selesai disusun.

---

# Fungsi

Option Calibration bertugas:

• memastikan seluruh opsi masih relevan terhadap stem;

• memastikan seluruh opsi masih mengukur kompetensi utama;

• memastikan seluruh opsi masih berada dalam topik yang sama;

• menghilangkan opsi yang terlalu lemah;

• memastikan hanya terdapat satu jawaban paling tepat.

Engine ini tidak lagi mengatur:

- hierarchy;
- psikologi;
- naturalness.

Ketiga aspek tersebut telah ditangani oleh engine masing-masing.

---

# Kompetensi Check

Setiap opsi harus tetap berada pada kompetensi yang sedang diukur.

Contoh

Kompetensi

Implementasi Sila Kelima

Seluruh opsi tetap harus berada pada konteks implementasi sila kelima atau memiliki hubungan logis dengan konflik yang sedang diuji.

Tidak boleh muncul opsi yang keluar dari konteks soal.

---

# Topic Consistency

Semua opsi wajib membahas masalah yang sama.

Generator tidak boleh membuat:

Stem

Pembagian bantuan.

Tetapi opsi berubah menjadi:

• hukuman

• pidana

• politik

• administrasi

yang tidak berkaitan dengan konflik.

---

# Dominant Value Check

Jawaban benar harus menjadi opsi yang paling mencerminkan nilai dominan.

Distraktor boleh mencerminkan nilai lain.

Namun nilai tersebut tidak boleh lebih dominan dibanding jawaban benar.

---

# Elimination Check

Generator wajib menghapus opsi apabila:

• terlalu ekstrem;

• bertentangan dengan hukum;

• bertentangan dengan fakta soal;

• tidak realistis;

• mudah dieliminasi hanya dengan logika umum.

---

# Balance Check

Kelima opsi harus memiliki tingkat kelayakan yang relatif seimbang.

Tidak boleh terdapat:

• satu opsi yang sangat buruk;

• satu opsi yang terlalu sempurna;

• satu opsi yang tidak mungkin dipilih.

---

# Single Best Answer

Setelah seluruh opsi selesai,

generator wajib melakukan evaluasi:

Apakah terdapat lebih dari satu opsi yang sama kuat?

Jika YA,

generator harus memperbaiki opsi tersebut sampai hanya tersisa satu opsi yang paling tepat.

---

# Comparative Validation

Generator wajib melakukan perbandingan antar opsi.

Bukan membandingkan opsi dengan teori.

Tetapi membandingkan:

A vs B

A vs C

A vs D

A vs E

hingga ditemukan satu opsi yang memiliki kualitas paling tinggi.

---

# Final Checklist

Sebelum soal selesai, pastikan:

✓ seluruh opsi masih relevan terhadap stem;

✓ seluruh opsi masih berada pada topik yang sama;

✓ seluruh opsi masih mengukur kompetensi yang sama;

✓ tidak ada opsi yang terlalu lemah;

✓ tidak ada opsi yang terlalu ekstrem;

✓ hanya terdapat satu jawaban paling tepat;

✓ peserta harus melakukan komparasi sebelum menentukan jawaban.

---

# Output

Setelah lolos Option Calibration,

opsi dinyatakan siap memasuki:

• Difficulty Engine;

• Comparison Engine;

• Review Engine.
