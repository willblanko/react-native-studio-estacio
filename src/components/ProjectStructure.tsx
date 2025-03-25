
import { useRef, useEffect } from 'react';
import SectionHeader from './structure/SectionHeader';
import FileStructure from './structure/FileStructure';
import StructureDetails from './structure/StructureDetails';

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

  return (
    <section ref={sectionRef} className="py-20 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-6">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <FileStructure />
          </div>
          
          <div>
            <StructureDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStructure;
