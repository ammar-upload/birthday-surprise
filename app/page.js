"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Gift, Star } from "lucide-react";

export default function BirthdayFlow() {
  const NAME = "Api Aqsa";
  const PHOTO = "/girl.jpg";

  const messages = [
    {
      text: `Happy Birthday, Api! May Allah grant you endless success and a life full of happiness. Ameen.`,
      icon: "🎉",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      text: "Wishing you a year filled with love, laughter, and countless blessings.",
      icon: "🌸",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      text: "May all your dreams come true and may you always find joy in the little things.",
      icon: "💖",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      text: "keep always smiling and shining bright...",
      icon: "✨",
      gradient: "from-yellow-400 to-pink-500"
    },
    {
      text: "I feel so proud and blessed to have a sister like you, Api!",
      icon: "💐",
      gradient: "from-yellow-400 to-pink-500"
    },
  ];

  const [stage, setStage] = useState("intro");
  const [messageIndex, setMessageIndex] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (stage === "intro" || stage === "done") {
      const newConfetti = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -20,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        color: ['#FF6B9D', '#C44569', '#FEC8D8', '#957DAD', '#D291BC', '#FFA07A'][Math.floor(Math.random() * 6)]
      }));
      setConfetti(newConfetti);
    }
  }, [stage]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, [stage]);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {(stage === "intro" || stage === "done") && confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
            rotate: piece.rotation
          }}
          initial={{ y: piece.y }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360, 720],
            x: [0, Math.sin(piece.id) * 50, 0]
          }}
          transition={{
            duration: piece.duration,
            repeat: stage === "intro" ? Infinity : 0,
            delay: piece.delay,
            ease: "easeIn"
          }}
        />
      ))}

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-yellow-300"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%`, fontSize: '10px' }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay
          }}
        >
          ✨
        </motion.div>
      ))}

      {[0, 2, 4, 6].map((delay, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute bottom-0 text-6xl"
          style={{ left: `${15 + i * 20}%` }}
          initial={{ y: 200 }}
          animate={{ y: -700 }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          {i % 2 === 0 ? '🎈' : '🎀'}
        </motion.div>
      ))}

      {[1, 3, 5, 7].map((delay, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-4xl opacity-30"
          style={{ right: `${10 + i * 15}%`, top: '10%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: delay * 0.5
          }}
        >
          💖
        </motion.div>
      ))}

      {stage === "intro" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center px-6 z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 rounded-full blur-lg opacity-70"
              />
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full">
                <Gift className="w-20 h-20 text-yellow-300" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 drop-shadow-2xl mb-4"
          >
            Happy Birthday
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6"
          >
            {NAME}! 🎂
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light">
              A small gift from my skills… I hope you like it ✨
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, type: "spring" }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,107,157,0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStage("photo")}
            className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 text-white font-bold rounded-full shadow-2xl text-xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              Click here to open 
              <Sparkles className="w-6 h-6" />
            </span>
          </motion.button>
        </motion.div>
      )}

      {stage === "photo" && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center px-6 z-10"
        >
          <motion.div
            className="relative mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-xl opacity-80"
            />
            
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            />

            <div className="relative p-2 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500 shadow-2xl">
              <div className="p-1 rounded-full bg-white">
                <img
                  src={PHOTO}
                  alt={NAME}
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-xl"
                />
              </div>
            </div>

            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: `${50 + Math.cos((i * Math.PI) / 2) * 150}px`,
                  top: `${50 + Math.sin((i * Math.PI) / 2) * 150}px`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                {i % 2 === 0 ? '💖' : '✨'}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 mb-6"
          >
            <p className="text-white text-xl md:text-2xl font-light">
              Thank you for always supporting me...! 💖
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStage("messages")}
            className="group px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold rounded-full shadow-2xl text-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative flex items-center gap-2">
              💌 Click to see...
              <Heart className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      )}

      {stage === "messages" && (
        <AnimatePresence mode="wait">
          <motion.div
            key={messageIndex}
            initial={{ rotateY: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-lg mx-6"
          >
            <motion.div
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute -inset-1 bg-gradient-to-r ${messages[messageIndex].gradient} rounded-3xl blur-xl`}
            />

            <div className="relative bg-white/15 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-6xl mb-6 text-center"
              >
                {messages[messageIndex].icon}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-white leading-relaxed text-center drop-shadow-lg mb-8"
              >
                {messages[messageIndex].text}
              </motion.p>

              <div className="flex justify-center gap-2 mb-6">
                {messages.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === messageIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                    animate={i === messageIndex ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ))}
              </div>

              {messageIndex < messages.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMessageIndex(messageIndex + 1)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg text-lg flex items-center justify-center gap-2"
                >
                  Next Wish
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ➡
                  </motion.span>
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStage("done")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold rounded-full shadow-lg text-lg flex items-center justify-center gap-2"
                >
                  <Star className="w-6 h-6" />
                  Final Surprise
                  <Star className="w-6 h-6" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {stage === "done" && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-white px-6 z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            🎊
          </motion.div>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
          >
            Happiest Birthday, Api!
          </motion.h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/20 mb-6 inline-block"
          >
            <p className="text-2xl md:text-3xl text-white/95 font-light mb-2">
              May your year be filled with
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {['✨ Joy', '😄 Laughter', '🎉 Magic', '💖 Love'].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.2, type: "spring" }}
                  className="px-4 py-2 bg-white/20 rounded-full"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-white/80 text-lg mt-6"
          >
            Thank you, I hope this little creation from my skills makes you feel special 🎁
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-8 text-6xl"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💝
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}