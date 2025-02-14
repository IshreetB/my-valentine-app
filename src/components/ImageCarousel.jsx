import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/kissy.jpg", caption: "when you kissy" },
    { src: "/images/cute.jpg", caption: "when you cute" },
    { src: "/images/sad.jpg", caption: "when you sad" },
    { src: "/images/squish.jpg", caption: "when you squish" },
    { src: "/images/stressy.jpg", caption: "when you stressy" },
    { src: "/images/sweet.jpg", caption: "when you sweet" },
    { src: "/images/eepy.jpg", caption: "when you eepy" },
    { src: "/images/giggly.jpg", caption: "when you giggly" },
    { src: "/images/hungy.jpg", caption: "when you hungy" },
    { src: "/images/silly.jpg", caption: "when you silly" },
    { src: "/images/slay.jpg", caption: "when you slay" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="space-y-8 px-4 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400 px-4 pt-8 pb-12"
      >
        Times When I Love You
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative w-full h-[500px] md:h-[600px] overflow-visible"
      >
        <div className="absolute w-full h-full flex items-center justify-center perspective-[1000px]">
          {images.map((image, index) => {
            const relativeIndex =
              (index - currentIndex + images.length) % images.length;
            const distance = Math.abs(relativeIndex - 2);
            const opacity = distance <= 2 ? 1 : 0;
            const scale = 1 - distance * 0.15;
            const translateZ = -distance * 100;
            const translateX = (relativeIndex - 2) * 300;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                  zIndex: 2 - distance,
                  opacity,
                  display: opacity === 0 ? "none" : "block",
                }}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="bg-white p-4 pb-16 rounded-2xl shadow-xl">
                      <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden rounded-xl">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-10 text-xl md:text-2xl text-gray-600 font-medium italic">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ x: [-5, 0, -5] }}
          onClick={prevSlide}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 0.5, delay: 1 },
          }}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-200 bg-gradient-to-b from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ x: [5, 0, 5] }}
          onClick={nextSlide}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 0.5, delay: 1 },
          }}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-200 bg-gradient-to-b from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </motion.button>
      </motion.div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default ImageCarousel;
