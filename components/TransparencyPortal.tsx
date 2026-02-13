
import React from 'react';

const TransparencyPortal: React.FC = () => {
  const items = [
    {
      title: 'Gastos Públicos',
      icon: 'fa-hand-holding-dollar',
      color: 'text-green-400',
      description: 'Consulta de despesas e investimentos.',
      href: 'https://transparenciamunicipalaam.org.br/p/eirunepe'
    },
    {
      title: 'Licitações',
      icon: 'fa-gavel',
      color: 'text-eiru-yellow',
      description: 'Editais, contratos e acompanhamento.',
      href: '#'
    },
    {
      title: 'Folha de Pagamento',
      icon: 'fa-users-gear',
      color: 'text-blue-300',
      description: 'Dados de servidores e remunerações.',
      href: '#'
    },
    {
      title: 'Legislação',
      icon: 'fa-file-signature',
      color: 'text-purple-400',
      description: 'Leis, decretos e normas municipais.',
      href: '#'
    }
  ];

  return (
    <section className="py-24 bg-eiru-navy text-white overflow-hidden relative">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Transparência <br /><span className="text-white/90">Eirunepé</span>
              </h2>
              <div className="w-20 h-2 bg-eiru-red rounded-full"></div>
            </div>

            <p className="text-blue-100/80 text-xl leading-relaxed max-w-xl font-medium">
              O compromisso com a clareza e o acesso à informação é nossa prioridade absoluta.
              Consulte os dados fiscais e administrativos da "Princesinha do Juruá" de forma aberta e auditável.
            </p>

            <div className="hidden lg:block">
              <a href="https://transparenciamunicipalaam.org.br/p/eirunepe" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all flex items-center group inline-block">
                Portal Completo <i className="fas fa-external-link-alt ml-3 text-sm group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group relative bg-white/10 hover:bg-white/15 border border-white/10 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 flex flex-col min-h-[180px] justify-center shadow-lg"
              >
                <div className={`${item.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <i className={`fas ${item.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-eiru-yellow transition-colors">{item.title}</h3>
                <p className="text-white/50 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Clique para acessar os dados detalhados</p>

                {/* Indicador de Hover sutil */}
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <i className="fas fa-chevron-right text-white/30"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to action móvel */}
        <div className="mt-12 lg:hidden text-center">
          <button className="w-full bg-white text-eiru-navy py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl">
            Ver Todos os Dados
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransparencyPortal;
