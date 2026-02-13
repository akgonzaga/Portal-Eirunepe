
import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">Eirunepé em Destaque</h2>
          <a href="#" className="hidden md:flex items-center text-blue-700 font-bold hover:underline">
            VER TODAS AS NOTÍCIAS <i className="fas fa-external-link-alt ml-2 text-sm"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main News */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl mb-6">
              <img 
                src="https://picsum.photos/seed/eirunepenews1/1200/800" 
                alt="Destaque" 
                className="w-full h-full object-cover transition transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Educação
              </div>
            </div>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">12 de Outubro de 2023</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mt-2 mb-4 group-hover:text-blue-700 transition">
              Prefeitura anuncia reforma completa de 12 escolas municipais para o próximo ano letivo em Eirunepé
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed line-clamp-2">
              Investimento histórico visa modernizar salas de aula, quadras esportivas e laboratórios de informática em toda a zona urbana e rural de Eirunepé.
            </p>
          </div>

          {/* Side News */}
          <div className="lg:col-span-5 space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 group cursor-pointer items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-2xl shadow">
                  <img 
                    src={`https://picsum.photos/seed/eirunepenews${i+1}/400/400`} 
                    alt="Notícia" 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">Infraestrutura</span>
                  <h4 className="text-base md:text-lg font-bold text-slate-800 leading-tight mt-1 mb-2 group-hover:text-blue-700 transition">
                    Novas frentes de pavimentação chegam aos bairros de Eirunepé
                  </h4>
                  <span className="text-xs text-slate-400">Há 2 dias</span>
                </div>
              </div>
            ))}
            <div className="pt-4 lg:hidden">
              <button className="w-full border-2 border-blue-700 text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-700 hover:text-white transition">
                VER MAIS NOTÍCIAS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
