import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hello Mahi | Russian Escorts Across Major Cities",
  description:
    "Hello Mahi delivers trusted Russian escorts across Goa, Chennai, Bangalore, Mumbai and other leading Indian cities with responsive booking support.",
  verification: {
    google: "ru-QW2vqj7qOAQAU0-Ez4bIszOj_XcekQZCKKR2QKJ4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5C522RF6FJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5C522RF6FJ');
          `}
        </Script>
        <AgeVerification />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
