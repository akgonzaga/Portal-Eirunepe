
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-eiru-navy">
      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-eiru-yellow text-xs font-bold tracking-[0.2em] mb-6 uppercase border border-eiru-yellow/30">
          Bem-vindo ao Portal de Eirunepé
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
          Gestão <span className="text-eiru-yellow">Humana</span>, Conectada e <span className="text-eiru-red">Forte</span>
        </h2>
        <p className="text-blue-100/80 max-w-2xl mx-auto text-lg font-medium">
          A "Princesinha do Juruá" avançando com transparência, compromisso e desenvolvimento para todos.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80 text-sm font-medium">
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <i className="fas fa-heart text-eiru-red"></i>
            <span>Compromisso Social</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <i className="fas fa-share-nodes text-eiru-blue"></i>
            <span>Conectividade Municipal</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <i className="fas fa-star text-eiru-yellow"></i>
            <span>Desenvolvimento Forte</span>
          </div>
        </div>
      </div>
      
      {/* Detalhes de Background Sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eiru-yellow/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-eiru-red/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
    </section>
  );
};

export default Hero;
