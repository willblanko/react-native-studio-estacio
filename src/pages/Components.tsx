
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComponentShowcase from '../components/ComponentShowcase';

// Componente da página de componentes React Native
// Autor: [Seu Nome]
// Data de implementação: [Data atual]
// Objetivo: Demonstrar os principais componentes do React Native com exemplos práticos
const Components = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Registra visualização da página
    console.log('Página de componentes acessada');
    
    // Implementação futura: rastreamento de métricas
    // analytics.trackPageView('/components');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-6 max-w-3xl mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Fundamentos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Componentes do React Native
          </h1>
          <p className="text-lg text-gray-600">
            Explore os principais componentes utilizados no desenvolvimento de aplicações 
            mobile com React Native e entenda como utilizá-los em seus projetos.
          </p>
        </div>
        <ComponentShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Components;
