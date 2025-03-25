
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detecta a seção atual baseada na posição de rolagem
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY;
        
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach((section) => {
          const htmlElement = section as HTMLElement;
          const sectionTop = htmlElement.offsetTop - 100;
          const sectionHeight = htmlElement.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Executa uma vez ao carregar para definir a seção inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (location.pathname === '/') {
      if (path === '#hero') return activeSection === 'hero';
      if (path === '#setup') return activeSection === 'setup';
      if (path === '#structure') return activeSection === 'structure';
    } else {
      // Para rotas dedicadas
      if (path === '/') return location.pathname === '/';
      if (path === '/setup') return location.pathname === '/setup';
      if (path === '/structure') return location.pathname === '/structure';
      if (path === '/resources') return location.pathname === '/resources';
    }
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">RN</span>
          </div>
          <span className="font-semibold text-xl">RNStudio</span>
        </Link>
        
        <nav className="hidden md:flex space-x-1">
          {location.pathname === '/' ? (
            // Links para as seções da página principal com âncoras
            <>
              <a 
                href="#hero" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('#hero') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Home
              </a>
              <a 
                href="#setup" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('#setup') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Configuração
              </a>
              <a 
                href="#structure" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('#structure') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Estrutura
              </a>
              <a 
                href="https://github.com/seu-usuario/react-native-studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100"
              >
                GitHub
              </a>
            </>
          ) : (
            // Links para navegação entre páginas
            <>
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/setup" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('/setup') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Configuração
              </Link>
              <Link 
                to="/structure" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive('/structure') 
                    ? 'bg-brand-100 text-brand-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Estrutura
              </Link>
              <a 
                href="https://github.com/seu-usuario/react-native-studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100"
              >
                GitHub
              </a>
            </>
          )}
        </nav>
        
        <div className="md:hidden">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
