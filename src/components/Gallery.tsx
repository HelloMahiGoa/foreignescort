"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause, Shuffle } from "lucide-react";

// List of image files (excluding videos)
const galleryImages = [
  "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
  "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg",
  "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg",
  "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
  "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg", "50.jpeg",
  "52.jpeg", "54.jpeg", "56.jpeg", "58.jpeg", "60.jpeg",
  "62.jpeg", "64.jpeg", "66.jpeg", "67.jpeg", "68.jpeg", "69.jpeg", "70.jpeg",
  "71.jpeg", "72.jpeg", "73.jpeg", "74.jpeg", "75.jpeg", "76.jpeg", "77.jpeg", "78.jpeg", "79.jpeg", "80.jpeg",
  "81.jpeg", "82.jpeg", "83.jpeg", "84.jpeg", "85.jpeg", "86.jpeg", "87.jpeg", "88.jpeg", "89.jpeg", "90.jpeg",
  "91.jpeg", "92.jpeg", "93.jpeg", "94.jpeg", "95.jpeg", "96.jpeg", "97.jpeg", "98.jpeg", "99.jpeg", "100.jpeg",
  "101.jpeg", "102.jpeg", "103.jpeg", "104.jpeg", "105.jpeg", "106.jpeg", "107.jpeg", "108.jpeg", "109.jpeg", "110.jpeg",
  "111.jpeg", "112.jpeg"
];

