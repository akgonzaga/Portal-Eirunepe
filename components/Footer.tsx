
import React from 'react';

const Footer: React.FC = () => {
  const brasaoUrl = "/Logo%20site.png"; // Usando encoding para espaço no nome do arquivo

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={brasaoUrl}
                  alt="Brasão de Eirunepé"
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-eiru-yellow uppercase leading-none tracking-widest">Prefeitura de</span>
                <h2 className="text-3xl font-black leading-none uppercase tracking-tighter text-white">Eirunepé</h2>
              </div>
            </div>

            <div className="mb-8 pl-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-eiru-red"></div>
                  <div className="w-2 h-2 rounded-full bg-eiru-blue"></div>
                  <div className="w-2 h-2 rounded-full bg-eiru-yellow"></div>
                </div>
                <p className="text-slate-400 text-[11px] font-bold italic tracking-tight uppercase">Humana, Conectada e Forte</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                Gestão transparente voltada para o bem-estar da nossa gente na Princesinha do Juruá.
              </p>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PrefeituraDeEirunepe/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-eiru-blue transition-all group shadow-xl"><i className="fab fa-facebook-f group-hover:scale-110"></i></a>
              <a href="https://www.instagram.com/prefeituraeirunepe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-eiru-red transition-all group shadow-xl"><i className="fab fa-instagram group-hover:scale-110"></i></a>
              <a href="https://www.youtube.com/@prefeituraeirunepe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-eiru-yellow hover:text-eiru-navy transition-all group shadow-xl"><i className="fab fa-youtube group-hover:scale-110"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black mb-8 text-eiru-yellow uppercase tracking-[0.2em]">Administração</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-white transition flex items-center group"><i className="fas fa-chevron-right text-[8px] mr-3 text-eiru-red group-hover:translate-x-1 transition-transform"></i> Secretarias</a></li>
              <li><a href="#" className="hover:text-white transition flex items-center group"><i className="fas fa-chevron-right text-[8px] mr-3 text-eiru-blue group-hover:translate-x-1 transition-transform"></i> Gabinete do Prefeito</a></li>
              <li><a href="#" className="hover:text-white transition flex items-center group"><i className="fas fa-chevron-right text-[8px] mr-3 text-eiru-yellow group-hover:translate-x-1 transition-transform"></i> Equipe de Governo</a></li>
              <li><a href="#" className="hover:text-white transition flex items-center group"><i className="fas fa-chevron-right text-[8px] mr-3 text-white group-hover:translate-x-1 transition-transform"></i> Diário Oficial</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black mb-8 text-eiru-yellow uppercase tracking-[0.2em]">Cidadão</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-white transition">Portal do Servidor</a></li>
              <li><a href="#" className="hover:text-white transition">IPTU Online</a></li>
              <li><a href="#" className="hover:text-white transition">Nota Fiscal</a></li>
              <li><a href="#" className="hover:text-white transition">Alvará Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black mb-8 text-eiru-yellow uppercase tracking-[0.2em]">Contato</h3>
            <div className="space-y-6 text-slate-400 text-sm font-medium">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-4 text-eiru-red"></i>
                Praça 7 de Setembro, s/nº - Centro<br />Eirunepé - AM, 69880-000
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-4 text-eiru-blue"></i>
                (97) 3481-1154
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mt-4">
                <p className="text-[10px] text-eiru-yellow uppercase font-black mb-2 tracking-widest">Atendimento ao Cidadão</p>
                <p className="text-white font-black text-lg">08:00 às 14:00</p>
                <p className="text-slate-500 text-xs mt-1 italic">Segunda a Sexta-feira</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 uppercase font-black tracking-[0.2em] text-center md:text-left">
          <p>© 2024 Prefeitura de Eirunepé.</p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-eiru-yellow transition">Privacidade</a>
            <a href="#" className="hover:text-eiru-yellow transition">Acessibilidade</a>
            <a href="#" className="hover:text-eiru-yellow transition">Mapa do Site</a>
            <a href="#" className="hover:text-eiru-yellow transition">Desenvolvido por AKGC ONLINE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
