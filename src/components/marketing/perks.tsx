// src/components/marketing/perks.tsx

import { perksContent } from "@/config/content"; 
import { cn } from "@/functions";
import { LucideIcon } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Perks = () => {
    return (
        // --- REVISI DI SINI: Tambahkan id="perks" ---
        <div id="perks" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title={perksContent.badge} />
                    <h2 className="text-2xl md:text-4xl ... mt-6">
                        {perksContent.headline}
                    </h2>
                    <p className="text-base md:text-lg ... mt-6">
                        {perksContent.subheadline}
                    </p>
                </div>
            </Container>
            <Container>
                {/* Konten lainnya tetap sama */}
            </Container>
        </div>
    )
};

// ... (Komponen Perk tidak perlu diubah)
const Perk = ({ ... }) => { ... };

export default Perks;
