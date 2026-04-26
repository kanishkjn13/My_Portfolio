import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Layers, Mail, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Briefcase, label: "Work" },
  { id: "services", icon: Layers, label: "Services" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [hoverItem, setHoverItem] = useState("");
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
        <Link
          to="home"
          smooth={false}
          duration={0}
          className="text-2xl font-bold font-poppins cursor-pointer text-white tracking-tighter drop-shadow-md hover:scale-105 transition-transform origin-left block"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </Link>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[60] p-3 rounded-2xl glass md:hidden text-white border border-white/10 active:scale-90 transition-transform"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Floating top dynamic dock (Desktop Only) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-max hidden md:block">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.5 }}
          className="flex flex-row items-center gap-4 sm:gap-6 md:gap-12 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-slate-900/60 backdrop-blur-2xl"
          onMouseLeave={() => setHoverItem("")}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isHovered = hoverItem === item.id;
            const isActive = activeItem === item.id;

            return (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={false}
                duration={0}
                onSetActive={() => setActiveItem(item.id)}
                onMouseEnter={() => setHoverItem(item.id)}
                className={`relative flex items-center justify-center gap-3 cursor-pointer transition-all duration-500 rounded-full z-10 group px-4 py-2 ${isActive ? "w-max" : "w-12 h-12 sm:w-14 sm:h-14"
                  }`}
              >
                {/* Magnetic Hover Background */}
                {isHovered && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}

                {/* Active Selection Background */}
                {isActive && !isHovered && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary-600/20 rounded-full border border-primary-500/30 -z-10 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}

                <Icon
                  size={20}
                  strokeWidth={isActive || isHovered ? 2.5 : 2}
                  className={`transition-all duration-300 ${isActive ? "text-primary-400 scale-110" : "text-slate-400 group-hover:text-white"}`}
                />

                {/* Animated Label Presence */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0, x: -10 }}
                      animate={{ width: "auto", opacity: 1, x: 0 }}
                      exit={{ width: 0, opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-xs font-bold uppercase tracking-widest text-primary-400 whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}

          {/* Subtle separator */}
          <div className="w-[1px] h-8 bg-white/10 mx-1 rounded-full"></div>

          {/* Standalone Action Pill with Active Glow */}
          <Link
            to="contact"
            spy={true}
            smooth={false}
            duration={0}
            onSetActive={() => setActiveItem("contact")}
            className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer hover:scale-105 active:scale-95 relative ${activeItem === "contact"
              ? "bg-primary-500 shadow-[0_0_25px_rgba(59,130,246,0.8)] scale-110"
              : "bg-primary-600 hover:bg-primary-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              }`}
            title="Get In Touch"
          >
            {activeItem === "contact" && (
              <motion.div
                layoutId="contact-glow"
                className="absolute inset-0 rounded-full bg-primary-400/40 animate-ping -z-10"
              />
            )}
            <Mail size={20} className={activeItem === "contact" ? "text-white" : "text-white/90"} />
          </Link>

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
            <div className="flex flex-col items-center gap-8">
              {[...navItems, { id: "contact", icon: Mail, label: "Contact" }].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      to={item.id}
                      smooth={false}
                      duration={0}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 text-3xl font-black font-space text-white uppercase tracking-tighter hover:text-primary-400 transition-colors"
                    >
                      <Icon size={28} className="text-primary-500" />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
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
