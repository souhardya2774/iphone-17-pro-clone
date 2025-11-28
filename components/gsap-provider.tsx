"use client"

import { useEffect, createContext, useContext, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const GSAPContext = createContext<typeof gsap | null>(null)

export function useGSAP() {
  return useContext(GSAPContext)
}

export function GSAPProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Set default GSAP settings
    gsap.defaults({
      ease: "power3.out",
      duration: 1,
    })

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <GSAPContext.Provider value={gsap}>{children}</GSAPContext.Provider>
}
