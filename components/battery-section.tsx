"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function BatterySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const usbRef = useRef<HTMLDivElement>(null)

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

      // Stats cards with counter animation
      const statCards = statsRef.current?.querySelectorAll(".stat-card")
      if (statCards) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Counter animations for battery hours
      const counter1 = statsRef.current?.querySelector(".counter-27")
      const counter2 = statsRef.current?.querySelector(".counter-22")

      if (counter1) {
        gsap.fromTo(
          { value: 0 },
          { value: 27 },
          {
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              counter1.textContent = Math.round(this.targets()[0].value).toString()
            },
          },
        )
      }

      if (counter2) {
        gsap.fromTo(
          { value: 0 },
          { value: 22 },
          {
            duration: 2,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              counter2.textContent = Math.round(this.targets()[0].value).toString()
            },
          },
        )
      }

      // USB-C section with slide in
      gsap.fromTo(
        usbRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: usbRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#000000] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p ref={labelRef} className="text-[#86868b] text-lg md:text-xl mb-2">
            Battery
          </p>
          <h2
            ref={titleRef}
            className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
          >
            Big power. <br className="hidden md:block" />
            All day long.
          </h2>
        </div>

        {/* Battery Stats */}
        <div ref={statsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="stat-card rounded-3xl bg-[#1d1d1f] p-8 md:p-12 text-center hover:bg-[#252527] transition-colors duration-300">
            <p className="text-6xl md:text-7xl font-semibold text-[#f5f5f7] mb-4">
              <span className="counter-27">0</span>
              <span className="text-4xl md:text-5xl">hrs</span>
            </p>
            <p className="text-[#86868b] text-lg">video playback on iPhone 17 Pro Max</p>
          </div>
          <div className="stat-card rounded-3xl bg-[#1d1d1f] p-8 md:p-12 text-center hover:bg-[#252527] transition-colors duration-300">
            <p className="text-6xl md:text-7xl font-semibold text-[#f5f5f7] mb-4">
              <span className="counter-22">0</span>
              <span className="text-4xl md:text-5xl">hrs</span>
            </p>
            <p className="text-[#86868b] text-lg">video playback on iPhone 17 Pro</p>
          </div>
        </div>

        {/* USB-C Feature */}
        <div
          ref={usbRef}
          className="rounded-3xl bg-[#1d1d1f] overflow-hidden hover:bg-[#252527] transition-colors duration-300"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-80 order-2 md:order-1 overflow-hidden">
              <img
                src="/usb-c-port-on-iphone-close-up-showing-fast-chargin.jpg"
                alt="USB-C port"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 order-1 md:order-2">
              <h3 className="text-[#f5f5f7] text-2xl md:text-3xl font-semibold mb-4">USB-C</h3>
              <p className="text-[#86868b] text-base md:text-lg leading-relaxed">
                USB-C unlocks new capabilities. Charge your Mac or iPad with the same cable you use to charge iPhone.
                iPhone 17 Pro supports USB 3 for up to 20x faster transfers.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-semibold text-[#f5f5f7]">20×</p>
                  <p className="text-[#86868b] text-sm">Faster transfers</p>
                </div>
                <div className="w-px h-12 bg-[#424245]" />
                <div className="text-center">
                  <p className="text-3xl font-semibold text-[#f5f5f7]">4K</p>
                  <p className="text-[#86868b] text-sm">External recording</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
