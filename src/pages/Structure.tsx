
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectStructure from '../components/ProjectStructure';

// Componente da página de estrutura de projetos
// Autor: [Seu Nome]
// Data de implementação: [Data atual]
// Este componente apresenta as melhores práticas para organização de código em projetos React Native
const Structure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Registra visualização da página
    console.log('Página de estrutura acessada');
    
    // Possibilidade de integração com Google Analytics
    // analytics.logEvent('page_view', {page_name: 'structure'});
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-6 max-w-3xl mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Organização
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Estrutura de Projetos
          </h1>
          <p className="text-lg text-gray-600">
            Aprenda as melhores práticas para organizar seu projeto React Native
            e manter um código limpo e escalável.
          </p>
        </div>
        <ProjectStructure />
      </main>
      <Footer />
    </div>
  );
};

export default Structure;
