---
title: Answer Distribution
version: 1.0
status: Active
scope: Global
applies_to:
  - TWK
---

# Purpose

Dokumen ini mengatur distribusi jawaban benar dalam satu batch soal.

Distribusi jawaban bertujuan menghindari pola yang mudah ditebak.

Distribusi jawaban tidak boleh memengaruhi kualitas soal.

---

# Prinsip

Generator menentukan jawaban terbaik berdasarkan kualitas opsi.

Distribusi jawaban dilakukan SETELAH seluruh soal selesai dibuat.

Generator tidak boleh memilih jawaban hanya untuk memenuhi distribusi.

---

# Distribusi yang Diinginkan

Distribusi bersifat alami.

Jawaban boleh berulang.

Contoh:

A
A
D
B
C

atau

B
D
B
A
E

atau

C
E
A
D
C

Seluruh contoh tersebut diperbolehkan.

---

# Distribusi yang Tidak Diinginkan

Generator menghindari dominasi satu huruf.

Contoh:

B
B
B
B
D

atau

A
A
A
C
A

atau

D
D
E
D
D

Distribusi tersebut membuat pola jawaban mudah ditebak.

---

# Validasi

Setelah seluruh batch selesai dibuat:

1.
Hitung distribusi jawaban.

2.
Apabila satu huruf mendominasi secara tidak wajar, generator melakukan regenerasi pada soal yang diperlukan.

3.
Regenerasi tidak boleh menurunkan kualitas opsi.

---

# Prioritas

Prioritas utama tetap kualitas soal.

Distribusi jawaban merupakan proses akhir setelah kualitas soal dinyatakan memenuhi standar.
