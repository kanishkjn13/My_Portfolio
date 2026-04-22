import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Search, Server, Sparkles, Terminal, Briefcase } from "lucide-react";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    color: "text-blue-400",
    percentage: "94%",
    subskills: "HTML, CSS, Bootstrap, React, Tailwind"
  },
  {
    name: "Backend Development",
    icon: Server,
    color: "text-green-400",
    percentage: "86%",
    subskills: "Django, Python, REST API"
  },
  {
    name: "UI/UX Design",
    icon: Layers,
    color: "text-purple-400",
    percentage: "89%",
    subskills: "Figma, Canva, Responsive Design"
  },
  {
    name: "Database Architecture",
    icon: Database,
    color: "text-yellow-400",
    percentage: "84%",
    subskills: "SQL, SQLite"
  },
  {
    name: "SEO Friendly",
    icon: Search,
    color: "text-pink-400",
    percentage: "82%",
    subskills: "Performance, Meta tags, Vitals"
  },
  {
    name: "Clean Code",
    icon: Code,
    color: "text-cyan-400",
    percentage: "96%",
    subskills: "SOLID, UX-driven, Scalability"
  },
  {
    name: "Project Volume",
    icon: Briefcase,
    color: "text-orange-400",
    percentage: "5+",
    subskills: "Delivered, Scalable, Production-Ready"
  },
  {
    name: "Performance Results",
    icon: Sparkles,
    color: "text-indigo-400",
    percentage: "98%",
    subskills: "Faster Load, SEO Rank, User Retention"
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden pt-32 pb-20 md:pt-16 md:pb-2">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modern Header */}
        <div className="mb-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4 justify-center md:justify-start"
          >
            <div className="h-[2px] w-8 bg-primary-400"></div>
            <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
              KNOW ME BETTER
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-space text-white tracking-tighter leading-[1.1] uppercase">
            THE STORY <br />
            <span className="text-premium-gradient">BEHIND THE CODE.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Bio & Experimental Layout Section */}
          <div className="relative h-full">
            {/* Background Decorative Element (Giant Quote) */}
            <span className="absolute -top-10 -left-10 text-[150px] font-black font-space text-white/[0.03] select-none pointer-events-none">
              "
            </span>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <div className="glass-card p-6 md:p-8 rounded-[32px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] bg-slate-900/40 relative overflow-hidden group h-full flex flex-col justify-center">
                  {/* Internal Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] group-hover:bg-primary-500/20 transition-colors duration-1000"></div>

                  {/* Editorial Layout */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                        <Terminal size={20} />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Full Stack Perspective</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black font-space mb-6 text-white leading-[1.1] tracking-tight">
                      I bridge the gap between <span className="text-premium-gradient">intelligent systems</span> and human experience.
                    </h3>

                    <div className="space-y-4">
                      <p className="text-base text-slate-100 font-light leading-relaxed">
                        I’m a <span className="text-white font-medium border-b border-primary-500/30 pb-1 font-space">Full-Stack Developer</span> who creates reliable, fast, and user-focused web applications for real-world business needs. Every project I build is designed to deliver performance and a professional user experience.
                      </p>

                      <div className="flex gap-6 py-4 border-y border-white/5">
                        <div className="flex flex-col gap-1">
                          <span className="text-xl font-black font-space text-white">RELIABLE</span>
                          <span className="text-[8px] text-slate-400 uppercase tracking-widest">Execution</span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10"></div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xl font-black font-space text-white">USER-FIRST</span>
                          <span className="text-[8px] text-slate-400 uppercase tracking-widest">Experience</span>
                        </div>
                      </div>

                      <div className="space-y-4 text-slate-200 font-light">
                        <p className="leading-relaxed italic border-l-2 border-primary-500/30 pl-4">
                          "I focus on performance, clean design, and user experience to deliver real results."
                        </p>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                          I have built multiple projects using React, Django, and modern web technologies.
                        </p>
                      </div>
                    </div>

                    {/* Decorative Signature Placeholder */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="font-space text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold italic">Kanishk Jain</span>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>

          {/* Interactive Skills Cards Grid */}
          <div className="pt-10 lg:pt-0 h-full">
            <div className="grid grid-cols-2 gap-4 h-full items-stretch">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.05}
                    className="h-full"
                  >
                    <div className="glass-card p-4 rounded-[20px] border border-white/5 hover:border-primary-500/40 transition-all duration-500 group flex flex-col h-full hover:bg-primary-500/[0.03] cursor-default relative overflow-hidden backdrop-blur-md min-h-[110px]">
                       
                       {/* Subtle Theme Glow */}
                       <div className={`absolute -top-10 -left-10 w-32 h-32 opacity-10 blur-[50px] transition-all duration-500 group-hover:opacity-30 ${skill.color.replace('text-', 'bg-')}`}></div>

                       {/* Background Number / Accent */}
                       <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.03] italic pointer-events-none group-hover:text-primary-500/[0.05] transition-colors duration-500">
                          0{index + 1}
                       </span>

                       <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform shadow-xl border border-white/10`}>
                             <skill.icon size={22} />
                          </div>
                          <div className="flex-1">
                             <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] leading-tight mb-1">
                                {skill.name}
                             </h4>
                             <div className="flex items-center gap-2">
                                <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
                                   <motion.div 
                                     className="h-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                                     initial={{ width: 0 }}
                                     whileInView={{ width: skill.percentage.includes('%') ? skill.percentage : "100%" }}
                                     transition={{ duration: 1, delay: 0.2 }}
                                   />
                                </div>
                                <span className="text-[10px] font-black text-primary-400 font-space whitespace-nowrap">
                                   {skill.percentage}
                                </span>
                             </div>
                          </div>
                       </div>

                       <div className="flex flex-wrap gap-2 mt-auto">
                          {skill.subskills.split(",").map((sub, i) => (
                             <span 
                                key={i}
                                className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-[8px] font-bold uppercase tracking-widest border border-white/5 group-hover:bg-primary-500/10 group-hover:text-primary-300 group-hover:border-primary-500/20 transition-all duration-500"
                             >
                                {sub.trim()}
                             </span>
                          ))}
                       </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
