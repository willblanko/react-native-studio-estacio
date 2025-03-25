
import { useState, useRef, useEffect } from 'react';
import { setupSteps } from '../data/setupSteps';
import StepNavigation from './setup/StepNavigation';
import StepContent from './setup/StepContent';
import ProgressIndicator from './setup/ProgressIndicator';

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

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const handlePrevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  const handleNextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, setupSteps.length));
  };

  const currentStep = setupSteps.find(s => s.id === activeStep) || setupSteps[0];

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
            <StepNavigation 
              steps={setupSteps} 
              activeStep={activeStep} 
              onStepClick={handleStepClick} 
            />
          </div>
          
          <div className="lg:col-span-2">
            <StepContent 
              step={currentStep}
              activeStep={activeStep}
              totalSteps={setupSteps.length}
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
            />
            
            <ProgressIndicator 
              activeStep={activeStep} 
              totalSteps={setupSteps.length} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
