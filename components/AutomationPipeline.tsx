
import React from 'react';
import { FileSearch, Layers, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch size={24} />,
    title: "Ingest & Extract",
    desc: "Seamlessly import IPCC reports, ESG filings, and policy PDFs using our vision-based extraction engine.",
    color: "bg-blue-600"
  },
  {
    icon: <Layers size={24} />,
    title: "Vectorize & RAG",
    desc: "Data is embedded into local vector stores where our AI mappings align text with SDG 13 frameworks.",
    color: "bg-indigo-600"
  },
  {
    icon: <Send size={24} />,
    title: "Sync & Report",
    desc: "Automated sync to Supabase and Tableau creates real-time, high-fidelity monitoring dashboards.",
    color: "bg-emerald-600"
  }
];

const AutomationPipeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">The Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">How <span className="text-blue-600">Resilience.OS</span> Helps You</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Phone Mockup like Fizens reference */}
            <div className="relative z-10 w-[300px] md:w-[350px] mx-auto bg-slate-900 rounded-[60px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800">
               <div className="bg-white rounded-[45px] h-[600px] overflow-hidden p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><ArrowRight size={14} className="rotate-180" /></div>
                    <div className="text-xs font-bold text-slate-400">PIPELINE ACTIVE</div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Layers size={14} /></div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="text-xl font-bold">Climate Engine</h5>
                    <p className="text-xs text-slate-400">Last updated: 2 mins ago</p>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                          <span className="text-sm font-bold text-slate-700">Sync Batch #{i}04</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">DONE</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                     <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-200">View Data Feed</button>
                  </div>
               </div>
            </div>
            {/* Decorative BG element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 ${step.color} rounded-[20px] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  {idx < 2 && <div className="w-px h-full bg-slate-100 my-4"></div>}
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationPipeline;
