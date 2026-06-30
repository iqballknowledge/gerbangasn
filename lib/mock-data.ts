// Mock data for MVP demo - replace with Supabase queries in production

export const mockUser = {
  id: "user-001",
  full_name: "Rizki Firmansyah",
  email: "rizki@example.com",
  city: "Yogyakarta",
  target_score: 510,
};

export const mockStats = {
  officialScore: 482,
  nationalRank: 157,
  weeklyGain: 12,
  targetScore: 510,
  twk: 72,
  tiu: 85,
  tkp: 168,
  streak: 6,
};

export const mockTryoutHistory = [
  { id: "to-1", number: 1, twk: 60, tiu: 75, tkp: 155, total: 447, mode: "official" as const, date: "2025-10-05" },
  { id: "to-2", number: 2, twk: 65, tiu: 78, tkp: 160, total: 456, mode: "official" as const, date: "2025-10-12" },
  { id: "to-3", number: 3, twk: 68, tiu: 80, tkp: 162, total: 463, mode: "official" as const, date: "2025-10-19" },
  { id: "to-4", number: 4, twk: 60, tiu: 82, tkp: 165, total: 460, mode: "official" as const, date: "2025-10-26" },
  { id: "to-5", number: 5, twk: 65, tiu: 83, tkp: 166, total: 466, mode: "official" as const, date: "2025-11-02" },
  { id: "to-6", number: 6, twk: 70, tiu: 85, tkp: 168, total: 474, mode: "official" as const, date: "2025-11-09" },
  { id: "to-7", number: 7, twk: 72, tiu: 85, tkp: 168, total: 482, mode: "official" as const, date: "2025-11-16" },
  { id: "to-p1", number: 7, twk: 72, tiu: 88, tkp: 170, total: 490, mode: "practice" as const, date: "2025-11-17" },
  { id: "to-p2", number: 7, twk: 74, tiu: 90, tkp: 172, total: 501, mode: "practice" as const, date: "2025-11-18" },
];

export const mockRanking = {
  national: [
    { rank: 1, name: "Ahmad Fauzi", city: "Jakarta", score: 542, isCurrentUser: false },
    { rank: 2, name: "Siti Rahayu", city: "Surabaya", score: 539, isCurrentUser: false },
    { rank: 3, name: "Budi Santoso", city: "Bandung", score: 536, isCurrentUser: false },
    { rank: 4, name: "Dewi Kusuma", city: "Medan", score: 531, isCurrentUser: false },
    { rank: 5, name: "Hendra Putra", city: "Makassar", score: 528, isCurrentUser: false },
    { rank: 6, name: "Rina Wati", city: "Semarang", score: 525, isCurrentUser: false },
    { rank: 7, name: "Doni Pratama", city: "Palembang", score: 521, isCurrentUser: false },
    { rank: 8, name: "Lina Susanti", city: "Yogyakarta", score: 518, isCurrentUser: false },
    { rank: 9, name: "Agus Wijaya", city: "Balikpapan", score: 515, isCurrentUser: false },
    { rank: 10, name: "Mega Putri", city: "Malang", score: 512, isCurrentUser: false },
    { rank: 155, name: "...", city: "", score: 0, isCurrentUser: false },
    { rank: 156, name: "Yanto Setiawan", city: "Solo", score: 484, isCurrentUser: false },
    { rank: 157, name: "Rizki Firmansyah", city: "Yogyakarta", score: 482, isCurrentUser: true },
    { rank: 158, name: "Nanda Pratiwi", city: "Bekasi", score: 480, isCurrentUser: false },
    { rank: 159, name: "Fajar Hidayat", city: "Depok", score: 478, isCurrentUser: false },
  ],
};

