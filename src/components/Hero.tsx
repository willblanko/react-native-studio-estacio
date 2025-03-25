
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const children = containerRef.current?.children || [];
    Array.from(children).forEach((child) => observer.observe(child));
    
    return () => {
      Array.from(children).forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-6 staggered-fade-in">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-2">
            React Native Development
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Configuração e Implementação Prática no <span className="text-brand-500">React Native</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Aprenda a configurar o ambiente de desenvolvimento e implemente aplicações 
            mobile com React Native através de exemplos práticos e código reutilizável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/setup" 
              className="px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl shadow-lg shadow-brand-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Iniciar Configuração
            </Link>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="mobile-screen relative z-10">
              <div className="h-full w-full overflow-hidden bg-white">
                <div className="h-12 bg-brand-500 flex items-center px-4">
                  <div className="w-16 h-3 bg-white/30 rounded-full"></div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
                  <div className="h-32 w-full bg-gray-100 rounded-lg"></div>
                  <div className="flex space-x-2">
                    <div className="h-20 w-1/3 bg-brand-100 rounded-lg"></div>
                    <div className="h-20 w-1/3 bg-brand-100 rounded-lg"></div>
                    <div className="h-20 w-1/3 bg-brand-100 rounded-lg"></div>
                  </div>
                  <div className="h-12 w-full bg-brand-500 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full blur-sm opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
