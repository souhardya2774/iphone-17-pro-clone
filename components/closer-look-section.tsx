"use client"

import { useState } from "react"
import { Plus, Check } from "lucide-react"

const features = [
  {
    id: "colours",
    label: "Colours",
    images: ["/images/iphone17pro-silver-2.webp", "/images/iphone17pro-orange-2.webp", "/images/iphone17pro-blue.webp"],
  },
  {
    id: "aluminium",
    label: "Aluminium unibody",
    image: "/iphone-17-pro-aluminium-unibody-construction-cutaw.jpg",
  },
  {
    id: "vapour",
    label: "Vapour chamber",
    image: "/iphone-17-pro-vapour-chamber-cooling-system-intern.jpg",
  },
  {
    id: "ceramic",
    label: "Ceramic Shield",
    image: "/iphone-17-pro-ceramic-shield-front-glass-display-p.jpg",
  },
  {
    id: "display",
    label: "Immersive pro display",
    image: "/images/apple-wwdc24-ios-18-control-center-240610-inline.jpg",
  },
  {
    id: "camera",
    label: "Camera Control",
    image: "/images/c196869ba35a99db52058c627f65c63c-icon.png",
  },
  {
    id: "action",
    label: "Action button",
    image: "/iphone-17-pro-action-button-side-view-orange.jpg",
  },
]

export function CloserLookSection() {
  const [activeFeature, setActiveFeature] = useState("colours")
  const [activeColorIndex, setActiveColorIndex] = useState(0)

  const activeFeatureData = features.find((f) => f.id === activeFeature)
  const colorLabels = ["Silver", "Orange", "Navy"]

  return (
    <section className="bg-[#1d1d1f] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12">
          Take a closer look.
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
          {/* Feature Tabs */}
          <div 
            role="tablist"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            className="w-full lg:w-auto flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 shrink-0 snap-x snap-mandatory lg:snap-none scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature) => (
              <button
                key={feature.id}
                role="tab"
                aria-selected={activeFeature === feature.id}
                aria-controls={`panel-${feature.id}`}
                onClick={() => setActiveFeature(feature.id)}
                onKeyDown={(e) => {
                  const currentIndex = features.findIndex(f => f.id === feature.id);
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % features.length;
                    setActiveFeature(features[nextIndex].id);
                  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = (currentIndex - 1 + features.length) % features.length;
                    setActiveFeature(features[prevIndex].id);
                  }
                }}
                className={`flex items-center justify-center lg:justify-start gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border snap-center min-w-fit ${
                  activeFeature === feature.id
                    ? "bg-[#2a2a2c] text-[#f5f5f7] border-[#d4742c] shadow-[0_0_12px_rgba(212,116,44,0.4)]"
                    : "bg-[#2a2a2c] text-[#86868b] border-[#424245] hover:bg-[#3a3a3c] hover:text-[#f5f5f7] active:scale-95"
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    activeFeature === feature.id ? "bg-[#d4742c]" : "border border-[#86868b]"
                  }`}
                >
                  {activeFeature === feature.id ? (
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white animate-in fade-in zoom-in duration-200" />
                  ) : (
                    <Plus className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#86868b]" />
                  )}
                </span>
                <span className="text-xs sm:text-sm">{feature.label}</span>
              </button>
            ))}
          </div>

          {/* Feature Display */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#2a2a2c] flex items-center justify-center p-4">
                {/* Regular feature images */}
                {features
                  .filter((f) => !f.images)
                  .map((feature) => (
                    <div
                      key={feature.id}
                      className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ${
                        activeFeature === feature.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    >
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.label}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}

                {/* Color images */}
                {activeFeature === "colours" &&
                  features
                    .find((f) => f.id === "colours")
                    ?.images?.map((img, idx) => (
                      <img
                        key={idx}
                        src={img || "/placeholder.svg"}
                        alt={`iPhone 17 Pro ${colorLabels[idx]}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                          activeColorIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                      />
                    ))}
              </div>
            </div>

            {/* Color Selector */}
            {activeFeature === "colours" && (
              <div className="flex items-center gap-4 mt-6">
                {colorLabels.map((color, idx) => (
                  <button
                    key={color}
                    onClick={() => setActiveColorIndex(idx)}
                    className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                      activeColorIndex === idx ? "opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        activeColorIndex === idx ? "border-[#d4742c] scale-110" : "border-transparent"
                      }`}
                      style={{
                        backgroundColor: idx === 0 ? "#c0c0c0" : idx === 1 ? "#d4742c" : "#1a1a3e",
                      }}
                    />
                    <span className={`text-xs ${activeColorIndex === idx ? "text-[#f5f5f7]" : "text-[#86868b]"}`}>
                      {color}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
