import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
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
  ];

  const pricingServices = [
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
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-2/3 w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Freelance Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg lg:text-xl mb-6">
            What I Can Do For Your Business
          </p>

          {/* Marathi Intro */}
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20"
            >
              <div className="text-4xl lg:text-6xl mb-4 lg:mb-6">{service.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">{service.desc}</p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm lg:text-base">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-purple-800 to-gray-900 p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500">
            <div className="flex items-center mb-8 justify-center lg:justify-start">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4 text-3xl shadow-lg">
                💼
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Pricing & Packages</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pricingServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/30 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all"
                >
                  <div className="flex items-start">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{service.desc}</p>
                      <p className="text-yellow-400 font-bold text-lg">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm lg:text-base mb-4">
                💡 All packages include responsive design, cross-browser compatibility, and basic SEO optimization
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all"
              >
                Get Custom Quote
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Why Choose Me?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                <div className="text-4xl lg:text-5xl mb-3 lg:mb-4">{item.icon}</div>
                <h3 className="text-lg lg:text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm lg:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 12s ease-in-out infinite; }
        .animate-float3 { animation: float3 15s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Services;