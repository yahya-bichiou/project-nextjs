"use client";

import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Final() {
  // Configuration des lignes de téléchargement
  const lineCount = 40; // Plus de lignes
  const lineHeight = "150px"; // Hauteur réduite
  const animationDuration = 4; // Vitesse d'animation

  return (
    <section id="footer" className="flex flex-col min-h-screen w-full relative bg-gray-900 overflow-hidden">
      {/* Lignes de téléchargement animées */}
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
                delay: Math.random() * 2 // Décalage aléatoire
              }
            }}
            style={{
              height: lineHeight,
              left: `${(Math.random() * 100)}%`, // Position horizontale aléatoire
              opacity: 0.3 + Math.random() * 0.4 // Opacité aléatoire
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-center items-center gap-8 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white">
          Prêt à simplifier vos téléchargements ?
        </h2>
        <h2 className="text-2xl text-center text-purple-200">
          Essayez UploadThing dès aujourd'hui !
        </h2>
        <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 rounded-lg text-white px-8 py-3 font-medium text-lg shadow-lg hover:shadow-purple-500/30 mt-6">
          Commencer
        </button>
      </div>
      <Footer/>
    </section>
  );
}