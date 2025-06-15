"use client";

import { useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

export default function FlyingFile() {
  const [imgSrc] = useState("/images/file.png");
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const handleDragStart = (e: any) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    });
  };

  return (
    <motion.div
      className="absolute cursor-grab z-50 select-none"
      style={{
        top: "200px",
        right: "10%",
        width: "min(350px, 30vw)",
        height: "auto",
        x,
        y,
        rotateX,
        rotateY,
      }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileTap={{ cursor: "grabbing", scale: 0.95 }}
      transition={{ type: "spring", damping: 10 }}
    >
      <motion.img
        src={imgSrc}
        alt="Interactive file"
        className="w-full h-full pointer-events-none"
        draggable="false"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        onDragStart={handleDragStart}
      />

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            repeatDelay: 2,
          }}
        />
      ))}
    </motion.div>
  );
}
