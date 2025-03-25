
import { SetupStep } from "../../data/setupSteps";

interface StepContentProps {
  step: SetupStep;
  activeStep: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const StepContent = ({ step, activeStep, totalSteps, onPrevStep, onNextStep }: StepContentProps) => {
  // Função para renderizar exemplos de código com formatação adequada
  const renderCodeExample = (text: string) => {
    // Verifica se há exemplo de código (texto entre ```)
    if (text.includes('```')) {
      const parts = text.split('```');
      return (
        <>
          {parts.map((part, index) => {
            // Índices ímpares são blocos de código (1, 3, 5, etc)
            if (index % 2 === 1) {
              // Remove o indicador da linguagem (jsx, js, etc) se presente
              const code = part.includes('\n') ? part.substring(part.indexOf('\n')).trim() : part;
              return (
                <div key={index} className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white mb-6 overflow-x-auto">
                  <pre>{code}</pre>
                </div>
              );
            } else {
              // Texto normal
              return part ? <p key={index} className="text-gray-700 mb-4">{part}</p> : null;
            }
          })}
        </>
      );
    }
    // Se não houver código, retorna apenas o texto
    return <p className="text-gray-700">{text}</p>;
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-3 bg-gradient-to-r from-brand-400 to-brand-600"></div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">
            {step.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {step.description}
          </p>
          
          <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white mb-6 overflow-x-auto">
            <pre>{step.command}</pre>
          </div>
          
          <div className="bg-gray-50 border rounded p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Instruções detalhadas:</h4>
            {renderCodeExample(step.details)}
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
            <h4 className="font-medium text-amber-800 mb-1">Dica</h4>
            <p className="text-amber-700 text-sm">
              {step.tips}
            </p>
          </div>
          
          <div className="mt-8 flex justify-between">
            <button
              className={`px-4 py-2 rounded-lg border border-gray-200 text-gray-600 transition-all ${
                activeStep === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={onPrevStep}
              disabled={activeStep === 1}
            >
              Passo anterior
            </button>
            
            <button
              className={`px-4 py-2 rounded-lg bg-brand-500 text-white transition-all ${
                activeStep === totalSteps 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-brand-600'
              }`}
              onClick={onNextStep}
              disabled={activeStep === totalSteps}
            >
              Próximo passo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepContent;
