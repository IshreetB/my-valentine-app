import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

function ValentineSection() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setShowConfetti(true);
  };

  // Helper to get cumulative button styles
  const getYesButtonStyles = () => {
    let scale = 1;
    let x = 0;
    let y = 0;

    if (yesPressed) {
      return { scale: 1.5, x: 0, y: -20, opacity: 1 };
    }

    if (noCount >= 1) scale *= 1.75;
    if (noCount >= 2) x += 100;
    if (noCount >= 3) {
      scale *= 1.25;
      x -= 50;
    }
    if (noCount >= 4) {
      scale *= 1.1;
      y -= 20;
    }

    return { scale, x, y, opacity: 1 };
  };

  const getNoButtonStyles = () => {
    let scale = 1;
    let x = 0;
    let y = 0;
    let opacity = 1;

    if (noCount >= 1) scale *= 0.5;
    if (noCount >= 2) x += 100;
    if (noCount >= 3) {
      scale *= 0.75;
      y += 50;
    }
    if (noCount >= 4) opacity = 0;

    return { scale, x, y, opacity };
  };

  return (
    <motion.div className="text-center py-4 relative min-h-screen">
      {showConfetti && <Confetti />}

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
        onAnimationComplete={() => setShowButtons(true)}
        className="text-5xl font-extrabold lg:text-7xl 2xl:text-8xl px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400">
          Will You Be My Valentine?
        </span>
      </motion.h1>

      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-2/3 left-1/2 -translate-x-1/2 flex justify-center gap-12 px-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={getYesButtonStyles()}
              whileHover={{
                scale: getYesButtonStyles().scale * 1.2,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
              onClick={handleYesClick}
              className="px-12 py-3 bg-gradient-to-b from-red-500 to-pink-400 text-white rounded-full shadow-lg font-bold text-2xl"
              disabled={yesPressed}
            >
              Yes 💝
            </motion.button>

            {!yesPressed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={getNoButtonStyles()}
                whileHover={{
                  scale: getNoButtonStyles().scale * 1.2,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                }}
                onClick={handleNoClick}
                className="px-12 py-3 bg-white border-2 border-pink-300 text-pink-800 rounded-full shadow-md font-bold text-2xl"
              >
                No 💔
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {yesPressed && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-4xl font-bold text-transparent bg-gradient-to-b bg-clip-text from-red-500 to-pink-400"
          >
            I LOVE YOU BEBO
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ValentineSection;
