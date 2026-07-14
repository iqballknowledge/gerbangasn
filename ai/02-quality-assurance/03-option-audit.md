# GerbangASN QA Engine
## Option Audit
Version: 1.0

Location:
02-quality-assurance/03-option-audit.md

---

# Philosophy

Sebagian besar kualitas soal CAT SKD BKN ditentukan oleh kualitas opsi jawaban.

Pada soal yang baik, peserta tidak dapat menentukan jawaban hanya dari pola penulisan.

Peserta harus memahami konteks, membandingkan seluruh opsi, kemudian menentukan nilai yang paling dominan.

Option Audit bertugas memastikan seluruh opsi memiliki kualitas yang setara dan tidak memberikan petunjuk terhadap jawaban benar.

---

# Audit Workflow

Lakukan audit berikut secara berurutan.

1.
Option Length Audit

↓

2.
Grammar Audit

↓

3.
Hierarchy Audit

↓

4.
Naturalness Audit

↓

5.
Psychology Audit

↓

6.
Distractor Audit

↓

7.
Calibration Result

---

# 1. Option Length Audit

Tujuan:

Memastikan panjang setiap opsi relatif seimbang.

Jawaban benar tidak boleh tampak lebih lengkap.

Periksa:

✓ apakah satu opsi jauh lebih panjang?

✓ apakah satu opsi jauh lebih detail?

✓ apakah satu opsi memuat lebih banyak alasan?

✓ apakah satu opsi terlihat paling "sempurna"?

Jika YA

↓

FAIL

---

Panjang opsi tidak harus identik.

Tetapi seluruh opsi harus tampak alami.

Contoh buruk

A.
Membantu warga.

B.
Mengajak seluruh warga bergotong royong bersama pemerintah daerah dan berbagai unsur masyarakat untuk menyelesaikan masalah secara berkelanjutan.

Jawaban benar langsung terlihat.

---

Contoh baik

Seluruh opsi memiliki panjang relatif sama.

---

# 2. Grammar Audit

Periksa konsistensi struktur bahasa.

Misalnya

✓ seluruh opsi diawali verba

atau

✓ seluruh opsi diawali tindakan

Jangan sampai

A.
Mengajak warga...

B.
Musyawarah dilakukan...

C.
Harus ada...

D.
Pemerintah...

Karena struktur berbeda dapat menjadi petunjuk.

---

# 3. Hierarchy Audit

Seluruh opsi harus berada pada level tindakan yang sama.

Contoh buruk

A.
Membantu korban.

B.
Menghubungi RT.

C.
Menyusun kebijakan nasional.

D.
Menghibur teman.

Level tindakan tidak setara.

---

Contoh baik

Seluruh opsi berupa tindakan yang dapat dilakukan oleh aktor dalam skenario.

---

# 4. Naturalness Audit

Seluruh opsi harus terdengar sama-sama layak dipilih.

Tidak boleh ada opsi yang:

• terlalu heroik

• terlalu ideal

• terlalu sopan

• terlalu sempurna

• terlalu ekstrem

Karena peserta akan langsung memilihnya.

---

# 5. Psychology Audit

Bayangkan diri sebagai peserta CAT.

Tanyakan.

Apakah saya langsung tahu jawabannya hanya dengan membaca opsi?

Jika YA

↓

FAIL

Apakah saya harus membaca stem kembali?

↓

PASS

Apakah saya harus membandingkan beberapa opsi?

↓

EXCELLENT

---

# 6. Distractor Audit

Setiap distraktor wajib memenuhi syarat berikut.

Distraktor harus:

✓ logis

✓ relevan

✓ masih sesuai konteks

✓ masih mencerminkan nilai positif

✓ memiliki alasan rasional

Distraktor tidak boleh:

✗ bercanda

✗ ngawur

✗ bertentangan dengan soal

✗ jelas salah

✗ mudah dieliminasi

---

# Distractor Type

Gunakan distraktor seperti CAT BKN.

1.

Nilai benar tetapi bukan nilai dominan.

Contoh

Soal menguji

Sila 5

Distraktor

Sila 2

Masih benar.

Tetapi kurang dominan.

---

2.

Tindakan benar.

Tetapi kurang lengkap.

---

3.

Tindakan baik.

Tetapi tidak menyelesaikan konflik utama.

---

4.

Tindakan benar.

Tetapi terlalu administratif.

---

5.

Tindakan benar.

Tetapi hanya menyelesaikan akibat.

Bukan akar masalah.

---

# 7. Boundary Audit

Setiap opsi harus berasal dari boundary yang berbeda.

Contoh

A

Persatuan

B

Musyawarah

C

Kemanusiaan

D

Keadilan

E

Persatuan + simbol

Dengan demikian peserta harus menentukan nilai dominan.

---

# Anti Pattern

QA harus memberi FAIL apabila menemukan:

✓ jawaban paling panjang

✓ jawaban paling sopan

✓ jawaban paling lengkap

✓ jawaban paling konkret

✓ jawaban paling ideal

✓ satu opsi jelas salah

✓ dua opsi identik

✓ seluruh distraktor lemah

✓ satu opsi terlalu ekstrem

✓ grammar tidak konsisten

✓ level tindakan berbeda

✓ opsi tidak relevan dengan stem

✓ opsi dapat dieliminasi kurang dari 5 detik

---

# Calibration Score

Nilai setiap aspek.

Option Length

0–10

Grammar

0–10

Hierarchy

0–10

Naturalness

0–10

Psychology

0–10

Distractor Quality

0–10

Boundary Quality

0–10

---

# Final Option Score

55–70

Excellent

40–54

Good

25–39

Needs Revision

<25

Reject

---

# Recommendation

PASS

Semua opsi memiliki kualitas setara.

Peserta harus berpikir.

Tidak ada petunjuk jawaban.

---

MINOR REVISION

Masih terdapat sedikit ketimpangan.

Perlu penyempurnaan.

---

MAJOR REVISION

Beberapa opsi terlalu lemah.

Peserta dapat menebak jawaban.

---

FAIL

Option harus ditulis ulang.
