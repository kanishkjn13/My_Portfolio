import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const Typewriter = ({ words, delay = 100, deleteDelay = 50, pause = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (currentText.length < fullWord.length) {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteDelay : delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteDelay, pause]);

  return (
    <span className="relative inline-flex items-center">
      {currentText}
      <span className="w-[3px] h-[1.2em] bg-primary-500 inline-block ml-2 animate-pulse rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-pink-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <motion.div
           className="w-full text-center mt-10 md:mt-0"
           initial="hidden"
           animate="visible"
           variants={{
             visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
           }}
        >
          <motion.div
             variants={{
               hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
               visible: { opacity: 1, y: 0, filter: "blur(0px)" }
             }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-xs uppercase tracking-[0.4em] font-bold text-slate-500 mb-6"
          >
             Introduction
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-space tracking-tighter leading-[1.1] mb-6 md:mb-8">
            <motion.span
               variants={{
                 hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                 visible: { opacity: 1, y: 0, filter: "blur(0px)" }
               }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="text-premium-gradient block py-2 md:py-4 text-glow cursor-default relative z-10"
            >
              I’m Kanishk Jain
            </motion.span>
            
            <motion.span
               variants={{
                 hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                 visible: { opacity: 1, y: 0, filter: "blur(0px)" }
               }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-slate-400 block tracking-[0.1em] mt-2 h-8 md:h-10"
            >
              <Typewriter 
                words={[" Web Developer", "Full-Stack Developer", "UI/UX Specialist"]} 
                delay={80}
                deleteDelay={40}
                pause={2000}
              />
            </motion.span>
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-light tracking-wide italic px-4"
          >
            I build fast, modern websites that help businesses grow and convert visitors into customers.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer group hover:scale-105 active:scale-95"
            >
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer group hover:scale-105 active:scale-95"
            >
              View Projects
            </Link>
          </div>

          {/* Professional Proof / Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 gap-0 max-w-sm mx-auto pt-10 border-t border-white/5"
          >
            <div className="flex flex-col items-center justify-center border-r border-white/5">
              <span className="text-3xl md:text-4xl font-black font-space text-white">5+</span>
              <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-1">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-black font-space text-white">99%</span>
              <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-1">Satisfaction Rate</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
