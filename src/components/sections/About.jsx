import { motion } from "framer-motion"
import AnimatedBackground from "../AnimatedBackground"

export default function About({ isDarkMode }) {
  return (
    <section
      id="about"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3d8aff]">About Me</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-[#3d8aff] mx-auto mb-8"
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
            className={`${isDarkMode ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30" : "bg-white border-gray-200 shadow-lg"} backdrop-blur-sm border rounded-lg p-8 hover:border-[#3d5afe]/50 transition-all duration-300`}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-lg leading-relaxed ${isDarkMode ? "text-[#F4F4F5]" : "text-gray-700"}`}
            >
              I'm a passionate and curious developer who loves to explore the world of full-stack development. I enjoy
              solving real-world problems, building intuitive user interfaces, and constantly improving my skills to
              stay ahead in the tech space. My journey in programming has been driven by curiosity and a desire to
              create meaningful digital experiences that make a difference.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
