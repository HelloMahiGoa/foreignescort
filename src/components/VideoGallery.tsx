"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

const videos = [
  { id: "v1", src: "/images/gallery/v1.mp4", name: "Premium Collection 1" },
  { id: "v2", src: "/images/gallery/v2.mp4", name: "Premium Collection 2" },
  { id: "v3", src: "/images/gallery/v3.mp4", name: "Premium Collection 3" },
  { id: "v4", src: "/images/gallery/v4.mp4", name: "Premium Collection 4" },
  { id: "v5", src: "/images/gallery/v5.mp4", name: "Premium Collection 5" },
];

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-play current video
    if (videoRefs.current[currentIndex]) {
      const video = videoRefs.current[currentIndex];
      if (isAutoPlaying && video) {
        video.muted = isMuted;
        video.volume = isMuted ? 0 : volume;
        video.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Auto-play may be blocked by browser
            setIsAutoPlaying(false);
          });
      }
    }

    // Auto-slide carousel every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isMuted, volume]);

  useEffect(() => {
    // Update all videos' mute and volume state
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = isMuted;
        video.volume = isMuted ? 0 : volume;
      }
    });
  }, [isMuted, volume]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    // Auto-advance to next video
    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-12 lg:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-amber-500/15 blur-3xl animate-pulse" />
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-rose-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Video Gallery</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent">
              Premium Video Collection
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base">
            Exclusive content from our verified professionals
          </p>
        </div>

        {/* Video Carousel */}
        <div ref={containerRef} className="relative mx-auto max-w-6xl">
          {/* Luxury Frame Container */}
          <div className="relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-black/60 via-black/80 to-black/60 p-[3px] shadow-[0_0_80px_-30px_rgba(251,191,36,0.8)] backdrop-blur-sm">
            <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                  }`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                      if (el) {
                        el.muted = isMuted;
                        el.volume = isMuted ? 0 : volume;
                      }
                    }}
                    src={video.src}
                    className="h-full w-full object-cover"
                    muted={isMuted}
                    loop={index === currentIndex}
                    onEnded={index === currentIndex ? handleVideoEnd : undefined}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-rose-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-10" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-amber-400/50 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-amber-400/50 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-rose-400/50 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-rose-400/50 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                </div>
              ))}

              {/* Shimmer effect on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 hover:translate-x-full hover:opacity-100" />

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/90 to-transparent p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
                      {videos[currentIndex].name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/50 px-3 py-1">
                        <span className="text-xs font-semibold text-amber-400">
                          {currentIndex + 1}
                        </span>
                        <span className="text-xs text-white/40">/</span>
                        <span className="text-xs text-white/60">{videos.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={handlePlayPause}
                      className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 hover:border-amber-400/70 hover:bg-amber-500/20 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6 text-amber-400" />
                      ) : (
                        <Play className="h-6 w-6 ml-1 text-amber-400" />
                      )}
                    </button>

                    {/* Volume Control */}
                    <div className="group flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 hover:border-amber-400/70 hover:bg-amber-500/20 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="h-6 w-6 text-amber-400" />
                        ) : (
                          <Volume2 className="h-6 w-6 text-amber-400" />
                        )}
                      </button>
                      <div className="hidden w-24 overflow-hidden rounded-full border border-white/20 bg-black/50 group-hover:block">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="h-2 w-full cursor-pointer appearance-none bg-transparent accent-amber-400"
                          style={{
                            background: `linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`
                          }}
                        />
                      </div>
                    </div>

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-sm text-white transition-all duration-300 hover:border-amber-400/70 hover:bg-amber-500/20 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                      {isFullscreen ? (
                        <Minimize className="h-6 w-6 text-amber-400" />
                      ) : (
                        <Maximize className="h-6 w-6 text-amber-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 opacity-0 blur-xl transition-opacity duration-700 hover:opacity-100 -z-10" />
          </div>

          {/* Enhanced Video Indicators */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`group relative rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-10 h-3 bg-gradient-to-r from-amber-400 to-rose-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50 hover:w-6"
                }`}
                aria-label={`Go to video ${index + 1}`}
              >
                {index === currentIndex && (
                  <span className="absolute inset-0 rounded-full bg-amber-400/50 animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Video Thumbnail Strip (optional preview) */}
          <div className="mt-8 flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`group relative flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-amber-400/70 scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                    : "border-white/20 hover:border-amber-400/40 hover:scale-[1.02]"
                }`}
              >
                <div className="relative h-16 w-28 sm:h-20 sm:w-32">
                  <video
                    src={video.src}
                    className="h-full w-full object-cover"
                    muted
                    onMouseEnter={(e) => {
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-amber-400/20" />
                  )}
                  <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/80 text-[10px] font-bold text-white">
                    {index + 1}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

