import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ];

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Ferme le menu mobile au scroll
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Scroll Spy - Détection de la section active
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => 
        document.querySelector(link.href) as HTMLElement
      );

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Smooth scroll vers les sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A1A2E]/95 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-[#0A1A2E] shadow-lg'
      }`}
      style={{
        background: scrolled 
          ? 'rgba(10, 26, 46, 0.95)'
          : `
            radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 70%),
            linear-gradient(to right, #0A1A2E, #0A1A2E)
          `,
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo avec animation */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl md:text-2xl font-bold relative group"
          >
            <span className="relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mon Portfolio
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    relative px-4 py-2 text-sm lg:text-base font-medium
                    transition-all duration-300 rounded-lg
                    hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50
                    ${isActive 
                      ? 'text-white' 
                      : 'text-gray-300'
                    }
                  `}
                >
                  {link.label}
                  
                  {/* Indicateur de section active */}
                  <span 
                    className={`
                      absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500
                      transition-all duration-300
                      ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                    `}
                  />
                  
                  {/* Effet hover */}
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              );
            })}
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center
                       text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg
                       hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Bars3Icon 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <XMarkIcon 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile avec animation améliorée */}
      <div
        className={`
          md:hidden bg-[#0A1A2E]/98 backdrop-blur-lg border-t border-white/10
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
          }
        `}
      >
        <div className="container mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  block px-4 py-3 text-base font-medium rounded-lg
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-l-4 border-blue-500' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                  }
                `}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;