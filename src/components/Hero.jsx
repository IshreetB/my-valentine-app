import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="text-center"
    >
      <h1 className="text-5xl font-extrabold lg:text-7xl 2xl:text-8xl mb-6 ">
        <span className="text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400">
          Our Love Story
        </span>
      </h1>
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl mx-auto mt-6 text-lg text-center text-r md:text-xl"
      >
        Join us in celebrating our journey of love, laughter, and countless
        beautiful moments together.
      </motion.p> */}
    </motion.div>
  );
}

export default Hero;
