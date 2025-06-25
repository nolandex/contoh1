"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconBrandWindows, IconDeviceGamepad2, IconHeadphones, IconMap2, IconRobot, IconUsers } from "@tabler/icons-react";

// --- KONTEN UNIK UNTUK SETIAP KARTU (Tidak ada perubahan di sini) ---

// Konten untuk Kartu #1: AI & Robotics
const AiContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Kecerdasan Buatan Generatif.
                </span>{" "}
                Jelajahi bagaimana model bahasa besar (LLM) kami dapat membantu Anda menulis, membuat kode, dan berkreasi dengan cara yang belum pernah ada sebelumnya. Dari puisi hingga Python, batasan Anda hanyalah imajinasi.
            </p>
            <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI and Robotics"
                height="500"
                width="500"
                className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};

// Konten untuk Kartu #2: Productivity & Workflow
const ProductivityContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Alur Kerja yang Disederhanakan.
                </span>{" "}
                Dengan integrasi tanpa batas antara kalender, email, dan tugas, Anda dapat mengelola hari Anda dengan mudah. Atur pengingat cerdas, prioritaskan tugas, dan capai tujuan Anda lebih cepat.
            </p>
             <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team working on a project"
              height="500"
              width="500"
              className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};

// Konten untuk Kartu #3: Spatial Computing
const VisionProContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Selamat Datang di Era Komputasi Spasial.
                </span>{" "}
                Apple Vision Pro mengubah cara Anda berinteraksi dengan konten digital. Ruang kerja Anda kini tak terbatas, hiburan menjadi lebih imersif, dan kenangan terasa hidup kembali.
            </p>
             <img
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="People experiencing VR"
              height="500"
              width="500"
              className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};

// Konten untuk Kartu #4: Gaming
const GamingContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Gaming di Level Berikutnya.
                </span>{" "}
                Chipset A19 Bionic kami menghadirkan grafis sekelas konsol ke telapak tangan Anda. Nikmati game AAA dengan frame rate yang mulus dan latensi rendah, di mana saja, kapan saja.
            </p>
             <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gaming setup"
              height="500"
              width="500"
              className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};

// Konten untuk Kartu #5: Music
const MusicContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Audio yang Memukau.
                </span>{" "}
                Dengarkan setiap detail dengan Lossless Audio dan rasakan suara datang dari segala arah dengan Spatial Audio yang didukung Dolby Atmos. Pengalaman mendengarkan yang benar-benar baru.
            </p>
             <img
              src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Headphones and music"
              height="500"
              width="500"
              className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};

// Konten untuk Kartu #6: Community
const CommunityContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Bergabunglah dengan Komunitas Global Kami.
                </span>{" "}
                Jutaan developer, seniman, dan pemimpi seperti Anda membangun masa depan di platform kami. Bagikan karya Anda, berkolaborasi dalam proyek, dan jadilah bagian dari sesuatu yang lebih besar.
            </p>
             <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="A diverse team collaborating"
              height="500"
              width="500"
              className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain mt-8 rounded-lg"
            />
        </div>
    );
};


// --- DATA BARU UNTUK CAROUSEL (Tidak ada perubahan di sini) ---
const data = [
  {
    category: "Artificial Intelligence",
    title: "Masa Depan Kreasi Ada di Tangan AI",
    src: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <AiContent />,
  },
  {
    category: "Productivity",
    title: "Bekerja Lebih Cerdas, Bukan Lebih Keras",
    src: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <ProductivityContent />,
  },
  {
    category: "Spatial Computing",
    title: "Memperkenalkan Apple Vision Pro",
    src: "https://images.pexels.com/photos/7241413/pexels-photo-7241413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <VisionProContent />,
  },
  {
    category: "Gaming",
    title: "Performa Gahar untuk Para Gamer",
    src: "https://images.pexels.com/photos/7915228/pexels-photo-7915228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <GamingContent />,
  },
  {
    category: "Music",
    title: "Rasakan Setiap Nada",
    src: "https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <MusicContent />,
  },
  {
    category: "Community",
    title: "Berkarya Bersama Jutaan Orang",
    src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: <CommunityContent />,
  },
];

// --- KOMPONEN UTAMA (DENGAN PERBAIKAN) ---

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    // 'h-full' TELAH DIHAPUS DARI DIV INI
    <div className="w-full py-20 bg-gray-100 dark:bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Dunia Baru di Ujung Jari Anda.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
