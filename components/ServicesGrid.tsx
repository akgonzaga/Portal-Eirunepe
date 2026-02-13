
import React, { useState, useMemo } from 'react';
import { ServiceItem } from '../types';

const allServices: ServiceItem[] = [
  // CIDADÃO
  { id: 'saude', title: 'Saúde Agendada', icon: 'fa-notes-medical', description: 'Agendamento de consultas e exames na rede municipal.', category: 'cidadao' },
  { id: 'educacao', title: 'Educação Matrículas', icon: 'fa-graduation-cap', description: 'Vagas escolares e informações da rede de ensino.', category: 'cidadao' },
  { id: 'concurso', title: 'Concurso e Processo Seletivo', icon: 'fa-user-graduate', description: 'Editais e acompanhamento de processos seletivos.', category: 'cidadao' },
  { id: 'ouvidoria', title: 'Ouvidoria e Atendimento', icon: 'fa-headset', description: 'Canal direto para sugestões, elogios e reclamações.', category: 'cidadao' },
  { id: 'esic', title: 'E-SIC', icon: 'fa-info-circle', description: 'Serviço de Informação ao Cidadão (Acesso à Informação).', category: 'cidadao' },
  { id: 'contribuinte-cid', title: 'Portal do Contribuinte', icon: 'fa-file-invoice-dollar', description: 'Emissão de guias de IPTU, taxas e certidões.', category: 'cidadao' },

  // EMPRESA
  { id: 'alvara', title: 'Alvará Digital', icon: 'fa-building', description: 'Processos de licenciamento e abertura de empresas.', category: 'empresa' },
  { id: 'nfe', title: 'Nota Fiscal Eletrônica', icon: 'fa-receipt', description: 'Sistema de emissão de NFSe e gestão tributária.', category: 'empresa' },
  { id: 'fornecedores', title: 'Cadastro de Fornecedores', icon: 'fa-truck-loading', description: 'Inscrição para empresas que desejam contratar com a prefeitura.', category: 'empresa' },

  // SERVIDOR
  { id: 'servidor', title: 'Portal do Servidor', icon: 'fa-user-tie', description: 'Acesso a holerites, informe de rendimentos e margem consignável.', category: 'servidor' },
  { id: 'documentos', title: 'Documentos Administrativos', icon: 'fa-folder-open', description: 'Acesso a formulários e documentos internos para servidores.', category: 'servidor' },
];

const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cidadao' | 'empresa' | 'servidor'>('cidadao');

  const filteredServices = useMemo(() => {
    return allServices.filter(service => service.category === activeTab);
  }, [activeTab]);

  const getCategoryColor = (cat: string) => {
    if (cat === 'cidadao') return 'text-eiru-red';
    if (cat === 'empresa') return 'text-eiru-blue';
    return 'text-eiru-yellow';
  };

  const getCategoryBg = (cat: string) => {
    if (cat === 'cidadao') return 'bg-eiru-red/10';
    if (cat === 'empresa') return 'bg-eiru-blue/10';
    return 'bg-eiru-yellow/10';
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-eiru-navy font-bold tracking-widest uppercase text-sm">Serviços e Utilidades</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-2">Portal de Serviços</h2>
          </div>
          
          <div className="flex bg-slate-100 p-1.5 rounded-2xl shadow-inner">
            <button 
              onClick={() => setActiveTab('cidadao')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'cidadao' 
                ? 'bg-white text-eiru-red shadow-md scale-100' 
                : 'text-slate-500 hover:text-eiru-red/70'
              }`}
            >
              <i className="fas fa-heart text-[10px]"></i>
              <span>CIDADÃO</span>
            </button>
            <button 
              onClick={() => setActiveTab('empresa')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'empresa' 
                ? 'bg-white text-eiru-blue shadow-md scale-100' 
                : 'text-slate-500 hover:text-eiru-blue/70'
              }`}
            >
              <i className="fas fa-share-nodes text-[10px]"></i>
              <span>EMPRESA</span>
            </button>
            <button 
              onClick={() => setActiveTab('servidor')}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'servidor' 
                ? 'bg-white text-eiru-navy shadow-md scale-100' 
                : 'text-slate-500 hover:text-eiru-navy/70'
              }`}
            >
              <i className="fas fa-star text-[10px] text-eiru-yellow"></i>
              <span>SERVIDOR</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="group p-8 rounded-3xl border border-slate-100 hover:border-eiru-navy/20 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className={`w-14 h-14 ${getCategoryBg(service.category)} rounded-2xl flex items-center justify-center ${getCategoryColor(service.category)} mb-6 group-hover:bg-eiru-navy group-hover:text-white transition-all duration-300`}>
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-black text-eiru-navy mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-grow font-medium">{service.description}</p>
              <a href="#" className={`inline-flex items-center ${getCategoryColor(service.category)} font-black text-xs uppercase tracking-widest hover:opacity-80 transition-opacity`}>
                Acessar agora <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
