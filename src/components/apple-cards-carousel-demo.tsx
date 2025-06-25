"use client";

import React from "react";
// Pastikan path import ini sudah benar sesuai struktur folder proyek Anda
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

/**
 * Konten Dinamis yang akan muncul setelah kartu di-klik.
 * Komponen ini menerima props untuk menampilkan data yang berbeda.
 * @param {{ title: string, description: string, imageUrl: string }} props
 */
const DynamicContent = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={imageUrl}
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
      />
    </div>
  );
};

// --- DATA UTAMA UNTUK CARDS ---
// URL gambar diganti ke sumber yang lebih andal (Pexels atau gambar lokal).
// Konten dibuat dinamis untuk setiap kartu.
const data = [
  {
    category: "Artificial Intelligence",
    title: "Lakukan Lebih Banyak dengan AI",
    // Menggunakan gambar dari Pexels sebagai alternatif Unsplash
    src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: (
      <DynamicContent
        title="Kecerdasan Buatan di Ujung Jari Anda"
        description="Temukan bagaimana AI dapat mengotomatisasi tugas, memberikan wawasan mendalam dari data, dan membantu Anda berinovasi lebih cepat dari sebelumnya."
        imageUrl="https://assets.aceternity.com/macbook.png"
      />
    ),
  },
  {
    category: "Productivity",
    title: "Tingkatkan Produktivitas Anda",
    src: "https://images.pexels.com/photos/3785931/pexels-photo-3785931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: (
      <DynamicContent
        title="Bekerja Cerdas, Bukan Keras"
        description="Dengan rangkaian alat produktivitas kami, atur alur kerja Anda, berkolaborasi secara real-time, dan fokus pada hal yang benar-benar penting untuk mencapai tujuan Anda."
        imageUrl="https://assets.aceternity.com/ipad.png" // Menggunakan gambar berbeda
      />
    ),
  },
  {
    category: "New Product",
    title: "Memperkenalkan Apple Vision Pro",
    src: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: (
      <DynamicContent
        title="Selamat Datang di Era Komputasi Spasial"
        description="Apple Vision Pro memadukan konten digital dengan dunia fisik Anda secara mulus. Buka aplikasi, tonton film, dan terhubung dengan cara yang belum pernah ada."
        imageUrl="https://assets.aceternity.com/vision-pro.png" // Gambar relevan
      />
    ),
  },
  {
    category: "Photography",
    title: "Fotografi Jadi Lebih Baik",
    src: "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: (
      <DynamicContent
        title="Abadikan Momen dengan Sempurna"
        description="Sistem kamera canggih di perangkat terbaru kami memungkinkan Anda mengambil foto dan video berkualitas profesional dalam kondisi apa pun. Setiap jepretan adalah sebuah mahakarya."
        imageUrl="https://assets.aceternity.com/iphone.png" // Gambar relevan
      />
    ),
  },
];

export default function AppleCardsCarouselDemo() {
  // Membuat elemen Card dari array data
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    // Menambahkan background color di container utama untuk mencegah "background putih"
    <div className="w-full h-full py-20 bg-white dark:bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
