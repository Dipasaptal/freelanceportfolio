import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white w-full fixed top-0 left-0 z-50 shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black shadow-lg">
                DS
              </div>
              <div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:from-orange-500 group-hover:to-red-500 transition-all">
                  DIPA SAPTAL
                </div>
                <div className="text-xs text-gray-400">Freelance Developer</div>
              </div>
            </motion.div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              SERVICES
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              PROJECTS
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              CONTACT
            </NavLink>
              {/* <NavLink 
              to="/popup" 
              className={({ isActive }) => 
                `font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`
              }
            >
              POPUP
            </NavLink> */}

            {/* Hire Me Button */}
            {/* <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              💼 Hire Me
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              HOME
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              SERVICES
            </NavLink>

            <NavLink 
              to="/projects" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              PROJECTS
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              CONTACT
            </NavLink>
            {/* <NavLink 
              to="/popup" 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-gray-300 hover:text-yellow-400 transition-colors"
            >
              POPUP
            </NavLink> */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg text-center"
            >
              💼 Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;