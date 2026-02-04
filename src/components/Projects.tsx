import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiPython, SiN8N, SiAngular, SiLaravel } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveLink?: string;
  sourceLink?: string;
  featured?: boolean;
};

const ProjectCard = ({ title, description, technologies, image, liveLink, sourceLink, featured }: Project) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const techIcons: { [key: string]: React.ReactNode } = {
    React: <FaReact className="text-blue-500" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
    'Node.js': <FaNodeJs className="text-green-600" />,
    Express: <SiExpress className="text-gray-700" />,
    Python: <SiPython className="text-yellow-500" />,
    N8N: <SiN8N className="text-red-600" />,
    Angular: <SiAngular className="text-red-700" />,
    Laravel: <SiLaravel className="text-red-500" />,
    'api Meta for whatsapp business': <span className="text-green-600">📱</span>,
    'google API': <span className="text-blue-600">🔍</span>,
    'open ai API': <span className="text-purple-600">🤖</span>,
    'whisper API': <span className="text-indigo-600">🎤</span>,
    'ably': <span className="text-orange-600">⚡</span>,
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
          <span>⭐</span> Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200" style={{ paddingBottom: '65%' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={image} 
          alt={title} 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Quick Links on Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="View demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="View source code"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 capitalize">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="group/tech inline-flex items-center gap-1.5 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <span className="text-base group-hover/tech:scale-110 transition-transform duration-300">
                {techIcons[tech] || '🔧'}
              </span>
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-gray-100">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects: Project[] = [
    
    {
      title: 'Site de Gestion de la Vie Étudiante',
      description: 'Développement d’une plateforme web dédiée à la gestion des clubs étudiants et des événements.',
      technologies: ['PHP','HTML','CSS','JavaScript','GitHub'],
      image: './vie_etu.png',
       liveLink: 'https://www.infinityagence.linkpc.net/',
      sourceLink: 'https://github.com/yvankamdem58/Projet_web',
      featured: true,
    },
    
    {
      title: 'Modélisation d’Algorithmes Évolutionnaires (Flibs)',
      description: 'Projet de simulation basé sur les algorithmes évolutionnaires inspirés de la théorie de Darwin.',
      technologies: ['Python','Algorithmes évolutionnaires','Simulation','Modélisation'],
      image: './algo_evo.png',
      liveLink: 'https://kamikael.github.io/restaurant-food/',
      sourceLink: 'https://github.com/kamikael/restaurant-food/',
      featured: true,
    },
    {
      title: 'Projet Maison Connectée (Micro:bit)',
      description: 'Conception d’un système de maison intelligente à l’aide de microcontrôleurs.',
      technologies: ['Micro:bit','MicroPython','IoT','Systèmes embarqués'],
      image: './maison.jpg',
      liveLink: 'https://youtu.be/6pz_O7Hb8To',
      featured: true,
    },
    // {
    //   title: 'Email Sorters',
    //   description: 'An automated email sorting system that categorizes incoming emails based on their content using N8N and Gmail API.',
    //   technologies: ['N8N', 'google API'],
    //   image: './triEmail.png',
    //   liveLink: 'https://www.tiktok.com/@kami_dev7/video/7514374369703988486?is_from_webapp=1&sender_device=pc&web_id=7539599369285420549',
    //   sourceLink: 'https://github.com/kamikael/triEmail',
    //   featured: true,
    // },
    {
      title: 'Développement du Jeu Tetris',
      description: 'Développement complet du jeu Tetris en Python avec la bibliothèque Pygame.',
      technologies: ['Python','Pygame','Programmation orientée objet'],
      image: './tetris.png',
      // liveLink: 'https://www.tiktok.com/@kami_dev7/video/7520691632228797702?is_from_webapp=1&sender_device=pc&web_id=7539599369285420549',
      sourceLink: 'https://github.com/yvankamdem58/tetris-with-python',
      featured: true,
    },
    // {
    //   title: 'E-commerce Platform',
    //   description: 'A modern e-commerce solution designed specifically for the African market with localized payment methods.',
    //   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    //   image: './screenwebsite.png',
    //   liveLink: 'https://kamikael.github.io/website/',
    //   sourceLink: 'https://github.com/kamikael/website',
    // },
    // {
    //   title: 'SAAS (In Progress)',
    //   description: 'An application to track best-selling products in Africa with video reviews and comprehensive product sheets.',
    //   technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'TypeScript', 'Python'],
    //   image: './saas.png',
    // },
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Mettre en avant des solutions innovantes et des applications concrètes.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { 
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {projects.length}+
            </div>
            <div className="text-gray-700 font-medium">Projets Completés</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-gray-700 font-medium">Travaux présentés</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-700 font-medium">Technologies Utilisées</div>
          </div>
        </div>
      </div>

      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            width: 3rem;
            height: 3rem;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            border-radius: 50%;
            box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 24px rgba(59, 130, 246, 0.4);
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 1rem;
            font-weight: bold;
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            width: 32px;
            border-radius: 6px;
          }

          .swiper-slide {
            height: auto;
            display: flex;
          }

          .swiper-slide > div {
            width: 100%;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;