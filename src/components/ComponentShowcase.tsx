
import { useState, useEffect, useRef } from 'react';

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('view');
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

  const ComponentTab = ({ name }: { name: string }) => (
    <button
      className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        activeTab === name
          ? 'bg-brand-100 text-brand-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={() => setActiveTab(name)}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );

  return (
    <section ref={sectionRef} className="py-20 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Componentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Biblioteca de componentes React Native
          </h2>
          <p className="text-gray-600">
            Explore os componentes fundamentais do React Native e aprenda como utilizá-los 
            em seus projetos através de exemplos práticos.
          </p>
          
          {/* Highlight for the main components used in App.js example */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">
              Componentes principais do ponto 5 (Criação do Projeto)
            </h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              <li className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">View</li>
              <li className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Text</li>
              <li className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">StyleSheet</li>
              <li className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">StatusBar</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <ComponentTab name="view" />
          <ComponentTab name="text" />
          <ComponentTab name="stylesheet" />
          <ComponentTab name="statusbar" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 overflow-hidden">
            <div className="mobile-screen mx-auto scale-[0.8] origin-top">
              {activeTab === 'view' && (
                <div className="h-full w-full bg-white p-4">
                  <div className="h-full w-full bg-brand-100 rounded-xl flex items-center justify-center">
                    <p className="text-brand-600 font-medium">View Component</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'text' && (
                <div className="h-full w-full bg-white p-8 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold">Heading Text</h3>
                  <p className="text-base">Regular paragraph text</p>
                  <p className="text-sm text-gray-500">Small caption text</p>
                  <p className="font-mono">Monospace text</p>
                  <p className="italic">Italic text</p>
                  <p className="text-brand-500 font-bold">Colored bold text</p>
                </div>
              )}
              
              {activeTab === 'stylesheet' && (
                <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                  <div className="w-full p-4 border border-gray-200 rounded-xl">
                    <div className="h-12 bg-brand-100 rounded-lg mb-3"></div>
                    <div className="h-20 bg-gray-100 rounded-lg mb-3"></div>
                    <div className="h-8 bg-red-100 rounded-lg"></div>
                  </div>
                  <div className="w-full p-4 border border-gray-200 rounded-xl">
                    <p className="text-xs font-mono mb-2 text-gray-500">StyleSheet.create({'{}'}):</p>
                    <div className="h-32 bg-gray-50 rounded-lg border border-gray-200"></div>
                  </div>
                </div>
              )}
              
              {activeTab === 'statusbar' && (
                <div className="h-full w-full bg-white">
                  <div className="h-8 bg-black"></div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-5 w-20 bg-gray-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-gray-100 rounded-xl mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded-xl"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-2xl p-6 text-white h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400 font-mono">
                  {activeTab === 'view' && 'ViewExample.tsx'}
                  {activeTab === 'text' && 'TextExample.tsx'}
                  {activeTab === 'stylesheet' && 'StyleExample.tsx'}
                  {activeTab === 'statusbar' && 'StatusBarExample.tsx'}
                </div>
              </div>
              
              <div className="font-mono text-sm text-gray-200 overflow-x-auto">
                {activeTab === 'view' && (
                  <pre>{`import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ViewExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>View Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3B82F6',
    fontWeight: '500',
  },
});

export default ViewExample;`}</pre>
                )}
                
                {activeTab === 'text' && (
                  <pre>{`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heading Text</Text>
      <Text style={styles.paragraph}>Regular paragraph text</Text>
      <Text style={styles.caption}>Small caption text</Text>
      <Text style={styles.monospace}>Monospace text</Text>
      <Text style={styles.italic}>Italic text</Text>
      <Text style={styles.coloredBold}>Colored bold text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: '#6B7280',
  },
  monospace: {
    fontFamily: 'monospace',
  },
  italic: {
    fontStyle: 'italic',
  },
  coloredBold: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});

export default TextExample;`}</pre>
                )}
                
                {activeTab === 'stylesheet' && (
                  <pre>{`import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StyleExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.brandBox} />
        <View style={styles.grayBox} />
        <View style={styles.accentBox} />
      </View>
      
      <Text style={styles.label}>
        StyleSheet é uma abstração similar ao CSS
        que otimiza os estilos para React Native
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  section: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    gap: 12,
  },
  brandBox: {
    height: 48,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },
  grayBox: {
    height: 80,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  accentBox: {
    height: 32,
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
  },
});

export default StyleExample;`}</pre>
                )}
                
                {activeTab === 'statusbar' && (
                  <pre>{`import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Meu App</Text>
        <View style={styles.controls}>
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          StatusBar permite controlar a barra de status
          no topo da tela do dispositivo
        </Text>
        <Text style={styles.code}>
          barStyle: 'light-content' | 'dark-content'
        </Text>
        <Text style={styles.code}>
          backgroundColor: string
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    gap: 8,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 4,
  },
});

export default StatusBarExample;`}</pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
