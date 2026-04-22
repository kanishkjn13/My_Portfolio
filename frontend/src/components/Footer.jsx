import { Link } from "react-scroll";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", 
  "MongoDB", "SQL", "Framer Motion", "Three.js", "Django"
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent pt-16 pb-0 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start group text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-3xl font-bold font-poppins cursor-pointer text-white tracking-tighter mb-4"
            >
              Portfolio
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Building fast, scalable, and modern websites for businesses worldwide.
            </p>
          </div>

          {/* Social Presence */}
          <div className="flex flex-row items-center gap-8">
            <motion.a 
              href="https://github.com/kanishkjn13" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-16 h-16 rounded-[22px] glass flex items-center justify-center text-slate-400 hover:text-white transition-all duration-500 overflow-hidden border border-white/5 hover:border-primary-500/30"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <Github size={26} className="relative z-10 group-hover:mb-2 transition-all duration-500" />
               <span className="absolute bottom-2 text-[8px] font-black uppercase tracking-[0.2em] text-primary-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">GitHub</span>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/kanishkjn" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-16 h-16 rounded-[22px] glass flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-500 overflow-hidden border border-white/5 hover:border-blue-500/30"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <Linkedin size={26} className="relative z-10 group-hover:mb-2 transition-all duration-500" />
               <span className="absolute bottom-2 text-[8px] font-black uppercase tracking-[0.2em] text-blue-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Cinematic Tech Marquee (Bottom of Footer) */}
      <div className="w-full py-10 bg-white/[0.01] border-t border-white/5 backdrop-blur-sm mt-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <span 
              key={i}
              className="text-lg md:text-xl font-black font-space text-primary-400/10 hover:text-primary-400 transition-colors uppercase tracking-[0.2em] cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
