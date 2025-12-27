
import React from 'react';
import { ArrowUpRight, TrendingUp, Users2, Globe2 } from 'lucide-react';

const ImpactStats: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Impact Tracking</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">See Your <span className="blue-gradient-text">Impact Grow</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-10 rounded-[40px] border border-slate-100 bg-slate-50/50 flex flex-col justify-between hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-10">
              <div className="p-4 bg-white rounded-2xl shadow-sm"><Users2 className="text-blue-600" /></div>
              <div className="flex items-center text-blue-600 font-black text-xl">
                <ArrowUpRight size={20} className="mr-1" />
                <span>+2.4%</span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">1,240+</p>
              <p className="text-slate-400 font-medium">Policy Makers Trained</p>
            </div>
          </div>

          <div className="p-10 rounded-[40px] bg-blue-600 text-white flex flex-col justify-between shadow-2xl shadow-blue-200">
            <div className="flex justify-between items-start mb-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl"><Globe2 /></div>
              <div className="flex items-center text-blue-200 font-black text-xl">
                <TrendingUp size={20} className="mr-1" />
                <span>100%</span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">48 Countries</p>
              <p className="text-blue-100/70 font-medium">Deploying Resilience.OS</p>
            </div>
          </div>

          <div className="p-10 rounded-[40px] border border-slate-100 bg-slate-50/50 flex flex-col justify-between hover:bg-white transition-colors">
            <div className="flex justify-between items-start mb-10">
              <div className="p-4 bg-white rounded-2xl shadow-sm"><TrendingUp className="text-emerald-500" /></div>
              <div className="flex items-center text-emerald-500 font-black text-xl">
                <ArrowUpRight size={20} className="mr-1" />
                <span>90%</span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900 mb-2">Zero-Cost</p>
              <p className="text-slate-400 font-medium">Infrastructure Savings</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]"></div>
          <div className="relative z-10 flex-1">
             <h4 className="text-2xl font-bold text-white mb-2">Ready to scale your climate action?</h4>
             <p className="text-slate-400">Join the elite network of organizations using sovereign intelligence.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:shadow-2xl transition-all whitespace-nowrap">Get The Blueprint</button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
