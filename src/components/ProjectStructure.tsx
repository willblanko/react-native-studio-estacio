
import { useRef, useEffect } from 'react';

const ProjectStructure = () => {
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

  const structure = [
    {
      name: 'App.js',
      type: 'file',
      description: 'O ponto de entrada principal do seu aplicativo React Native.'
    },
    {
      name: 'package.json',
      type: 'file',
      description: 'Define as dependências e scripts para seu projeto.'
    },
    {
      name: 'babel.config.js',
      type: 'file',
      description: 'Configuração do Babel para transpilação do código.'
    },
    {
      name: 'node_modules/',
      type: 'folder',
      description: 'Contém todas as dependências instaladas do projeto.'
    },
    {
      name: 'assets/',
      type: 'folder',
      description: 'Armazena arquivos estáticos como imagens, fontes e outros recursos.'
    },
    {
      name: 'src/',
      type: 'folder',
      description: 'Diretório principal do código-fonte da aplicação.'
    },
    {
      name: 'src/components/',
      type: 'folder',
      description: 'Componentes reutilizáveis da interface do usuário.'
    },
    {
      name: 'src/screens/',
      type: 'folder',
      description: 'Telas completas da aplicação.'
    },
    {
      name: 'src/navigation/',
      type: 'folder',
      description: 'Configuração de navegação entre telas.'
    },
    {
      name: 'src/api/',
      type: 'folder',
      description: 'Serviços e funções para comunicação com APIs externas.'
    },
    {
      name: 'src/utils/',
      type: 'folder',
      description: 'Funções utilitárias e helpers.'
    },
    {
      name: 'src/hooks/',
      type: 'folder',
      description: 'Hooks personalizados do React.'
    },
    {
      name: 'src/context/',
      type: 'folder',
      description: 'Contextos do React para gerenciamento de estado global.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Estrutura
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Organização de projeto React Native
          </h2>
          <p className="text-gray-600">
            Uma boa estrutura de pastas e arquivos é essencial para manter seu 
            projeto organizado e escalável à medida que cresce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6">Estrutura de arquivos</h3>
              
              <div className="font-mono text-sm">
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-gray-700">MyReactNativeApp</span>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {structure.map((item, index) => (
                      <div key={index} className="px-4 py-3 hover:bg-gray-50 transition-colors flex items-center">
                        {item.type === 'file' ? (
                          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-brand-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        )}
                        <span className={item.type === 'folder' ? 'text-brand-600 font-medium' : 'text-gray-700'}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6">Detalhes da estrutura</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Organização por funcionalidade</h4>
                  <p className="text-gray-600 text-sm">
                    Recomendamos organizar os arquivos por funcionalidade ou módulo, 
                    em vez de por tipo de arquivo. Isso torna mais fácil encontrar e 
                    modificar relacionados.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Componentes reutilizáveis</h4>
                  <p className="text-gray-600 text-sm">
                    Mantenha seus componentes pequenos, focados e reutilizáveis. 
                    Coloque-os na pasta 'components' e organize por categoria se necessário.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Separação de lógica e UI</h4>
                  <p className="text-gray-600 text-sm">
                    Separe a lógica de negócios da interface do usuário usando 
                    hooks, contexts e serviços. Isso torna seu código mais testável e manutenível.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Consistência de estilo</h4>
                  <p className="text-gray-600 text-sm">
                    Mantenha um sistema de estilo consistente, seja com StyleSheet, 
                    bibliotecas de UI ou arquivos de tema centralizados.
                  </p>
                </div>
                
                <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                  <h4 className="font-medium text-brand-800 mb-2">Dica profissional</h4>
                  <p className="text-brand-700 text-sm">
                    Considere usar Typescript para adicionar tipagem estática ao seu projeto. 
                    Isso ajuda a pegar erros durante o desenvolvimento e melhora a documentação do código.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Exemplo de App.js básico</h3>
          
          <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-white overflow-x-auto">
            <pre>{`import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando telas
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Importando contextos
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStructure;
