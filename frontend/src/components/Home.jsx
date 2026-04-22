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
    <Suspense fallback={<SectionFallback />}>
      <ParallaxSection offset={0}><Hero /></ParallaxSection>
      <ParallaxSection><About /></ParallaxSection>
      <ParallaxSection><Projects /></ParallaxSection>
      <ParallaxSection><Services /></ParallaxSection>
      <ParallaxSection><Contact /></ParallaxSection>
    </Suspense>
  );
}
