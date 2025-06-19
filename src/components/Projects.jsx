import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Projects({ isDarkMode }) {
  return (
    <section 
      id="projects" 
      className={`py-20 ${isDarkMode ? "bg-[#0a0a14]" : "bg-gray-50"} relative overflow-hidden transition-colors duration-300`}
    >
      <AnimatedBackground density={25} isDarkMode={isDarkMode} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-[#3d8aff]" : "text-[#6C38FF]"}`}>
            Projects Coming Soon
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-1 ${isDarkMode ? "bg-[#3d8aff]" : "bg-[#6C38FF]"} mx-auto mb-8`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`relative ${
              isDarkMode 
                ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30" 
                : "bg-white border-gray-200 shadow-lg"
            } backdrop-blur-sm border rounded-lg p-8 transition-all duration-300`}
            style={{
              boxShadow: isDarkMode 
                ? '0 0 15px rgba(108, 56, 255, 0.1)' 
                : '0 0 15px rgba(108, 56, 255, 0.1)'
            }}
          >
            <motion.div
              className={`absolute inset-0 rounded-lg border ${
                isDarkMode ? "border-[#3d5afe]/30" : "border-[#6C38FF]/30"
              }`}
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(108, 56, 255, 0.1)',
                  '0 0 20px rgba(108, 56, 255, 0.3)',
                  '0 0 10px rgba(108, 56, 255, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
                  isDarkMode ? "bg-[#6C38FF]/20" : "bg-[#6C38FF]/10"
                } mb-4`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6C38FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 10a4.5 4.5 0 0 0-4.5-4.5c-1.5 0-3 .5-4 1.5L3 10l7 7 3-3"></path>
                    <path d="M14.5 10a4.5 4.5 0 0 0-4.5-4.5c-1.5 0-3 .5-4 1.5L3 10l7 7 3-3"></path>
                    <rect x="14" y="14" width="8" height="8" rx="2" ry="2"></rect>
                    <path d="M18 18l-4-4"></path>
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  isDarkMode ? "text-[#F4F4F5]" : "text-gray-900"
                }`}
              >
                Exciting Projects in Development
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-[#F4F4F5]/80" : "text-gray-700"
                }`}>
                  Currently working on some cool projects related to full-stack development using modern technologies 
                  like React, Next.js, Node.js, and more. These projects will showcase my skills in building 
                  scalable web applications and innovative solutions.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-[#F4F4F5]/80" : "text-gray-700"
                }`}>
                  Stay tuned for updates as I'll be uploading these projects soon. Each project will demonstrate 
                  different aspects of modern web development and problem-solving approaches.
                </p>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="inline-flex items-center mt-6"
                >
                  <span className="text-2xl mr-2">⚡</span>
                  <span className={`text-lg font-medium ${
                    isDarkMode ? "text-[#3d8aff]" : "text-[#6C38FF]"
                  }`}>
                    Updates on the way!
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
