import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Layout, PenTool } from "lucide-react";
import Tilt from "react-parallax-tilt";

const services = [
  {
    id: "01",
    title: "WEBSITE DEVELOPMENT",
    subtitle: "High-Performance Platforms",
    icon: Layout,
    description: "I develop fast, scalable, and modern websites using React and Next.js.",
    features: ["Performance Core", "Fluid Motion"],
    accent: "from-blue-600/10 to-indigo-600/20"
  },
  {
    id: "02",
    title: "UI/UX IMPROVEMENTS",
    subtitle: "Award-Winning Visuals",
    icon: PenTool,
    description: "I redesign websites to improve user experience, performance, and visual appeal.",
    features: ["Motion Design", "Visual Clarity"],
    accent: "from-pink-600/10 to-purple-600/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="snap-section py-24 bg-transparent relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Compact Modern Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="gsap-reveal flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-primary-400"></div>
              <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
                OFFERING
              </span>
            </div>
            <h2 className="gsap-reveal text-3xl sm:text-4xl md:text-6xl font-black font-space text-white tracking-tighter leading-[1.1]">
              DEDICATED <span className="text-premium-gradient">SERVICES.</span>
            </h2>
          </div>
          <p className="gsap-reveal text-slate-500 text-sm md:text-right max-w-xs uppercase tracking-widest font-bold">
            Focused on Quality, Performance, and User Experience.
          </p>
        </div>

        {/* Compact Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  <div className={`relative h-full glass-card rounded-[32px] p-10 border border-white/5 overflow-hidden group hover:border-primary-500/30 transition-colors duration-500`}>

                    {/* Ghost Numbering */}
                    <span className="absolute top-6 right-10 text-8xl font-black text-white/[0.03] font-space group-hover:text-primary-400/10 transition-colors duration-700 select-none">
                      {service.id}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-400 mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-500">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black font-space tracking-tight text-white mb-2 leading-none">
                        {service.title}
                      </h3>
                      <p className="text-primary-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                        {service.subtitle}
                      </p>

                      <p className="text-slate-400 leading-relaxed mb-8 font-light text-base md:text-lg">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-primary-400" />
                            <span className="text-slate-300 font-bold tracking-widest text-[9px] uppercase">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated Background Accent */}
                    <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.accent} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                  </div>
                </Tilt>
              </motion.div>
            )
          })}
        </div>

      </div>

    </section>
  );
}
