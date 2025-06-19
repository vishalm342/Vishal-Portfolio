import { motion } from "framer-motion"

export default function AnimatedBackground({ density = 30, isDarkMode = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-[#0a0a14] via-[#0f0f1b] to-[#0a0a14]" : "bg-gradient-to-br from-gray-50 via-white to-gray-50"}`}
      />
      {[...Array(density)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${isDarkMode ? "bg-[#3d5afe]/30" : "bg-[#6C38FF]/20"} rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
      {[...Array(Math.floor(density / 3))].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className={`absolute w-2 h-2 ${isDarkMode ? "bg-[#6C38FF]/20" : "bg-[#3d5afe]/15"} rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}
