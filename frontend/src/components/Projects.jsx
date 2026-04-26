import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Link } from "react-router-dom";
import KraftMagicImg from "../assets/craftmagic.png";
import ResumeVisionImg from "../assets/resumevision.png";

const projects = [
  {
    id: "01",
    title: "Upcoming Project",
    description: "A high-performance web application currently in development. Coming soon.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "AI", "Cloud"],
    demoLink: "#",
    githubLink: "#",
    accent: "from-purple-600/20 to-pink-600/20"
  },
  {
    id: "02",
    title: "ResumeVisionAI",
    description: "Built an AI-powered resume analyzer that improves ATS scores and provides actionable feedback for job seekers.",
    image: ResumeVisionImg,
    tech: ["React", "AI/ML", "Node.js"],
    demoLink: "https://resumevisionai.netlify.app/",
    githubLink: "#",
    accent: "from-blue-600/20 to-cyan-600/20"
  },
  {
    id: "03",
    title: "The Kraft Magic",
    description: "Developed a custom e-commerce platform for handcrafted products with a smooth UI and optimized performance.",
    image: KraftMagicImg,
    tech: ["React", "Django", "Tailwind"],
    demoLink: "https://thecraftmagic.vercel.app/",
    githubLink: "#",
    accent: "from-amber-600/20 to-orange-600/20"
  }
];

import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const isLast = index === total - 1;
  const targetScale = isLast ? 1 : 0.95;

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);

  return (
    <div ref={cardRef} className="snap-section h-screen w-full sticky top-0 flex items-center justify-center pt-28 pb-10 px-4 md:px-0 z-10" style={{ perspective: "1500px" }}>
      <motion.div style={{ scale, opacity, rotateX }} className="w-full max-w-5xl mx-auto h-full transform-gpu">
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1.02}
          transitionSpeed={2000}
          className="w-full h-full"
          tiltReverse={true}
        >
          <div className="w-full h-full bg-[#050b1e]/90 backdrop-blur-xl rounded-[40px] overflow-hidden flex flex-col relative border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            
            {/* Ghost Numbering */}
            <motion.span
              style={{ y: numberY }}
              className="absolute top-8 right-8 text-8xl md:text-[140px] font-black text-white/[0.02] font-space select-none pointer-events-none z-0 leading-none mix-blend-overlay"
            >
              {project.id}
            </motion.span>

            {/* Image Container with Marquee Hover */}
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[50%] relative overflow-hidden group cursor-pointer block"
            >
              <motion.img
                style={{ y: imageY }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b1e] via-[#050b1e]/20 to-transparent opacity-90 transition-opacity duration-500"></div>

              {/* Animated Marquee Overlay */}
              <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center overflow-hidden">
                 <div className="flex whitespace-nowrap gap-4 -rotate-6 scale-110">
                    <motion.div 
                      animate={{ x: [0, -1000] }}
                      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                      className="flex gap-4 items-center text-4xl md:text-6xl font-black font-space uppercase text-white/50 tracking-tighter"
                    >
                      <span>VIEW LIVE DEMO • EXPLORE PROJECT • VIEW LIVE DEMO • EXPLORE PROJECT • VIEW LIVE DEMO • EXPLORE PROJECT •</span>
                    </motion.div>
                 </div>
                 <div className="absolute w-20 h-20 rounded-full bg-white text-primary-600 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={32} strokeWidth={3} />
                 </div>
              </div>
            </a>

            {/* Content Area */}
            <div className="w-full h-[50%] p-6 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="flex flex-col h-full justify-center"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-primary-400 shadow-sm">
                      {t}
                    </span>
                  ))}
                </motion.div>

                <motion.h3 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl sm:text-4xl lg:text-5xl font-black font-space tracking-tight text-white mb-4 leading-[1.1] group-hover:text-primary-300 transition-colors">
                  {project.title}
                </motion.h3>

                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-slate-300 font-light leading-relaxed mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-3xl">
                  {project.description}
                </motion.p>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative z-10 flex items-center gap-2">Live Demo <ArrowUpRight size={16} /></span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="relative px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2 transition-all group/src hover:bg-white/5"
                  >
                    <Github size={18} className="group-hover/src:text-primary-400 transition-colors" /> Source Code
                  </a>
                </motion.div>
              </motion.div>

              {/* Accent Glow inside card */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.accent} blur-[100px] opacity-30 pointer-events-none`}></div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-transparent overflow-clip">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-primary-400"></div>
              <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
                SELECTED
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-7xl font-black font-space text-white tracking-tighter leading-[1.1] uppercase"
            >
              CURATED <span className="text-premium-gradient">WORKS.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-end gap-6"
          >
            <Link
              to="/all-projects"
              className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:border-primary-500/50"
            >
              <div className="absolute inset-0 bg-primary-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center gap-2 text-white font-black uppercase tracking-[0.3em] text-[9px]">
                View All Works
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Sticky Stacked Cards */}
        <div className="relative w-full pb-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
          ))}
        </div>

      </div>
    </section>
  );
}
