import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Reem_Kufi_Ink } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// Optimize font loading with display swap and preload
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const reemKufiInk = Reem_Kufi_Ink({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Hands-On Computer Vision",
  description:
    "Únete a nosotros en el Semillero Hands-on Computer Vision y sumérgete en una experiencia única que fusiona la teoría con la práctica en el fascinante mundo de la visión por computadora. Nos enfocaremos en temas avanzados como Fotografía computacional, Aprendizaje profundo, Imágenes térmicas, Imágenes espectrales, Estimación de la profundidad y más",
    icons: {
      icon: '/logos/logo.png',
    }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale}>
      <head>
        <GoogleAnalytics />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload critical assets with appropriate media queries */}
        <link 
          rel="preload" 
          href="/logos/logo.png" 
          as="image" 
          fetchPriority="high"
          type="image/png"
        />
        
        {/* Defer non-critical scripts */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
          async
        />
       {/*  <Script id="tally-config" strategy="afterInteractive">
          {`
          if (typeof window !== "undefined") {

            window.TallyConfig = {
              "formId": "mObO7p",
              "popup": {
                "emoji": {
                  "text": "👋",
                  "animation": "wave"
                },
                "autoClose": 5000
              }
            };
          }
          `}
        </Script> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </Layout>
        {/* Load Font Awesome with defer to prevent render blocking */}
        <Script
          id="font-awesome"
          strategy="lazyOnload" 
        >
          {`
            const fontAwesomeLink = document.createElement('link');
            fontAwesomeLink.rel = 'stylesheet';
            fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
            fontAwesomeLink.integrity = 'sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==';
            fontAwesomeLink.crossOrigin = 'anonymous';
            fontAwesomeLink.referrerPolicy = 'no-referrer';
            document.head.appendChild(fontAwesomeLink);
          `}
        </Script>
      </body>
    </html>
  );
}
