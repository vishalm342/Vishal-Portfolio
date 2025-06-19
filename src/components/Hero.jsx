import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Download } from "lucide-react"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero({ isDarkMode }) {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/vishalm342",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/vishal-muthukumar/",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/v.i.s.h.a.l___m/",
    },
  ]

  // Animation variants for letter animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }

  const name = "Vishal M"

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ${
        isDarkMode ? "bg-[#0a0a14]" : "bg-white"
      } transition-colors duration-300`}
    >
      <AnimatedBackground density={50} isDarkMode={isDarkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 -mt-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 mt-8"
        >
          <div className="relative w-40 h-40 mx-auto">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(108, 56, 255, 0.3)",
                  "0 0 30px rgba(108, 56, 255, 0.6)",
                  "0 0 20px rgba(108, 56, 255, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="w-full h-full rounded-full"
            >
              <img
                src="/profile.jpeg"
                alt="Vishal M"
                className="w-full h-full object-cover object-center rounded-full border-4 border-[#6C38FF] shadow-2xl"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Name with Letter Animation */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-3"
        >
          <span className={`${isDarkMode ? "text-[#F4F4F5]" : "text-gray-900"}`}>
            {"Hi, I'm ".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <span className="bg-gradient-to-r from-[#6C38FF] via-[#8A63D2] to-[#00C9FF] bg-clip-text text-transparent">
            {name.split("").map((letter, i) => (
              <motion.span
                key={i + 8}
                custom={i + 8}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline with Letter Animation */}
        <motion.h2
          className="text-xl md:text-3xl font-semibold mb-6"
        >
          <span className={`${isDarkMode ? "text-[#F4F4F5]" : "text-gray-900"}`}>
            {"Full Stack ".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + 16}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <span className="bg-gradient-to-r from-[#6C38FF] via-[#8A63D2] to-[#00C9FF] bg-clip-text text-transparent">
            {"Developer".split("").map((letter, i) => (
              <motion.span
                key={i + 26}
                custom={i + 26}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <span className={`${isDarkMode ? "text-[#F4F4F5]" : "text-gray-900"}`}>
            {" and Tech ".split("").map((letter, i) => (
              <motion.span
                key={i + 35}
                custom={i + 35}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <span className="bg-gradient-to-r from-[#6C38FF] via-[#8A63D2] to-[#00C9FF] bg-clip-text text-transparent">
            {"Enthusiast".split("").map((letter, i) => (
              <motion.span
                key={i + 45}
                custom={i + 45}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? "text-[#F4F4F5]/70" : "text-gray-600"
          }`}
        >
          I build beautiful, functional web applications and love exploring new technologies. 
          Passionate about creating digital experiences that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-[#6C38FF] hover:bg-[#8A63D2] text-white px-8 py-3 rounded-full transition-all duration-300 overflow-hidden"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <span className="relative z-10">View My Projects</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative border border-[#6C38FF] text-[#6C38FF] hover:bg-[#6C38FF] hover:text-white px-8 py-3 rounded-full transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: '0 0 10px rgba(108, 56, 255, 0.3)'
            }}
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              className="absolute inset-0 border border-[#6C38FF] rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 5px rgba(108, 56, 255, 0.3)',
                  '0 0 15px rgba(108, 56, 255, 0.6)',
                  '0 0 5px rgba(108, 56, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {socialLinks.map(({ icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-full border-2 transition-all duration-300 ${
                isDarkMode 
                  ? "bg-[#0f0f1b] border-[#6C38FF]/30 hover:bg-[#6C38FF] hover:border-[#6C38FF] text-[#F4F4F5]" 
                  : "bg-white border-[#6C38FF]/30 hover:bg-[#6C38FF] hover:border-[#6C38FF] hover:text-white text-gray-700"
              }`}
              style={{
                boxShadow: '0 0 8px rgba(108, 56, 255, 0.2)'
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#6C38FF]/30"
                animate={{ 
                  boxShadow: [
                    '0 0 5px rgba(108, 56, 255, 0.2)',
                    '0 0 12px rgba(108, 56, 255, 0.5)',
                    '0 0 5px rgba(108, 56, 255, 0.2)'
                  ]
                }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative z-10 w-5 h-5">
                {React.cloneElement(icon, { className: "w-5 h-5" })}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex justify-center"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            className={`relative p-3 rounded-full border-2 transition-all duration-300 ${
              isDarkMode 
                ? "border-[#6C38FF]/30 hover:border-[#6C38FF] text-[#F4F4F5]/70 hover:text-[#6C38FF]" 
                : "border-[#6C38FF]/30 hover:border-[#6C38FF] text-gray-600 hover:text-[#6C38FF]"
            }`}
            style={{
              boxShadow: '0 0 8px rgba(108, 56, 255, 0.2)'
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#6C38FF]/30"
              animate={{ 
                boxShadow: [
                  '0 0 5px rgba(108, 56, 255, 0.2)',
                  '0 0 12px rgba(108, 56, 255, 0.5)',
                  '0 0 5px rgba(108, 56, 255, 0.2)'
                ]
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
