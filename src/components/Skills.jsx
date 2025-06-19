import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Skills({ isDarkMode }) {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "Figma",
    "Git",
  ]

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDarkMode ? "bg-[#0a0a14]" : "bg-gray-50"} relative overflow-hidden transition-colors duration-300`}
    >
      <AnimatedBackground density={35} isDarkMode={isDarkMode} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-[#3d8aff]" : "text-[#6C38FF]"}`}>
            Skills & Technologies
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-1 ${isDarkMode ? "bg-[#3d8aff]" : "bg-[#6C38FF]"} mx-auto mb-8`}
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                y: -10,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                className={`relative px-8 py-4 ${
                  isDarkMode 
                    ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30 hover:border-[#3d5afe]" 
                    : "bg-white border-[#6C38FF]/30 hover:border-[#6C38FF] shadow-lg"
                } backdrop-blur-sm border hover:shadow-lg hover:shadow-[#6C38FF]/25 transition-all duration-300 cursor-pointer rounded-full`}
                style={{
                  boxShadow: isDarkMode 
                    ? '0 0 10px rgba(108, 56, 255, 0.1)' 
                    : '0 0 10px rgba(108, 56, 255, 0.1)'
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full border ${
                    isDarkMode ? "border-[#3d5afe]/30" : "border-[#6C38FF]/30"
                  }`}
                  animate={{ 
                    boxShadow: [
                      '0 0 5px rgba(108, 56, 255, 0.2)',
                      '0 0 15px rgba(108, 56, 255, 0.4)',
                      '0 0 5px rgba(108, 56, 255, 0.2)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                />
                <span className={`relative z-10 ${
                  isDarkMode 
                    ? "text-[#F4F4F5] group-hover:text-white" 
                    : "text-gray-700 group-hover:text-[#6C38FF]"
                } font-medium text-lg transition-colors duration-300`}>
                  {skill}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`${isDarkMode ? "text-[#F4F4F5]/70" : "text-gray-600"} text-lg`}>
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
        </motion.div>
      </div>
    </section>
  )
}
