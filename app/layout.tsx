import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: {
    default: "AI Diagnostics Ltd | Bedford Garage — MOT, Service & Repairs",
    template: "%s | AI Diagnostics Ltd Bedford",
  },
  description:
    "Bedford's trusted garage. Expert MOT testing, car servicing, diagnostics and repairs at 18 College St, Bedford MK42 8LU. Dealership quality at honest prices. DVSA authorised. Book online 24/7.",
  keywords:
    "MOT Bedford, car service Bedford, garage Bedford, vehicle diagnostics Bedford, MOT test MK42, car repair Bedford, AI Diagnostics Ltd, Bedford mechanic, Bedford MOT station, Kempston garage",
  icons: {
    icon: [
      { url: '/vector.png', sizes: 'any' },
      { url: '/vector.png', sizes: '32x32', type: 'image/png' },
      { url: '/vector.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/vector.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/vector.png',
  },
  openGraph: {
    siteName: "AI Diagnostics Ltd",
    locale: "en_GB",
    type: "website",
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.aidiagnosticsltd.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#2a2a2a] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
