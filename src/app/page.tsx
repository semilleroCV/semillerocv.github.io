// components
import { Navbar, Footer, DiscordBubble } from "@/components";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import Hero from "./hero";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import non-critical sections with fade-in effect instead of jarring skeletons
const SponsoredBy = dynamic(() => import('./sponsored-by'), {
  loading: () => null
});

const EventContent = dynamic(() => import('./event-content'), {
  loading: () => null
});

const Faq = dynamic(() => import('./faq'), {
  loading: () => null
});

export default function Portfolio() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <div className="opacity-0 animate-fadeIn">
        <SponsoredBy />
        <EventContent />
        <Faq />
      </div>
      <Footer />
      <DiscordBubble />
    </main>
  );
}
