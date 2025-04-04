import React from "react";
import { motion } from "framer-motion";

const JourneyFeatures: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-green-300"
            variants={fadeInUp}
          >
            Demo Video Here
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-green-500 mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-green-100 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Discover how our powerful system safeguards your personal
            information at every step
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.img
            src="./video.png"
            alt="Demo Video"
            className="w-96 h-72 object-cover"
            variants={fadeInUp}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyFeatures;
