import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const projects = [
    {
      title: "Nature Dairy",
      description: 'A mobile app/marketplace for ordering daily essentials with fast delivery. Users can browse product categories, view details, place orders, and track their purchases.',
      tech: "JavaScript, React Native, Expo",
      tools: "Visual Studio Code",
      img: "/images/nature.jpeg",
      link: "https://play.google.com/store/apps/details?id=com.masterzac.myapp",
    },
    {
      title: "Movie App",
      description: 'Built using React.js and Axios with TheMovieDB API. Features: Top-rated movies, upcoming releases, search, and movie detail pages.',
      tech: "React.js, Axios, TheMovieDB API",
      tools: "Visual Studio Code",
      img: "/images/movie.png",
      link: "https://movie-app-alpha-sand.vercel.app/",
    },
    {
      title: "Pralhad Flours",
      description: 'Developed a modular React.js dashboard interface for admin, category, and product management using Tailwind CSS with responsive popup forms.',
      tech: "React.js, Tailwind CSS, Framer Motion, React Native with Expo app, Material UI",
      tools: "Visual Studio Code",
      img: "/images/flours.png",
      link: "https://pralhadflours.com/",
    },
    {
      title: "Arthagam",
      description: 'Cooperative finance platform offering Pigmi, Fixed Deposit, and SHG modules. Implemented responsive UI with React.js and integrated REST APIs.',
      tech: "React.js, Tailwind CSS, REST API",
      tools: "Visual Studio Code",
      img: "/images/arthagam.png",
      link: "https://admin.arthagam.com/",
    },
    {
      title: "MeghaIndustrie",
      description: 'Responsive manufacturing business website showcasing services, products, and online quote request forms with clean UI.',
      tech: "React.js, JavaScript, Tailwind CSS, REST API, Material UI",
      tools: "Visual Studio Code",
      img: "/images/meghaindustrie.png",
      link: "https://megha-industries-beta.vercel.app/",
    },
    {
      title: "Voice AI Recorder",
      description: 'AI-powered voice recording application with speech-to-text functionality and natural language processing capabilities.',
      tech: "React.js, Web Speech API, AI Integration",
      tools: "Visual Studio Code",
      img: "/images/voice-ai.png",
      link: "https://aichat-seven-xi.vercel.app/",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white w-full min-h-screen py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-gray-800 opacity-10 mb-2 lg:mb-4">PROJECTS</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold -mt-8 lg:-mt-20 mb-4 lg:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              My Recent Work
            </span>
          </h2>
          <p className="text-gray-300 text-base lg:text-xl max-w-3xl mx-auto px-4">
            Analytical and self-driven developer building user-facing applications. Efficient and knowledgeable coder with
            skills in HTML, CSS, JavaScript, Bootstrap, React.js, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-500/25 hover:border-yellow-500/50 transition-all duration-300 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48 group">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/project-placeholder.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">{proj.title}</h5>
                <p className="text-gray-300 mb-3 sm:mb-4 flex-grow leading-relaxed text-sm sm:text-base">{proj.description}</p>
                
                {/* Technologies - SINGLE LINE LAYOUT */}
                <div className="mb-3 sm:mb-4 space-y-2">
                  {/* Technologies */}
                  <div className="flex items-center">
                    <span className="font-bold text-yellow-400 text-sm sm:text-base whitespace-nowrap mr-2">💻 Technologies:</span>
                    <span className="text-gray-300 text-xs sm:text-sm whitespace-nowrap overflow-hidden">
                      {proj.tech}
                    </span>
                  </div>
                  
                  {/* Tools */}
                  {proj.tools && (
                    <div className="flex items-center">
                      <span className="font-bold text-purple-400 text-sm sm:text-base whitespace-nowrap mr-2">🛠️ Tools:</span>
                      <span className="text-gray-300 text-xs sm:text-sm whitespace-nowrap overflow-hidden">
                        {proj.tools}
                      </span>
                    </div>
                  )}
                </div>

                {/* View Project Button */}
                <a
                  href={proj.link}
                  className="mt-auto group relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 text-center overflow-hidden text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View Project
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 rounded-3xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Like What You See?
            </h3>
            <p className="text-gray-300 text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life!
            </p>
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                🚀 Start Your Project
              </a>
              <a
                href="tel:+918830××××××"
                className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                📞 Call Me Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;