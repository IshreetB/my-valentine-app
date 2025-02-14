import React, { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import Timeline from "./components/Timeline";
import ScrollIndicator from "./components/ScrollIndicator";
import { motion } from "framer-motion";
import UpArrow from "./components/UpArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PoetryTransition from "./components/PoetryTransition";
import MusicPlayer from "./components/MusicPlayer";
import ValentineSection from "./components/ValentineSection";

function App() {
  // Array of memories: Each memory has an image, title, date, and description
  const memories = [
    {
      id: 1,
      image: "/images/1.jpg",
      title: "Our First (Official) Date",
      date: "April 21st, 2024",
      description:
        "I was still in shock how the most beautiful girl in the world even noticed me at all. \
        I was trying to do my best here, though I had no idea what I was doing. The wind didn't \
        help either, but in the end, we somehow had a good time (enough for you to see me again lol)",
    },
    {
      id: 2,
      image: "/images/2.jpg",
      title: "",
      date: "May 15th, 2024",
      description:
        "At this point I couldn't wait until the next time I saw you again. Every adventure we went \
        on felt like it was straight out of a movie. Even the smallest things like getting ice cream in the middle \
        of nowhere was a dream come true with you",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      title: "The Fanciest of Fancy Dinners",
      date: "June 10th, 2024",
      description:
        "I know it was important for you to feel like you're getting spoiled and I'm sorry it took that long, \
        but I really did the best I could. You looked fantastic in that dress, I can't wait to see you in \
        it again! Maybe not at that place though, the lamb was kind of cold 6/10",
    },
    {
      id: 4,
      image: "/images/4.jpg",
      title: "AHHHHHHHHHHH",
      date: "June 15th, 2024",
      description:
        "This one was kind of for me, lol. I know you don't like scary rides babe, but it meant so much that\
        you came with me anyways. I'm so proud of you for getting through it like the champ you are! Though,\
        I shouldn't really be surprised. Every challenge I've seen you face, you've always been so strong\
        and brave"
    },
    {
      id: 5,
      image: "/images/uhaul.jpg",
      title: "ZOOOOOOOOM",
      date: "July 16th, 2024",
      description:
        "This was honestly kind of crazy, I never drove that far before, especially not in a \
        storm. Even though you were a wittle scared and I was a wittle tired, I took comfort in \
        the fact I had you by my side. We picked each other up when the other was struggling, and \
        I genuinely couldn't have done it without you",
    },
    {
      id: 6,
      image: "/images/5.jpg",
      title: "Say CHEEEEESEE",
      date: "July 19th, 2024",
      description:
        "That whole Vancouver trip, you were really glowing. I rememeber there were times I couldn't \
        take my eyes off you. Your pretty face and that beautiful smile made every day worth living. \
        Maybe that trip wasn't the best, but seeing your smile made everything okay. I hope we can \
        smiling as we go on more and more adventures together",
    },
    {
      id: 7,
      image: "/path/to/image6.jpg",
      title: "ZOOOOOOOOM",
      date: "July 16th, 2024",
      description:
        "This was honestly kind of crazy, I never drove that far before, especially not in a storm. Even though you were a wittle scared and I was a wittle tired, I took comfort in the fact I had you by my side. We picked each other up when the other was struggling, and I genuinely couldn't have done it without you",
    },
    {
      id: 8,
      image: "/path/to/image5.jpg",
      title: "ZOOOOOOOOM",
      date: "July 17th, 2024",
      description:
        "This was honestly kind of crazy, I never drove that far before, especially not in a storm. Even though you were a wittle scared and I was a wittle tired, I took comfort in the fact I had you by my side. We picked each other up when the other was struggling, and I genuinely couldn't have done it without you",
    },
  ];

  // Separate state for hearts animation
  const [heartsKey, setHeartsKey] = useState(0);

  const sectionRefs = {
    hero: useRef(null),
    carousel: useRef(null),
    timeline: useRef(null),
    poetry: useRef(null),
    valentine: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    sectionRefs[sectionName].current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/BestPart.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleScrollToCarousel = () => {
    scrollToSection("carousel");
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200">
      <MusicPlayer
        isPlaying={isPlaying}
        volume={volume}
        showVolume={showVolume}
        setShowVolume={setShowVolume}
        onVolumeChange={handleVolumeChange}
        onTogglePlay={togglePlay}
      />
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeartsBackground key={`hearts-hero-${heartsKey}`} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Hero />
        </motion.div>
        <ScrollIndicator onClick={handleScrollToCarousel} />
      </section>

      {/* Carousel Section */}
      <section
        ref={sectionRefs.carousel}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeartsBackground key={`hearts-carousel-${heartsKey}`} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10"
        >
          <ImageCarousel />
        </motion.div>
        <UpArrow onClick={() => scrollToSection("hero")} />
        <ScrollIndicator onClick={() => scrollToSection("timeline")} />
      </section>

      {/* Timeline Section */}
      <section
        ref={sectionRefs.timeline}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden timeline-section"
      >
        <div className="absolute inset-0 z-0">
          <HeartsBackground
            key={`hearts-timeline-${heartsKey}`}
            className="min-h-screen"
          />
        </div>
        <div className="relative z-10 w-full flex-1 flex flex-col">
          <UpArrow onClick={() => scrollToSection("carousel")} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 flex-1 py-24"
          >
            <Timeline memories={memories} />
          </motion.div>
          <ScrollIndicator onClick={() => scrollToSection("poetry")} />
        </div>
      </section>

      {/* Poetry Transition Section */}
      <section
        ref={sectionRefs.poetry}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeartsBackground key={`hearts-poetry-${heartsKey}`} />
        <PoetryTransition />
        <UpArrow onClick={() => scrollToSection("timeline")} />
        <ScrollIndicator onClick={() => scrollToSection("valentine")} />
      </section>

      {/* Valentine's Proposal Section */}
      <section
        ref={sectionRefs.valentine}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeartsBackground key="hearts-valentine" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10"
        >
          <ValentineSection />
        </motion.div>
        <UpArrow onClick={() => scrollToSection("poetry")} />
      </section>
    </div>
  );
}

// Update HeartsBackground component
function HeartsBackground({ className = "" }) {
  const heartsArray = new Array(20).fill(0);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {heartsArray.map((_, index) => {
        const left = Math.random() * 100; // Random horizontal placement
        const startBottom = -(Math.random() * 20 + 10); // Start below viewport (-10vh to -30vh)
        const animationDelay = Math.random() * 5; // Random delay for natural effect
        const animationDuration = 5 + Math.random() * 5; // Random duration for float-up

        return (
          <div
            key={index}
            className="absolute text-red-500"
            style={{
              left: `${left}%`,
              bottom: `${startBottom}vh`, // Start out of view
              animation: `floatUp ${animationDuration}s linear infinite`,
              animationDelay: `${animationDelay}s`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
