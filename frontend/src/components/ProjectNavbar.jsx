import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowLeft, Menu, X } from "lucide-react";

export default function ProjectNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Left Logo */}
      <div className="fixed top-6 left-6 md:left-10 z-[60]">
        <RouterLink
          to="/"
          className="text-2xl font-bold font-poppins cursor-pointer text-white tracking-tighter drop-shadow-md hover:scale-105 transition-transform origin-left block"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </RouterLink>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[60] p-3 rounded-2xl glass md:hidden text-white border border-white/10 active:scale-90 transition-transform"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Floating top dynamic dock for Projects Page (Desktop Only) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-max hidden md:block">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="flex flex-row items-center gap-4 px-4 sm:px-6 md:gap-6 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-slate-900/60 backdrop-blur-2xl"
        >
          <RouterLink
            to="/"
            className="relative flex items-center justify-center gap-3 cursor-pointer transition-all duration-500 rounded-full z-10 group px-6 py-2.5 hover:bg-white/5"
          >
            <ArrowLeft size={18} className="text-primary-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Back to Home</span>
          </RouterLink>

          {/* Subtle separator */}
          <div className="w-[1px] h-8 bg-white/10 mx-1 rounded-full"></div>

          {/* Contact Button */}
          <RouterLink
            to="/#contact"
            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500 cursor-pointer hover:scale-105 active:scale-95"
            title="Get In Touch"
          >
            <Mail size={20} className="text-white" />
          </RouterLink>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <RouterLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 text-3xl font-black font-space text-white uppercase tracking-tighter hover:text-primary-400 transition-colors"
                >
                  <ArrowLeft size={32} className="text-primary-500" />
                  Home
                </RouterLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <RouterLink
                  to="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 text-3xl font-black font-space text-white uppercase tracking-tighter hover:text-primary-400 transition-colors"
                >
                  <Mail size={32} className="text-primary-500" />
                  Contact
                </RouterLink>
              </motion.div>
            </div>

            {/* Mobile Menu Bottom Decoration */}
            <div className="absolute bottom-12 flex gap-6 opacity-40">
               <div className="w-12 h-[1px] bg-white"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Kanishk Jain</span>
               <div className="w-12 h-[1px] bg-white"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
