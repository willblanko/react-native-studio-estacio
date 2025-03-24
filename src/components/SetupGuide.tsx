
import { useState, useRef, useEffect } from 'react';

const SetupGuide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Instalação do Node.js',
      description: 'O Node.js é necessário para executar o React Native CLI e gerenciar as dependências do projeto.',
      command: 'https://nodejs.org/en/download/',
      tips: 'Recomendamos a versão LTS para maior estabilidade.'
    },
    {
      id: 2,
      title: 'Instalação do Expo CLI',
      description: 'Expo é uma ferramenta que facilita o desenvolvimento React Native, especialmente para iniciantes.',
      command: 'npm install -g expo-cli',
      tips: 'O Expo oferece muitos componentes prontos para uso e simplifica o processo de desenvolvimento.'
    },
    {
      id: 3,
      title: 'Configuração do Android Studio',
      description: 'O Android Studio é necessário para desenvolver e testar aplicativos Android.',
      command: 'https://developer.android.com/studio',
      tips: 'Certifique-se de instalar também o Android SDK, AVD e as ferramentas de linha de comando.'
    },
    {
      id: 4,
      title: 'Configuração do Emulador',
      description: 'Configure um dispositivo virtual Android para testar seu aplicativo.',
      command: 'Android Studio > Device Manager > Create Device',
      tips: 'Escolha uma imagem recente do sistema Android, como Pixel 4 com Android 11.'
    },
    {
      id: 5,
      title: 'Criação do Projeto',
      description: 'Crie um novo projeto React Native utilizando o Expo CLI.',
      command: 'expo init MeuApp',
      tips: 'Escolha um template como "blank" para começar com uma estrutura básica.'
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Configuração
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Guia de instalação React Native
          </h2>
          <p className="text-gray-600">
            Siga este guia passo a passo para configurar um ambiente de desenvolvimento 
            React Native completo em seu computador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Passos de instalação</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeStep === step.id
                        ? 'bg-brand-50 border-l-4 border-brand-500'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleStepClick(step.id)}
                  >
                    <div className="flex items-center">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                        activeStep === step.id 
                          ? 'bg-brand-500 text-white' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {step.id}
                      </div>
                      <span className={`font-medium ${
                        activeStep === step.id ? 'text-brand-700' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {steps.find(s => s.id === activeStep)?.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {steps.find(s => s.id === activeStep)?.description}
                </p>
                
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white mb-6 overflow-x-auto">
                  <pre>{steps.find(s => s.id === activeStep)?.command}</pre>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-1">Dica</h4>
                  <p className="text-amber-700 text-sm">
                    {steps.find(s => s.id === activeStep)?.tips}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    className={`px-4 py-2 rounded-lg border border-gray-200 text-gray-600 transition-all ${
                      activeStep === 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                    disabled={activeStep === 1}
                  >
                    Passo anterior
                  </button>
                  
                  <button
                    className={`px-4 py-2 rounded-lg bg-brand-500 text-white transition-all ${
                      activeStep === steps.length 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-brand-600'
                    }`}
                    onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length))}
                    disabled={activeStep === steps.length}
                  >
                    Próximo passo
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Progresso</h3>
              <div className="w-full bg-gray-100 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-brand-400 to-brand-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${(activeStep / steps.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                Passo {activeStep} de {steps.length} completo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
