"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLDivElement>(null)
  const iosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const featureCards = gridRef.current?.querySelectorAll(".feature-card")
      if (featureCards) {
        gsap.fromTo(
          featureCards,
          { opacity: 0, y: 60, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      gsap.fromTo(
        iosRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: iosRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        actionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: actionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const actionButtons = actionRef.current?.querySelectorAll(".action-tag")
      if (actionButtons) {
        gsap.fromTo(
          actionButtons,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: actionRef.current,
              start: "top 75%",
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
          <p ref={labelRef} className="text-[#86868b] text-lg md:text-xl mb-2">
            Apple Intelligence
          </p>
          <h2
            ref={titleRef}
            className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
          >
            AI that puts you first.
          </h2>
        </div>

        <div ref={iosRef} className="mb-12 rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d] overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-[#f5f5f7] text-2xl md:text-3xl font-semibold mb-4">iOS 18</h3>
              <p className="text-[#86868b] text-base md:text-lg leading-relaxed mb-4">
                A new level of customization. A redesigned Control Center gives you quick access to your favourite
                controls and makes it easy to add more.
              </p>
              <p className="text-[#86868b] text-base leading-relaxed">
                Arrange your Home Screen your way. Place app icons and widgets in any open space, tint them with your
                favourite colour, or make them dark.
              </p>
            </div>
            <div className="relative flex items-center justify-center p-4 md:p-8">
              <img
                src="/images/apple-wwdc24-ios-18-control-center-240610-inline.jpg"
                alt="iOS 18 Control Center"
                className="w-full max-w-[280px] h-auto rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {/* Writing Tools */}
          <div className="feature-card rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d] p-8 md:p-10 hover:from-[#252527] hover:to-[#151517] transition-all duration-300">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] text-2xl font-semibold mb-3">Writing Tools</h3>
            <p className="text-[#86868b] text-base leading-relaxed">
              Rewrite, proofread, and summarize text across Mail, Notes, Pages, and third-party apps with the tap of a
              button.
            </p>
          </div>

          {/* Image Playground */}
          <div className="feature-card rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d] p-8 md:p-10 hover:from-[#252527] hover:to-[#151517] transition-all duration-300">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] text-2xl font-semibold mb-3">Image Playground</h3>
            <p className="text-[#86868b] text-base leading-relaxed">
              Create unique images in seconds. Choose from animation, illustration, or sketch styles to express
              yourself.
            </p>
          </div>

          {/* Siri */}
          <div className="feature-card rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d] p-8 md:p-10 hover:from-[#252527] hover:to-[#151517] transition-all duration-300">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] text-2xl font-semibold mb-3">Siri</h3>
            <p className="text-[#86868b] text-base leading-relaxed">
              Siri is more natural, relevant, and personal than ever, with the ability to take hundreds of new actions
              across Apple and third-party apps.
            </p>
          </div>

          {/* Privacy */}
          <div className="feature-card rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0d0d0d] p-8 md:p-10 hover:from-[#252527] hover:to-[#151517] transition-all duration-300">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#f5f5f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-[#f5f5f7] text-2xl font-semibold mb-3">Built for Privacy</h3>
            <p className="text-[#86868b] text-base leading-relaxed">
              Many Apple Intelligence features run entirely on device, and Private Cloud Compute extends iPhone's
              privacy to the cloud.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div
          ref={actionRef}
          className="mt-16 rounded-3xl bg-[#1d1d1f] overflow-hidden hover:bg-[#252527] transition-colors duration-300"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-[#f5f5f7] text-2xl md:text-3xl font-semibold mb-4">Action button</h3>
              <p className="text-[#86868b] text-base md:text-lg leading-relaxed mb-6">
                A new button. A new way to use your iPhone. The Action button is a fast track to your favourite feature.
                Set it to Silent mode, Camera, Voice Memo, Shortcut, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Silent", "Focus", "Camera", "Torch", "Voice Memo", "Shortcut"].map((action) => (
                  <span
                    key={action}
                    className="action-tag bg-[#2d2d2f] text-[#f5f5f7] text-sm px-4 py-2 rounded-full hover:bg-[#3d3d3f] transition-colors cursor-pointer"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src="/iphone-17-pro-action-button-close-up-side-view-sho.jpg"
                alt="Action button"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
