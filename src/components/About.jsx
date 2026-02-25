import { motion } from "framer-motion"
import { Code2, BrainCircuit, Zap } from "lucide-react"
import AnimatedBackground from "./AnimatedBackground"

export default function About({ isDarkMode }) {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Software Product Engineering",
      description: "Pursuing my CS degree at Kalvium with a specialized focus on architecting and building scalable, real-world software products from the ground up."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI-Integrated Full-Stack",
      description: "Passionate about bridging complex backend logic with intuitive UI/UX, heavily focusing on embedding AI and RAG pipelines into modern web apps."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Driven",
      description: "Bringing a methodical, highly disciplined approach to code. I thrive in high-performance environments and prioritize clean, optimized, and reliable solutions."
    }
  ]

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
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-[#3d8aff]" : "text-[#6C38FF]"}`}>
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-1 mx-auto mb-8 ${isDarkMode ? "bg-[#3d8aff]" : "bg-[#6C38FF]"}`}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 ${
              isDarkMode ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30" : "bg-white border-gray-200"
            } backdrop-blur-sm border shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
            style={{
              boxShadow: isDarkMode 
                ? '0 0 15px rgba(108, 56, 255, 0.05)' 
                : '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Hi, I'm Vishal M.
            </h3>
            <div className={`space-y-4 text-lg leading-relaxed ${isDarkMode ? "text-[#F4F4F5]/90" : "text-gray-700"}`}>
              <p>
                I am a full-stack developer and Computer Science undergraduate with a deep focus on Software Product Engineering. My technical journey is driven by a relentless desire to build intelligent, high-performance applications that transform complex problems into elegant digital experiences.
              </p>
              <p>
                Whether I am architecting AI-powered financial intelligence platforms, optimizing complex databases, or crafting seamless user interfaces, I approach every project with precision and a strong work ethic. 
              </p>
              <p>
                I believe that code should be more than just functional—it should be scalable, reliable, and fundamentally user-centric. I am constantly exploring the edge of modern web technologies to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>

          {/* Highlights/Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`flex gap-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-[#1a1a2e]/40 border-[#3d5afe]/20 hover:border-[#3d5afe]/50" 
                    : "bg-white border-gray-100 shadow-md hover:border-[#6C38FF]/30"
                }`}
              >
                <div className={`flex-shrink-0 mt-1 ${isDarkMode ? "text-[#3d8aff]" : "text-[#6C38FF]"}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? "text-[#F4F4F5]/70" : "text-gray-600"}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}