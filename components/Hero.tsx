
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[850px] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* 
          ENHANCED SPLINE 3D BACKGROUND
          Drastically increased scale and moved closer to the text (reduced translate-x)
          to ensure it feels integrated with the "Climate Intelligence" heading rather than isolated.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe 
          src="https://my.spline.design/interactiveaiwebsite-yAgjjIJceU9lnlROniSBffPH/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="w-full h-full scale-[2.2] lg:scale-[3.8] translate-x-[5%] lg:translate-x-[18%] translate-y-[5%] lg:translate-y-[10%] opacity-100 pointer-events-auto"
          title="Visual Climate Interactive 3D Scene"
        ></iframe>
      </div>

      {/* 
          CONTENT OVERLAY
          The text remains left-aligned, but the increased scale and positioning of the 3D scene 
          now bring the visual elements right up to the edge of the typography.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pointer-events-none flex items-center h-full">
        <div className="max-w-3xl text-left space-y-8 animate-fade-in pointer-events-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-50/90 backdrop-blur-md border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Zap size={14} className="fill-blue-600" />
            <span>Advancing Global Climate Resilience</span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[0.9] drop-shadow-sm">
            From Raw Data to <br />
            <span className="blue-gradient-text">Climate Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed">
            We architect secured, real-time policy dashboards through <span className="font-bold text-blue-600 border-b-2 border-blue-200">Local RAG Systems</span>. 
            Bridging the gap between data sovereignty and decisive action.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center space-x-3 group active:scale-95">
              <span>Launch Demo</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-2xl font-bold text-xl hover:bg-white transition-all shadow-xl flex items-center justify-center active:scale-95">
              <span>Explore Curriculum</span>
            </button>
          </div>

          {/* Trust Logos - Aligned Left */}
          <div className="pt-16 flex flex-wrap items-center gap-8 md:gap-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/United_Nations_logo.png" alt="UN" className="h-10 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/IPCC_Logo.svg/1200px-IPCC_Logo.svg.png" alt="IPCC" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/World_Bank_logo.svg/2560px-World_Bank_logo.svg.png" alt="World Bank" className="h-6 md:h-8" />
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-8 flex flex-col items-center opacity-30 z-10 pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent mb-3"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 rotate-[-90deg] origin-left translate-x-1 mt-8">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;
