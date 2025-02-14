import React from "react";
import { motion } from "framer-motion";

function PoetryTransition() {
  const lines = [
    "The love you've given me, will forever last,",
    "A journey through time, both future and past,",
    "Each picture a memory, that I've fondly kept,",
    "So, there really is, only one question left…",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="space-y-6">
        {lines.map((line, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 2,
              delay: index * 3,
            }}
            className="text-2xl sm:text-3xl md:text-5xl text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400 font-medium italic p-4"
          >
            {line}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default PoetryTransition;
