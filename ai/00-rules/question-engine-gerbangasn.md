# Question Engine GerbangASN

Versi : 2.0

Status : Active

---

Question Engine GerbangASN merupakan pusat orkestrasi seluruh engine penyusun soal.

Seluruh engine harus dijalankan secara berurutan.

Tidak diperbolehkan melompati engine.

---

## Execution Flow

Question Engine GerbangASN

↓

GerbangASN Rules

↓

Topic Identity Engine

↓

Competency Engine

↓

Assessment Pattern

↓

Value Boundary (jika tersedia)

↓

Knowledge

↓

Scenario Engine

↓

Conflict Engine

↓

Stem Engine

↓

Candidate Option Generation

↓

Option Hierarchy Engine

↓

Option Psychology Engine

↓

Option Naturalness Engine

↓

Option Calibration

↓

Difficulty Engine

↓

Comparison Engine

↓

Answer Distribution

↓

Review Engine

---

## Filosofi

Question Engine tidak bertujuan membuat soal.

Question Engine bertujuan menghasilkan lima opsi yang sama-sama layak dipilih, namun hanya satu yang paling tepat.

Karakter soal CAT SKD BKN berasal dari kualitas opsi, bukan dari panjang skenario.

---

## Candidate Option Generation

Sebelum melakukan kalibrasi,

generator wajib menghasilkan lima kandidat opsi.

Kelima opsi tersebut belum dianggap final.

Setelah itu setiap opsi harus melalui:

- Option Hierarchy
- Option Psychology
- Option Naturalness
- Option Calibration

Baru menjadi opsi final.

---

## Prioritas

1. Kompetensi

2. Nilai dominan

3. Scenario

4. Conflict

5. Stem

6. Candidate Option

7. Hierarchy

8. Psychology

9. Naturalness

10. Calibration

11. Difficulty

12. Comparison

13. Review

---

Question Engine merupakan aturan tertinggi.

Jika terjadi konflik antar engine,

Question Engine menjadi acuan utama.
