// components
import { Navbar, Footer } from "@/components";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import Hero from "./hero";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import non-critical sections with loading fallbacks
const SponsoredBy = dynamic(() => import('./sponsored-by'), {
  loading: () => <div className="w-full h-40 bg-neutral-900 animate-pulse"></div>
});

const EventContent = dynamic(() => import('./event-content'), {
  loading: () => <div className="w-full h-60 bg-neutral-900 animate-pulse"></div>
});

const Faq = dynamic(() => import('./faq'), {
  loading: () => <div className="w-full h-40 bg-neutral-900 animate-pulse"></div>
});

export default function Portfolio() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <SponsoredBy />
      <EventContent />
      <Faq />
      <Footer />
    </main>
  );
}
