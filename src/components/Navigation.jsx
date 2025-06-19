import { motion } from "framer-motion"
import { useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Navigation({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full ${
        isDarkMode ? "bg-[#0a0a14]/90 border-[#3d5afe]/20" : "bg-white/90 border-gray-200"
      } backdrop-blur-md z-40 border-b transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#6C38FF] to-[#00C9FF] bg-clip-text text-transparent"
          >
            Vishal M
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className={`${
                  isDarkMode ? "hover:text-[#6C38FF]" : "text-gray-700 hover:text-[#6C38FF]"
                } transition-colors`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30 hover:border-[#3d5afe]/60"
                  : "bg-gray-100 border-gray-300 hover:border-gray-400"
              } border transition-all duration-300`}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30"
                  : "bg-gray-100 border-gray-300"
              } border transition-all duration-300`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30"
                  : "bg-gray-100 border-gray-300"
              } border transition-all duration-300`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
                className={`block py-2 ${
                  isDarkMode ? "hover:text-[#6C38FF]" : "text-gray-700 hover:text-[#6C38FF]"
                } transition-colors`}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
