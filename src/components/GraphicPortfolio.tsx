import React from 'react';

const GraphicPortfolioLink: React.FC = () => {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(to bottom, #0A1A2E, #1E3A8A)',
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Découvrez mon portfolio de graphisme
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          En plus du développement, je suis passionné par le design graphique. Explorez mes créations visuelles, incluant des logos, interfaces utilisateur, et bien plus.
        </p>
        <a
          href="/graphic-portfolio" // Remplacez par l'URL réelle de votre portfolio graphisme
          className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300"
        >
          Voir mes créations graphiques
        </a>
      </div>
    </section>
  );
};

export default GraphicPortfolioLink;