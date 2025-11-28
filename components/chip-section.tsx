"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ChipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      headerTl
        .fromTo(labelRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )

      // Chip image with glow effect
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotateX: 20 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Stats cards stagger animation
      const statCards = statsRef.current?.querySelectorAll(".stat-card")
      if (statCards) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Highlight card
      gsap.fromTo(
        highlightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Counter animation for the percentage
      const percentElement = highlightRef.current?.querySelector(".counter-value")
      if (percentElement) {
        gsap.fromTo(
          { value: 0 },
          { value: 20 },
          {
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: highlightRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              percentElement.textContent = Math.round(this.targets()[0].value) + "%"
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#000000] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p ref={labelRef} className="text-[#d4742c] text-lg md:text-xl mb-2">
            A19 Pro chip
          </p>
          <h2
            ref={titleRef}
            className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
          >
            Vapour-cooled for <br className="hidden md:block" />
            lightning-fast performance.
          </h2>
        </div>

        {/* Chip Image */}
        <div ref={imageRef} className="relative mb-16" style={{ perspective: "1000px" }}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d]">
            <img
              src="/apple-a19-pro-chip-die-shot-close-up-showing-neura.jpg"
              alt="A19 Pro chip"
              className="w-full h-auto"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#d4742c]/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 text-center">
          <div className="stat-card p-8 rounded-3xl bg-[#1d1d1f] hover:bg-[#252527] transition-colors duration-300">
            <p className="text-5xl md:text-6xl font-semibold text-[#f5f5f7] mb-2">6-core</p>
            <p className="text-[#86868b] text-lg">CPU with 2 performance and 4 efficiency cores</p>
          </div>
          <div className="stat-card p-8 rounded-3xl bg-[#1d1d1f] hover:bg-[#252527] transition-colors duration-300">
            <p className="text-5xl md:text-6xl font-semibold text-[#f5f5f7] mb-2">6-core</p>
            <p className="text-[#86868b] text-lg">GPU with hardware-accelerated ray tracing</p>
          </div>
          <div className="stat-card p-8 rounded-3xl bg-[#1d1d1f] hover:bg-[#252527] transition-colors duration-300">
            <p className="text-5xl md:text-6xl font-semibold text-[#f5f5f7] mb-2">16-core</p>
            <p className="text-[#86868b] text-lg">Neural Engine for advanced machine learning</p>
          </div>
        </div>

        {/* Performance Highlight */}
        <div ref={highlightRef} className="mt-16 text-center">
          <div className="inline-block rounded-3xl bg-[#1d1d1f] p-8 md:p-12 hover:bg-[#252527] transition-colors duration-300">
            <p className="text-[#f5f5f7] text-3xl md:text-4xl font-semibold mb-4">
              Up to <span className="text-[#2997ff] counter-value">0%</span> faster performance
            </p>
            <p className="text-[#86868b] text-lg max-w-lg mx-auto">
              The A19 Pro chip delivers our most powerful performance ever, with faster CPU, GPU, and Neural Engine
              compared to A18 Pro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
