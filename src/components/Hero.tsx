import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="AI Neural Network"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="noise-overlay pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            {/* Left: Giant Heading */}
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 border border-primary/30"
                >
                  <Sparkles size={12} />
                  Pioneering Intelligence
                </motion.div>
              </div>
              <WordsPullUp
                text="COMET AI"
                showAsterisk
                className="text-[18vw] font-bold leading-[0.85] tracking-[-0.05em] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[12vw] text-white glow-text"
              />
            </div>

            {/* Right: Description + Button */}
            <div className="flex flex-col gap-6 md:col-span-4 md:pb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base border-l-2 border-primary/50 pl-4"
              >
                The future of intelligence is here. Comet Ai Institute is Mohali's premier 
                destination for Artificial Intelligence training, cybersecurity, and 
                advanced technical tutorials. Empowering the next generation of 
                innovators with industry-certified expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <button className="group flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 font-bold text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <span className="text-sm sm:text-base">Join the Orbit</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 transition-transform group-hover:rotate-[-45deg] sm:h-10 sm:w-10">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

