
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
            to="/components" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('/components') 
                ? 'bg-brand-100 text-brand-600 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Components
          </Link>
          <Link 
            to="/setup" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('/setup') 
                ? 'bg-brand-100 text-brand-600 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Setup
          </Link>
          <Link 
            to="/structure" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('/structure') 
                ? 'bg-brand-100 text-brand-600 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Structure
          </Link>
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
