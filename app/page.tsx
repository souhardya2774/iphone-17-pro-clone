import { GSAPProvider } from "@/components/gsap-provider"
import { HeroSection } from "@/components/hero-section"
import { FeatureCarousel } from "@/components/feature-carousel"
import { DesignSection } from "@/components/design-section"
import { CloserLookSection } from "@/components/closer-look-section"
import { ChipSection } from "@/components/chip-section"
import { CameraSection } from "@/components/camera-section"
import { ProFeaturesSection } from "@/components/pro-features-section"
import { BatterySection } from "@/components/battery-section"
import { Footer } from "@/components/footer"
import { AppleNav } from "@/components/apple-nav"
import { StickySubnav } from "@/components/sticky-subnav"

export default function IPhone17ProPage() {
  return (
    <GSAPProvider>
      <main className="bg-background text-foreground">
        <AppleNav />
        <StickySubnav />
        <HeroSection />
        <FeatureCarousel />
        <DesignSection />
        <CloserLookSection />
        <ChipSection />
        <CameraSection />
        <ProFeaturesSection />
        <BatterySection />
        <Footer />
      </main>
    </GSAPProvider>
  )
}
