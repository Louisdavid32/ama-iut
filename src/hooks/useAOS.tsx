
import { useEffect } from 'react';

const useAOS = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animateElements = document.querySelectorAll('[data-aos]');
      
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // Offset for when the animation triggers
        
        if (elementPosition < windowHeight - elementVisible) {
          element.classList.add('animate-fade-in');
          const delay = element.getAttribute('data-aos-delay');
          if (delay) {
            (element as HTMLElement).style.animationDelay = `${parseInt(delay)}ms`;
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to animate elements already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useAOS;
