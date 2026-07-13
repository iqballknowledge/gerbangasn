---
title: Review Engine
version: 1.0
status: Frozen
scope: Global
applies_to:
  - TWK
---

# Review Engine

## Purpose

Dokumen ini mengatur proses peninjauan akhir sebelum soal dinyatakan selesai.

Generator wajib melakukan self-review terhadap setiap soal.

Review dilakukan setelah seluruh stem, opsi, jawaban, dan pembahasan selesai dibuat.

Generator tidak boleh langsung menampilkan soal tanpa melalui proses review.

---

# Review Order

Review dilakukan secara berurutan.

1. Stem Review
2. Option Review
3. Difficulty Review
4. Assessment Review
5. Explanation Review

Apabila satu tahap tidak lolos, generator harus memperbaiki soal sebelum melanjutkan ke tahap berikutnya.

---

# Stage 1 — Stem Review

Periksa apakah:

□ Stem realistis.

□ Stem mengandung situasi pengambilan keputusan.

□ Stem tidak memberi petunjuk jawaban.

□ Stem hanya menguji satu kompetensi utama.

□ Seluruh informasi relevan.

□ Jawaban bergantung pada konteks stem.

Jika salah satu tidak terpenuhi, revisi stem.

---

# Stage 2 — Option Review

Periksa apakah:

□ Semua opsi terlihat layak dipilih.

□ Tidak ada opsi yang langsung tampak salah.

□ Tidak ada opsi yang terlalu ekstrem.

□ Tidak ada opsi yang keluar dari kewenangan tokoh.

□ Panjang opsi relatif seimbang.

□ Perbedaan kualitas berasal dari keputusan, bukan redaksi.

Jika salah satu tidak terpenuhi, revisi opsi.

---

# Stage 3 — Difficulty Review

Periksa apakah:

□ Tingkat kesulitan berasal dari proses analisis.

□ Bukan berasal dari bahasa yang rumit.

□ Jumlah distraktor kuat sesuai target.

□ Peserta harus membandingkan beberapa opsi.

□ Jawaban tidak dapat ditemukan hanya dengan eliminasi cepat.

Jika salah satu tidak terpenuhi, revisi tingkat kesulitan.

---

# Stage 4 — Assessment Review

Periksa apakah:

□ Kompetensi sesuai assessment-focus.md.

□ Kompetensi sesuai assessment-pattern.md.

□ Decision pattern sesuai decision-pattern.md.

□ Kompetensi benar-benar diuji melalui konteks.

□ Jawaban merupakan implementasi terbaik terhadap kompetensi tersebut.

Jika salah satu tidak terpenuhi, revisi soal.

---

# Stage 5 — Explanation Review

Periksa apakah pembahasan:

□ Menjelaskan alasan jawaban benar.

□ Menjelaskan mengapa setiap distraktor kurang tepat.

□ Menggunakan argumentasi komparatif.

□ Tidak hanya menyatakan benar atau salah.

□ Konsisten dengan kompetensi yang diukur.

Jika salah satu tidak terpenuhi, revisi pembahasan.

---

# Global Review Principles

Generator tidak boleh mempertahankan soal apabila:

- jawaban terlalu mudah ditebak;
- terdapat distraktor yang mudah dieliminasi;
- stem tidak berpengaruh terhadap jawaban;
- terdapat lebih dari satu jawaban terbaik;
- pembahasan tidak mampu membedakan kualitas antar opsi.

Generator harus melakukan revisi sebelum menghasilkan output akhir.

---

# Quality Standard

Soal dinyatakan layak apabila memenuhi seluruh kondisi berikut.

- realistis;
- kontekstual;
- menguji penalaran;
- seluruh opsi logis;
- hanya memiliki satu jawaban paling tepat;
- pembahasan bersifat komparatif;
- menyerupai karakter soal CAT BKN.

---

# Final Validation

Sebelum menghasilkan soal, generator harus menjawab seluruh pertanyaan berikut.

□ Apakah soal menguji penalaran?

□ Apakah stem benar-benar diperlukan?

□ Apakah minimal tiga opsi tampak layak?

□ Apakah peserta harus membandingkan beberapa opsi?

□ Apakah jawaban dipilih karena paling tepat?

□ Apakah pembahasan menjelaskan alasan komparatif?

□ Apakah soal menyerupai karakter CAT BKN?

□ Sudah dilakukan Boundary Analysis?

□ Apakah tema berbeda dengan nilai dominan?

□ Apakah pembahasan menjelaskan perbedaan antar sila?
Jika terdapat satu jawaban "Tidak", generator wajib melakukan revisi sebelum menghasilkan soal.
