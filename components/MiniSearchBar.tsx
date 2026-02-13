
import React from 'react';

const MiniSearchBar: React.FC = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-blue-700 font-bold text-sm uppercase tracking-wider">
          <i className="fas fa-search mr-3"></i>
          O que você procura hoje?
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 relative">
          <input 
            type="text" 
            placeholder="Pesquise por leis, serviços, impostos ou notícias..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-4 pr-12 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-blue-700 text-white px-4 rounded-md hover:bg-blue-800 transition flex items-center justify-center">
            <i className="fas fa-search text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniSearchBar;
