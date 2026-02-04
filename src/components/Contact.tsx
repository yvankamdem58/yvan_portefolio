import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm( 
        'service_y7lpwcp',
        'template_shaqq1d',
        form.current,
        '3vin90LyHdxcaZxkr'
      );
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        style: { background: '#10b981', color: '#fff' },
      });
      form.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        style: { background: '#ef4444', color: '#fff' },
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/yvankamdem58', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/yvan-kamdem-data-dev/', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          linear-gradient(to bottom, #0A1A2E, #1E3A8A)
        `,
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Me contacter</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Contacter moi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Vous recherchez un alternant motivé ou avez un projet à proposer ? Échangeons ensemble et voyons comment je peux mettre mes compétences au service de votre entreprise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Entrons en contact</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Je suis à la recherche d’une alternance et ouvert aux opportunités dans les domaines de la data, de l’intelligence artificielle et du développement web.
        N’hésitez pas à me contacter pour toute proposition ou simplement pour échanger.</p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:kamikaelmbarga@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    yvan-junior.kenmegne-kamdem@etu.eilco.univ-littoral.fr
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FaUser className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Contact</h4>
                  <p className="text-gray-300">+ 33 656796212</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Suivez moi</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <span className="text-xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form 
              ref={form} 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="from_name" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <FaUser className="text-blue-400" />
                    Nom
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label htmlFor="from_email" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <FaPaperPlane className="text-blue-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 text-white flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;