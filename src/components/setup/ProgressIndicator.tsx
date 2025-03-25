
interface ProgressIndicatorProps {
  activeStep: number;
  totalSteps: number;
}

const ProgressIndicator = ({ activeStep, totalSteps }: ProgressIndicatorProps) => {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xl font-semibold mb-4">Progresso</h3>
      <div className="w-full bg-gray-100 rounded-full h-4 mb-4">
        <div
          className="bg-gradient-to-r from-brand-400 to-brand-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${(activeStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">
        Passo {activeStep} de {totalSteps} completo
      </p>
    </div>
  );
};

export default ProgressIndicator;
