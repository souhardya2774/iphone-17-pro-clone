"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CameraSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const mainImageRef = useRef<HTMLDivElement>(null)
  const specsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )

      // Main image with zoom reveal
      gsap.fromTo(
        mainImageRef.current,
        { opacity: 0, scale: 1.2 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Specs cards stagger
      const specCards = specsRef.current?.querySelectorAll(".spec-card")
      if (specCards) {
        gsap.fromTo(
          specCards,
          { opacity: 0, y: 50, rotateY: -10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: specsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Photo grid with stagger reveal
      const gridItems = gridRef.current?.querySelectorAll(".grid-item")
      if (gridItems) {
        gsap.fromTo(
          gridItems,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#000000] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p ref={labelRef} className="text-[#d4742c] text-lg md:text-xl mb-2">
            Cameras
          </p>
          <h2
            ref={titleRef}
            className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
          >
            A big zoom forward.
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src="/images/c196869ba35a99db52058c627f65c63c-icon.png"
              alt="iPhone 17 Pro Camera System"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>

        {/* Main Camera Feature */}
        <div ref={mainImageRef} className="relative rounded-3xl overflow-hidden mb-8">
          <img
            src="/stunning-landscape-photo-taken-with-iphone-17-pro-.jpg"
            alt="Shot on iPhone 17 Pro"
            className="w-full h-auto"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-[#000000]/60 backdrop-blur-sm text-[#f5f5f7] text-sm px-3 py-1 rounded-full">
              Shot on iPhone 17 Pro
            </span>
          </div>
        </div>

        {/* Camera Specs */}
        <div ref={specsRef} className="grid md:grid-cols-3 gap-8 mb-16" style={{ perspective: "1000px" }}>
          <div className="spec-card rounded-3xl bg-[#1d1d1f] p-8 text-center hover:bg-[#252527] transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2d2d2f] flex items-center justify-center">
              <span className="text-2xl font-semibold text-[#f5f5f7]">48</span>
            </div>
            <h3 className="text-[#f5f5f7] text-xl font-semibold mb-2">48MP Main</h3>
            <p className="text-[#86868b] text-sm">
              Super-high-resolution photos with incredible detail. Now with a larger sensor.
            </p>
          </div>

          <div className="spec-card rounded-3xl bg-[#1d1d1f] p-8 text-center hover:bg-[#252527] transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2d2d2f] flex items-center justify-center">
              <span className="text-2xl font-semibold text-[#f5f5f7]">5×</span>
            </div>
            <h3 className="text-[#f5f5f7] text-xl font-semibold mb-2">5x Optical Zoom</h3>
            <p className="text-[#86868b] text-sm">
              The longest optical zoom ever on iPhone. Get closer without losing quality.
            </p>
          </div>

          <div className="spec-card rounded-3xl bg-[#1d1d1f] p-8 text-center hover:bg-[#252527] transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2d2d2f] flex items-center justify-center">
              <span className="text-2xl font-semibold text-[#f5f5f7]">4K</span>
            </div>
            <h3 className="text-[#f5f5f7] text-xl font-semibold mb-2">4K Cinematic</h3>
            <p className="text-[#86868b] text-sm">
              Now with ProRes Log encoding for maximum flexibility in post-production.
            </p>
          </div>
        </div>

        {/* Photo Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid-item rounded-2xl overflow-hidden aspect-square">
            <img
              src="/portrait-photo-of-person-with-beautiful-bokeh-back.jpg"
              alt="Portrait mode"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="grid-item rounded-2xl overflow-hidden aspect-square">
            <img
              src="/night-mode-photo-of-city-skyline-with-lights-shot-.jpg"
              alt="Night mode"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="grid-item rounded-2xl overflow-hidden aspect-square">
            <img
              src="/macro-photo-of-flower-with-incredible-detail-and-t.jpg"
              alt="Macro photography"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="grid-item rounded-2xl overflow-hidden aspect-square">
            <img
              src="/action-sports-photo-with-motion-blur-captured-on-i.jpg"
              alt="Action shot"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
