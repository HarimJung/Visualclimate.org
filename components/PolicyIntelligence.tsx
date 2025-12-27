
import React from 'react';
import { Target, Link, Fingerprint, ShieldCheck } from 'lucide-react';

const PolicyIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Intelligent Mapping</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Experience The <span className="blue-gradient-text">Future of Policy Mapping</span>
          </h2>
        </div>

        <div className="space-y-24">
          {/* Feature Row 1: Policy Alignment */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                {/* Visual UI Mockup */}
                <div className="bg-blue-600 rounded-[40px] p-1 shadow-2xl overflow-hidden group">
                  <div className="bg-white rounded-[38px] p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><Target className="text-blue-600 w-4 h-4" /></div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">SDG 13 Mapping</span>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">98% MATCH</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="h-2 w-full bg-slate-200 rounded-full mb-2">
                          <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Climate Adaptation Readiness</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="h-2 w-full bg-slate-200 rounded-full mb-2">
                          <div className="h-full w-1/2 bg-blue-400 rounded-full"></div>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Community Resilience Index</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float">
                  <Link className="text-blue-600" />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 lg:order-2">
              <div className="text-xs font-bold text-blue-500 uppercase">Framework Alignment</div>
              <h4 className="text-3xl font-black text-slate-900">Auto-Align Data with <br />International Standards</h4>
              <p className="text-slate-500 text-lg leading-relaxed">
                Resilience.OS automatically maps your local project data to SDG 13, ESG Scope 1-2-3, and BRT compliance requirements. Eliminate 90% of manual cross-referencing.
              </p>
              <ul className="space-y-4">
                {['Direct SDG 13 Goal Alignment', 'Real-time ESG Compliance Checks', 'Policy Conflict Detection'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white"><ShieldCheck size={12} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Row 2: Sovereign Security */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="text-xs font-bold text-indigo-500 uppercase">Privacy & Sovereignty</div>
              <h4 className="text-3xl font-black text-slate-900">Experience The Ultimate in <br />Local Security</h4>
              <p className="text-slate-500 text-lg leading-relaxed">
                Your policy intelligence is your most sensitive asset. Our Local RAG engine ensures that analysis happens where the data lives. No cloud, no leaks, total peace of mind.
              </p>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-2">
                <span>View Security Specs</span>
                <Link size={18} />
              </button>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <div className="bg-slate-50 rounded-[48px] p-12 border border-slate-100 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-600/5 rounded-full animate-pulse scale-110"></div>
                    <Fingerprint size={80} className="text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                {/* Dynamic Grid Background Overlay */}
                <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyIntelligence;
