"use client";

import { motion } from "framer-motion";
import Footer from "./footer";

export default function final() {
  // Configuration for the upload lines
  const lineCount = 40; // More lines
  const lineHeight = "150px"; // Shorter height
  const animationDuration = 4; // Animation speed

  return (
    <section id="footer" className="flex flex-col min-h-screen w-full relative bg-gray-900 overflow-hidden">
      {/* Animated upload lines */}
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
                delay: Math.random() * 2 // Staggered start
              }
            }}
            style={{
              height: lineHeight,
              left: `${(Math.random() * 100)}%`, // Random horizontal position
              opacity: 0.3 + Math.random() * 0.4 // Random opacity
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center items-center gap-8 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white">
          Ready to simplify your file uploads?
        </h2>
        <h2 className="text-2xl text-center text-purple-200">
          Get started with UploadThing today!
        </h2>
        <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 rounded-lg text-white px-8 py-3 font-medium text-lg shadow-lg hover:shadow-purple-500/30 mt-6">
          Get Started
        </button>
      </div>
      <Footer/>
    </section>
  );
}