import {
  LucideIcon,
  Globe,
  MessageSquare,
  Smartphone,
  TrendingUp,
  FileText,
  Users,
} from "lucide-react";

// TYPE DEFINITIONS
interface Plan {
  id: 'basic' | 'pro';
  title: string;
  desc: string;
  monthlyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  orderUrl: string;
}

interface Perk {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Review {
  img: string;
  name: string;
  username: string;
  review: string;
}

interface Faq {
  question: string;
  answer: string;
}

// SITE CONFIG
export const siteConfig = {
  companyName: "Bisnovo",
  contactEmail: "hello@bisnovo.id",
  contactPhone: "6285156779923",
  copyright: `© ${new Date().getFullYear()} Bisnovo. All rights reserved.`,
  currency: "Rp",
  orderBasePath: "/pesan-sekarang",
};

// HERO CONTENT
export const heroContent = {
  badge: {
    mainText: "Promo Launching!",
    subText: "Cepat dan mudah",
  },
  headline: "Bisnovo siap bangun Bisnis Profesional",
  subheadline: `Gabung dalam program reseller, kembangkan ide melalui kolaborasi bisnis, dan nikmati keuntungan dari bagi hasil iklan bersama kami`,
  ctaPrimary: {
    text: "Lihat Paket Kami",
    href: "#pricing",
  },
  ctaSecondary: {
    text: "Lihat Penawaran",
    href: "#pricing",
  },
};

// PERKS CONTENT
export const perksContent = {
  badge: "Solusi Lengkap",
  headline: "Semua yang Anda Butuhkan untuk Mulai Bisnis Online",
  subheadline: `${siteConfig.companyName} menyediakan semua tools yang dibutuhkan untuk memulai bisnis online tanpa ribet dan mahal.`,
  perks: [
    {
      title: "Support Reseller",
      description: "Website dan alat promosi gratis untuk membantu reseller memulai bisnis dengan mudah.",
      icon: Users,
    },
    {
      title: "Kolaborasi Bisnis Profit Tinggi",
      description: "Peluang bisnis dengan permintaan tinggi dan keuntungan besar melalui kolaborasi strategis.",
      icon: TrendingUp,
    },
    {
      title: "Freemateri Iklan",
      description: "Klien dapat mengelola program iklan sendiri dengan materi iklan gratis yang kami sediakan.",
      icon: FileText,
    },
    {
      title: "Fast Respon",
      description: "Tim Bisnovo dengan 3 admin siap memberikan respon cepat untuk mendukung bisnis Anda.",
      icon: MessageSquare,
    },
    {
      title: "Paket Bisnis Terjangkau",
      description: "Item digital marketing lengkap untuk membangun bisnis profesional dengan harga terjangkau.",
      icon: Smartphone,
    },
    {
      title: "Professional Team",
      description: "Bisnovo didukung oleh tim marketing berkualitas untuk memastikan kesuksesan bisnis Anda.",
      icon: Globe,
    },
  ] as Perk[],
};

// REVIEWS CONTENT
export const reviewsContent = {
  badge: "Testimoni",
  headline: "Apa Kata Klien Kami",
  subheadline:
    "Lihat bagaimana Bisnovo telah membantu ratusan pebisnis memulai usaha online mereka.",
  reviews: [
    {
      img: "https://i.pravatar.cc/150?u=reseller1",
      name: "Andi Wijaya",
      username: "@andi_reseller",
      review:
        "Dengan paket Bisnovo, saya bisa mulai jualan online hanya dalam 1 hari! Sekarang sudah punya 5 reseller bawahannya.",
    },
    {
      img: "https://i.pravatar.cc/150?u=umkm1",
      name: "Siti Rahayu",
      username: "@siti_kue",
      review:
        "Website dan chatbotnya sangat membantu. Orderan masuk terus bahkan saat saya tidur!",
    },
    {
      img: "https://i.pravatar.cc/150?u=mahasiswa1",
      name: "Budi Santoso",
      username: "@budi_startup",
      review:
        "Sebagai mahasiswa, paket ini sangat terjangkau. Sekarang bisa punya penghasilan sendiri tanpa ganggu kuliah.",
    },
    {
      img: "https://i.pravatar.cc/150?u=irt1",
      name: "Dewi Lestari",
      username: "@dewi_catering",
      review:
        "Dulu takut go-online karena tidak paham teknologi. Sekarang bisnis catering saya 80% order dari online!",
    },
  ] as Review[],
};

// PRICING CONTENT
export const pricingContent = {
  badge: "Paket Lengkap",
  headline: "Hanya Rp200rb untuk Semua Ini",
  subheadline:
    "Dapatkan semua yang Anda butuhkan untuk mulai bisnis online hari ini juga.",
  plans: [
    {
      id: "basic",
      title: "Paket Starter",
      desc:
        "Solusi lengkap untuk memulai bisnis online Anda dengan cepat dan mudah.",
      monthlyPrice: 200,
      buttonText: "Mulai Sekarang",
      features: [
        "Website Profesional Siap Pakai",
        "Chatbot WhatsApp & Instagram",
        "30 Konten Media Sosial",
        "Template Copywriting Menjual",
        "Strategi Marketing Step-by-Step",
        "Support 1 Minggu Gratis",
      ],
      orderUrl: `https://wa.me/${siteConfig.contactPhone}?text=Halo%20Bisnovo%2C%20saya%20tertarik%20dengan%20paket%20%22Paket%20Starter%22.%20Mohon%20informasinya.`,
    },
    {
      id: "pro",
      title: "Paket Reseller",
      desc: "Untuk Anda yang ingin jadi reseller dan dapat penghasilan tambahan.",
      monthlyPrice: 0,
      badge: "Tanpa Modal",
      buttonText: "Daftar Reseller",
      features: [
        "Website Jualan Sendiri",
        "Komisi Rp20-50rb per Penjualan",
        "Training & Support Lengkap",
        "Tools Marketing Eksklusif",
        "Akses ke Komunitas Reseller",
        "Bisa Dijalankan Sampingan",
      ],
      orderUrl: `https://wa.me/${siteConfig.contactPhone}?text=Halo%20Bisnovo%2C%20saya%20tertarik%20dengan%20paket%20%22Pakuk%20Reseller%22.%20Mohon%20informasinya.`,
    },
  ] as Plan[],
};

// FOOTER CONTENT
export const footerContent = {
  faqHeadline: "Pertanyaan Umum",
  faqs: [
    {
      question: "Berapa lama setup paketnya?",
      answer:
        "Proses setup hanya membutuhkan waktu 6-24 jam setelah pembayaran diterima.",
    },
    {
      question: "Apakah perlu technical skill?",
      answer:
        "Tidak sama sekali! Kami yang akan handle semua setup teknis untuk Anda.",
    },
    {
      question: "Bagaimana cara jadi reseller?",
      answer:
        "Daftar gratis melalui form di halaman reseller, dan Anda akan mendapatkan akses ke semua tools yang dibutuhkan.",
    },
    {
      question: "Apakah ada garansi?",
      answer:
        "Kami memberikan garansi 7 hari uang kembali jika Anda tidak puas dengan layanan kami.",
    },
  ] as Faq[],
};
