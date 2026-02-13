
import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstOpen, setIsInstOpen] = useState(false);
  const [isServOpen, setIsServOpen] = useState(false);
  const [isSecrOpen, setIsSecrOpen] = useState(false);

  const instDropdownRef = useRef<HTMLDivElement>(null);
  const servDropdownRef = useRef<HTMLDivElement>(null);
  const secrDropdownRef = useRef<HTMLDivElement>(null);

  const brasaoUrl = "/Logo%20site.png"; // Usando encoding para espaço no nome do arquivo
  const transparenciaUrl = "https://transparenciamunicipalaam.org.br/p/eirunepe";

  const handleNavigate = (view: string) => {
    onNavigate(view);
    setIsMenuOpen(false);
    setIsInstOpen(false);
    setIsServOpen(false);
    setIsSecrOpen(false);
  };

  const servicosLinks = [
    { label: 'Portal do Contribuinte', id: 'servico-contribuinte' },
    { label: 'Portal do Servidor', id: 'servico-servidor' },
    { label: 'Alvará Digital', id: 'servico-alvara' },
    { label: 'Nota Fiscal Eletrônica', id: 'servico-nfe' },
    { label: 'Saúde Agendada', id: 'servico-saude' },
    { label: 'Educação Matrículas', id: 'servico-educacao' },
    { label: 'Cadastro de fornecedores', id: 'servico-fornecedores' },
    { label: 'Concurso Público e Processo Seletivo', id: 'servico-concurso' },
    { label: 'Documentos Administrativos', id: 'servico-documentos' },
    { label: 'Diário Oficial', id: 'servico-diario' },
    { label: 'Legislação Municipal', id: 'servico-legislacao' },
    { label: 'Ouvidoria e atendimento', id: 'servico-ouvidoria' },
    { label: 'E-SIC - Serviço de Informação ao Cidadão', id: 'servico-esic' },
  ];

  const institucionalLinks = [
    { label: 'História do Município', id: 'inst-historia' },
    { label: 'Estrutura Administrativa', id: 'inst-estrutura' },
    { label: 'Equipe de Governo', id: 'inst-equipe' },
    { label: 'Organograma', id: 'inst-organograma' },
    { label: 'Plano Plurianual (PPA)', id: 'inst-ppa' },
    { label: 'Leis Orçamentárias (LOA/LDO)', id: 'inst-leis' },
    { label: 'Lei Orgânica (LOM)', id: 'inst-lom' },
  ];

  const secretariasLinks = [
    { label: 'Secretaria Municipal de Educação', id: 'sec-educacao' },
    { label: 'Secretaria Municipal de Saúde', id: 'sec-saude' },
    { label: 'Secretaria Municipal de Assistência Social', id: 'sec-social' },
    { label: 'Secretaria Municipal de Cultura', id: 'sec-cultura' },
    { label: 'Secretaria Municipal de Governo', id: 'sec-governo' },
    { label: 'Secretaria Municipal de Finanças', id: 'sec-financas' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (instDropdownRef.current && !instDropdownRef.current.contains(event.target as Node)) {
        setIsInstOpen(false);
      }
      if (servDropdownRef.current && !servDropdownRef.current.contains(event.target as Node)) {
        setIsServOpen(false);
      }
      if (secrDropdownRef.current && !secrDropdownRef.current.contains(event.target as Node)) {
        setIsSecrOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-eiru-navy font-sans">
      <div className="bg-eiru-navy text-white text-[9px] md:text-[11px] py-1.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4 md:space-x-6">
            <button className="hover:text-eiru-yellow uppercase font-black tracking-widest transition-colors">Acessibilidade</button>
            <button className="hover:text-eiru-yellow uppercase font-black tracking-widest transition-colors">Alto Contraste</button>
            <button className="hover:text-eiru-yellow uppercase font-black tracking-widest transition-colors">Mapa do Site</button>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3 border-r border-white/20 pr-5">
              <a href="https://www.facebook.com/PrefeituraDeEirunepe/" target="_blank" rel="noopener noreferrer" className="hover:text-eiru-blue transition-colors text-sm" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/prefeituraeirunepe" target="_blank" rel="noopener noreferrer" className="hover:text-eiru-red transition-colors text-sm" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/@prefeituraeirunepe" target="_blank" rel="noopener noreferrer" className="hover:text-eiru-yellow transition-colors text-sm" title="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <span className="font-black uppercase tracking-[0.2em] text-white/90">BRASIL.GOV.BR</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <button onClick={() => handleNavigate('home')} className="flex items-center space-x-4 text-left group">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
            <img src={brasaoUrl} alt="Brasão de Eirunepé" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[10px] md:text-xs font-bold text-eiru-navy leading-none tracking-tight uppercase">Prefeitura de</h1>
            <h2 className="text-xl md:text-2xl font-black text-eiru-navy leading-none uppercase tracking-tight">Eirunepé</h2>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex space-x-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-eiru-red"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-eiru-blue"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-eiru-yellow"></div>
              </div>
              <p className="text-[8px] md:text-[10px] text-slate-500 font-medium italic leading-none">Humana, Conectada e Forte</p>
            </div>
          </div>
        </button>

        <div className="hidden lg:flex items-center space-x-8 font-semibold text-slate-700">
          <button onClick={() => handleNavigate('home')} className="hover:text-eiru-navy border-b-2 border-transparent hover:border-eiru-navy pb-1 transition-all">Início</button>

          <div className="relative group" ref={instDropdownRef} onMouseEnter={() => setIsInstOpen(true)} onMouseLeave={() => setIsInstOpen(false)}>
            <button className={`flex items-center space-x-1 hover:text-eiru-navy border-b-2 pb-1 transition-all ${isInstOpen ? 'border-eiru-navy text-eiru-navy' : 'border-transparent'}`}>
              <span>Institucional</span>
              <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isInstOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`absolute left-0 mt-0 pt-4 w-72 transition-all duration-300 ${isInstOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden py-2">
                {institucionalLinks.map((link, idx) => (
                  <button key={idx} onClick={() => handleNavigate(link.id)} className="w-full text-left block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-eiru-navy transition font-medium border-l-4 border-transparent hover:border-eiru-navy">{link.label}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group" ref={servDropdownRef} onMouseEnter={() => setIsServOpen(true)} onMouseLeave={() => setIsServOpen(false)}>
            <button className={`flex items-center space-x-1 hover:text-eiru-navy border-b-2 pb-1 transition-all ${isServOpen ? 'border-eiru-navy text-eiru-navy' : 'border-transparent'}`}>
              <span>Serviços</span>
              <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isServOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`absolute left-0 mt-0 pt-4 w-80 transition-all duration-300 ${isServOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {servicosLinks.map((link, idx) => (
                  <button key={idx} onClick={() => handleNavigate(link.id)} className="w-full text-left block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-eiru-navy transition font-medium border-l-4 border-transparent hover:border-eiru-navy">{link.label}</button>
                ))}
              </div>
            </div>
          </div>

          <a href="#noticias" className="hover:text-eiru-navy border-b-2 border-transparent hover:border-eiru-navy pb-1 transition-all">Notícias</a>

          <button onClick={() => handleNavigate('servico-ouvidoria')} className="bg-eiru-navy text-white px-6 py-2.5 rounded-full hover:bg-eiru-blue transition shadow-lg flex items-center space-x-2 active:scale-95 border-2 border-transparent hover:border-eiru-yellow/50">
            <i className="fas fa-headset"></i>
            <span className="font-bold tracking-tight">OUVIDORIA</span>
          </button>
        </div>

        <button className="lg:hidden text-eiru-navy text-2xl p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-6 space-y-4 shadow-inner max-h-[85vh] overflow-y-auto">
          <button onClick={() => handleNavigate('home')} className="block w-full text-left text-lg font-bold text-slate-700 hover:text-eiru-navy border-l-4 border-transparent hover:border-eiru-navy pl-2">Início</button>
          <div className="space-y-2">
            <button onClick={() => setIsInstOpen(!isInstOpen)} className="flex items-center justify-between w-full text-lg font-bold text-slate-700 border-l-4 border-transparent pl-2">
              <span>Institucional</span>
              <i className={`fas ${isInstOpen ? 'fa-minus' : 'fa-plus'} text-xs text-eiru-navy`}></i>
            </button>
            {isInstOpen && (
              <div className="pl-6 space-y-3 border-l-2 border-slate-100 mt-2">
                {institucionalLinks.map((link, idx) => (
                  <button key={idx} onClick={() => handleNavigate(link.id)} className="block w-full text-left text-sm text-slate-500 hover:text-eiru-navy font-semibold py-1">{link.label}</button>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <button onClick={() => setIsServOpen(!isServOpen)} className="flex items-center justify-between w-full text-lg font-bold text-slate-700 border-l-4 border-transparent pl-2">
              <span>Serviços</span>
              <i className={`fas ${isServOpen ? 'fa-minus' : 'fa-plus'} text-xs text-eiru-navy`}></i>
            </button>
            {isServOpen && (
              <div className="pl-6 space-y-3 border-l-2 border-slate-100 mt-2">
                {servicosLinks.map((link, idx) => (
                  <button key={idx} onClick={() => handleNavigate(link.id)} className="block w-full text-left text-sm text-slate-500 hover:text-eiru-navy font-semibold py-1">{link.label}</button>
                ))}
              </div>
            )}
          </div>
          <hr />
          <button onClick={() => handleNavigate('servico-ouvidoria')} className="block w-full bg-eiru-navy text-center text-white py-4 rounded-xl font-bold text-lg shadow-lg uppercase tracking-wider">Ouvidoria</button>
        </div>
      )}
    </header>
  );
};

export default Header;
