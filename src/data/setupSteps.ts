
export type SetupStep = {
  id: number;
  title: string;
  description: string;
  command: string;
  tips: string;
  details: string;
};

export const setupSteps: SetupStep[] = [
  {
    id: 1,
    title: 'Instalação do Node.js',
    description: 'O Node.js é necessário para executar o React Native CLI e gerenciar as dependências do projeto.',
    command: 'https://nodejs.org/pt-br/download/',
    tips: 'Recomendamos a versão LTS (versão 18 ou superior) para maior estabilidade. Após a instalação, verifique se o Node.js foi instalado corretamente executando o comando "node -v" no terminal.',
    details: 'Acesse o site oficial do Node.js, baixe o instalador correspondente ao seu sistema operacional (Windows, macOS ou Linux) e siga as instruções de instalação. Certifique-se de instalar também o npm (Node Package Manager), que é incluído por padrão com o Node.js. No Windows, você precisará selecionar explicitamente a opção para instalar o npm durante a instalação. O npm será usado para instalar todas as dependências do seu projeto React Native.'
  },
  {
    id: 2,
    title: 'Instalação do Expo CLI',
    description: 'Expo é uma plataforma que facilita o desenvolvimento React Native, especialmente para iniciantes, abstraindo muitas configurações complexas.',
    command: 'npm install -g expo-cli',
    tips: 'O Expo oferece muitos componentes prontos para uso e simplifica o processo de desenvolvimento. Você também pode utilizar o aplicativo Expo Go em seu dispositivo móvel para testar seus aplicativos rapidamente.',
    details: 'Abra o terminal ou prompt de comando e execute o comando acima. O Expo CLI será instalado globalmente no seu sistema, permitindo que você crie e gerencie projetos React Native facilmente. O Expo funciona com o conceito de "managed workflow", onde muitas complexidades do React Native são abstraídas. Com o Expo, você terá acesso a APIs nativas comuns sem precisar escrever código nativo, como câmera, geolocalização, notificações push e outras funcionalidades.'
  },
  {
    id: 3,
    title: 'Configuração do Android Studio',
    description: 'O Android Studio é necessário para desenvolver e testar aplicativos Android. Ele fornece o SDK do Android e ferramentas de emulação.',
    command: 'https://developer.android.com/studio',
    tips: 'Durante a instalação, certifique-se de selecionar a opção para instalar o Android SDK. É um componente essencial para o desenvolvimento React Native.',
    details: 'Acesse o site do Android Studio, baixe o instalador e execute-o. Na instalação, certifique-se de incluir o Android SDK. Após a instalação, abra o Android Studio e acesse "SDK Manager" para verificar se o SDK foi instalado corretamente. É importante configurar também a variável de ambiente ANDROID_HOME para que aponte para o diretório onde o Android SDK foi instalado, geralmente em "C:\\Users\\[seu-usuario]\\AppData\\Local\\Android\\Sdk" no Windows.'
  },
  {
    id: 4,
    title: 'Configuração do Emulador',
    description: 'Configure um dispositivo virtual Android para testar seu aplicativo sem precisar de um dispositivo físico.',
    command: 'Android Studio > Device Manager > Create Device',
    tips: 'Escolha uma imagem recente do sistema Android, como Pixel 4 com Android 11 ou superior. Dispositivos com Google Play Store são recomendados para testar recursos que dependem de serviços Google.',
    details: 'No Android Studio, acesse o "Device Manager" no menu superior direito. Clique em "Create Device" e selecione um modelo de telefone (ex: Pixel 4). Na próxima tela, escolha a versão do Android (recomendamos Android 11 ou superior). Configure outras opções como quantidade de RAM e armazenamento conforme necessário e finalize a criação. Você pode iniciar o emulador clicando no botão de play ao lado do dispositivo virtual criado. Alternativamente, você pode usar o comando "emulator -avd [nome_do_emulador]" no terminal para iniciar o emulador sem abrir o Android Studio.'
  },
  {
    id: 5,
    title: 'Criação do Projeto e Dependências Principais',
    description: 'Crie um novo projeto React Native utilizando o Expo CLI e entenda as principais dependências do seu projeto.',
    command: 'expo init MeuApp',
    tips: 'Escolha o template "blank" para começar com uma estrutura simples, ou "blank (TypeScript)" se preferir usar TypeScript. Após criar o projeto, você pode usar o exemplo de código que mostramos abaixo como referência.',
    details: 'Abra o terminal ou prompt de comando e navegue até a pasta onde deseja criar seu projeto. Execute o comando "expo init MeuApp" (substitua "MeuApp" pelo nome desejado para seu aplicativo). Você será apresentado a várias opções de templates. Para começar, recomendamos o template "blank" ou "blank (TypeScript)". Após a criação, entre na pasta do projeto com "cd MeuApp". As principais dependências já instaladas no seu projeto incluem: react-native (framework principal), expo (conjunto de ferramentas e serviços), react (biblioteca de UI), e várias dependências do Expo que provêm acesso a recursos nativos. Você pode instalar dependências adicionais usando npm ou yarn, por exemplo: "npm install react-navigation" para navegação entre telas, "npm install axios" para requisições HTTP, ou "npm install @react-native-async-storage/async-storage" para armazenamento local. Exemplo de um componente contador simples em React Native:\n\n```jsx\nimport React, { useState } from \'react\';\nimport { StyleSheet, Text, View, Button } from \'react-native\';\n\nexport default function App() {\n  const [contador, setContador] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.titulo}>Meu Primeiro App React Native</Text>\n      <Text style={styles.contador}>Contador: {contador}</Text>\n      <View style={styles.botoesContainer}>\n        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />\n        <Button title="Decrementar" onPress={() => setContador(contador - 1)} color="#841584" />\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: \'#fff\',\n    alignItems: \'center\',\n    justifyContent: \'center\',\n  },\n  titulo: {\n    fontSize: 24,\n    fontWeight: \'bold\',\n    marginBottom: 20,\n  },\n  contador: {\n    fontSize: 18,\n    marginBottom: 20,\n  },\n  botoesContainer: {\n    flexDirection: \'row\',\n    width: \'80%\',\n    justifyContent: \'space-around\',\n  },\n});\n```'
  },
  {
    id: 6,
    title: 'Executando no Emulador',
    description: 'Execute seu aplicativo React Native no emulador Android configurado anteriormente.',
    command: 'npm start (ou expo start) > a',
    tips: 'Certifique-se de que o emulador está em execução antes de tentar iniciar o aplicativo nele. Você também pode usar o aplicativo Expo Go em um dispositivo físico escaneando o QR code que aparece no terminal.',
    details: 'Com o projeto criado e o servidor de desenvolvimento iniciado (usando "npm start" ou "expo start"), você verá um QR code e várias opções no terminal. Digite "a" para iniciar o aplicativo no emulador Android. Se preferir, você também pode clicar em "Run on Android device/emulator" na interface web que se abre automaticamente no navegador. O aplicativo será compilado e instalado no emulador, e você poderá ver as alterações em tempo real enquanto edita o código. Para testar em um dispositivo físico, instale o aplicativo Expo Go da Play Store, escaneie o QR code e seu aplicativo será executado no dispositivo real.'
  },
  {
    id: 7,
    title: 'Editando o Código com Qualquer Editor',
    description: 'Use qualquer editor de texto ou IDE de sua preferência para editar os arquivos do seu projeto.',
    command: 'Abra a pasta do projeto no seu editor preferido',
    tips: 'Existem várias opções de editores além do VS Code, como Sublime Text, Atom, IntelliJ IDEA, ou até mesmo o Notepad++. Escolha o que mais te agrada e que você já tenha familiaridade.',
    details: 'O principal arquivo a ser editado inicialmente é o "App.js" (ou "App.tsx" se estiver usando TypeScript). Se você vê a mensagem "Open up App.js to start working on your app!" no emulador, significa que o ambiente está configurado corretamente. Os editores mais populares para desenvolvimento React Native incluem: Sublime Text (rápido e leve), Atom (gratuito e personalizável), WebStorm ou IntelliJ IDEA (IDE completo com muitos recursos), Notepad++ (simples mas funcional para Windows). Não é necessário usar o VS Code se você não quiser - qualquer editor que suporte edição de texto é suficiente, embora ferramentas com suporte a sintaxe JavaScript/TypeScript sejam mais convenientes.'
  },
  {
    id: 8,
    title: 'Primeiras Alterações no App.js',
    description: 'Modifique o arquivo App.js para criar sua primeira tela personalizada baseada no nosso exemplo.',
    command: 'Edite o arquivo App.js no seu editor de código preferido',
    tips: 'Use a função Hot Reload do Expo: salve suas alterações e elas aparecerão automaticamente no emulador sem precisar reiniciar o aplicativo. Copie o exemplo que mostramos na etapa 5 como ponto de partida.',
    details: 'Abra o arquivo App.js com seu editor preferido. Substitua o conteúdo pelo nosso exemplo do contador mostrado na etapa 5, ou crie seu próprio componente. Salve o arquivo e observe as mudanças aparecerem instantaneamente no emulador graças ao Hot Reload. Experimente modificar os estilos, textos e lógica para entender melhor como o React Native funciona. Ao desenvolver, você notará que o React Native utiliza componentes específicos como View (semelhante à div do HTML), Text, Button e outros elementos próprios para criar interfaces móveis nativas. Os estilos são definidos através do StyleSheet, que se parece com CSS mas tem algumas diferenças importantes.'
  },
  {
    id: 9,
    title: 'Instalando Dependências Adicionais',
    description: 'Aprenda a instalar e utilizar pacotes adicionais no seu projeto React Native.',
    command: 'npm install nome-do-pacote',
    tips: 'Verifique a compatibilidade do pacote com a versão do React Native que você está usando. Prefira pacotes que são bem mantidos e têm suporte para Expo se você estiver usando essa plataforma.',
    details: 'Existem milhares de pacotes disponíveis para React Native que podem ampliar a funcionalidade do seu aplicativo. Alguns pacotes populares incluem: react-navigation (para navegação entre telas), axios ou fetch (para requisições HTTP), redux ou context API (para gerenciamento de estado), react-native-vector-icons (para ícones), react-native-maps (para mapas), react-native-camera (para acesso à câmera), entre outros. Para instalar qualquer pacote, basta usar o comando "npm install nome-do-pacote" no terminal, dentro da pasta do seu projeto. Após a instalação, você precisará importar o pacote no seu código para utilizá-lo, por exemplo: "import { createStackNavigator } from \'@react-navigation/stack\';".'
  }
];
