import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ setLoading }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEMS...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increased speed for better UX
        const diff = Math.random() * 20;
        return Math.min(prev + diff, 100);
      });
    }, 120); // Faster interval

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress > 20 && progress < 50) setStatus("CALIBRATING INTERFACE...");
    if (progress > 50 && progress < 80) setStatus("OPTIMIZING ASSETS...");
    if (progress > 80 && progress < 100) setStatus("LAUNCHING EXPERIENCE...");
    if (progress === 100) setStatus("WELCOME.");
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // Reduced delay
      return () => clearTimeout(exitTimer);
    }
  }, [progress, setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Core - Geometric Morphing */}
        <div className="relative w-32 h-32 mb-12">
          {/* Rotating Outer Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-primary-500/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-pink-500/20 rounded-[70%_30%_30%_70%/70%_70%_30%_30%]"
          ></motion.div>

          {/* Central Nucleus */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              borderRadius: ["20%", "50%", "20%"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-8 bg-gradient-to-br from-primary-500 to-pink-600 shadow-[0_0_50px_rgba(59,130,246,0.5)] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
          </motion.div>

          {/* Orbiting Particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
                scale: [1, 1.5, 1],
              }}
              transition={{
                rotate: { duration: 3 + i, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0"
            >
              <div
                className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"
                style={{
                  transform: `translateX(${60 + i * 10}px)`,
                  opacity: 0.5 + i * 0.1
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Status & Progress */}
        <div className="text-center w-64">
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black font-space tracking-[0.5em] text-primary-400 mb-4 h-4 uppercase"
          >
            {status}
          </motion.p>

          <div className="relative h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 via-white to-pink-500"
            ></motion.div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold text-slate-500 font-mono">00%</span>
            <span className="text-2xl font-black font-space text-white tabular-nums tracking-tighter">
              {Math.round(progress)}%
            </span>
            <span className="text-[10px] font-bold text-slate-500 font-mono">100%</span>
          </div>

          {/* Skip Option */}
          {progress < 100 && (
            <button 
              onClick={() => setProgress(100)}
              className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.3em] border-b border-transparent hover:border-white/20 pb-1"
            >
              Skip Intro
            </button>
          )}
        </div>
      </div>

      {/* Aesthetic Overlays */}
      <div className="absolute bottom-10 left-10 flex gap-4 opacity-30">
        <div className="w-1 h-8 bg-primary-500 animate-[bounce_2s_infinite]"></div>
        <div className="w-1 h-12 bg-pink-500 animate-[bounce_1.5s_infinite]"></div>
        <div className="w-1 h-6 bg-cyan-500 animate-[bounce_3s_infinite]"></div>
      </div>

      <div className="absolute top-10 right-10 text-right opacity-20 hidden md:block">
        <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest leading-loose">
          Version: 4.2.0-stable<br />
          System: Nexus-OS<br />
          Latency: 14ms
        </p>
      </div>
    </motion.div>
  );
}
