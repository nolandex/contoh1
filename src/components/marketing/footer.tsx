// src/components/marketing/footer.tsx

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

const Footer = () => {
    return (
        // --- REVISI DI SINI: Tambahkan id="footer" ---
        <footer id="footer" className="w-full py-10">
            <Container>
                <Wrapper className="flex flex-col items-center pb-20">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        {footerContent.faqHeadline}
                    </h1>
                    {/* Konten lainnya tetap sama */}
                    <Accordion type="single" collapsible className="w-full max-w-2xl">
                       {/* ... */}
                    </Accordion>
                </Wrapper>
            </Container>
            <Container>
                {/* ... */}
            </Container>
        </footer>
    );
};

export default Footer;
