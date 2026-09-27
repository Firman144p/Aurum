import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Coins,
  ChevronRight,
  Layers,
  SlidersHorizontal,
  Info,
  Check,
  Compass,
  Building2,
  Calendar,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight
} from 'lucide-react';
import heroAppImage from './assets/images/hero_app_visual_1790498707740.jpg';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function App() {
  // Target launch date: 45 days from current baseline
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 42,
    hours: 18,
    minutes: 36,
    seconds: 40,
  });

  // Waitlist form state
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Tech & Corporate');
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [userQueueNumber, setUserQueueNumber] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Social proof counter
  const [waitlistCount, setWaitlistCount] = useState(2847);

  // Feature interactive demo state
  const [activeFeatureTab, setActiveFeatureTab] = useState<'ai' | 'save' | 'track' | 'security'>('ai');

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Mohon masukkan alamat email yang valid.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      const newQueueNum = waitlistCount + 1;
      setWaitlistCount(newQueueNum);
      setUserQueueNumber(newQueueNum);
      setSubmittedEmail(email);
      setSubmitted(true);
      setIsSubmitting(false);
      setEmail('');
    }, 600);
  };

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1E17] text-[#F0EDE5] relative flex flex-col font-sans">
      {/* 1. MANDATORY PROTOTYPE NOTICE BANNER */}
      <aside aria-label="Demo notice" className="bg-[#142820] border-b border-[#D4AF37]/25 px-4 py-2 text-center text-xs tracking-wide text-[#9EB3A6] z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span className="font-medium text-[#F0EDE5]">Pengumuman Prototype:</span>
          <span>Ini adalah website prototype/demo — belum terhubung ke sistem backend sesungguhnya</span>
        </div>
      </aside>

      {/* 2. TOP BAR CONTRACT */}
      {/* Single text brand mark - 4 text links - primary CTA */}
      <header className="sticky top-0 z-40 bg-[#0F1E17]/90 backdrop-blur-md border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="/"
            className="text-2xl font-serif tracking-[0.2em] font-bold text-[#D4AF37] hover:opacity-90 transition-opacity"
          >
            AURUM
          </a>

          {/* Zone 2: Clean text navigation links without pills or subtext */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide font-normal text-[#9EB3A6]">
            <a href="#fitur" className="hover:text-[#F0EDE5] transition-colors">
              Fitur Unggulan
            </a>
            <a href="#interaktif" className="hover:text-[#F0EDE5] transition-colors">
              Eksplorasi Asisten
            </a>
            <a href="#keamanan" className="hover:text-[#F0EDE5] transition-colors">
              Keamanan Bank
            </a>
            <a href="#tentang" className="hover:text-[#F0EDE5] transition-colors">
              Tentang Kami
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToWaitlist}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0F1E17] bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-none transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
            >
              Gabung Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <main className="flex-1">
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#D4AF37]/15">
          {/* Subtle geometric hairline backdrop accents */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] border border-[#D4AF37]/10 rounded-full" />
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border border-[#D4AF37]/10 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Tagline & Brand Lead */}
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                <span>Peluncuran Eksklusif</span>
                <span className="text-[#9EB3A6]">·</span>
                <span className="text-[#4ADE80]">Q4 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F0EDE5] leading-[1.12] mb-6">
                AURUM
                <span className="block text-2xl sm:text-3xl lg:text-4xl italic font-serif font-normal text-[#D4AF37] mt-2">
                  "Kelola kekayaanmu, sejelas emas."
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#9EB3A6] leading-relaxed mb-10 max-w-2xl font-light">
                AURUM adalah aplikasi asisten keuangan pintar berbasis AI yang membantu mengatur investasi, tabungan, dan pengeluaran secara otomatis, dirancang untuk profesional muda yang ingin kelola keuangan tanpa ribet.
              </p>

              {/* ACTION BUTTON */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
                <button
                  onClick={scrollToWaitlist}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0F1E17] font-medium text-sm tracking-wide uppercase hover:bg-[#F3E5AB] transition-colors cursor-pointer"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 text-[#0F1E17]" />
                </button>

                <div className="flex items-center gap-3 text-xs text-[#9EB3A6] px-2 py-1">
                  <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                  <span>
                    <strong className="text-[#F0EDE5] font-semibold tabular-nums">{waitlistCount.toLocaleString('id-ID')}</strong> orang telah bergabung dalam antrean beta
                  </span>
                </div>
              </div>
            </div>

            {/* COUNTDOWN TIMER SECTION - Grand gold typography */}
            <div className="mt-8 pt-10 border-t border-[#D4AF37]/20">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9EB3A6] block mb-2">
                    Menuju Peluncuran Publik Resmi
                  </span>
                  <p className="text-sm text-[#F0EDE5] font-light">
                    Akses terbatas akan dibuka bertahap untuk pendaftar awal waitlist.
                  </p>
                </div>

                {/* Big Clean Gold Countdown Display */}
                <div className="grid grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
                  <div className="border-l border-[#D4AF37]/30 pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] tabular-nums leading-none block">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9EB3A6] mt-2 block">
                      Hari
                    </span>
                  </div>

                  <div className="border-l border-[#D4AF37]/30 pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] tabular-nums leading-none block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9EB3A6] mt-2 block">
                      Jam
                    </span>
                  </div>

                  <div className="border-l border-[#D4AF37]/30 pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] tabular-nums leading-none block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9EB3A6] mt-2 block">
                      Menit
                    </span>
                  </div>

                  <div className="border-l border-[#D4AF37]/30 pl-4 sm:pl-6">
                    <span className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] tabular-nums leading-none block">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9EB3A6] mt-2 block">
                      Detik
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HIGH FIDELITY PRODUCT VISUAL SHOWCASE */}
            <div className="mt-14 relative rounded-none border border-[#D4AF37]/25 overflow-hidden bg-[#142820]">
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-[#0A1610]">
                <img
                  src={heroAppImage}
                  alt="Tampilan antarmuka cerdas AURUM pada perangkat mobile dengan aksen emas murni"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container in case image load fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback container overlay with visual cues */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E17] via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle caption badge inside image border */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#0F1E17]/85 backdrop-blur-md border border-[#D4AF37]/30">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">Pratinjau Antarmuka AURUM AI Engine</p>
                      <p className="text-xs text-[#9EB3A6]">Analisis portofolio real-time, sinkronisasi tabungan otomatis, dan rekomendasi terarah.</p>
                    </div>
                  </div>
                  <div className="text-xs text-[#4ADE80] font-mono shrink-0 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    Engine v1.0 Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FITUR UNGGULAN - ASYMMETRIC BENTO GRID */}
        <section id="fitur" className="py-24 md:py-32 border-b border-[#D4AF37]/15 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-3">
                  Fitur Unggulan
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F0EDE5]">
                  Arsitektur Keuangan Masa Depan
                </h2>
              </div>
              <p className="text-sm text-[#9EB3A6] max-w-md font-light leading-relaxed">
                Dirancang khusus bagi generasi profesional yang menghargai waktu: otomasi total dari penghasilan hingga investasi berkelanjutan.
              </p>
            </div>

            {/* Asymmetric 4-Feature Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1: AI Investment Insight (Col 7 - Marquee) */}
              <div className="md:col-span-7 bg-[#142820] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
                <div>
                  <div className="w-12 h-12 bg-[#0F1E17] border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#4ADE80] font-mono block mb-2">01 · Algoritma Cerdas</span>
                  <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mb-3">
                    AI Investment Insight
                  </h3>
                  <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                    Kecerdasan buatan AURUM memindai kondisi makroekonomi, inflasi, dan tren pasar untuk menghasilkan rekomendasi rebalancing portofolio yang disesuaikan dengan toleransi risiko dan tujuan finansial jangka panjangmu.
                  </p>
                </div>

                {/* Sub visual simulation box */}
                <div className="p-4 bg-[#0F1E17] border border-[#D4AF37]/15">
                  <div className="flex items-center justify-between text-xs text-[#9EB3A6] mb-3 pb-2 border-b border-[#D4AF37]/10">
                    <span className="font-mono text-[#D4AF37]">REKOMENDASI ALOKASI MINGGU INI</span>
                    <span className="text-[#4ADE80]">Akurasi Historis 94.2%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#142820] p-2 border border-[#D4AF37]/10">
                      <span className="text-[10px] text-[#9EB3A6] block">Emas Fisik/Digital</span>
                      <span className="text-sm font-semibold text-[#D4AF37] tabular-nums">35%</span>
                    </div>
                    <div className="bg-[#142820] p-2 border border-[#D4AF37]/10">
                      <span className="text-[10px] text-[#9EB3A6] block">Indeks Saham Global</span>
                      <span className="text-sm font-semibold text-[#F0EDE5] tabular-nums">45%</span>
                    </div>
                    <div className="bg-[#142820] p-2 border border-[#D4AF37]/10">
                      <span className="text-[10px] text-[#9EB3A6] block">Pasar Uang Likuid</span>
                      <span className="text-sm font-semibold text-[#4ADE80] tabular-nums">20%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Auto-Save & Budgeting (Col 5) */}
              <div className="md:col-span-5 bg-[#142820] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
                <div>
                  <div className="w-12 h-12 bg-[#0F1E17] border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <PiggyBank className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#4ADE80] font-mono block mb-2">02 · Aliran Otomatis</span>
                  <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mb-3">
                    Auto-Save & Budgeting
                  </h3>
                  <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                    Menabung tanpa merasa tersiksa. Aturan pintar menyisihkan uang receh pembulatan transaksi belanja harian dan surplus kas secara otomatis ke pos tabungan darurat berimbal hasil tinggi.
                  </p>
                </div>

                <div className="p-4 bg-[#0F1E17] border border-[#D4AF37]/15 text-xs">
                  <div className="flex justify-between text-[#9EB3A6] mb-1">
                    <span>Target Dana Darurat 6 Bulan</span>
                    <span className="text-[#D4AF37] font-semibold">Rp78.500.000 / Rp100.000.000</span>
                  </div>
                  <div className="w-full bg-[#142820] h-2 overflow-hidden mb-2">
                    <div className="bg-[#D4AF37] h-full" style={{ width: '78.5%' }} />
                  </div>
                  <span className="text-[11px] text-[#4ADE80]">Estimasi tercapai 2 bulan lebih cepat berkat Smart Sweep</span>
                </div>
              </div>

              {/* Feature 3: Real-time Portfolio Tracking (Col 5) */}
              <div className="md:col-span-5 bg-[#142820] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
                <div>
                  <div className="w-12 h-12 bg-[#0F1E17] border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#4ADE80] font-mono block mb-2">03 · Konsolidasi Multi-Aset</span>
                  <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mb-3">
                    Real-time Portfolio Tracking
                  </h3>
                  <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                    Katakan selamat tinggal pada spreadsheet rumit. Hubungkan akun sekuritas, bank, kripto terkurasi, dan tabungan emas murni dalam satu dasbor sinkron yang diperbarui setiap detik.
                  </p>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0F1E17] border border-[#D4AF37]/15">
                  <div className="flex items-center gap-3">
                    <Coins className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs text-[#F0EDE5]">Net Worth Terkonsolidasi</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#4ADE80]">+18.4% YTD</span>
                </div>
              </div>

              {/* Feature 4: Bank-level Security (Col 7 - Marquee) */}
              <div className="md:col-span-7 bg-[#142820] border border-[#D4AF37]/25 p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
                <div>
                  <div className="w-12 h-12 bg-[#0F1E17] border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#4ADE80] font-mono block mb-2">04 · Proteksi Tertinggi</span>
                  <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mb-3">
                    Bank-level Security
                  </h3>
                  <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                    Keamanan kekayaanmu adalah prioritas mutlak. AURUM menerapkan enkripsi AES-256 tingkat perbankan militer, autentikasi biometrik multi-lapis, dan arsitektur zero-knowledge sehingga data aset finansialmu tidak pernah dapat dibaca pihak ketiga.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[#0F1E17] border border-[#D4AF37]/15">
                    <Lock className="w-4 h-4 text-[#D4AF37] mb-1" />
                    <span className="text-[11px] font-medium text-[#F0EDE5] block">256-bit AES</span>
                    <span className="text-[10px] text-[#9EB3A6]">Enkripsi end-to-end</span>
                  </div>
                  <div className="p-3 bg-[#0F1E17] border border-[#D4AF37]/15">
                    <Building2 className="w-4 h-4 text-[#4ADE80] mb-1" />
                    <span className="text-[11px] font-medium text-[#F0EDE5] block">ISO 27001</span>
                    <span className="text-[10px] text-[#9EB3A6]">Standar sertifikasi</span>
                  </div>
                  <div className="p-3 bg-[#0F1E17] border border-[#D4AF37]/15 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mb-1" />
                    <span className="text-[11px] font-medium text-[#F0EDE5] block">Audit Berkala</span>
                    <span className="text-[10px] text-[#9EB3A6]">Mitra keamanan independen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE EXPLORATION SECTION */}
        <section id="interaktif" className="py-24 border-b border-[#D4AF37]/15 bg-[#0C1A14]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-3">
                Simulasi Interaktif
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F0EDE5] mb-4">
                Bagaimana AURUM Mengubah Rutinitas Finansialmu
              </h2>
              <p className="text-sm text-[#9EB3A6] font-light leading-relaxed">
                Pilih pilar kemampuan asisten cerdas di bawah untuk melihat alur kerja otomatis yang berjalan di latar belakang setiap hari.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-[#D4AF37]/20 pb-4">
              <button
                onClick={() => setActiveFeatureTab('ai')}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeFeatureTab === 'ai'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                    : 'border-transparent text-[#9EB3A6] hover:text-[#F0EDE5]'
                }`}
              >
                1. AI Rebalancing Otomatis
              </button>
              <button
                onClick={() => setActiveFeatureTab('save')}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeFeatureTab === 'save'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                    : 'border-transparent text-[#9EB3A6] hover:text-[#F0EDE5]'
                }`}
              >
                2. Smart Round-Up Menabung
              </button>
              <button
                onClick={() => setActiveFeatureTab('track')}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeFeatureTab === 'track'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                    : 'border-transparent text-[#9EB3A6] hover:text-[#F0EDE5]'
                }`}
              >
                3. Audit Portofolio Real-Time
              </button>
              <button
                onClick={() => setActiveFeatureTab('security')}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeFeatureTab === 'security'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold'
                    : 'border-transparent text-[#9EB3A6] hover:text-[#F0EDE5]'
                }`}
              >
                4. Protokol Keamanan Kunci
              </button>
            </div>

            {/* Interactive Panel Content */}
            <div className="bg-[#142820] border border-[#D4AF37]/30 p-6 sm:p-10">
              {activeFeatureTab === 'ai' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="text-xs uppercase tracking-wider text-[#4ADE80] font-mono">Modul AI Investment Engine</span>
                    <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mt-2 mb-4">
                      Rebalancing Portofolio Berdasar Volatilitas Pasar
                    </h3>
                    <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                      Ketika harga saham sedang mengalami koreksi tajam, AURUM mendeteksi peluang valuasi murah dan secara bertahap memindahkan alokasi dari instrumen defensif (emas & kas) ke indeks berfundamental kokoh.
                    </p>
                    <ul className="space-y-3 text-xs text-[#F0EDE5]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Analisis sentimen pasar berbasis 10.000+ data feed global per hari</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Notifikasi konfirmasi satu-sentuhan sebelum order eksekusi dieksekusi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Bebas bias emosi manusia saat pasar panic selling</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 bg-[#0F1E17] p-6 border border-[#D4AF37]/20">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#D4AF37]/15 text-xs">
                      <span className="text-[#9EB3A6]">Simulasi Sinyal Rebalancing AI</span>
                      <span className="text-[#D4AF37] font-mono">Aktif Sekarang</span>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center p-2.5 bg-[#142820] border border-[#D4AF37]/10">
                        <span className="text-[#F0EDE5]">SBN / Obligasi Negara</span>
                        <span className="text-[#9EB3A6]">-5% (Pindahkan ke Saham)</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 bg-[#142820] border border-[#D4AF37]/10">
                        <span className="text-[#F0EDE5]">Indeks Saham LQ45</span>
                        <span className="text-[#4ADE80] font-semibold">+5% (Akumulasi Diskon)</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 bg-[#142820] border border-[#D4AF37]/10">
                        <span className="text-[#F0EDE5]">Cadangan Emas Fisik</span>
                        <span className="text-[#D4AF37]">Pertahankan 30% (Safe Haven)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 'save' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="text-xs uppercase tracking-wider text-[#4ADE80] font-mono">Modul Cash Flow Optimization</span>
                    <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mt-2 mb-4">
                      Micro-Saving Tanpa Mengorbankan Gaya Hidup
                    </h3>
                    <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                      Setiap kali kamu membeli kopi seharga Rp36.500, AURUM membulatkannya menjadi Rp40.000. Selisih Rp3.500 langsung diinvestasikan ke emas murni atau reksa dana pasar uang tanpa kamu sadari.
                    </p>
                    <ul className="space-y-3 text-xs text-[#F0EDE5]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Rata-rata pengguna mengumpulkan Rp1.400.000 per bulan hanya dari pembulatan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Sinkronisasi otomatis dengan e-wallet dan kartu debit utama</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 bg-[#0F1E17] p-6 border border-[#D4AF37]/20">
                    <div className="text-xs text-[#9EB3A6] mb-3">CONTOH TRANSAKSI HARI INI:</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center p-3 bg-[#142820]">
                        <div>
                          <p className="text-[#F0EDE5] font-medium">Artisan Coffee Latte</p>
                          <p className="text-[10px] text-[#9EB3A6]">Belanja Rp38.000 · Bulatkan Rp40.000</p>
                        </div>
                        <span className="text-[#4ADE80] font-mono">+Rp2.000 ke Emas</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#142820]">
                        <div>
                          <p className="text-[#F0EDE5] font-medium">Buku & Produktivitas</p>
                          <p className="text-[10px] text-[#9EB3A6]">Belanja Rp124.000 · Bulatkan Rp130.000</p>
                        </div>
                        <span className="text-[#4ADE80] font-mono">+Rp6.000 ke Emas</span>
                      </div>
                      <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center text-xs text-[#D4AF37]">
                        Total tabungan mikro bulan ini: <strong className="tabular-nums">Rp1.842.000</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 'track' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="text-xs uppercase tracking-wider text-[#4ADE80] font-mono">Modul Unified Net Worth</span>
                    <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mt-2 mb-4">
                      Satu Layar Untuk Semua Portofolio
                    </h3>
                    <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                      Tidak perlu lagi membuka 5 aplikasi perbankan dan sekuritas berbeda setiap akhir pekan. AURUM menyatukan posisi asetmu, menghitung estimasi dividen bulanan, dan memantau rasio kesehatan keuanganmu.
                    </p>
                    <ul className="space-y-3 text-xs text-[#F0EDE5]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Kalkulasi nilai kekayaan bersih (Net Worth) secara instan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Pelacakan rasio likuiditas dan dana darurat</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 bg-[#0F1E17] p-6 border border-[#D4AF37]/20 font-mono text-xs">
                    <div className="text-[#9EB3A6] mb-3">RINGKASAN PORTOFOLIO TERPADU:</div>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2.5 bg-[#142820]">
                        <span className="text-[#F0EDE5]">Emas Terverifikasi Antam</span>
                        <span className="text-[#D4AF37]">Rp142.500.000</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-[#142820]">
                        <span className="text-[#F0EDE5]">Reksa Dana & Saham</span>
                        <span className="text-[#F0EDE5]">Rp215.300.000</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-[#142820]">
                        <span className="text-[#F0EDE5]">Kas & Deposito Terjadwal</span>
                        <span className="text-[#4ADE80]">Rp85.000.000</span>
                      </div>
                      <div className="pt-2 border-t border-[#D4AF37]/20 flex justify-between font-bold text-sm">
                        <span className="text-[#F0EDE5]">Total Kekayaan Bersih</span>
                        <span className="text-[#D4AF37]">Rp442.800.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 'security' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="text-xs uppercase tracking-wider text-[#4ADE80] font-mono">Modul Fortified Privacy</span>
                    <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mt-2 mb-4">
                      Kedaulatan Finansial dengan Keamanan Maksimal
                    </h3>
                    <p className="text-sm text-[#9EB3A6] leading-relaxed mb-6 font-light">
                      Kami tidak pernah menjual data pribadimu kepada pengiklan atau pihak ketiga. Akses ke portofoliomu dilindungi oleh kunci kriptografi unik di perangkatmu sendiri.
                    </p>
                    <ul className="space-y-3 text-xs text-[#F0EDE5]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Kunci privat tersimpan di Secure Enclave perangkat</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>Mode privasi anti-intip otomatis di tempat umum</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 bg-[#0F1E17] p-6 border border-[#D4AF37]/20 text-xs">
                    <div className="p-4 border border-[#4ADE80]/30 bg-[#142820] mb-3">
                      <div className="flex items-center gap-2 text-[#4ADE80] font-medium mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Sistem Keamanan Aktif & Terverifikasi</span>
                      </div>
                      <p className="text-[#9EB3A6] text-[11px] leading-relaxed">
                        Enkripsi transit TLS 1.3 & At-Rest AES-256 berjalan tanpa henti untuk menjaga setiap jejak transaksi.
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[#9EB3A6] text-[11px]">
                      <span>Biometric FaceID / TouchID: Diaktifkan</span>
                      <span className="text-[#D4AF37]">Status: 100% Aman</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. SOCIAL PROOF & TESTIMONIALS */}
        <section className="py-24 border-b border-[#D4AF37]/15">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-3">
                Kepercayaan Komunitas
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F0EDE5] mb-4">
                Dipercaya oleh Para Profesional Muda Terkemuka
              </h2>
              <p className="text-sm text-[#9EB3A6] font-light">
                Lebih dari <span className="text-[#D4AF37] font-semibold">{waitlistCount.toLocaleString('id-ID')} profesional</span> di Jakarta dan regional Asia Tenggara telah mendaftar untuk akses awal eksklusif.
              </p>
            </div>

            {/* Testimonials Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#142820] border border-[#D4AF37]/20 p-8 flex flex-col justify-between">
                <p className="text-sm text-[#F0EDE5] italic font-serif leading-relaxed mb-6">
                  "Sebagai software lead dengan waktu terbatas, mengatur investasi saham dan tabungan emas selalu tertunda. AURUM membuat alokasi bulanan saya selesai secara otomatis dalam hitungan detik."
                </p>
                <div>
                  <div className="text-sm font-semibold text-[#D4AF37]">Arya Wicaksana</div>
                  <div className="text-xs text-[#9EB3A6]">Engineering Lead · Unicorn Tech Jakarta</div>
                </div>
              </div>

              <div className="bg-[#142820] border border-[#D4AF37]/20 p-8 flex flex-col justify-between">
                <p className="text-sm text-[#F0EDE5] italic font-serif leading-relaxed mb-6">
                  "Algoritma insight investasinya sangat tajam. Tidak berisik dengan spekulasi liar, melainkan berfokus pada diversifikasi nyata dan lindung nilai kekayaan terhadap inflasi."
                </p>
                <div>
                  <div className="text-sm font-semibold text-[#D4AF37]">Clara Tanujaya</div>
                  <div className="text-xs text-[#9EB3A6]">Senior Management Consultant · SCBD</div>
                </div>
              </div>

              <div className="bg-[#142820] border border-[#D4AF37]/20 p-8 flex flex-col justify-between">
                <p className="text-sm text-[#F0EDE5] italic font-serif leading-relaxed mb-6">
                  "Desain antarmukanya berkelas, tanpa iklan mengganggu atau tombol mencolok yang memusingkan. Rasanya seperti memiliki private wealth banker pribadi di saku."
                </p>
                <div>
                  <div className="text-sm font-semibold text-[#D4AF37]">Dimas Pramudya</div>
                  <div className="text-xs text-[#9EB3A6]">Creative Director & Founder Agency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FORM WAITLIST SECTION */}
        <section id="waitlist-section" className="py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#142820] border-2 border-[#D4AF37]/40 p-8 sm:p-12 relative overflow-hidden">
              {/* Subtle gold decorative ribbon */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 -rotate-45 transform translate-x-12 -translate-y-12 pointer-events-none" />

              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
                  Pendaftaran Akses Awal
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F0EDE5] mb-4">
                  Dapatkan Akses Beta Pertama
                </h2>
                <p className="text-sm text-[#9EB3A6] font-light leading-relaxed">
                  Pendaftar waitlist berhak mendapatkan 6 bulan gratis fitur premium AI Insight serta alokasi prioritas saat aplikasi diluncurkan.
                </p>
              </div>

              {submitted ? (
                /* SUCCESS STATE */
                <div className="bg-[#0F1E17] border border-[#4ADE80]/40 p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-[#142820] border border-[#4ADE80] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#4ADE80]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#F0EDE5] mb-2">
                    Selamat, Kamu Telah Terdaftar!
                  </h3>
                  <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] font-mono text-sm font-semibold my-3">
                    NOMOR ANTREAN: #{userQueueNumber}
                  </div>
                  <p className="text-sm text-[#9EB3A6] max-w-md mx-auto mb-6 leading-relaxed">
                    Kami telah mencatat email <strong className="text-[#F0EDE5]">{submittedEmail}</strong> dengan profil <strong className="text-[#F0EDE5]">{role}</strong>. Undangan personal akan dikirimkan langsung menjelang hari peluncuran.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#9EB3A6] hover:text-[#F0EDE5] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-colors cursor-pointer"
                    >
                      Daftarkan Email Lain
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.clipboard) {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Tautan pendaftaran telah disalin ke clipboard!');
                        }
                      }}
                      className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#0F1E17] bg-[#D4AF37] hover:bg-[#F3E5AB] font-semibold transition-colors cursor-pointer"
                    >
                      Bagikan ke Rekan
                    </button>
                  </div>
                </div>
              ) : (
                /* WAITLIST FORM */
                <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                  {/* Role Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9EB3A6] mb-2 font-medium">
                      Pilih Profil Finansialmu
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Tech & Corporate', 'Founder / Entrepreneur', 'Freelancer & Kreator'].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setRole(item)}
                          className={`p-3 text-xs text-left transition-colors cursor-pointer border ${
                            role === item
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F0EDE5] font-medium'
                              : 'border-[#D4AF37]/15 bg-[#0F1E17] text-[#9EB3A6] hover:border-[#D4AF37]/35'
                          }`}
                        >
                          <span className="block">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email Input + Submit */}
                  <div>
                    <label htmlFor="email-input" className="block text-xs uppercase tracking-wider text-[#9EB3A6] mb-2 font-medium">
                      Alamat Email Kantor atau Pribadi
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="nama@perusahaan.com atau nama@domain.com"
                        className="flex-1 bg-[#0F1E17] border border-[#D4AF37]/30 px-4 py-3.5 text-sm text-[#F0EDE5] placeholder-[#9EB3A6]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0F1E17] text-xs uppercase tracking-widest font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Mendaftarkan...</span>
                        ) : (
                          <>
                            <span>Klaim Akses Awal</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-red-400 mt-2">{errorMessage}</p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center justify-between text-[11px] text-[#9EB3A6] pt-2 border-t border-[#D4AF37]/15">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#4ADE80]" />
                      Data email tersimpan secara aman & bebas spam.
                    </span>
                    <span className="tabular-nums">
                      Tersisa <strong className="text-[#D4AF37]">153 slot</strong> untuk batch pertama.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer id="tentang" className="bg-[#0A1610] border-t border-[#D4AF37]/20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
            {/* Col 1: Wordmark & Statement */}
            <div className="md:col-span-5">
              <span className="text-2xl font-serif tracking-[0.2em] font-bold text-[#D4AF37] block mb-4">
                AURUM
              </span>
              <p className="text-xs text-[#9EB3A6] leading-relaxed max-w-sm mb-6 font-light">
                Asisten keuangan cerdas berbasis AI terpadu untuk profesional muda Indonesia. Menggabungkan wawasan analitik, tabungan otomatis, dan lindung nilai aset emas.
              </p>
              <div className="text-[11px] text-[#9EB3A6]/80 space-y-1">
                <p>PT Aurum Teknologi Finansial</p>
                <p>One Pacific Place, SCBD Jakarta Selatan</p>
              </div>
            </div>

            {/* Col 2: Navigations */}
            <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
              <div>
                <span className="text-[#D4AF37] uppercase tracking-wider font-semibold block mb-4">
                  Produk
                </span>
                <ul className="space-y-2.5 text-[#9EB3A6]">
                  <li>
                    <a href="#fitur" className="hover:text-[#F0EDE5] transition-colors">
                      AI Investment Insight
                    </a>
                  </li>
                  <li>
                    <a href="#fitur" className="hover:text-[#F0EDE5] transition-colors">
                      Auto-Save & Budgeting
                    </a>
                  </li>
                  <li>
                    <a href="#interaktif" className="hover:text-[#F0EDE5] transition-colors">
                      Portfolio Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#keamanan" className="hover:text-[#F0EDE5] transition-colors">
                      Keamanan Bank
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[#D4AF37] uppercase tracking-wider font-semibold block mb-4">
                  Legalitas
                </span>
                <ul className="space-y-2.5 text-[#9EB3A6]">
                  <li>
                    <a href="#waitlist-section" className="hover:text-[#F0EDE5] transition-colors">
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a href="#waitlist-section" className="hover:text-[#F0EDE5] transition-colors">
                      Syarat & Ketentuan
                    </a>
                  </li>
                  <li>
                    <a href="#waitlist-section" className="hover:text-[#F0EDE5] transition-colors">
                      Transparansi Algoritma
                    </a>
                  </li>
                  <li>
                    <a href="#waitlist-section" className="hover:text-[#F0EDE5] transition-colors">
                      Pernyataan Risiko
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3: Social Channels */}
            <div className="md:col-span-3">
              <span className="text-[#D4AF37] uppercase tracking-wider font-semibold text-xs block mb-4">
                Kanal Resmi
              </span>
              <p className="text-xs text-[#9EB3A6] mb-4 font-light">
                Ikuti perkembangan pengembangan produk & rilis fitur sebelum peluncuran resmi.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-[#142820] border border-[#D4AF37]/30 flex items-center justify-center text-[#9EB3A6] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X / Twitter"
                  className="w-9 h-9 bg-[#142820] border border-[#D4AF37]/30 flex items-center justify-center text-[#9EB3A6] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-[#142820] border border-[#D4AF37]/30 flex items-center justify-center text-[#9EB3A6] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 bg-[#142820] border border-[#D4AF37]/30 flex items-center justify-center text-[#9EB3A6] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9EB3A6]/70">
            <p>© 2026 AURUM Technologies Inc. Seluruh hak cipta dilindungi undang-undang.</p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
              <span>Situs prototipe resmi peluncuran produk AURUM</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
