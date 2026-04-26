import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ProjectNavbar from "./components/ProjectNavbar";
import Footer from "./components/Footer";
import { useIsMobile } from "./hooks/useIsMobile";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import AllProjects from "./pages/AllProjects";

const Background3D = lazy(() => import("./components/canvas/Background3D"));

import ScrollProgress from "./components/ScrollProgress";

function AppContent({ loading, setLoading }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAllProjectsPage = location.pathname === "/all-projects";

  // Ensure the website starts from the home page on refresh/mount
  useEffect(() => {
    if (loading) {
      navigate("/", { replace: true });
    }
  }, [loading, navigate]);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Reset scroll to top on every route change
    lenis.scrollTo(0, { immediate: true });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    // Global GSAP ScrollTrigger animations
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 30, scale: 0.98 },
        {
          duration: 1.2,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, [loading, location.pathname]); // Listen to pathname changes

  return (
    <div className="bg-[#020617]">
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && <ScrollProgress />}

      {!loading && (
        <Suspense fallback={null}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="fixed inset-0 z-0 pointer-events-none scale-110"
          >
            <Background3D />
          </motion.div>
        </Suspense>
      )}

      {!loading && (
        <div className="fixed inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      )}

      <main className="relative z-10 min-h-screen bg-transparent text-slate-100 font-inter">
        {!loading && (isAllProjectsPage ? <ProjectNavbar /> : <Navbar />)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <Router>
      <AppContent loading={loading} setLoading={setLoading} />
    </Router>
  );
}

export default App;
