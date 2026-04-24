import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

import type { ReactNode } from "react";

const FeatureCard = ({ children, index, className = "" }: { children: ReactNode; index: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="relative min-h-screen bg-black py-24 px-4 md:px-6">
      {/* Subtle Noise Background */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <WordsPullUpMultiStyle
            containerClassName="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              {
                text: "Professional courses for aspiring creators.",
                className: "text-primary",
              },
            ]}
          />
          <WordsPullUpMultiStyle
            containerClassName="mt-2 text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: "Learn from the best. Build your future.", className: "text-gray-500" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          {/* Card 1: 3D Animation */}
          <FeatureCard index={0} className="lg:h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-medium text-[#E1E0CC]">Advanced 3D Animation</p>
              <p className="text-xs text-primary/70">Industry standard workflows</p>
            </div>
          </FeatureCard>

          {/* Card 2: AUTOCAD Training */}
          <FeatureCard index={1} className="bg-[#212121] p-6 lg:h-full">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-primary/10 sm:h-12 sm:w-12">
                  <Check size={24} className="text-primary" />
                </div>
                <h3 className="mb-4 text-lg font-medium">
                  AUTOCAD Mastery. <span className="opacity-40">01</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Architectural design",
                    "Engineering drafting",
                    "Blueprinting skills",
                    "Certification prep",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check size={14} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#" className="group mt-8 flex items-center gap-1 text-sm font-medium">
                Enroll now
                <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 3: Multimedia & VFX */}
          <FeatureCard index={2} className="bg-[#212121] p-6 lg:h-full">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-primary/10 sm:h-12 sm:w-12">
                  <Check size={24} className="text-primary" />
                </div>
                <h3 className="mb-4 text-lg font-medium">
                  Multimedia & VFX. <span className="opacity-40">02</span>
                </h3>
                <ul className="space-y-3">
                  {["Visual effects", "Video editing", "Graphic design", "Digital painting"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check size={14} className="text-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <a href="#" className="group mt-8 flex items-center gap-1 text-sm font-medium">
                Enroll now
                <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 4: Student Review (Janvi) */}
          <FeatureCard index={3} className="bg-[#101010] p-6 lg:h-full border border-primary/10">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Check key={i} size={14} className="fill-primary" />
                  ))}
                </div>
                <h3 className="mb-4 text-lg font-medium">
                  Happy Students. <span className="opacity-40">03</span>
                </h3>
                <p className="text-sm italic leading-relaxed text-gray-400">
                  "Briliko Institute Multimedia in Hoshiarpur is excellent! The courses are of high quality. The teachers help us learn a lot."
                </p>
                <p className="mt-4 text-xs font-medium text-primary">— Janvi, Student</p>
              </div>
              <a href="#" className="group mt-8 flex items-center gap-1 text-sm font-medium">
                View all reviews
                <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};
