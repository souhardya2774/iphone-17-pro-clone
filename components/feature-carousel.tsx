"use client"

import { useState, useEffect, useCallback } from "react"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: "a19",
    type: "chip",
    subtitle: "A19 Pro, vapour-cooled for lightning-fast performance. Breakthrough battery life.",
  },
  {
    id: "design",
    type: "phones",
    subtitle: "Heat-forged aluminium unibody design for exceptional pro capability.",
  },
  {
    id: "camera",
    type: "image",
    image: "/iphone-17-pro-camera-system-macro-shot-professiona.jpg",
    subtitle: "48MP Fusion camera. 5x Telephoto. A big zoom forward.",
  },
  {
    id: "display",
    type: "image",
    image: "/iphone-17-pro-oled-display-promotion-colorful.jpg",
    subtitle: "Super Retina XDR display with ProMotion. Always brilliant.",
  },
  {
    id: "battery",
    type: "image",
    image: "/iphone-17-pro-battery-life-all-day-usage-dark.jpg",
    subtitle: "Longest battery life ever on iPhone. Power through your day.",
  },
]

export function FeatureCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const AUTOPLAY_INTERVAL = 4000 // 4 seconds

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  const handleSlideSelect = (index: number) => {
    setActiveSlide(index)
    setIsPlaying(false) // Pause on manual interaction
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const renderSlideContent = (slide: (typeof slides)[0]) => {
    switch (slide.type) {
      case "chip":
        return (
          <>
            {/* Metallic chip design */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6a6a6c] via-[#5a5a5c] to-[#4a4a4c] shadow-2xl border border-[#7a7a7c]/30">
                <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-[#5a5a5c] to-[#3a3a3c]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-[#f5f5f7] mb-1"
                      viewBox="0 0 17 48"
                      fill="currentColor"
                    >
                      <path d="M15.5752 19.0792C15.4908 19.1522 13.8296 20.0902 13.8296 22.1532C13.8296 24.5472 15.9528 25.3972 16.0116 25.4182C16.0032 25.4702 15.6688 26.5802 14.8708 27.7112C14.1708 28.7032 13.4372 29.6932 12.3052 29.6932C11.1732 29.6932 10.8472 29.0152 9.5316 29.0152C8.2496 29.0152 7.7372 29.7142 6.7052 29.7142C5.6732 29.7142 4.9648 28.7872 4.1528 27.6482C3.2028 26.3072 2.4336 24.2582 2.4336 22.3132C2.4336 19.1732 4.4716 17.5082 6.4776 17.5082C7.5764 17.5082 8.4936 18.2492 9.1832 18.2492C9.8392 18.2492 10.8724 17.4662 12.1208 17.4662C12.6164 17.4662 14.2776 17.5082 15.5752 19.0792Z" />
                    </svg>
                    <span className="text-[#f5f5f7] text-xl md:text-2xl font-semibold">A19</span>
                    <span className="text-[#f5f5f7] text-xs md:text-sm font-medium tracking-wider">PRO</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#f5f5f7] text-center text-base md:text-lg max-w-md">{slide.subtitle}</p>
          </>
        )
      case "phones":
        return (
          <>
            {/* Three iPhones display */}
            <div className="flex items-end justify-center gap-4 md:gap-8 mb-6">
              {[
                { color: "from-[#c0c0c0] to-[#a0a0a0]", label: "Silver" },
                { color: "from-[#e87f24] to-[#c96a1c]", label: "Orange" },
                { color: "from-[#1d1d3d] to-[#0d0d2d]", label: "Navy" },
              ].map((phone, i) => (
                <div
                  key={phone.label}
                  className={`relative transition-transform duration-500 ${i === 1 ? "scale-105 z-10" : "scale-95"}`}
                >
                  <div
                    className={`w-20 h-40 md:w-28 md:h-56 rounded-[20px] md:rounded-[28px] bg-gradient-to-b ${phone.color} shadow-2xl`}
                  >
                    {/* Camera module */}
                    <div className="absolute top-2 left-2 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-black/20 p-1">
                      <div className="grid grid-cols-2 gap-1 h-full">
                        <div className="rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
                        <div className="rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
                        <div className="rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
                        <div className="flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#1a1a2e]" />
                        </div>
                      </div>
                    </div>
                    {/* Apple logo */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 17 48" fill="currentColor">
                        <path d="M15.5752 19.0792C15.4908 19.1522 13.8296 20.0902 13.8296 22.1532C13.8296 24.5472 15.9528 25.3972 16.0116 25.4182C16.0032 25.4702 15.6688 26.5802 14.8708 27.7112C14.1708 28.7032 13.4372 29.6932 12.3052 29.6932C11.1732 29.6932 10.8472 29.0152 9.5316 29.0152C8.2496 29.0152 7.7372 29.7142 6.7052 29.7142C5.6732 29.7142 4.9648 28.7872 4.1528 27.6482C3.2028 26.3072 2.4336 24.2582 2.4336 22.3132C2.4336 19.1732 4.4716 17.5082 6.4776 17.5082C7.5764 17.5082 8.4936 18.2492 9.1832 18.2492C9.8392 18.2492 10.8724 17.4662 12.1208 17.4662C12.6164 17.4662 14.2776 17.5082 15.5752 19.0792Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#f5f5f7] text-center text-base md:text-lg max-w-md">{slide.subtitle}</p>
          </>
        )
      case "image":
        return (
          <>
            <div className="relative w-full h-48 md:h-64 mb-6">
              <Image src={slide.image! || "/placeholder.svg"} alt={slide.subtitle} fill className="object-contain" />
            </div>
            <p className="text-[#f5f5f7] text-center text-base md:text-lg max-w-md">{slide.subtitle}</p>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-[#000000] py-16 md:py-24">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4a4a4c] via-[#3a3a3c] to-[#2a2a2c] p-8 md:p-12 mb-8 min-h-[320px] md:min-h-[400px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 ${
                activeSlide === index
                  ? "opacity-100 translate-x-0"
                  : activeSlide > index
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSlideSelect(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-8 bg-[#f5f5f7]" : "w-2 bg-[#424245] hover:bg-[#636366]"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 rounded-full bg-[#1d1d1f] hover:bg-[#2d2d2f] flex items-center justify-center transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 text-[#86868b]" fill="currentColor" />
            ) : (
              <Play className="w-3 h-3 text-[#86868b] ml-0.5" fill="currentColor" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
