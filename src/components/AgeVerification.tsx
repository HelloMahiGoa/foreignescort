"use client";

import { useState, useEffect } from "react";

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
    const hasVerified = localStorage.getItem("ageVerified");
    if (!hasVerified) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent body scroll when popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Redirect to a safe page or show a message
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Popup */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border-2 border-amber-500/50 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-8 shadow-[0_25px_60px_-15px_rgba(251,191,36,0.4)] animate-[fadeIn_0.4s_ease-out]">
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 blur-xl animate-pulse" />
        
        {/* Content */}
        <div className="relative space-y-6 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-400/50 bg-gradient-to-br from-amber-500/20 to-amber-600/10">
            <svg
              className="h-10 w-10 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl mb-2">
              <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
                Age Verification Required
              </span>
            </h2>
            <p className="text-sm text-white/60 mt-2">
              You must be 18+ to access this website
            </p>
          </div>

          {/* Message */}
          <p className="text-base leading-relaxed text-white/80">
            This website contains adult content. By clicking "I am 18 or older", you confirm that you are of legal age to view such content in your jurisdiction.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={handleConfirm}
              className="group relative overflow-hidden rounded-xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-amber-400 hover:from-amber-500/30 hover:via-amber-400/35 hover:to-amber-500/30 hover:shadow-[0_8px_32px_-8px_rgba(251,191,36,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-[shineSweep_2s_linear_infinite]" />
              <span className="relative flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                I am 18 or older
              </span>
            </button>

            <button
              onClick={handleDecline}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              I am under 18
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-white/50 leading-relaxed">
            By proceeding, you agree to our{" "}
            <a href="/terms-of-service" className="text-amber-400 hover:text-amber-300 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-amber-400 hover:text-amber-300 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

