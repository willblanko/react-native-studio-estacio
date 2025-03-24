
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, Code, Youtube, Github } from "lucide-react";

// Componente da página de recursos
// Autor: [Seu Nome]
// Objetivo: Fornecer links e materiais úteis para desenvolvimento React Native
const Resources = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulação de carregamento de dados
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Dados dos recursos
  const resources = {
    documentation: [
      {
        title: "Documentação Oficial React Native",
        description: "Guia oficial e API de referência para React Native",
        link: "https://reactnative.dev/docs/getting-started",
        icon: Book
      },
      {
        title: "Expo Documentation",
        description: "Documentação completa da plataforma Expo",
        link: "https://docs.expo.dev/",
        icon: Book
      },
      {
        title: "React Navigation",
        description: "Biblioteca de navegação recomendada para React Native",
        link: "https://reactnavigation.org/docs/getting-started",
        icon: Book
      }
    ],
    tutorials: [
      {
        title: "Curso React Native na Prática",
        description: "Curso passo a passo para dominar o desenvolvimento mobile",
        link: "#",
        icon: Youtube
      },
      {
        title: "Construindo seu primeiro app",
        description: "Tutorial completo do zero ao app publicado",
        link: "#",
        icon: Code
      },
      {
        title: "Padrões de UI no React Native",
        description: "Implementando interfaces modernas e responsivas",
        link: "#",
        icon: Code
      }
    ],
    libraries: [
      {
        title: "React Native Paper",
        description: "Biblioteca de componentes Material Design para React Native",
        link: "https://callstack.github.io/react-native-paper/",
        icon: Github
      },
      {
        title: "React Native Elements",
        description: "Kit de UI cross-platform para React Native",
        link: "https://reactnativeelements.com/",
        icon: Github
      },
      {
        title: "Redux Toolkit",
        description: "Gerenciamento de estado eficiente para aplicações React Native",
        link: "https://redux-toolkit.js.org/",
        icon: Github
      }
    ]
  };

  const ResourceCard = ({ item }) => (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2">
          <item.icon className="h-5 w-5 text-brand-500" />
          <CardTitle className="text-lg">{item.title}</CardTitle>
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="gap-2">
            <span>Acessar</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl mb-16">
          <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
            Biblioteca
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos para React Native
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Uma coleção curada de recursos, ferramentas e tutoriais para ajudar você 
            a aprimorar suas habilidades de desenvolvimento React Native.
          </p>
          
          <div className="mt-12">
            <Tabs defaultValue="documentation" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="documentation">Documentação</TabsTrigger>
                <TabsTrigger value="tutorials">Tutoriais</TabsTrigger>
                <TabsTrigger value="libraries">Bibliotecas</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documentation" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.documentation.map((item, index) => (
                    <ResourceCard key={index} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.tutorials.map((item, index) => (
                    <ResourceCard key={index} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="libraries" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.libraries.map((item, index) => (
                    <ResourceCard key={index} item={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
