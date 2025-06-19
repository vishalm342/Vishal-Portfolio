import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 ${isDarkMode ? "bg-[#0a0a14]" : "bg-white"} flex items-center justify-center z-50`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Circular Progress Ring */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={isDarkMode ? "#1a1a2e" : "#e5e7eb"}
                strokeWidth="8"
                fill="none"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - loadingProgress / 100)}`}
                transition={{ duration: 0.1 }}
              />
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C38FF" />
                  <stop offset="50%" stopColor="#8A63D2" />
                  <stop offset="100%" stopColor="#00C9FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Creative Percentage Display Below Circle */}
          <motion.div
            key={loadingProgress}
            initial={{ scale: 0.5, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-6"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full border-2 ${
              isDarkMode ? "border-[#6C38FF]/30 bg-[#0f0f1b]" : "border-[#6C38FF]/30 bg-white"
            }`}>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2"
              >
                ⚡
              </motion.span>
              <span className={`text-2xl font-bold bg-gradient-to-r from-[#6C38FF] via-[#8A63D2] to-[#00C9FF] bg-clip-text text-transparent`}>
                {loadingProgress}%
              </span>
            </div>
          </motion.div>

          {/* Loading Text with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <motion.p
              className={`${isDarkMode ? "text-[#F4F4F5]" : "text-[#1a1a2e]"} text-lg font-medium`}
            >
              Loading Portfolio
            </motion.p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="flex justify-center space-x-1"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-gradient-to-r from-[#6C38FF] to-[#00C9FF] rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#0a0a14] text-[#F4F4F5]" : "bg-white text-[#1a1a2e]"} overflow-x-hidden transition-colors duration-300`}
    >
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
