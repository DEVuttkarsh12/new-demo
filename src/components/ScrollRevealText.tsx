import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

const Char = ({ char, progress, scrollYProgress }: { char: string; progress: number; scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(
    scrollYProgress,
    [progress - 0.1, progress + 0.05],
    [0.2, 1]
  );

  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

export const ScrollRevealText = ({ text, className }: ScrollRevealTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const totalChars = characters.length;

  return (
    <p ref={ref} className={className}>
      {characters.map((char, index) => (
        <Char
          key={index}
          char={char}
          progress={index / totalChars}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
