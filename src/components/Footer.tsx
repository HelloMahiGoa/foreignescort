import Link from "next/link";
import { cityEntries } from "@/lib/cities";
import { Phone, Clock } from "lucide-react";

export default function Footer() {
  const cities = cityEntries.filter((city) => city.slug !== "chennai-russian-escorts");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-rose-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
                  Foreign Escort
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Premium Russian escorts across major Indian cities. Discreet, professional, and verified companions for discerning clients.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Hotline</p>
                  <Link
                    href="tel:+918121426651"
                    className="text-sm text-white/80 hover:text-amber-400 transition-colors"
                  >
                    +91 81214 26651
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Available</p>
                  <p className="text-sm text-white/80">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80 mb-4">
              Our Cities
            </h4>
            
            {/* Chennai Button */}
            <div className="mb-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400/50 bg-gradient-to-br from-amber-500/15 to-amber-600/10 px-5 py-2.5 text-sm font-semibold text-amber-300 shadow-[0_4px_12px_rgba(250,204,21,0.15)] transition-all duration-200 hover:border-amber-400/70 hover:from-amber-500/25 hover:to-amber-600/20 hover:text-amber-200 hover:shadow-[0_6px_20px_rgba(250,204,21,0.25)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Chennai
              </Link>
            </div>

            {/* Cities Grid - 4 rows of 2 cities each */}
            <div className="space-y-2.5">
              {/* Row 1: Goa, Mumbai */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/goa-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Goa
                </Link>
                <Link
                  href="/mumbai-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Mumbai
                </Link>
              </div>
              
              {/* Row 2: Jaipur, Hyderabad */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/jaipur-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Jaipur
                </Link>
                <Link
                  href="/hyderabad-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Hyderabad
                </Link>
              </div>
              
              {/* Row 3: Bangalore, Pune */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/bangalore-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Bangalore
                </Link>
                <Link
                  href="/pune-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Pune
                </Link>
              </div>
              
              {/* Row 4: Delhi NCR, Kolkata */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/delhi-ncr-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Delhi NCR
                </Link>
                <Link
                  href="/kolkata-russian-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-amber-400 transition-all" />
                  Kolkata
                </Link>
              </div>
            </div>
          </div>

          {/* Hotels & Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80 mb-6">
              Hotels & Services
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/hotels/chennai/the-park-escorts"
                  className="text-sm text-white/60 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all" />
                  Chennai Hotels
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/60 transition-all hover:border-amber-400/50 hover:bg-amber-500/20 hover:text-amber-400"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/60 transition-all hover:border-amber-400/50 hover:bg-amber-500/20 hover:text-amber-400"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/60 transition-all hover:border-amber-400/50 hover:bg-amber-500/20 hover:text-amber-400"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/50">
              <p>(c) {new Date().getFullYear()} Foreign Escort. All rights reserved.</p>
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">
                Disclaimer
              </Link>
            </div>
            <div className="text-xs text-white/40">
              <p>Premium Russian Escort Services Across India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


