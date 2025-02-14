import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function TimelineModal({ memory, onClose }) {
  const isToday = memory.id === "today";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[90vw] md:max-w-3xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-white p-3 md:p-6 pb-12 md:pb-20 rounded-2xl">
              <div className="relative w-full max-h-[50vh] md:max-h-[60vh] aspect-square">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="mt-6 md:mt-8 text-lg md:text-2xl text-gray-600 font-medium italic text-center">
                {memory.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 italic text-center">
                {memory.date}
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-600 italic text-center">
                {memory.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TimelineModal;
