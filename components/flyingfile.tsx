"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

export default function FlyingFile() {
  const [imgSrc, setImgSrc] = useState("/images/upload.png");
  const [visible, setVisible] = useState(true); // New visibility state
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleDragStart = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    if (!main) return;

    function onScroll() {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();

      if (footerRect.top <= 400) {
        // Make image disappear instead of changing to bot.png
        controls.start({
          scale: 0.8,
          rotate: 10,
          opacity: 0 // Fade out
        });
        setVisible(false);
      } else if (footerRect.top <= 1300) {
        controls.start({
          scale: 1.1,
          rotate: -5,
          opacity: 1 // Fade in
        });
        setImgSrc("/images/features.png");
        setVisible(true);
      } else if (footerRect.top <= 1900) {
        controls.start({
          scale: 1,
          rotate: 0,
          opacity: 1
        });
        setImgSrc("/images/demo.png");
        setVisible(true);
      } else {
        controls.start({
          scale: 1.2,
          rotate: 5,
          opacity: 1
        });
        setImgSrc("/images/upload.png");
        setVisible(true);
      }
    }

    main.addEventListener("scroll", onScroll);
    onScroll();

    return () => main.removeEventListener("scroll", onScroll);
  }, [controls]);

  const handleDragEnd = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    });
  };

  return (
    <motion.div
      className="fixed cursor-grab z-50 select-none"
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
      {visible && ( // Only render image when visible is true
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
      )}

      {/* Floating particles - also hide when invisible */}
      {visible && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none"
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
            repeatDelay: 8
          }}
        />
      ))}
    </motion.div>
  );
}