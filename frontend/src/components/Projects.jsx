import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-transparent overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-primary-400"></div>
              <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
                SELECTED
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black font-space text-white tracking-tighter leading-[1.1] uppercase">
              CURATED <span className="text-premium-gradient">WORKS.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-6">

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
          </div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="group relative h-full glass-card rounded-[32px] overflow-hidden border border-white/5 flex flex-col hover:border-primary-500/30 transition-colors duration-500">
                  
                  {/* Image Container (Clickable) */}
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] overflow-hidden rounded-t-[32px] cursor-pointer group/img"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity"></div>
                    
                    {/* Ghost Numbering */}
                    <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.05] font-space select-none">
                      {project.id}
                    </span>

                    {/* Quick Link Badge */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl glass flex items-center justify-center text-white border border-white/20 z-20 group-hover:bg-primary-500 transition-colors duration-300 group-hover/img:scale-110">
                      <ArrowUpRight size={20} />
                    </div>
                  </a>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-slate-400">
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



                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <a href={project.githubLink} className="flex items-center gap-2 text-white font-bold tracking-widest text-[10px] uppercase group/link">
                        <Github size={16} className="group-hover/link:text-primary-400 transition-colors" />
                        <span className="relative overflow-hidden block">
                          <span className="block group-hover/link:-translate-y-full transition-transform duration-300">View Source</span>
                          <span className="absolute top-0 left-0 block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 text-primary-400">Codebase</span>
                        </span>
                      </a>
                      
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white font-bold tracking-widest text-[10px] uppercase transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Accent Glow */}
                  <div className={`absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br ${project.accent} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        

      </div>

      {/* Floating Atmosphere */}
      <div className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
}
