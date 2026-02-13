
import React from 'react';

interface Props {
  viewId: string;
  onBack: () => void;
}

const InstitucionalContent: React.FC<Props> = ({ viewId, onBack }) => {
  const brasaoUrl = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Bras%C3%A3o_de_Eirunep%C3%A9.png";

  const renderHistory = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200" alt="Eirunepé" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center p-8">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center drop-shadow-2xl">A Pérola do Juruá</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-slate-700 leading-relaxed text-lg">
          <p className="font-semibold text-blue-700 text-xl">Fundada em 15 de Setembro de 1894, Eirunepé é um dos marcos da civilização no interior do Amazonas.</p>
          <p>O município teve sua origem no auge do ciclo da borracha. Localizada estrategicamente às margens do Rio Juruá, a cidade cresceu como um importante entreposto comercial para os seringalistas da região.</p>
          <p>Eirunepé, cujo nome em língua indígena significa "Caminho dos Eirus" (em referência ao Eiru, um pequeno primata comum na região), destaca-se por sua arquitetura que mescla influências da belle époque com a robustez amazônica.</p>
          
          <h3 className="text-3xl font-black text-slate-800 mt-10 mb-4 border-l-8 border-blue-600 pl-4">Dados Gerais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center space-x-4">
              <i className="fas fa-users text-blue-600 text-3xl"></i>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">População Estimada</p>
                <p className="text-2xl font-black text-slate-800">35.000 hab.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center space-x-4">
              <i className="fas fa-map-marked-alt text-blue-600 text-3xl"></i>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Área Territorial</p>
                <p className="text-2xl font-black text-slate-800">14.966 km²</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center space-x-4">
              <i className="fas fa-chart-line text-blue-600 text-3xl"></i>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">IDH Municipal</p>
                <p className="text-2xl font-black text-slate-800">0,563 (Médio)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center space-x-4">
              <i className="fas fa-seedling text-blue-600 text-3xl"></i>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">Bioma</p>
                <p className="text-2xl font-black text-slate-800">Amazônia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-landmark mr-3 text-blue-400"></i> Simbolismo
            </h4>
            <div className="flex flex-col items-center mb-6">
               <img src={brasaoUrl} alt="Brasão" className="w-32 mb-4 filter brightness-110" />
               <p className="text-center text-sm italic text-blue-100">O Brasão de Eirunepé representa a união da floresta, a bravura dos pioneiros e a riqueza do Rio Juruá.</p>
            </div>
            <div className="space-y-4">
              <div className="border-t border-blue-800 pt-4">
                <p className="text-xs font-black uppercase text-blue-400 mb-1">Gentílico</p>
                <p className="font-bold">Eirunepeense</p>
              </div>
              <div className="border-t border-blue-800 pt-4">
                <p className="text-xs font-black uppercase text-blue-400 mb-1">Padroeiro(a)</p>
                <p className="font-bold">Nossa Senhora das Dores</p>
              </div>
              <div className="border-t border-blue-800 pt-4">
                <p className="text-xs font-black uppercase text-blue-400 mb-1">Distância de Manaus</p>
                <p className="font-bold">1.160 km (Linha Reta)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string, description: string) => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border shadow-inner">
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
        <i className="fas fa-file-alt text-4xl"></i>
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">{title}</h2>
      <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">{description}</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
        <div className="p-4 border rounded-xl bg-gray-50 text-slate-400 italic text-sm">Documento em atualização</div>
        <div className="p-4 border rounded-xl bg-gray-50 text-slate-400 italic text-sm">Acesso Aberto</div>
        <div className="p-4 border rounded-xl bg-gray-50 text-slate-400 italic text-sm">Transparência 100%</div>
      </div>
    </div>
  );

  const getContent = () => {
    switch (viewId) {
      case 'inst-historia':
        return renderHistory();
      case 'inst-estrutura':
        return renderPlaceholder('Estrutura Administrativa', 'Consulte aqui o quadro organizacional completo da Prefeitura de Eirunepé, incluindo gabinetes e divisões estratégicas.');
      case 'inst-equipe':
        return renderPlaceholder('Equipe de Governo', 'Perfil e contato de todos os secretários e diretores que fazem parte da gestão Humana, Conectada e Forte.');
      case 'inst-organograma':
        return renderPlaceholder('Organograma', 'Visualização gráfica da hierarquia e fluxos de decisão do poder executivo municipal.');
      case 'inst-ppa':
        return renderPlaceholder('Plano Plurianual (PPA)', 'Diretrizes, objetivos e metas da administração pública municipal para um período de quatro anos.');
      case 'inst-leis':
        return renderPlaceholder('Leis Orçamentárias', 'LOA (Lei Orçamentária Anual) e LDO (Lei de Diretrizes Orçamentárias) para consulta pública.');
      case 'inst-lom':
        return renderPlaceholder('Lei Orgânica Municipal', 'A "Constituição" do município de Eirunepé disponível para download e consulta online.');
      case 'sec-educacao':
        return renderPlaceholder('Secretaria Municipal de Educação', 'Gestão das escolas municipais, merenda escolar e programas pedagógicos para o futuro de Eirunepé.');
      case 'sec-saude':
        return renderPlaceholder('Secretaria Municipal de Saúde', 'Administração dos postos de saúde, unidades móveis e programas de imunização e prevenção.');
      case 'sec-social':
        return renderPlaceholder('Assistência Social', 'Programas de auxílio, CRAS, CREAS e defesa dos direitos do cidadão em vulnerabilidade.');
      case 'sec-cultura':
        return renderPlaceholder('Cultura e Eventos', 'Fomento às tradições eirunepeenses, festas populares e preservação do patrimônio histórico.');
      default:
        return renderPlaceholder('Conteúdo Informativo', 'As informações desta seção estão sendo processadas para garantir a máxima transparência e precisão.');
    }
  };

  return (
    <div className="bg-gray-50 pb-24">
      <div className="bg-white border-b shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <button onClick={onBack} className="hover:text-blue-700 transition flex items-center">
              <i className="fas fa-home mr-2"></i> INÍCIO
            </button>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-blue-700">INSTITUCIONAL</span>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 font-bold hover:text-blue-700 transition"
          >
            <i className="fas fa-arrow-left"></i>
            <span>VOLTAR</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {getContent()}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InstitucionalContent;
