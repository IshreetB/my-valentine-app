import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TimelineModal from "./TimelineModal";
import TimelineMobile from "./TimelineMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Timeline({ memories }) {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <TimelineMobile memories={memories} />;
  }

  // Create a today memory object
  const todayMemory = {
    id: "today",
    title: "Today",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "And our story continues to unfold, with each day bringing new adventures and memories to cherish...",
    image: "/path/to/today-image.jpg",
  };

  return (
    <div className="relative container mx-auto p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-5xl font-bold text-center text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400 px-4 pt-8 pb-12"
      >
        Our Journey Together
      </motion.h1>

      {/* The vertical line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "78%" }}
        viewport={{ once: true }}
        transition={{
          delay: 1.8,
          duration: 10,
          ease: "easeOut",
        }}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-200 top-32 bottom-32"
      ></motion.div>

      <div className="relative wrap">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className="order-1 w-full md:w-5/12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMemory(memory)}
                className="cursor-pointer"
              >
                <div className="bg-white p-4 pb-16 rounded-2xl shadow-xl">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-10 text-xl md:text-2xl text-gray-600 font-medium italic">
                    {memory.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-snug line-clamp-2 italic">
                    {memory.description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + 0.3,
                type: "spring",
              }}
              className="z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl bg-gradient-to-b from-red-500 to-pink-400"
            >
              <h1 className="mx-auto font-semibold text-lg text-white">
                {index + 1}
              </h1>
            </motion.div>

            {/* Date/Time */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.2,
              }}
              className={`order-1 w-5/12 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <p className="text-2xl font-bold text-red-500 text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400">
                {memory.date}
              </p>
            </motion.div>
          </motion.div>
        ))}

        {/* Today card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: memories.length * 0.2 }}
          className="flex flex-col items-center w-full mt-16 mb-12"
        >
          {/* Timeline dot for Today */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: memories.length * 0.2 + 0.3,
              type: "spring",
            }}
            className="z-20 flex items-center w-8 h-8 rounded-full shadow-xl mb-4 bg-gradient-to-b from-red-500 to-pink-400"
          >
            <h1 className="mx-auto font-semibold text-lg text-white">
              {" "}
              <FontAwesomeIcon icon={faHeart} />
            </h1>
          </motion.div>

          <div className="w-full md:w-8/12 lg:w-6/12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMemory(todayMemory)}
              className="cursor-pointer"
            >
              <div className="bg-white p-4 pb-16 rounded-2xl shadow-xl">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/path/to/today-image.jpg"
                    alt="Today"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-10 text-xl md:text-2xl text-gray-600 font-medium italic">
                  Today
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-snug line-clamp-2 italic">
                  And our story continues to unfold, with each day bringing new
                  adventures and memories to cherish...
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Modal */}
      {selectedMemory && (
        <TimelineModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </div>
  );
}

export default Timeline;
