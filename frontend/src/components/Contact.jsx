import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

import Tilt from "react-parallax-tilt";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [statusConfig, setStatusConfig] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusConfig(null);
    try {
      const res = await fetch("https://ashwin3031.pythonanywhere.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusConfig({ type: 'success', message: 'Your message has been received. I’ll get back to you within 24 hours.' });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatusConfig({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatusConfig({ type: 'error', message: 'Network error. Please make sure the backend is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="snap-section py-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Solid Contact Info */}
          <div className="gsap-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary-400"></div>
              <span className="text-primary-400 uppercase tracking-[0.4em] font-bold text-[10px]">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-space text-white tracking-tighter leading-[1.1] mb-10">
              LET'S <br />
              <span className="text-premium-gradient">CONNECT.</span>
            </h2>

            <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-12 font-light italic border-l-2 border-primary-500/30 pl-6 py-1">
              "Have a project in mind? Let’s discuss how I can help you."
            </p>

            <div className="space-y-4">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                <a href="mailto:kanishkjn13@gmail.com" className="flex items-center gap-5 glass p-6 rounded-[24px] border border-white/5 hover:border-primary-500/30 transition-all duration-500 group">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                   </div>
                   <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Email Me</p>
                      <p className="text-white font-bold group-hover:text-primary-400 transition-colors">kanishkjn13@gmail.com</p>
                   </div>
                </a>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                <a href="https://wa.me/919300040072" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 glass p-6 rounded-[24px] border border-white/5 hover:border-green-500/30 transition-all duration-500 group">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <MessageCircle size={20} />
                   </div>
                   <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">WhatsApp</p>
                      <p className="text-white font-bold group-hover:text-green-400 transition-colors">+91 9300040072</p>
                   </div>
                </a>
              </Tilt>


            </div>
          </div>

          {/* Right Side: High-End Form */}
          <div className="gsap-reveal relative">
            {/* Subtle floating accent behind the card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-[60px] pointer-events-none animate-pulse"></div>

            <form onSubmit={handleSubmit} className="glass-card p-10 md:p-14 rounded-[48px] border border-white/10 space-y-8 bg-slate-900/40 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-ping"></div>
                   <span className="text-[10px] font-bold text-white tracking-[0.3em] uppercase">Direct Channel</span>
                </div>
                <span className="text-[8px] text-slate-600 font-bold tracking-[0.2em] uppercase">Secure Transmission</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Kanishk Jain"
                    className="w-full bg-white/5 text-white rounded-2xl py-5 px-6 border border-white/5 focus:border-primary-500/40 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 font-space text-base shadow-inner backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full bg-white/5 text-white rounded-2xl py-5 px-6 border border-white/5 focus:border-primary-500/40 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 font-space text-base shadow-inner backdrop-blur-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Project Details</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 text-white rounded-2xl py-5 px-6 border border-white/5 focus:border-primary-500/40 focus:bg-white/10 outline-none transition-all placeholder:text-slate-700 resize-none font-space text-base shadow-inner backdrop-blur-sm leading-relaxed"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {statusConfig && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-5 rounded-2xl text-xs font-bold tracking-wide border ${statusConfig.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}
                >
                  {statusConfig.message}
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 hover:bg-primary-400 hover:text-white active:scale-95 disabled:opacity-50 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
              >
                {isSubmitting ? "SENDING..." : "Send Project Request"}
                {!isSubmitting && <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
              </button>

              <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] pt-4">
                Or email directly: <a href="mailto:kanishkjn13@gmail.com" className="text-primary-400 hover:text-white transition-colors underline underline-offset-4 decoration-primary-500/30">kanishkjn13@gmail.com</a>
              </p>
            </form>
          </div>

        </div>

      </div>

    </section>
  );
}
