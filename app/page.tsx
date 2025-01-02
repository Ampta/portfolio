"use client";

import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import dynamic from "next/dynamic";

// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <main className="pb-8 transition-all duration-500 ease-in-out">
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
        </main>
      )}
    </WaterWaveWrapper>
  );
}
