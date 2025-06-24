"use client";
import { motion } from "framer-motion";

export default function Bgeffect() {
  // Configuration for the upload lines
  const lineCount = 40;
  const lineHeight = "150px";
  const animationDuration = 4;

  return (
    <div className="absolute inset-0 z-0">
      {[...Array(lineCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 bg-purple-400/30"
          initial={{ y: "200vh" }}
          animate={{
            y: `-${lineHeight}`,
            transition: {
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            },
          }}
          style={{
            height: lineHeight,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
}
