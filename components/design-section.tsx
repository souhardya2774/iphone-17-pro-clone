"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for staggered reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(labelRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )

      // Image reveal with parallax
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Parallax on image
      gsap.to(imageRef.current?.querySelector("img"), {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#000000] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p ref={labelRef} className="text-[#d4742c] text-lg md:text-xl mb-4">
            Design
          </p>
          <h2
            ref={titleRef}
            className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance mb-6"
          >
            Unibody enclosure. <br />
            Makes a strong case for itself.
          </h2>
          <p ref={descRef} className="text-[#86868b] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone
            models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that maximises
            performance, battery capacity and durability.
          </p>
        </div>

        <div ref={imageRef} className="relative overflow-hidden">
          <div className="relative rounded-3xl overflow-hidden bg-[#000000]">
            <img
              src="/iphone-17-pro-side-profile-view-showing-ultra-thin.jpg"
              alt="iPhone 17 Pro side profile"
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
