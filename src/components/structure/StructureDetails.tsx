
const StructureDetails = () => {
  return (
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
  );
};

export default StructureDetails;
