import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Dipa Saptal
            </h3>
            <p className="text-gray-300 mb-4">
              Freelance Web & Mobile App Developer specializing in React.js and React Native. 
              Passionate about creating exceptional digital experiences for businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Dipasaptal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors bg-gray-800 p-2 rounded-full"
              >
                <FiGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dipa-saptal-86ba301a6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors bg-gray-800 p-2 rounded-full"
              >
                <FiLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-yellow-400 mt-1 mr-3" />
                <span className="text-gray-300">Shivajinagar, Pune, India</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-yellow-400 mr-3" />
                <a href="tel:+918830××××××" className="text-gray-300 hover:text-yellow-400 transition-colors">+91 8830××××××</a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-yellow-400 mr-3" />
                <a href="mailto:dipawebstudio@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">dipawebstudio@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dipa Saptal - Freelance Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;