import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { ScrollRevealText } from "./ScrollRevealText";

export const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-24 px-4 md:py-32 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-900/50 border border-white/5 p-8 md:p-16 lg:p-24 backdrop-blur-sm">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 text-[10px] uppercase tracking-widest text-primary sm:text-xs font-bold">
            Pioneering Intelligence Since 2024
          </span>

          <WordsPullUpMultiStyle
            containerClassName="max-w-4xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl text-white"
            segments={[
              { text: "We are Comet Ai, ", className: "font-bold" },
              { text: "Mohali's leading hub for AI excellence. ", className: "text-primary opacity-90" },
              {
                text: "Transforming learners into tech pioneers with a 5.0 star verified legacy.",
                className: "font-normal text-slate-400",
              },
            ]}
          />

          <ScrollRevealText
            className="mt-12 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base"
            text="Strategically located in Sector 70, Mohali, Comet Ai Institute specializes in cutting-edge Artificial Intelligence training and professional cybersecurity certifications like CISSP. Our mission is to bridge the gap between academic learning and industry demands through hands-on technical tutorials and expert mentorship."
          />
        </div>
      </div>
    </section>
  );
};

