
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MiniSearchBar from './components/MiniSearchBar';
import NewsCarousel from './components/NewsCarousel';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import NewsSection from './components/NewsSection';
import TransparencyPortal from './components/TransparencyPortal';
import Footer from './components/Footer';
import AnalysisOverlay from './components/AnalysisOverlay';
import InstitucionalContent from './components/InstitucionalContent';

const App: React.FC = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  // Rola para o topo sempre que mudar de view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const toggleAnalysis = () => setShowAnalysis(!showAnalysis);
  const navigateTo = (view: string) => setCurrentView(view);

  const renderContent = () => {
    if (currentView === 'home') {
      return (
        <>
          <MiniSearchBar />
          <NewsCarousel />
          <Hero />
          
          <div className="bg-white border-b py-4">
             <div className="max-w-7xl mx-auto px-4 flex justify-end">
                <button 
                  onClick={toggleAnalysis}
                  className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition shadow-sm"
                >
                  <i className="fas fa-chart-line mr-2"></i>
                  VER ANÁLISE DE REDESIGN
                </button>
             </div>
          </div>

          <div id="servicos" className="scroll-mt-20">
            <ServicesGrid />
          </div>

          <div id="noticias" className="scroll-mt-20">
            <NewsSection />
          </div>

          <div id="transparencia" className="scroll-mt-20">
            <TransparencyPortal />
          </div>
        </>
      );
    }

    // Renderiza páginas institucionais dinâmicas
    return <InstitucionalContent viewId={currentView} onBack={() => setCurrentView('home')} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />

      {showAnalysis && <AnalysisOverlay onClose={toggleAnalysis} />}
    </div>
  );
};

export default App;
