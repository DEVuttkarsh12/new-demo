import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { ScrollRevealText } from "./ScrollRevealText";

export const About = () => {
  return (
    <section className="bg-black py-24 px-4 md:py-32 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#101010] p-8 md:p-16 lg:p-24">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 text-[10px] uppercase tracking-widest text-primary sm:text-xs">
            15 Years of Excellence
          </span>

          <WordsPullUpMultiStyle
            containerClassName="max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: "We are Briliko, ", className: "font-normal" },
              { text: "Hoshiarpur's top multimedia institute. ", className: "italic font-serif" },
              {
                text: "Specializing in 3D animation, AUTOCAD, and visual storytelling with a 5.0 star legacy.",
                className: "font-normal",
              },
            ]}
          />

          <ScrollRevealText
            className="mt-12 max-w-2xl text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
            text="Over the last fifteen years, we have empowered hundreds of students to transform their creativity into careers. Our high-quality courses are led by experienced teachers who help you learn a lot and stay ahead in the competitive digital landscape of today."
          />
        </div>
      </div>
    </section>
  );
};
