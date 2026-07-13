# Assessment Pattern

Versi : 2.0

Status : Active

Topik : Implementasi Pancasila

---

# Tujuan

Assessment Pattern bertugas menentukan pola kompetensi yang akan diukur pada setiap soal Implementasi Pancasila.

Engine ini memastikan bahwa setiap soal hanya mengukur satu kompetensi utama, meskipun skenario dapat memuat lebih dari satu nilai Pancasila.

---

# Filosofi

Soal Implementasi Pancasila bukan bertujuan menguji hafalan lima sila.

Tujuan utama adalah mengukur kemampuan peserta mengidentifikasi nilai Pancasila yang paling tepat diterapkan dalam suatu situasi.

Tema yang digunakan dapat berkaitan dengan beberapa sila sekaligus, tetapi generator wajib menentukan satu nilai dominan sebagai kompetensi utama.

---

# Assessment Flow

Generator wajib mengikuti urutan berikut.

```
Topik

↓

Identifikasi Kompetensi

↓

Boundary Analysis

↓

Nilai Dominan

↓

Skenario

↓

Konflik

↓

Pilihan Jawaban
```

Generator tidak boleh langsung membuat skenario sebelum menentukan kompetensi yang akan diukur.

---

# Kompetensi Utama

Dalam setiap soal hanya boleh terdapat satu kompetensi utama.

Kompetensi tersebut harus menjadi dasar seluruh proses penyusunan soal.

Contoh:

Topik:

Implementasi Pancasila

Kompetensi:

Implementasi Sila Kedua

↓

Seluruh konflik, stem, dan opsi harus mengarah pada kompetensi tersebut.

---

# Boundary Analysis

Sebelum menentukan kompetensi akhir,

generator wajib melakukan Boundary Analysis menggunakan **value-boundary.md**.

Tujuannya adalah membedakan apakah tema yang muncul benar-benar mengukur kompetensi yang dipilih.

Generator tidak boleh menentukan kompetensi hanya berdasarkan tema atau kata kunci.

---

Contoh:

Tema:

Agama

Belum tentu mengukur Sila Pertama.

Generator harus menentukan terlebih dahulu apakah yang sedang diuji adalah:

- hubungan manusia dengan Tuhan;
- penghormatan terhadap sesama manusia;
- persatuan;
- proses musyawarah;
- keadilan sosial.

Kompetensi dipilih setelah Boundary Analysis selesai.

---

# Dominant Value

Apabila satu skenario memiliki lebih dari satu nilai Pancasila,

generator wajib menentukan nilai yang paling dominan.

Nilai dominan adalah nilai yang paling menjadi fokus penilaian.

Nilai lain boleh muncul sebagai distraktor.

Namun tidak boleh menggeser kompetensi utama.

---

# Assessment Priority

Generator wajib menentukan prioritas berikut.

1.

Kompetensi utama.

2.

Nilai dominan.

3.

Konflik utama.

4.

Stem.

5.

Pilihan jawaban.

Generator tidak boleh membangun opsi sebelum kompetensi utama selesai ditentukan.

---

# Kompetensi Tidak Boleh Berubah

Selama proses penyusunan soal,

kompetensi utama tidak boleh berubah.

Stem,

konflik,

opsi,

maupun pembahasan,

harus tetap mengarah pada kompetensi yang sama.

---

# Distraktor

Distraktor diperbolehkan mewakili nilai Pancasila yang berbeda.

Justru hal tersebut dianjurkan agar peserta mampu membedakan nilai dominan.

Contoh:

Topik:

Agama

Kompetensi:

Sila Kedua

Maka distraktor dapat berupa:

- opsi yang lebih mencerminkan Sila Pertama;
- opsi yang lebih mencerminkan Sila Ketiga;
- opsi yang lebih mencerminkan Sila Kelima.

Jawaban benar tetap merupakan opsi yang paling mencerminkan kompetensi utama.

---

# Hubungan dengan Value Boundary

Assessment Pattern menentukan kompetensi.

Value Boundary menentukan mengapa kompetensi tersebut dipilih.

Assessment Pattern tidak menjelaskan batas antar sila.

Seluruh analisis batas nilai dilakukan pada **value-boundary.md**.

---

# Validasi

Sebelum soal dianggap selesai,

generator wajib memastikan:

✓ hanya terdapat satu kompetensi utama;

✓ telah dilakukan Boundary Analysis;

✓ nilai dominan telah ditentukan;

✓ seluruh opsi masih relevan dengan topik;

✓ jawaban benar dipilih karena paling mencerminkan kompetensi utama;

✓ pembahasan menjelaskan mengapa jawaban benar lebih tepat dibanding opsi lain yang masih mencerminkan nilai Pancasila tetapi pada sila yang berbeda.

---

# Target

Peserta tidak dapat menjawab soal hanya berdasarkan tema.

Peserta harus mampu mengidentifikasi kompetensi utama dan nilai dominan yang sedang diukur.

Dengan demikian soal memiliki karakter yang menyerupai TWK SKD CAT BKN, di mana satu tema dapat mengandung beberapa nilai Pancasila, tetapi hanya satu yang menjadi fokus penilaian.
