import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const JourneyHero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Animated grid pattern with green/snake theme */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        animate={{
          y: [0, -40],
          x: [0, -40],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Green glowing orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-400 opacity-5 blur-3xl"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          className="mb-8 inline-block"
          initial={{ rotate: -5, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="px-6 py-2 bg-green-800 text-white text-sm tracking-wider uppercase font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Identity Protection Solution
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          variants={fadeInUp}
        >
          <span className="block">Safeguard Your</span>
          <span className="relative inline-block">
            Digital
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </span>
          <span className=""> Identity</span>
        </motion.h1>

        <motion.p
          className="text-xl text-green-100 mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Advanced PII detection and protection system to secure your sensitive
          information from breaches, identity theft, and financial fraud.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={fadeInUp}
        >
          <motion.button
            className="px-8 py-4 bg-green-800 text-white text-lg font-semibold border-2 border-green-800 hover:bg-green-700 hover:border-green-600 transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/dashboard">Get Started</Link>
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent text-white text-lg font-semibold border-2 border-green-500 hover:bg-green-800/50 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Demo
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JourneyHero;
