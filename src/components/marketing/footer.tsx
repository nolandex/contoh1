// Lokasi: src/components/marketing/footer.tsx

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { footerContent, siteConfig } from "@/config/content";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Link from "next/link";
// --- REVISI DI SINI: Menambahkan ikon untuk sosial media ---
import { Instagram, Facebook, Phone, Mail, Globe } from "lucide-react";

// Definisikan tautan navigasi dan sosial media untuk footer
const footerNavLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#perks', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
];

const socialLinks = [
    { href: 'https://www.instagram.com/bisnovo', label: 'Instagram', Icon: Instagram },
    { href: 'https://www.tiktok.com/@bisnovo', label: 'TikTok', Icon: Globe }, // Menggunakan ikon Globe untuk TikTok
    { href: 'https://www.facebook.com/share/1H87XB9aw7/', label: 'Facebook', Icon: Facebook },
    { href: 'https://api.whatsapp.com/send/?phone=6285156779923', label: 'WhatsApp', Icon: Phone },
];

const Footer = () => {
    // Fungsi untuk smooth scroll, mirip seperti di Navbar
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id="footer" className="w-full py-10 bg-background text-foreground">
            {/* Bagian FAQ */}
            <Container>
                <Wrapper className="flex flex-col items-center pb-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        {footerContent.faqHeadline}
                    </h1>
                    <Accordion type="single" collapsible className="w-full max-w-2xl">
                        {footerContent.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="w-full text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Wrapper>
            </Container>

            {/* --- REVISI DI SINI: Bagian baru untuk Navigasi & Sosial Media --- */}
            <Container>
                <Wrapper className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-t border-border">
                    {/* Kolom 1: Brand Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold">Bisnovo</h3>
                        <p className="text-sm text-secondary-foreground mt-2 max-w-xs">
                           Solusi digital untuk mengembangkan bisnis Anda ke level selanjutnya.
                        </p>
                    </div>

                    {/* Kolom 2: Navigasi Cepat */}
                    <div className="flex flex-col items-center md:items-start">
                         <h4 className="text-lg font-semibold mb-3">Tautan Cepat</h4>
                         <ul className="space-y-2">
                            {footerNavLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={handleScroll}
                                        className="text-sm text-secondary-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                         </ul>
                    </div>

                    {/* Kolom 3: Kontak & Sosial Media */}
                    <div className="flex flex-col items-center md:items-start">
                         <h4 className="text-lg font-semibold mb-3">Hubungi Kami</h4>
                         <div className="flex items-center space-x-4 mb-4">
                            {socialLinks.map(({ href, label, Icon }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-secondary-foreground hover:text-primary transition-colors"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                         </div>
                         <a
                            href="mailto:bisnovohq@gmail.com"
                            className="flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors"
                         >
                            <Mail size={16} />
                            <span>bisnovohq@gmail.com</span>
                         </a>
                    </div>
                </Wrapper>
            </Container>

            {/* Bagian Copyright yang paling bawah */}
            <Container>
                <Wrapper className="pt-8 flex items-center justify-center border-t border-border">
                    <p className="text-sm text-secondary-foreground">
                        {siteConfig.copyright}
                    </p>
                </Wrapper>
            </Container>
        </footer>
    );
};

export default Footer;
