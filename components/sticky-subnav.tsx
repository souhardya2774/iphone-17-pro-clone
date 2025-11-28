"use client"

import { useEffect, useState } from "react"

export function StickySubnav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show subnav after scrolling past the hero section
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-12 left-0 right-0 z-40 bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border-b border-[#424245]/30 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-[980px] px-4">
        <div className="flex h-12 items-center justify-between">
          <span className="text-[#f5f5f7] text-sm font-medium">iPhone 17 Pro</span>
          <div className="flex items-center gap-3">
            <button className="text-[#f5f5f7]/80 hover:text-[#f5f5f7] text-xs font-normal px-4 py-1.5 rounded-full border border-[#424245] transition-colors">
              Explore
            </button>
            <button className="bg-[#2997ff] hover:bg-[#2997ff]/90 text-white text-xs font-normal px-4 py-1.5 rounded-full transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
