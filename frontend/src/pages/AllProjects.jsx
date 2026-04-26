import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import KraftMagicImg from "../assets/craftmagic.png";
import ResumeVisionImg from "../assets/resumevision.png";

const allProjects = [
  {
    id: "01",
    title: "ResumeVisionAI",
    description: "Built an AI-powered resume analyzer that improves ATS scores and provides actionable feedback for job seekers.",
    image: ResumeVisionImg,
    tech: ["React", "AI/ML", "Node.js"],
    demoLink: "https://resumevisionai.netlify.app/",
    githubLink: "#",
    accent: "from-blue-600/20 to-cyan-600/20"
  },
  {
    id: "02",
    title: "The Kraft Magic",
    description: "Developed a custom e-commerce platform for handcrafted products with a smooth UI and optimized performance.",
    image: KraftMagicImg,
    tech: ["React", "Django", "Tailwind"],
    demoLink: "https://thecraftmagic.vercel.app/",
    githubLink: "#",
    accent: "from-amber-600/20 to-orange-600/20"
  },
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">


        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-primary-400"></div>
            <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
              EXPLORE
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-space tracking-tighter leading-[1.1] uppercase mb-8">
            ALL <span className="text-premium-gradient">PROJECTS.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-light leading-relaxed italic border-l-2 border-primary-500/30 pl-6 py-2">
            "Every project is a fusion of logic and aesthetics. Explore my complete body of work across various technologies and domains."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                <div className="group relative h-full glass-card rounded-[32px] overflow-hidden border border-white/5 flex flex-col hover:border-primary-500/30 transition-colors duration-500">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="relative aspect-[16/10] overflow-hidden rounded-t-[32px] cursor-pointer">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-white border border-white/20 z-20 group-hover:bg-primary-500 transition-colors duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </a>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black font-space tracking-tight text-white mb-3 leading-none group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-200 font-light leading-relaxed mb-4 flex-grow text-sm">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <a href={project.githubLink} className="flex items-center gap-2 text-white font-bold tracking-widest text-[9px] uppercase group/link">
                        <Github size={16} className="group-hover/link:text-primary-400 transition-colors" />
                        <span>Source</span>
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white font-bold tracking-widest text-[9px] uppercase transition-colors">
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.accent} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Centered Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 flex flex-col items-center justify-center text-center pb-12"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary-500/50 to-transparent mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-black font-space text-slate-500 uppercase tracking-[0.3em] mb-4">
            More Innovations <span className="text-white/20">Coming Soon.</span>
          </h3>
          <p className="text-[10px] font-bold text-primary-400/40 uppercase tracking-[0.5em]">
            Stay Tuned for the next chapter
          </p>
        </motion.div>
      </div>
    </div>
  );
}
