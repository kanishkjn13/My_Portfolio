import React, { useEffect, Suspense, lazy, useRef } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

// Lazy loading sections for performance boost
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Services = lazy(() => import("./Services"));
const Contact = lazy(() => import("./Contact"));

const SectionFallback = () => <div className="h-screen bg-transparent" />;

const SplitHeroReveal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const topY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-50vh"]);
  const bottomY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "50vh"]);
  const splitScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const aboutY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "100vh"]);

  return (
    <div className="relative">
      <div ref={containerRef} className="absolute inset-0 w-full h-[200vh] pointer-events-none z-20">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ y: topY, scale: splitScale, clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
            className="absolute inset-0 bg-[#020617] pointer-events-auto transform-gpu will-change-transform"
          >
            <Hero />
          </motion.div>
          <motion.div
            style={{ y: bottomY, scale: splitScale, clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
            className="absolute inset-0 bg-[#020617] pointer-events-auto transform-gpu will-change-transform"
          >
            <Hero isClone={true} />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-[#020617]">
        <motion.div style={{ y: aboutY }}>
          <About />
        </motion.div>
      </div>

      <div className="h-screen w-full relative z-0 pointer-events-none"></div>
    </div>
  );
};

const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative">
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70, // Adjust for navbar height
        });
      }, 500); // Wait for components to mount and images to settle
    }
  }, [hash]);

  return (
    <div className="relative">
      {/* Invisible scroll anchors for Navbar and Snap Points */}
      <div id="home" className="absolute top-0 w-full h-px -z-10 pointer-events-none snap-section"></div>
      <div id="about" className="absolute top-[100vh] w-full h-px -z-10 pointer-events-none snap-section"></div>

      <Suspense fallback={<SectionFallback />}>
        <SplitHeroReveal />
        <Projects />
        <ParallaxSection><Services /></ParallaxSection>
        <ParallaxSection><Contact /></ParallaxSection>
      </Suspense>
    </div>
  );
}
