
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SetupGuide from '../components/SetupGuide';

// Componente da página de configuração
// Autor: Willian Pereira
// Data de implementação: Março de 2024
// Este componente exibe um guia passo a passo para configuração do ambiente React Native
const Setup = () => {
  useEffect(() => {
    // Rolagem para o topo ao carregar a página
    window.scrollTo(0, 0);
    
    // Registra visualização da página para análises futuras
    console.log('Página de configuração acessada');
    
    // Potencial implementação futura:
    // registrarVisualizacaoPagina('setup');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-6 max-w-3xl mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Ambiente
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Configuração do Ambiente
          </h1>
          <p className="text-lg text-gray-600">
            Um guia completo para configurar seu ambiente de desenvolvimento
            React Native de forma rápida e eficiente.
          </p>
        </div>
        <SetupGuide />
      </main>
      <Footer />
    </div>
  );
};

export default Setup;
