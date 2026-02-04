import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/yvankamdem58', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/yvan-kamdem-data-dev/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <FaTiktok />, 
      href: '#', 
      label: 'TikTok',
      color: 'hover:text-pink-400'
    },
    { 
      icon: <FaInstagram />, 
      href: '#', 
      label: 'Instagram',
      color: 'hover:text-purple-400'
    },
  ];

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Yvan junior
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Développeur passionné, créant des solutions innovantes grâce aux technologies modernes et à l’automatisation par l’intelligence artificielle.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Fait avec</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>React & Tailwind</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">lien rapide</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connectons nous</h4>
            <p className="text-gray-400 text-sm">
              Suivez-moi sur les réseaux sociaux pour des actualités et du contenu technologique.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  aria-label={social.label}
                >
                  <span className="text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Yvan. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;