import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="noise-overlay pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.7]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            {/* Left: Giant Heading */}
            <div className="md:col-span-8">
              <WordsPullUp
                text="Briliko"
                showAsterisk
                className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              />
            </div>

            {/* Right: Description + Button */}
            <div className="flex flex-col gap-6 md:col-span-4 md:pb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
              >
                With over 15 years of excellence in Hoshiarpur, Briliko is a premier
                multimedia institute dedicated to shaping the next generation of
                3D animators, filmmakers, and digital artists through industry-leading
                training and mentorship.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 font-medium text-black transition-all hover:gap-3"
              >
                <span className="text-sm sm:text-base">Start learning</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
