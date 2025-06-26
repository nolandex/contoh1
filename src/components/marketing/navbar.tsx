'use client'

import Link from 'next/link'
import { useState } from 'react'
// --- REVISI DI SINI ---
// Menambahkan impor ikon yang akan digunakan
import { Menu, X, Home, Building2, Sparkles, Tag, MessageSquare, Mail } from 'lucide-react'

// --- REVISI DI SINI ---
// Membuat daftar link sebagai array untuk memudahkan pengelolaan
const navLinks = [
  { href: '#hero', label: 'Home', Icon: Home },
  { href: '#companies', label: 'Clients', Icon: Building2 },
  { href: '#perks', label: 'Features', Icon: Sparkles },
  { href: '#pricing', label: 'Pricing', Icon: Tag },
  { href: '#reviews', label: 'Reviews', Icon: MessageSquare },
  { href: '#footer', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Fungsi untuk menangani smooth scroll (tidak ada perubahan, sudah baik)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  // --- REVISI DI SINI ---
  // Header dibuat lebih ringkas dengan memetakan (map) dari array navLinks
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-semibold text-lg">
            <Link href="#hero" onClick={handleScroll}>Bisnovo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="text-sm font-medium text-white hover:text-sky-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
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

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden w-full px-4 pb-6 pt-4">
            <ul className="space-y-2 text-white">
              {navLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleScroll}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    {/* Ikon ditambahkan di sini */}
                    <Icon className="h-5 w-5 text-sky-400" />
                    <span className="text-base font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
