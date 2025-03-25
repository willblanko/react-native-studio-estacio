
export type StructureItem = {
  name: string;
  type: 'file' | 'folder';
  description: string;
};

export const projectStructureItems: StructureItem[] = [
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
