import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import AnimatedBackground from "./AnimatedBackground"

export default function Projects({ isDarkMode }) {
  const projects = [
    {
      title: "StudyNexus",
      description: "A comprehensive study platform that connects students with learning resources and collaborative tools. Built with modern web technologies for seamless educational experience.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/kalviumcommunity/S76_Vishal_Capstone_StudyNexus",
      live: "https://study-nexus.netlify.app/",
      image: "/studynexus-cover.png",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "PromptPal",
      description: "An AI-powered prompt management tool that helps users create, organize, and optimize their AI prompts. Features intuitive interface and smart categorization.",
      tech: ["Node.js", "React", "Flask", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/vishalm342/PromptPal",
      live: "https://prompt-pal-murex.vercel.app/",
      image: "/prompt-pal.png",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Bounce Baller",
      description: "An engaging browser-based game featuring physics-based ball mechanics. Built with vanilla JavaScript and HTML5 Canvas for smooth gameplay experience.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS", "Game Physics"],
      github: "https://github.com/vishalm342/Bounce_Baller_Game",
      live: "https://bounceballergame.pages.dev/",
      image: "/bounce-baller-cover.png",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "LumenFin",
      description: "An AI-powered financial intelligence platform utilizing a high-speed RAG pipeline to analyze and extract insights from complex financial documents.",
      tech: ["NextJS", "MongoDB", "Cerebras", "RAG Pipeline", "LangChain", "Clerk"],
      github: "https://github.com/vishalm342/LumenFin.git",
      live: "https://lumen-fin.vercel.app/",
      image: "/lumen-fin.png",
      gradient: "from-emerald-400 to-teal-700"
    },
    {
      title: "Recruiter-AI",
      description: "A modern, responsive landing page for an AI-powered recruiting platform designed to streamline and accelerate the hiring process for modern teams.",
      tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/vishalm342/Recruiter-AI.git",
      live: "https://recruiter-ai-theta.vercel.app/",
      image: "/recruiter-ai.png",
      gradient: "from-blue-600 to-indigo-800"
    },
    {
      title: "ShelfSense",
      description: "An AI-powered recommendation engine that helps users discover hidden literary gems and curate a personalized library tailored to their unique tastes.",
      tech: ["React", "AI Integration", "Tailwind CSS"],
      github: "https://github.com/vishalm342/ShelfSense.git",
      live: "https://shelf-sense-seven.vercel.app/",
      image: "/shelfsense.png",
      gradient: "from-orange-400 to-red-600"
    }
  ]

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
            Featured Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-1 ${isDarkMode ? "bg-[#3d8aff]" : "bg-[#6C38FF]"} mx-auto mb-8`}
          />
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? "text-[#F4F4F5]/80" : "text-gray-700"}`}>
            Here are some of my recent projects showcasing full-stack development, AI integration, and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative ${
                  isDarkMode 
                    ? "bg-[#1a1a2e]/60 border-[#3d5afe]/30" 
                    : "bg-white border-gray-200 shadow-lg"
                } backdrop-blur-sm border rounded-xl p-6 h-full transition-all duration-300 hover:scale-105`}
                style={{
                  boxShadow: isDarkMode 
                    ? '0 0 15px rgba(108, 56, 255, 0.1)' 
                    : '0 0 15px rgba(108, 56, 255, 0.1)'
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-xl border ${
                    isDarkMode ? "border-[#3d5afe]/30" : "border-[#6C38FF]/30"
                  } opacity-0 group-hover:opacity-100`}
                  animate={{ 
                    boxShadow: [
                      '0 0 10px rgba(108, 56, 255, 0.1)',
                      '0 0 20px rgba(108, 56, 255, 0.3)',
                      '0 0 10px rgba(108, 56, 255, 0.1)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="w-full h-48 rounded-lg mb-6 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={project.image}
                      alt={`${project.title} Project Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 absolute inset-0 z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback gradient */}
                    <div 
                      className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center absolute inset-0 z-0`}
                      style={{ display: 'none' }}
                    >
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p className="text-sm opacity-90">Project Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
                    isDarkMode ? "text-[#F4F4F5]" : "text-gray-900"
                  }`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDarkMode ? "text-[#F4F4F5]/80" : "text-gray-700"
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isDarkMode 
                            ? "bg-[#6C38FF]/20 text-[#3d8aff]" 
                            : "bg-[#6C38FF]/10 text-[#6C38FF]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "border-[#3d5afe]/50 text-[#3d8aff] hover:bg-[#3d5afe]/10"
                          : "border-[#6C38FF]/50 text-[#6C38FF] hover:bg-[#6C38FF]/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isDarkMode
                          ? "bg-[#3d8aff] text-white hover:bg-[#3d8aff]/90"
                          : "bg-[#6C38FF] text-white hover:bg-[#6C38FF]/90"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${isDarkMode ? "text-[#F4F4F5]/80" : "text-gray-700"}`}>
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/vishalm342"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
              isDarkMode
                ? "border-[#3d8aff] text-[#3d8aff] hover:bg-[#3d8aff] hover:text-white"
                : "border-[#6C38FF] text-[#6C38FF] hover:bg-[#6C38FF] hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span className="font-medium">View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