// Names and ratings for images (matching gallery images array)
const imageData: Record<string, { name: string; rating: number }> = {
  "1.jpeg": { name: "Anastasia", rating: 4.9 },
  "2.jpeg": { name: "Elena", rating: 4.8 },
  "3.jpeg": { name: "Sofia", rating: 5.0 },
  "4.jpeg": { name: "Maria", rating: 4.7 },
  "5.jpeg": { name: "Victoria", rating: 4.9 },
  "6.jpeg": { name: "Anna", rating: 4.8 },
  "7.jpeg": { name: "Daria", rating: 4.9 },
  "8.jpeg": { name: "Katerina", rating: 5.0 },
  "9.jpeg": { name: "Alina", rating: 4.8 },
  "10.jpeg": { name: "Natalia", rating: 4.9 },
  "11.jpeg": { name: "Irina", rating: 4.7 },
  "12.jpeg": { name: "Ekaterina", rating: 5.0 },
  "13.jpeg": { name: "Polina", rating: 4.9 },
  "14.jpeg": { name: "Yulia", rating: 4.8 },
  "15.jpeg": { name: "Olga", rating: 4.9 },
  "16.jpeg": { name: "Tatiana", rating: 5.0 },
  "17.jpeg": { name: "Valeria", rating: 4.8 },
  "18.jpeg": { name: "Veronika", rating: 4.9 },
  "19.jpeg": { name: "Margarita", rating: 4.7 },
  "20.jpeg": { name: "Karina", rating: 4.9 },
  "21.jpeg": { name: "Milana", rating: 5.0 },
  "22.jpeg": { name: "Liliana", rating: 4.8 },
  "23.jpeg": { name: "Svetlana", rating: 4.9 },
  "24.jpeg": { name: "Marina", rating: 4.8 },
  "25.jpeg": { name: "Kristina", rating: 5.0 },
  "26.jpeg": { name: "Anya", rating: 4.9 },
  "27.jpeg": { name: "Mila", rating: 4.8 },
  "28.jpeg": { name: "Zara", rating: 4.9 },
  "29.jpeg": { name: "Lydia", rating: 5.0 },
  "30.jpeg": { name: "Rosa", rating: 4.8 },
  "31.jpeg": { name: "Alessandra", rating: 4.9 },
  "32.jpeg": { name: "Bella", rating: 4.7 },
  "33.jpeg": { name: "Camilla", rating: 5.0 },
  "34.jpeg": { name: "Diana", rating: 4.9 },
  "35.jpeg": { name: "Emma", rating: 4.8 },
  "36.jpeg": { name: "Fiona", rating: 4.9 },
  "37.jpeg": { name: "Gabriella", rating: 5.0 },
  "38.jpeg": { name: "Helena", rating: 4.8 },
  "39.jpeg": { name: "Isabella", rating: 4.9 },
  "40.jpeg": { name: "Jasmine", rating: 4.7 },
  "41.jpeg": { name: "Kira", rating: 5.0 },
  "42.jpeg": { name: "Luna", rating: 4.9 },
  "43.jpeg": { name: "Maya", rating: 4.8 },
  "44.jpeg": { name: "Nina", rating: 4.9 },
  "45.jpeg": { name: "Olivia", rating: 5.0 },
  "46.jpeg": { name: "Penelope", rating: 4.8 },
  "47.jpeg": { name: "Quinn", rating: 4.9 },
  "48.jpeg": { name: "Raven", rating: 4.7 },
  "50.jpeg": { name: "Selena", rating: 5.0 },
  "52.jpeg": { name: "Talia", rating: 4.9 },
  "54.jpeg": { name: "Uma", rating: 4.8 },
  "56.jpeg": { name: "Vera", rating: 4.9 },
  "58.jpeg": { name: "Willa", rating: 5.0 },
  "60.jpeg": { name: "Xara", rating: 4.8 },
  "62.jpeg": { name: "Yara", rating: 4.9 },
  "64.jpeg": { name: "Zara", rating: 4.7 },
  "66.jpeg": { name: "Aria", rating: 5.0 },
  "67.jpeg": { name: "Brielle", rating: 4.9 },
  "68.jpeg": { name: "Celeste", rating: 4.8 },
  "69.jpeg": { name: "Delilah", rating: 4.9 },
  "70.jpeg": { name: "Elena", rating: 5.0 },
  "71.jpeg": { name: "Freya", rating: 4.8 },
  "72.jpeg": { name: "Giselle", rating: 4.9 },
  "73.jpeg": { name: "Hazel", rating: 4.7 },
  "74.jpeg": { name: "Ivy", rating: 5.0 },
  "75.jpeg": { name: "Jade", rating: 4.9 },
  "76.jpeg": { name: "Kiera", rating: 4.8 },
  "77.jpeg": { name: "Layla", rating: 4.9 },
  "78.jpeg": { name: "Mira", rating: 5.0 },
  "79.jpeg": { name: "Nora", rating: 4.8 },
  "80.jpeg": { name: "Ophelia", rating: 4.9 },
  "81.jpeg": { name: "Phoebe", rating: 4.7 },
  "82.jpeg": { name: "Quinn", rating: 5.0 },
  "83.jpeg": { name: "Ruby", rating: 4.9 },
  "84.jpeg": { name: "Scarlett", rating: 4.8 },
  "85.jpeg": { name: "Thea", rating: 4.9 },
  "86.jpeg": { name: "Ursula", rating: 5.0 },
  "87.jpeg": { name: "Violet", rating: 4.8 },
  "88.jpeg": { name: "Willow", rating: 4.9 },
  "89.jpeg": { name: "Xenia", rating: 4.7 },
  "90.jpeg": { name: "Yvonne", rating: 5.0 },
  "91.jpeg": { name: "Zoe", rating: 4.9 },
  "92.jpeg": { name: "Amara", rating: 4.8 },
  "93.jpeg": { name: "Bianca", rating: 4.9 },
  "94.jpeg": { name: "Cora", rating: 5.0 },
  "95.jpeg": { name: "Dahlia", rating: 4.8 },
  "96.jpeg": { name: "Elara", rating: 4.9 },
  "97.jpeg": { name: "Faye", rating: 4.7 },
  "98.jpeg": { name: "Gwen", rating: 5.0 },
  "99.jpeg": { name: "Hope", rating: 4.9 },
  "100.jpeg": { name: "Iris", rating: 4.8 },
  "101.jpeg": { name: "Juno", rating: 4.9 },
  "102.jpeg": { name: "Kora", rating: 5.0 },
  "103.jpeg": { name: "Lila", rating: 4.8 },
  "104.jpeg": { name: "Mara", rating: 4.9 },
  "105.jpeg": { name: "Nova", rating: 4.7 },
  "106.jpeg": { name: "Orla", rating: 5.0 },
  "107.jpeg": { name: "Pippa", rating: 4.9 },
  "108.jpeg": { name: "Rhea", rating: 4.8 },
  "109.jpeg": { name: "Sage", rating: 4.9 },
  "110.jpeg": { name: "Tessa", rating: 5.0 },
  "111.jpeg": { name: "Una", rating: 4.8 },
  "112.jpeg": { name: "Vita", rating: 4.9 },
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Gallery() {
  // Initialize with empty array to avoid hydration mismatch
  // Shuffle will happen in useEffect on client side only
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Initialize images on client side only (after hydration)
  useEffect(() => {
    // Select 16 random images (4 rows × 4 images)
    const shuffled = shuffleArray(galleryImages);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedImages(shuffled.slice(0, 16));
    // Initial load animation
    setTimeout(() => setIsInitialLoad(false), 500);
  }, []); // Run only once on mount

  // Auto-slide and progress bar animation
  useEffect(() => {
    // Progress bar animation
    let progressInterval: NodeJS.Timeout;
    if (!isPaused) {
      progressInterval = setInterval(() => {
        setSlideProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / (4000 / 50)); // Update every 50ms for smooth progress
        });
      }, 50);
    }

    // Auto-slide: Slide images every 4 seconds
    const interval = setInterval(() => {
      if (!isPaused) {
        setIsAnimating(true);
        setSlideProgress(0);
        setTimeout(() => {
          setDisplayedImages((current) => {
            const newImages = [...current];
            // Remove first image and add new one at the end
            newImages.shift();
            const usedImages = new Set(current);
            const availableImages = galleryImages.filter((img) => !usedImages.has(img));
            if (availableImages.length > 0) {
              const randomNewImage = availableImages[Math.floor(Math.random() * availableImages.length)];
              newImages.push(randomNewImage);
            } else {
              // If all images used, reshuffle and use first available
              const reshuffled = shuffleArray(galleryImages);
              newImages.push(reshuffled[0]);
            }
            return newImages;
          });
          setIsAnimating(false);
        }, 300);
      }
    }, 6000);

    return () => {
      clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPaused]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(galleryImages);
    setDisplayedImages(shuffled.slice(0, 16));
    setIsInitialLoad(true);
    setTimeout(() => setIsInitialLoad(false), 100);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (!isPaused) {
      setSlideProgress(0);
    }
  };

  useEffect(() => {
    if (!selectedImage) return;

    const navigateModal = (direction: "prev" | "next") => {
      const currentIdx = displayedImages.indexOf(selectedImage);
      if (direction === "next") {
        const nextIdx = (currentIdx + 1) % displayedImages.length;
        setSelectedImage(displayedImages[nextIdx]);
      } else {
        const prevIdx = currentIdx === 0 ? displayedImages.length - 1 : currentIdx - 1;
        setSelectedImage(displayedImages[prevIdx]);
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
      }
      if (e.key === "ArrowRight") navigateModal("next");
      if (e.key === "ArrowLeft") navigateModal("prev");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, displayedImages]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-12 lg:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-3xl animate-pulse" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Premium Collection</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
              Our Russian Escorts Gallery
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mb-6">
            Handpicked elegance. Verified professionals.
          </p>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={togglePause}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/20 hover:scale-110 active:scale-95"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
              <button
                onClick={handleShuffle}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/20 hover:scale-110 active:scale-95"
              >
                <Shuffle className="h-4 w-4" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isPaused && (
              <div className="relative h-1 w-full max-w-xs overflow-hidden rounded-full bg-black/30">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-50 ease-linear"
                  style={{ width: `${slideProgress}%` }}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
          {displayedImages.length === 0 ? (
            // Placeholder during initial load to prevent hydration mismatch
            Array.from({ length: 16 }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-zinc-800 animate-pulse"
              />
            ))
          ) : (
            displayedImages.map((image, index) => {
            const imageInfo = imageData[image] || { name: "Premium Escort", rating: 4.8 };
            const isLoaded = imagesLoaded.has(image);
            const isHovered = hoveredImage === image;
            
            return (
            <div
              key={`${image}-${index}`}
              onClick={() => openModal(image)}
              onMouseEnter={() => setHoveredImage(image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03]"
              style={{
                opacity: isAnimating && index === 0 ? 0 : isInitialLoad ? 0 : 1,
                transform: isAnimating && index === 0 
                  ? "translateX(-100%)" 
                  : isInitialLoad 
                    ? `translateY(20px)` 
                    : "translateX(0)",
                transitionDelay: isInitialLoad ? `${index * 50}ms` : "0ms",
              }}
            >
              {/* Loading shimmer */}
              {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
              )}

              {/* Luxury frame effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black/40 via-black/60 to-black/40 p-[2px] backdrop-blur-sm transition-all duration-700 group-hover:border-amber-400/50 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] group-hover:shadow-amber-500/30">
                <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/5 via-transparent to-black/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  
                  {/* Image */}
                  <Image
                    src={`/images/gallery/${image}`}
                    alt={`${imageInfo.name} - ${imageInfo.rating} stars`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className={`object-cover transition-all duration-1000 group-hover:scale-115 ${!isLoaded ? "opacity-0" : "opacity-100"}`}
                    onLoad={() => setImagesLoaded((prev) => new Set(prev).add(image))}
                  />
                  
                  {/* Luxury overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-rose-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-20" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100 group-hover:delay-200" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-amber-400/0 shadow-[0_0_8px_rgba(251,191,36,0)] transition-all duration-700 group-hover:bg-amber-400/100 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                  <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-amber-400/0 shadow-[0_0_8px_rgba(251,191,36,0)] transition-all duration-700 group-hover:bg-amber-400/100 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                  <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-amber-400/0 shadow-[0_0_8px_rgba(251,191,36,0)] transition-all duration-700 group-hover:bg-amber-400/100 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                  <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-amber-400/0 shadow-[0_0_8px_rgba(251,191,36,0)] transition-all duration-700 group-hover:bg-amber-400/100 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                  
                  {/* Name and Rating Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{imageInfo.name}</h3>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-amber-400">{imageInfo.rating}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < Math.floor(imageInfo.rating) ? "text-amber-400" : "text-white/30"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/0 via-amber-400/0 to-rose-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-40 -z-10" />

              {/* Hover Preview (larger preview on hover) */}
              {isHovered && (
                <div className="pointer-events-none absolute -top-4 left-1/2 z-20 -translate-x-1/2 -translate-y-full opacity-0 animate-in fade-in duration-300 delay-300 group-hover:opacity-100">
                  <div className="relative h-48 w-32 overflow-hidden rounded-xl border-2 border-amber-400/50 bg-black shadow-2xl">
                    <Image
                      src={`/images/gallery/${image}`}
                      alt={`${imageInfo.name} preview`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-xs font-semibold text-white">{imageInfo.name}</p>
                      <p className="text-xs text-amber-400">★ {imageInfo.rating}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
          }))
          }
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 transition-opacity duration-300 touch-none"
          style={{ animation: "fadeIn 0.3s ease-in" }}
          onClick={closeModal}
          onTouchStart={(e) => {
            // Close on tap outside on mobile
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="relative max-h-[95vh] max-w-5xl w-full touch-auto"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              onTouchStart={(e) => e.stopPropagation()}
              className="absolute -top-10 right-0 sm:-top-12 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 active:scale-95 hover:border-amber-400/50 hover:bg-amber-500/20 hover:scale-110 touch-manipulation"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = displayedImages.indexOf(selectedImage);
                const prevIdx = currentIdx === 0 ? displayedImages.length - 1 : currentIdx - 1;
                setSelectedImage(displayedImages[prevIdx]);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                const currentIdx = displayedImages.indexOf(selectedImage);
                const prevIdx = currentIdx === 0 ? displayedImages.length - 1 : currentIdx - 1;
                setSelectedImage(displayedImages[prevIdx]);
              }}
              className="absolute left-1 sm:left-4 top-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 active:scale-95 hover:border-amber-400/50 hover:bg-amber-500/20 hover:scale-110 touch-manipulation"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = displayedImages.indexOf(selectedImage);
                const nextIdx = (currentIdx + 1) % displayedImages.length;
                setSelectedImage(displayedImages[nextIdx]);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                const currentIdx = displayedImages.indexOf(selectedImage);
                const nextIdx = (currentIdx + 1) % displayedImages.length;
                setSelectedImage(displayedImages[nextIdx]);
              }}
              className="absolute right-1 sm:right-4 top-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 active:scale-95 hover:border-amber-400/50 hover:bg-amber-500/20 hover:scale-110 touch-manipulation"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Image container */}
            <div className="relative aspect-[3/4] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black/60 via-black/80 to-black/60 shadow-[0_0_60px_-20px_rgba(251,191,36,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10" />
              <Image
                src={`/images/gallery/${selectedImage}`}
                alt={selectedImage ? `${imageData[selectedImage]?.name || "Gallery"} - ${imageData[selectedImage]?.rating || 4.8} stars` : "Gallery image"}
                fill
                sizes="(max-width: 640px) 100vw, 90vw"
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-amber-400/20" />
              
              {/* Name and Rating in Modal */}
              {selectedImage && imageData[selectedImage] && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/90 to-transparent p-4 sm:p-6">
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {imageData[selectedImage].name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-bold text-amber-400">
                        {imageData[selectedImage].rating}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-base sm:text-lg ${i < Math.floor(imageData[selectedImage].rating) ? "text-amber-400" : "text-white/30"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Image counter */}
            <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm text-white/80">
              {displayedImages.indexOf(selectedImage) + 1} / {displayedImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

