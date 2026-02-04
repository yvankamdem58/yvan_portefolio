import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 70%),
          linear-gradient(to right, #0A1A2E, #0A1A2E)
        `,
      }}
    >
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-6 md:space-y-8">
          {/* Greeting Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-medium">Disponible pour des opportuninitées</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Salut, je suis{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Yvan junior
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-50"></span>
            </span>
            !
          </h1>

          {/* Description */}
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Étudiant ingénieur {' '}
            <span className="text-white font-semibold">IT – DataData, IA</span> & {' '}
            <span className="text-white font-semibold">Développement Web</span>
            <span className="block mt-4 text-base sm:text-lg text-white">
            Étudiant à l’EILCO, passionné par la data science, l’intelligence artificielle
            et le développement web. Je recherche une{' '}
            <span className="relative inline-block font-semibold text-blue-400 animate-pulse">
              alternance
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full animate-pulse"></span>
            </span>{' '}
            pour mettre en pratique mes compétences dans un environnement professionnel.
          </span>
          </p>

         {/* CTA Buttons */}
<div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <a
    href="#projects"
    className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="relative z-10 text-white flex items-center gap-2">
      Voir mes projets
      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  </a>

  {/* NOUVEAU BOUTON CV */}
  <a
    href="./CV_Kenmegne_kamdem_yvan_junior.pdf"
    download="CV_Kenmegne_kamdem_yvan_junior.pdf"
    className="group px-8 py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center gap-2"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    Télécharger mon CV
  </a>

  <a
    href="#contact"
    className="group px-8 py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  >
    Contact
  </a>
</div>

          {/* Social Proof / Stats */}
          <div className={`flex flex-wrap gap-8 pt-8 border-t border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4</span>
              <span className="text-sm text-gray-400">Mes Projets Complétés</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">3+</span>
              <span className="text-sm text-gray-400">Technologies</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-sm text-gray-400">Satisfaction</span>
            </div>
          </div>  
        </div>
      </div>

      {/* Animated Water Drops - Enhanced */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-blue-400/30 rounded-full animate-drop"
            style={{
              top: `${Math.random() * 50}%`,
              right: `${Math.random() * 50}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random()}s`,
              opacity: 0.4 + Math.random() * 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <style>
        {`
          @keyframes drop {
            0% {
              transform: translateY(-100%) scale(1);
              opacity: 0.5;
            }
            70% {
              transform: translateY(100vh) scale(1);
              opacity: 0.3;
            }
            100% {
              transform: translateY(100vh) scale(2);
              opacity: 0;
              border-radius: 50% 50% 50% 0;
            }
          }
          .animate-drop {
            animation: drop infinite ease-in;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            50% {
              transform: translateY(-100px) translateX(50px);
            }
          }
          .animate-float {
            animation: float infinite ease-in-out;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;