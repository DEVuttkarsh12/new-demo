import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Brain, Shield, Film, BookOpen, Star } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

import type { ReactNode } from "react";

const FeatureCard = ({ children, index, className = "" }: { children: ReactNode; index: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-3xl border border-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section id="courses" className="relative min-h-screen bg-slate-950 py-24 px-4 md:px-6">
      {/* Subtle Noise Background */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <WordsPullUpMultiStyle
            containerClassName="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-white"
            segments={[
              {
                text: "Accelerate your career with future-proof skills.",
                className: "text-white",
              },
            ]}
          />
          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base">
            From Artificial Intelligence to advanced Cybersecurity, our curriculum is designed 
            to make you an industry leader.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: AI Training */}
          <FeatureCard index={0} className="bg-slate-900/40 p-8 h-full flex flex-col justify-between group hover:bg-slate-900/60 transition-colors">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
                <Brain size={24} className="text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Artificial Intelligence. <span className="opacity-20 text-sm">01</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Neural Networks",
                  "Machine Learning",
                  "NLP & Generative AI",
                  "Project-based learning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check size={14} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:gap-3 transition-all">
                Explore Tech <ArrowRight size={14} />
              </a>
            </div>
          </FeatureCard>

          {/* Card 2: CISSP / Cybersecurity */}
          <FeatureCard index={1} className="bg-slate-900/40 p-8 h-full flex flex-col justify-between group hover:bg-slate-900/60 transition-colors">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Shield size={24} className="text-purple-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                CISSP Security. <span className="opacity-20 text-sm">02</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Information Security",
                  "Risk Management",
                  "Network Security",
                  "Compliance & Ethics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check size={14} className="text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest hover:gap-3 transition-all">
                Shield Systems <ArrowRight size={14} />
              </a>
            </div>
          </FeatureCard>

          {/* Card 3: Video Editing & IT */}
          <FeatureCard index={2} className="bg-slate-900/40 p-8 h-full flex flex-col justify-between group hover:bg-slate-900/60 transition-colors">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Film size={24} className="text-cyan-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Creative Tech. <span className="opacity-20 text-sm">03</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Pro Video Editing",
                  "Motion Graphics",
                  "IT Fundamentals",
                  "Software Mastery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check size={14} className="text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest hover:gap-3 transition-all">
                Create Media <ArrowRight size={14} />
              </a>
            </div>
          </FeatureCard>

          {/* Card 4: School Tutorials (IX-X) */}
          <FeatureCard index={3} className="bg-slate-900/40 p-8 h-full flex flex-col justify-between group hover:bg-slate-900/60 transition-colors">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <BookOpen size={24} className="text-emerald-400" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                School Elite. <span className="opacity-20 text-sm">04</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Class IX & X",
                  "Advanced Maths",
                  "Commerce Core",
                  "Interactive Learning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check size={14} className="text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest hover:gap-3 transition-all">
                Academic Excellence <ArrowRight size={14} />
              </a>
            </div>
          </FeatureCard>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 flex flex-col items-center">
          <div className="max-w-3xl w-full p-8 md:p-12 rounded-[2.5rem] bg-slate-900/80 border border-white/5 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Star size={120} className="text-primary fill-primary" />
            </div>
            <div className="flex items-center gap-1 text-primary mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary" />
              ))}
              <span className="ml-3 text-xs font-bold uppercase tracking-widest text-slate-500">Justdial Verified</span>
            </div>
            <p className="text-lg md:text-xl italic text-slate-200 leading-relaxed relative z-10">
              "I had a good experience with Comet Ai Institute, a coaching center. 
              The prices are reasonable, which is great for students. They also have 
              regular sessions that really help in understanding the core concepts."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-primary">J</div>
              <div>
                <p className="text-white font-bold">jaya</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

