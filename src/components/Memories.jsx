import React, { useState } from "react";
import { motion } from "framer-motion";
import TimelineModal from "./TimelineModal";

function Memories({ memories }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-5xl font-bold text-center text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400 mb-16"
      >
        Our Special Moments
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMemory(memory)}
              className="cursor-pointer"
            >
              <div className="bg-white p-4 pb-16 rounded-2xl shadow-xl">
                <p className="text-lg text-red-500 font-bold mb-4 text-center">
                  {memory.date}
                </p>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-10 text-2xl text-gray-600 font-medium italic text-center">
                  {memory.title}
                </h3>
                <p className="mt-4 text-gray-600 italic text-center line-clamp-2">
                  {memory.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedMemory && (
        <TimelineModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </div>
  );
}

export default Memories;
