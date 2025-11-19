import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
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

  const handleViewServices = () => {
    window.location.href = '/services';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white w-full">
       {/* Hero Section with 3D effects */}
      <div className="relative w-full min-h-screen overflow-hidden" id="home">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-2/3 w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>
        </div>

        <section className="relative flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10 gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full text-center lg:text-left space-y-4 lg:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="px-3 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full text-xs lg:text-sm uppercase tracking-wider shadow-lg">
                🚀 Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">Dipa Saptal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2 lg:space-y-3"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Freelance Web & Mobile App Developer
              </h2>
              
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-50 animate-pulse"></div>
                <h3 className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white px-3 py-2 lg:px-6 lg:py-3 bg-black/30 rounded-lg border-2 border-yellow-400">
                  Your Vision, My Code.
                </h3>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
            >
              Expert in React.js & React Native | Professional Experience | 
              Building Modern, Responsive & High-Performance Applications for Your Business Success
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleViewServices}
                className="px-5 py-2.5 lg:px-8 lg:py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg text-xs sm:text-sm lg:text-base"
              >
                🔧 View Services
              </button>

              <a
                href="tel:+918830××××××"
                className="px-5 py-2.5 lg:px-8 lg:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-xs sm:text-sm lg:text-base"
              >
                📞 Call Now
              </a>
            </motion.div>

           {/* Stats */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3 }}
  className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-6"
>
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10 hover:border-yellow-500/50 transition-all">
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-1 lg:mb-2 leading-tight">Multiple</div>
    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-300 font-medium leading-tight">Projects Delivered</div>
  </div>
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10 hover:border-yellow-500/50 transition-all">
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-1 lg:mb-2 leading-tight">Professional</div>
    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-300 font-medium leading-tight">Experience</div>
  </div>
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10 hover:border-yellow-500/50 transition-all">
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-1 lg:mb-2 leading-tight">100%</div>
    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-300 font-medium leading-tight">Client Satisfaction</div>
  </div>
</motion.div>
          </motion.div>

          {/* Right Image - Professional Photo with 3D Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-1/2 w-full flex items-center justify-center relative"
          >
            {/* 3D Card Effect */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur-xl lg:blur-2xl animate-pulse"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-500 animate-spin-slow opacity-50"></div>
              
              {/* Main image container - FIXED SIZES */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border-4 lg:border-8 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img
                  src="/images/dipa6.jpeg"
                  alt="Dipa Saptal"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-green-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full font-bold shadow-lg text-xs lg:text-sm"
              >
                ✨ Available
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-blue-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full font-bold shadow-lg text-xs lg:text-sm"
              >
                🚀 Fast Delivery
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Services Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Freelance Services
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-6">
              What I Can Do For Your Business
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              Hi, मी <span className="font-semibold text-yellow-400">Dipa</span>. तुमचा business online आणायचा आहे का?<br />
              मी <span className="font-semibold text-yellow-400">responsive वेबसाइट्स</span> आणि 
              <span className="font-semibold text-yellow-400"> mobile apps</span> तयार करून देते 💻 <br /><br />

              तुमच्या brand साठी modern आणि fast digital solution तयार करून देते. <br /><br />

              Custom वेबसाइट, मोबाइल ऍप, UI/UX डिझाईन, API Integration —<br />
              सगळं एकाच ठिकाणी. 
              <span className="font-semibold text-yellow-400"> Project साठी संपर्क करा!</span>
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                desc: "Custom React.js websites with modern UI/UX, fast loading, and SEO optimization",
                features: ["Responsive Design", "API Integration", "Performance Optimization"]
              },
              {
                icon: "📱",
                title: "Mobile App Development",
                desc: "Cross-platform mobile apps using React Native for iOS & Android",
                features: ["Native Performance", "Push Notifications", "Offline Support"]
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Beautiful, user-friendly interfaces that convert visitors to customers",
                features: ["Modern Design", "User Research", "Prototyping"]
              },
              {
                icon: "🛒",
                title: "E-commerce Solutions",
                desc: "Complete online store with payment integration and inventory management",
                features: ["Payment Gateway", "Product Management", "Order Tracking", "Admin Panel", "Security"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 lg:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20"
              >
                <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 lg:mb-6">{service.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-3 lg:mb-6 text-xs sm:text-sm lg:text-base">{service.desc}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-xs sm:text-sm lg:text-base">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-gray-800 opacity-10 mb-2 lg:mb-4">PROJECTS</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold -mt-6 lg:-mt-20 mb-3 lg:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                My Recent Work
              </span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
              Analytical and self-driven developer building user-facing applications. Efficient and knowledgeable coder with
              skills in HTML, CSS, JavaScript, Bootstrap, React.js, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
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
                <div className="relative overflow-hidden h-36 sm:h-40 md:h-48 group">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col">
                  <h5 className="text-base sm:text-lg lg:text-2xl font-bold mb-2 text-white">{proj.title}</h5>
                  <p className="text-gray-300 mb-3 flex-grow leading-relaxed text-xs sm:text-sm lg:text-base">{proj.description}</p>
                  
                  <div className="mb-3 space-y-1.5">
                    <div className="flex items-start">
                      <span className="font-bold text-yellow-400 text-xs sm:text-sm whitespace-nowrap mr-2">💻 Tech:</span>
                      <span className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                        {proj.tech}
                      </span>
                    </div>
                    
                    {proj.tools && (
                      <div className="flex items-start">
                        <span className="font-bold text-purple-400 text-xs sm:text-sm whitespace-nowrap mr-2">🛠️ Tools:</span>
                        <span className="text-gray-300 text-xs sm:text-sm">
                          {proj.tools}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={proj.link}
                    className="mt-auto group relative px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 text-center overflow-hidden text-xs sm:text-sm lg:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      View Project
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Why Choose Me?</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround time without compromising quality" },
              { icon: "💰", title: "Affordable Rates", desc: "Competitive pricing for high-quality work" },
              { icon: "🔧", title: "Support", desc: "Post-delivery support and maintenance included" },
              { icon: "📞", title: "24/7 Available", desc: "Always available to discuss your project" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl text-center border border-white/10 hover:border-yellow-500 transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 lg:mb-4">{item.icon}</div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 lg:mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 30px) rotate(10deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -30px) rotate(-10deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 12s ease-in-out infinite; }
        .animate-float3 { animation: float3 15s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default Home;