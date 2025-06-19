import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Contact({ isDarkMode }) {
  return (
    <section
      id="contact"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3d8aff]">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#3d8aff] mx-auto mb-8" />
          <p className={`text-lg ${isDarkMode ? "text-[#F4F4F5]/70" : "text-gray-600"} max-w-2xl mx-auto`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div
            className={`${isDarkMode ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30" : "bg-white border-gray-200 shadow-lg"} backdrop-blur-sm border rounded-lg hover:border-[#3d5afe]/50 transition-all duration-300`}
          >
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-[#F4F4F5]" : "text-gray-700"}`}
                    >
                      Name
                    </label>
                    <input
                      className={`w-full px-4 py-3 ${isDarkMode ? "bg-[#0f0f1b]/80 border-[#3d5afe]/40 text-[#F4F4F5] placeholder-[#F4F4F5]/40" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"} border focus:border-[#3d5afe] focus:outline-none focus:ring-2 focus:ring-[#3d5afe]/20 rounded-md transition-all duration-300`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-[#F4F4F5]" : "text-gray-700"}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 ${isDarkMode ? "bg-[#0f0f1b]/80 border-[#3d5afe]/40 text-[#F4F4F5] placeholder-[#F4F4F5]/40" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"} border focus:border-[#3d5afe] focus:outline-none focus:ring-2 focus:ring-[#3d5afe]/20 rounded-md transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-[#F4F4F5]" : "text-gray-700"}`}
                  >
                    Subject
                  </label>
                  <input
                    className={`w-full px-4 py-3 ${isDarkMode ? "bg-[#0f0f1b]/80 border-[#3d5afe]/40 text-[#F4F4F5] placeholder-[#F4F4F5]/40" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"} border focus:border-[#3d5afe] focus:outline-none focus:ring-2 focus:ring-[#3d5afe]/20 rounded-md transition-all duration-300`}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-[#F4F4F5]" : "text-gray-700"}`}
                  >
                    Message
                  </label>
                  <textarea
                    className={`w-full px-4 py-3 ${isDarkMode ? "bg-[#0f0f1b]/80 border-[#3d5afe]/40 text-[#F4F4F5] placeholder-[#F4F4F5]/40" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"} border focus:border-[#3d5afe] focus:outline-none focus:ring-2 focus:ring-[#3d5afe]/20 min-h-[120px] rounded-md transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center bg-[#6C38FF] hover:bg-[#8A63D2] text-white py-3 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-[#6C38FF]/20 hover:shadow-[#6C38FF]/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
