import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'AI Automation', icon: '🤖' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image Section */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Main Image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"></div>
                <img 
                  src="/photo_yvan.jpeg" 
                  alt="About me" 
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full mx-auto object-cover border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce-slow">
                <span className="text-2xl">💻</span>
                <span className="font-semibold">Developer</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Me connaitre</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  À propos de moi
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Je suis étudiant en <span className="font-semibold text-gray-900">ingénierie informatique à l’EILCO, avec une formation solide en 
                  mathématiques, algorithmique et programmation.</span> Mes principaux centres d’intérêt sont{' '}
                <span className="font-semibold text-blue-600">la data science</span>,{' '}
                <span className="font-semibold text-green-600">les algorithmes d’intelligence artificielle</span>, et{' '}
                <span className="font-semibold text-pink-900">le développement web full-stack</span>, avec{' '}
                <span className="font-semibold text-gray-900">React,Node.js,Laravel</span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                En parallèle, j'apprends l'<span className="font-semibold text-purple-600">automatisation par l'IA</span>, afin d'intégrer des solutions intelligentes dans le développement web moderne.
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-blue-300"
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

             {/* CTA Buttons */}
<div className="pt-6 flex flex-wrap gap-4">
  <a
    href="#contact"
    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  >
    Contacter moi
    <svg 
      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>

  {/* NOUVEAU BOUTON CV */}
  <a
    href="/CV_kenmegne_kamdem_yvan_junior.pdf"
    download="yvan_junior_CV.pdf"
    className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    Télécharger mon CV
  </a>
</div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
};

export default About;