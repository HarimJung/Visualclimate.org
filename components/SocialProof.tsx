
import React from 'react';
import { Quote, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Why Visual Climate?</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">Architects of Trust</h3>

        <div className="max-w-4xl mx-auto mb-20 bg-white p-12 md:p-16 rounded-[40px] shadow-xl border border-slate-100 relative">
          <Quote className="absolute top-10 left-10 text-blue-100" size={80} />
          <div className="relative z-10 space-y-8">
            <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed italic">
              "Visual Climate is the only technical architect that delivers <span className="text-blue-600 font-bold">Local Security</span> and <span className="text-blue-600 font-bold">Tangible Automation</span> results simultaneously within the specialized domain of climate data."
            </p>
            <div className="flex flex-col items-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />)}
              </div>
              <p className="font-bold text-xl text-slate-900 tracking-tight">Executive Director, Global Climate Alliance</p>
              <p className="text-slate-400 text-sm">Policy Infrastructure Lead</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-[40px] p-12 md:p-20 text-left overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full -mb-64 -mr-64 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-3xl font-bold">The Strategic Advantage</h4>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Instead of inefficient, bloated legacy IT solutions, Visual Climate leads the innovation of climate workflows with cost reduction and robust security protocols.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-default">
                <span className="text-lg font-medium">99.9% Data Sovereignty Compliance</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-default">
                <span className="text-lg font-medium">Zero-Cost License Architecture</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-default">
                <span className="text-lg font-medium">Verified SDG 13 Transparency</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
