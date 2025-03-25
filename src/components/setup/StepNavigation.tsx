
import { SetupStep } from "../../data/setupSteps";

interface StepNavigationProps {
  steps: SetupStep[];
  activeStep: number;
  onStepClick: (stepId: number) => void;
}

const StepNavigation = ({ steps, activeStep, onStepClick }: StepNavigationProps) => {
  return (
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
            onClick={() => onStepClick(step.id)}
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
  );
};

export default StepNavigation;
