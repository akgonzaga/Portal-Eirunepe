
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop',
    title: 'Prefeitura inicia maior programa de asfaltamento da história de Eirunepé',
    category: 'INFRAESTRUTURA',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    title: 'Educação: Novos tablets são entregues para alunos da rede municipal',
    category: 'EDUCAÇÃO',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    title: 'Saúde: Mutirão de cirurgias reduz fila de espera em 70%',
    category: 'SAÚDE',
    link: '#'
  }
];

const NewsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-2xl bg-slate-900 group">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Imagem Nítida sem Blur */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              {/* Overlay de Texto Nítido */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block bg-blue-700 text-white px-3 py-1 rounded text-xs font-bold mb-4 tracking-widest">
                  {slide.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">
                  {slide.title}
                </h3>
                <a href={slide.link} className="mt-6 inline-flex items-center text-blue-400 font-bold hover:text-white transition group/link">
                  LER NOTÍCIA COMPLETA 
                  <i className="fas fa-arrow-right ml-3 transform group-hover/link:translate-x-2 transition"></i>
                </a>
              </div>
            </div>
          ))}

          {/* Navegação */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 right-8 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-blue-600 w-8' : 'bg-white/50'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
