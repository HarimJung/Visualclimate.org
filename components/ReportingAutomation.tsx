
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, Wand2, ArrowUpRight } from 'lucide-react';

const chartData = [
  { name: 'P1', val: 30 },
  { name: 'P2', val: 70 },
  { name: 'P3', val: 45 },
  { name: 'P4', val: 90 },
  { name: 'P5', val: 65 },
];

const ReportingAutomation: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
             <div className="relative">
                <div className="bg-white rounded-[48px] p-10 shadow-2xl border border-slate-100 relative z-10">
                   <div className="flex justify-between items-center mb-10">
                      <div>
                        <h5 className="text-xl font-black text-slate-900">Intelligence Feed</h5>
                        <p className="text-xs text-slate-400 font-bold uppercase">Automated Insight Gen</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                         <Wand2 size={24} />
                      </div>
                   </div>

                   <div className="h-64 w-full mb-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Bar dataKey="val" fill="#2563eb" radius={[10, 10, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-blue-50 rounded-3xl">
                         <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">Status</p>
                         <p className="text-lg font-bold text-blue-700">LIVE SYNC</p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-3xl">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Latency</p>
                         <p className="text-lg font-bold text-slate-700">0.2ms</p>
                      </div>
                   </div>
                </div>

                {/* Floating "Raw Data" Card */}
                <div className="absolute -bottom-10 -left-10 w-64 p-6 bg-slate-900 rounded-3xl shadow-2xl z-20 group">
                   <div className="flex items-center space-x-3 mb-4">
                      <FileText className="text-blue-400" size={20} />
                      <span className="text-white text-sm font-bold tracking-tight">Raw_Report_V1.pdf</span>
                   </div>
                   <div className="h-2 w-full bg-white/10 rounded-full mb-2">
                      <div className="h-full w-full bg-blue-500 rounded-full animate-pulse"></div>
                   </div>
                   <p className="text-[10px] text-blue-200 font-bold">CONVERTING TO VECTOR DATA...</p>
                </div>
             </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest">Dashboards</div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
              From Raw Data to <br />
              <span className="blue-gradient-text">Visual Intelligence</span>
            </h3>
            <p className="text-slate-500 text-xl leading-relaxed font-light">
              Why wait for monthly reports? Resilience.OS transforms unstructured PDF reports into dynamic, Tableau-powered dashboards instantly. Monitor your climate goals in real-time.
            </p>
            <div className="pt-4 flex flex-col gap-4">
               {[
                 { t: 'Instant Tableau Integration', d: 'Zero coding required to sync live intelligence.' },
                 { t: 'Real-time ESG Scorecards', d: 'Always-up-to-date compliance tracking.' },
               ].map((feat, i) => (
                 <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm">
                   <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                     <ArrowUpRight size={20} />
                   </div>
                   <div>
                     <h6 className="font-bold text-slate-900">{feat.t}</h6>
                     <p className="text-sm text-slate-400">{feat.d}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingAutomation;
