import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiDocker, SiExpress, SiPython, SiLaravel, SiAngular, SiN8N } from 'react-icons/si';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    { name: 'N8N', icon: <SiN8N className="text-red-700" />, category: 'Automation', level: 90 },
    { name: 'React', icon: <FaReact className="text-blue-500" />, category: 'Frontend', level: 95 },
    { name: 'Angular', icon: <SiAngular className="text-red-700" />, category: 'Frontend', level: 85 },
    { name: 'Laravel', icon: <SiLaravel className="text-red-500" />, category: 'Backend', level: 80 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, category: 'Backend', level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, category: 'Language', level: 92 },
    { name: 'Python', icon: <SiPython className="text-yellow-500" />, category: 'Language', level: 88 },
    { name: 'C', icon: <span className="text-lg font-bold text-blue-700">C</span>, category: 'Language', level: 75 },
    { name: 'Express', icon: <SiExpress className="text-gray-800" />, category: 'Backend', level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500" />, category: 'Styling', level: 95 },
    { name: 'Git', icon: <FaGit className="text-orange-500" />, category: 'Tools', level: 93 },
    { name: 'Docker', icon: <SiDocker className="text-blue-700" />, category: 'DevOps', level: 85 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Mes compétences</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            compétences & Technologies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
           Maîtriser les technologies modernes pour créer des solutions innovantes et évolutives.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center">
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <p className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </p>

                {/* Category Badge */}
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  {skill.category}
                </span>

                {/* Progress Bar */}
                <div className="w-full mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: hoveredIndex === index ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>

                {/* Level Indicator (shown on hover) */}
                {hoveredIndex === index && (
                  <span className="absolute top-2 right-2 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-full animate-fade-in">
                    {skill.level}%
                  </span>
                )}
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">{skills.length}+</div>
            <div className="text-gray-700 font-medium">Technologies Maitrisées</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Catégories découverts</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">70%+</div>
            <div className="text-gray-700 font-medium">niveau de compétences</div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;