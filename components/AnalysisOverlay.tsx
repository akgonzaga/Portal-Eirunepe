
import React from 'react';

interface Props {
  onClose: () => void;
}

const AnalysisOverlay: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">Análise de Redesign: Eirunepé.am.gov.br</h2>
          <button onClick={onClose} className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <i className="fas fa-exclamation-triangle mr-3"></i> O que foi melhorado (UI/UX)
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start"><i className="fas fa-check mt-1 mr-3 text-green-500"></i> <strong>Foco em Serviços:</strong> Diferente de sites institucionais antigos focados em notícias estáticas, o novo portal coloca a barra de busca e serviços no centro da experiência.</li>
              <li className="flex items-start"><i className="fas fa-check mt-1 mr-3 text-green-500"></i> <strong>Responsividade:</strong> Uso de Tailwind CSS para garantir que o menu, as grades e as imagens se ajustem perfeitamente a qualquer dispositivo em Eirunepé.</li>
              <li className="flex items-start"><i className="fas fa-check mt-1 mr-3 text-green-500"></i> <strong>Acessibilidade:</strong> Inclusão de barra de acessibilidade nativa e alto contraste desde o design inicial.</li>
              <li className="flex items-start"><i className="fas fa-check mt-1 mr-3 text-green-500"></i> <strong>Hierarquia Visual:</strong> Uso de tipografia robusta (Inter) e paleta de cores institucional para passar confiança e seriedade.</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
              <i className="fas fa-tools mr-3"></i> Como implementar em WordPress/Elementor
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start"><i className="fas fa-arrow-right mt-1 mr-3 text-blue-500"></i> <strong>Seções Modulares:</strong> Cada componente deste protótipo (Hero, Services, News) foi pensado para ser um "Section" do Elementor.</li>
              <li className="flex items-start"><i className="fas fa-arrow-right mt-1 mr-3 text-blue-500"></i> <strong>Elementor Básico:</strong> Você pode usar o widget de "Ícone com Texto" para o Grid de Serviços e o widget de "Posts" para as notícias.</li>
              <li className="flex items-start"><i className="fas fa-arrow-right mt-1 mr-3 text-blue-500"></i> <strong>Menu:</strong> Utilize o plugin "Header Footer Elementor" para criar o cabeçalho fixo com o logo de Eirunepé.</li>
              <li className="flex items-start"><i className="fas fa-arrow-right mt-1 mr-3 text-blue-500"></i> <strong>Fontes e Cores:</strong> Configure o Tema para Blue (#1D4ED8) e Gray (#F8FAFC) antes de começar.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Recomendação Técnica de Plugins WP</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
             <div className="p-4 bg-white/5 rounded-xl"><strong>Hello Elementor</strong><br/>Tema Base Leve</div>
             <div className="p-4 bg-white/5 rounded-xl"><strong>Advanced Custom Fields</strong><br/>Para dados da Transparência</div>
             <div className="p-4 bg-white/5 rounded-xl"><strong>Smush</strong><br/>Otimização de imagens da região</div>
             <div className="p-4 bg-white/5 rounded-xl"><strong>Polylang</strong><br/>Caso queira atrair turistas</div>
          </div>
        </div>

        <div className="mt-12 text-center">
           <button onClick={onClose} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-2xl">
             VOLTAR PARA O PROTÓTIPO
           </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisOverlay;
