import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faMusic,
  faVolumeHigh,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";

function MusicPlayer({
  isPlaying,
  volume,
  showVolume,
  setShowVolume,
  onVolumeChange,
  onTogglePlay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <div className="flex items-center gap-2">
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2"
          >
            <FontAwesomeIcon
              icon={volume > 0.5 ? faVolumeHigh : faVolumeLow}
              className="text-red-500 w-4 h-4"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolumeChange}
              className="w-20 h-1 bg-red-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500"
            />
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onTogglePlay}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
        >
          <FontAwesomeIcon icon={faMusic} className="text-red-500 w-4 h-4" />
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            className="text-red-500 w-4 h-4"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default MusicPlayer;
