"use client";

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScroll() {
  useGSAP(() => {
    if (typeof window === "undefined" || window.innerWidth < 992) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1, // smoothness
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    // Connect Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker → drives Lenis RAF correctly
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // correct conversion to ms
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return null;
}