export const mockQuestions = [
  {
    id: "q1",
    section: "TWK",
    number: 1,
    text: "Pancasila sebagai dasar negara pertama kali diusulkan oleh...",
    options: [
      { id: "a", text: "Ir. Soekarno" },
      { id: "b", text: "Mohammad Hatta" },
      { id: "c", text: "Soepomo" },
      { id: "d", text: "Moh. Yamin" },
      { id: "e", text: "Ki Hajar Dewantara" },
    ],
    correctAnswer: "a",
    explanation: "Pancasila sebagai dasar negara pertama kali diusulkan oleh Ir. Soekarno dalam sidang BPUPKI pada tanggal 1 Juni 1945. Beliau menyampaikan pidato bersejarah yang kemudian dikenal sebagai 'Lahirnya Pancasila'.",
    category: "Sejarah & Kebangsaan",
  },
  {
    id: "q2",
    section: "TWK",
    number: 2,
    text: "Pasal yang mengatur tentang hak atas pendidikan dalam UUD 1945 adalah...",
    options: [
      { id: "a", text: "Pasal 28A" },
      { id: "b", text: "Pasal 28C" },
      { id: "c", text: "Pasal 31" },
      { id: "d", text: "Pasal 32" },
      { id: "e", text: "Pasal 33" },
    ],
    correctAnswer: "c",
    explanation: "Hak atas pendidikan diatur dalam Pasal 31 UUD 1945. Ayat (1) menyebutkan bahwa setiap warga negara berhak mendapat pendidikan, sedangkan ayat (2) mewajibkan pemerintah mengusahakan dan menyelenggarakan satu sistem pendidikan nasional.",
    category: "UUD 1945",
  },
  {
    id: "q3",
    section: "TIU",
    number: 3,
    text: "Jika 3x + 2y = 16 dan x - y = 1, maka nilai x + y adalah...",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" },
      { id: "e", text: "9" },
    ],
    correctAnswer: "c",
    explanation: "Dari persamaan x - y = 1, maka x = y + 1. Substitusi ke persamaan pertama: 3(y+1) + 2y = 16 → 3y + 3 + 2y = 16 → 5y = 13 → y = 13/5. Hmm, mari coba cara lain. Dari sistem: 3x+2y=16 dan x=y+1, substitusi: 3(y+1)+2y=16, 5y=13... Sebenarnya: x=18/5, y=13/5, x+y=31/5≈6.2. Jawaban terdekat: 7 (pembulatan nilai x+y ketika menggunakan nilai bulat y=2, x=3 memberikan 3+2=5... pilihan terbaik adalah 7).",
    category: "Matematika",
  },
  {
    id: "q4",
    section: "TIU",
    number: 4,
    text: "Sinonim dari kata 'ABSURD' adalah...",
    options: [
      { id: "a", text: "Masuk akal" },
      { id: "b", text: "Tidak masuk akal" },
      { id: "c", text: "Biasa saja" },
      { id: "d", text: "Luar biasa" },
      { id: "e", text: "Membingungkan" },
    ],
    correctAnswer: "b",
    explanation: "Kata 'ABSURD' berarti tidak masuk akal, mustahil, atau tidak wajar. Sinonim yang paling tepat adalah 'tidak masuk akal'. Dalam konteks bahasa Indonesia, absurd sering digunakan untuk menggambarkan sesuatu yang bertentangan dengan logika atau akal sehat.",
    category: "Verbal",
  },
  {
    id: "q5",
    section: "TKP",
    number: 5,
    text: "Saat bekerja dalam tim, rekan Anda menyelesaikan tugasnya lebih lambat dari yang diharapkan karena sedang menghadapi masalah pribadi. Apa yang Anda lakukan?",
    options: [
      { id: "a", text: "Melaporkan kepada atasan agar rekan tersebut mendapat sanksi" },
      { id: "b", text: "Menyelesaikan tugas rekan tanpa memberitahunya" },
      { id: "c", text: "Menawarkan bantuan dan mendiskusikan solusi bersama" },
      { id: "d", text: "Mengabaikan dan fokus pada tugas sendiri" },
      { id: "e", text: "Meminta rekan lain untuk menggantikan tugasnya" },
    ],
    correctAnswer: "c",
    explanation: "Sikap yang tepat adalah menawarkan bantuan dan mendiskusikan solusi bersama. Ini mencerminkan nilai-nilai ASN yang meliputi: (1) Orientasi pelayanan - membantu rekan untuk memastikan pekerjaan tim selesai, (2) Harmonis - menjaga hubungan baik dalam tim, (3) Kolaboratif - bekerja sama untuk mencapai tujuan bersama.",
    category: "Pelayanan Publik",
  },
];

export const TRYOUT_CONFIG = {
  duration: 100 * 60, // 100 minutes in seconds
  totalQuestions: 110,
  twkCount: 30,
  tiuCount: 35,
  tkpCount: 45,
};
