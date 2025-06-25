'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Fungsi untuk menangani smooth scroll
  // --- REVISI DI SINI ---
  // Menambahkan tipe data untuk parameter 'e' untuk mengatasi error TypeScript
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Mencegah perilaku default dari link
    e.preventDefault();

    // 2. Ambil tujuan (ID) dari atribut href
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, ""); // Menghasilkan 'pricing'

    // 3. Dapatkan elemen tujuan berdasarkan ID
    const elem = document.getElementById(targetId);

    // 4. Lakukan scroll ke elemen tersebut jika ada
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });

      // 5. Tutup menu mobile jika sedang terbuka
      setIsOpen(false);
    }
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-semibold text-lg">
            Bisnovo
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#pricing"
              onClick={handleScroll} 
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              Product
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden w-full px-4 pb-6 pt-4">
            <ul className="space-y-4 text-white">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  onClick={handleScroll}
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
