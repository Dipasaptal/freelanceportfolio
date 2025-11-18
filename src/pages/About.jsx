import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React.js", percentage: 88, icon: "⚛️" },
    { name: "React Native", percentage: 85, icon: "📱" },
    { name: "JavaScript", percentage: 85, icon: "💛" },
    { name: "HTML5/CSS3", percentage: 95, icon: "🎨" },
    { name: "Tailwind CSS", percentage: 90, icon: "🎨" },
    { name: "Node.js", percentage: 70, icon: "🟢" },
    { name: "API Integration", percentage: 85, icon: "🔌" },
    { name: "UI/UX Design", percentage: 80, icon: "✨" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 opacity-10 mb-4">ABOUT ME</h1>
          <h2 className="text-4xl md:text-5xl font-bold -mt-20 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Freelance Web & Mobile App Developer
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Photo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block group">
            {/* 3D Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>
            
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-4 border-yellow-500 animate-spin-slow"></div>
            
            {/* Image */}
            <div className="relative p-2">
              <img
                src="/images/dipas.jpeg"
                alt="Dipa Saptal"
                className="w-72 h-72 object-cover rounded-full border-8 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Badges */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
            >
              💼 Available
            </motion.div>
          </div>
        </motion.div>

        {/* About & Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 text-3xl shadow-lg">
                👨‍💻
              </div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Hi! I'm <span className="text-yellow-400 font-bold">Dipa Saptal</span>, a passionate Freelance Web & Mobile App Developer with <span className="text-yellow-400 font-bold">1+ year of professional experience</span> in React.js and React Native.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Currently working as a <span className="text-yellow-400 font-bold">React.js Developer at Z-Plus Cyber Secure Technology, Pune</span>. I specialize in creating high-quality, responsive websites and mobile applications tailored to client needs.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I take freelance projects and deliver modern, user-focused digital solutions that help businesses grow online.
            </p>

            <div className="mt-8 p-6 bg-black/30 rounded-2xl border border-yellow-500/30">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🎯 Freelance Focus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-gray-300">Custom Website Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-gray-300">Mobile App Development (Android/iOS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-gray-300">E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-gray-300">API Integration & Backend</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4 text-3xl shadow-lg">
                💼
              </div>
              <h2 className="text-3xl font-bold">Freelance Services</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "🌐",
                  title: "Website Development",
                  desc: "Modern, responsive websites using React.js, Tailwind CSS",
                  price: "Depends on Requirements"
                },
                {
                  icon: "📱",
                  title: "Mobile App Development",
                  desc: "Cross-platform apps using React Native for iOS & Android",
                  price: "Depends on Requirements"
                },
                {
                  icon: "🛒",
                  title: "E-commerce Solutions",
                  desc: "Complete online store with payment integration",
                  price: "Depends on Requirements"
                },
                {
                  icon: "🔧",
                  title: "Maintenance & Support",
                  desc: "Bug fixes, updates, and ongoing support",
                  price: "Monthly packages available"
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all">
                  <div className="flex items-start">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{service.desc}</p>
                      <p className="text-yellow-400 font-bold text-sm">{service.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Work Experience & Personal Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 text-3xl shadow-lg">
                💼
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-yellow-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 font-bold">Oct 2024 - Present</span>
                <h3 className="text-xl font-bold mt-2">React.js Developer</h3>
                <p className="text-gray-400">Z-Plus Cyber Secure Technology, Pune</p>
                <p className="text-gray-300 mt-2">Building responsive web applications and Android apps using React.js and React Native. Improving site performance, implementing reusable components, and integrating APIs.</p>
              </div>

              <div className="relative pl-8 border-l-4 border-yellow-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 font-bold">2024 (5 months)</span>
                <h3 className="text-xl font-bold mt-2">Front-End Development Intern</h3>
                <p className="text-gray-400">SevenMentor Pvt. Ltd., Pune</p>
                <p className="text-gray-300 mt-2">Built strong foundation in modern web technologies and contributed to developing user-friendly and scalable solutions.</p>
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-800 to-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-700 hover:border-green-500 transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 text-3xl shadow-lg">
                📋
              </div>
              <h2 className="text-3xl font-bold">Contact Info</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">👤</span>
                <div>
                  <span className="font-bold text-gray-400">Name:</span>
                  <span className="text-white ml-2">Dipa Saptal</span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">💻</span>
                <div>
                  <span className="font-bold text-gray-400">Role:</span>
                  <span className="text-white ml-2">Freelance Developer</span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <span className="font-bold text-gray-400">Location:</span>
                  <span className="text-white ml-2">Shivajinagar, Pune</span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <span className="font-bold text-gray-400">Phone:</span>
                  <a href="tel:+918830××××××" className="text-yellow-400 ml-2 hover:underline">+91 8830××××××</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">✉️</span>
                <div>
                  <span className="font-bold text-gray-400">Email:</span>
                  <a href="mailto:dipawebstudio@gmail.com" className="text-yellow-400 ml-2 hover:underline">dipawebstudio@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-black/30 rounded-xl">
                <span className="text-2xl mr-4">🎓</span>
                <div>
                  <span className="font-bold text-gray-400">Education:</span>
                  <span className="text-white ml-2">BTech CSE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-xl">Technologies I Work With</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{skill.icon}</span>
                    <span className="font-bold text-xl text-white">{skill.name}</span>
                  </div>
                  <span className="text-yellow-400 font-bold text-xl">{skill.percentage}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full shadow-lg"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;