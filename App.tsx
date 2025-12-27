
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BentoFeatures from './components/BentoFeatures';
import AutomationPipeline from './components/AutomationPipeline';
import PolicyIntelligence from './components/PolicyIntelligence';
import ReportingAutomation from './components/ReportingAutomation';
import EducationSection from './components/EducationSection';
import ImpactStats from './components/ImpactStats';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        
        <div className="bg-grid py-12">
          <div id="vision">
            <ProblemSection />
          </div>
        </div>

        <div id="features" className="bg-slate-50/50">
          <BentoFeatures />
        </div>

        <div id="automation">
          <AutomationPipeline />
        </div>

        {/* New Feature Sections for sequential understanding */}
        <div id="mapping">
          <PolicyIntelligence />
        </div>

        <div id="reporting">
          <ReportingAutomation />
        </div>

        <div id="impact">
          <ImpactStats />
        </div>

        <div id="education">
          <EducationSection />
        </div>

        <div id="trust" className="bg-slate-50/50">
          <SocialProof />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
