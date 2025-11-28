"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - split text effect simulation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        },
      )

      // Video container animation
      gsap.fromTo(
        videoContainerRef.current,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.6,
        },
      )

      // Controls animation
      gsap.fromTo(
        controlsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1,
        },
      )

      // Parallax effect on scroll
      gsap.to(videoContainerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#000000] flex flex-col items-center pt-12 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-24 pb-8">
        <h2
          ref={titleRef}
          className="text-[#f5f5f7] text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-center text-balance max-w-4xl mx-auto italic opacity-0"
        >
          Heat-forged aluminium unibody design for exceptional pro capability.
        </h2>
      </div>

      {/* Three iPhones Display */}
      <div
        ref={videoContainerRef}
        className="relative z-10 w-full max-w-5xl px-4 flex-1 flex items-center justify-center opacity-0"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a]">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/iphone-17-pro-three-colors-silver-orange-navy-dark.jpg"
            onEnded={handleVideoEnd}
            playsInline
            muted
          >
            <source
              src="https://www.apple.com/105/media/us/iphone-16-pro/2024/b5c3f802-4aab-4e52-8e08-c696e6279722/anim/hero/large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Play/Pause Overlay */}
          <button
            onClick={toggleVideo}
            className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors hover:scale-110 duration-300">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" fill="currentColor" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              )}
            </div>
          </button>

          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10" />
        </div>
      </div>

      {/* Carousel Controls */}
      <div ref={controlsRef} className="relative z-10 flex items-center gap-4 pb-16 pt-8 opacity-0">
        <button
          onClick={toggleVideo}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d1d1f] hover:bg-[#2d2d2f] transition-all hover:scale-105 duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-[#f5f5f7]" fill="currentColor" />
          ) : (
            <Play className="w-4 h-4 text-[#f5f5f7] ml-0.5" fill="currentColor" />
          )}
          <span className="text-[#f5f5f7] text-sm font-medium">{isPlaying ? "Pause" : "Watch the film"}</span>
        </button>
      </div>
    </section>
  )
}
