import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
}

export const WordsPullUpMultiStyle = ({ segments, containerClassName }: WordsPullUpMultiStyleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(" ");
        return words.map((word, wordIndex) => (
          <motion.span
            key={`${segmentIndex}-${wordIndex}`}
            variants={child}
            className={`mr-[0.2em] inline-block ${segment.className}`}
          >
            {word}
          </motion.span>
        ));
      })}
    </motion.div>
  );
};
