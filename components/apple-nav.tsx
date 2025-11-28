"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ShoppingBag } from "lucide-react"

const navItems = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "AirPods", href: "#" },
  { name: "TV & Home", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Accessories", href: "#" },
  { name: "Support", href: "#" },
]

export function AppleNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(22,22,23,0.8)] backdrop-blur-xl">
      <div className="mx-auto max-w-[980px] px-4">
        <div className="flex h-12 items-center justify-between">
          <Link href="#" className="text-[#f5f5f7]">
            <img src="/images/logo.jpg" alt="Apple" className="h-[18px] w-[18px] object-contain invert" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <button className="text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors">
              <ShoppingBag className="h-4 w-4" />
            </button>
            <button
              className="md:hidden text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#161617] border-t border-[#424245]">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base text-[#f5f5f7]/80 hover:text-[#f5f5f7] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
