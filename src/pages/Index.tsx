
import Header from '../components/Header';
import Hero from '../components/Hero';
import SetupGuide from '../components/SetupGuide';
import ProjectStructure from '../components/ProjectStructure';
import Footer from '../components/Footer';
import { useEffect } from 'react';

// Componente principal da página inicial
// Autor: [Seu Nome]
// Criado: [Data atual]
// Última atualização: [Data atual]
const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Implementação do registro de analytics para a página inicial
    console.log('Página inicial carregada - Métricas de carregamento podem ser implementadas aqui');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Componente Hero com chamada principal */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* Guia passo-a-passo de configuração do ambiente */}
        <section id="setup">
          <SetupGuide />
        </section>
        
        {/* Estrutura recomendada para projetos React Native */}
        <section id="structure">
          <ProjectStructure />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
