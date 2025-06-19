import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Instagram } from "lucide-react"

export default function Footer({ isDarkMode }) {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/vishalm342",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/vishal-muthukumar/",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/v.i.s.h.a.l___m/",
      label: "Instagram"
    },
  ]

  return (
    <footer
      className={`py-8 ${
        isDarkMode ? "bg-[#1a1a2e] border-[#3d5afe]/20" : "bg-gray-100 border-gray-200"
      } border-t transition-colors duration-300 relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Made with Love & Copyright - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute left-4 bottom-4"
        >
          <p
            className={`flex items-center gap-2 text-sm ${
              isDarkMode ? "text-[#F4F4F5]/70" : "text-gray-600"
            }`}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Vishal M
          </p>
          <p
            className={`text-xs mt-1 ${
              isDarkMode ? "text-[#F4F4F5]/50" : "text-gray-500"
            }`}
          >
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Social Links - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute right-4 bottom-4 flex gap-3"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0a0a14]/60 border-[#3d5afe]/30 hover:border-[#3d5afe]/60 hover:bg-[#3d5afe]/20 text-[#F4F4F5]"
                  : "bg-white border-gray-300 hover:border-[#6C38FF] hover:bg-[#6C38FF]/10 text-gray-700"
              } border shadow-sm hover:shadow-md`}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
