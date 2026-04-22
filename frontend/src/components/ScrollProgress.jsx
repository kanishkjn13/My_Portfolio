import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-pink-500 z-[1001] origin-left shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      style={{ scaleX }}
    />
  );
}
