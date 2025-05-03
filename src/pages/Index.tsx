
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ValuesSection from '../components/ValuesSection';
import TimelineSection from '../components/TimelineSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';

const Index = () => {
  useAOS();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuesSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
