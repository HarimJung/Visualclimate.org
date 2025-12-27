
import React from 'react';
import { Shield, Cpu, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const dummyData = [
  { name: 'Jan', value: 400, emi: 240 },
  { name: 'Feb', value: 300, emi: 139 },
  { name: 'Mar', value: 200, emi: 980 },
  { name: 'Apr', value: 278, emi: 390 },
  { name: 'May', value: 189, emi: 480 },
  { name: 'Jun', value: 239, emi: 380 },
];

const ProductFocus: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Core Technology</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Climate Literacy Engine</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our technology stack is built to provide maximum transparency and sovereignty for high-stakes climate reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Mockup Area */}
          <div className="dashboard-mockup">
            <div className="dashboard-inner bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-200">
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-6 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="flex-1"></div>
                <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Dashboard Overview</p>
                    <h5 className="text-2xl font-bold text-slate-800">Global Emission Scope 3</h5>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-blue-600 tracking-tighter">1.2B Tons</p>
                    <p className="text-xs text-green-500 font-bold">↑ 2.4% vs last year</p>
                  </div>
                </div>
                
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dummyData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold">SDG 13 Progress</p>
                    <div className="h-2 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-2/3 bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold">ESG Transparency Score</p>
                    <p className="text-xl font-bold text-slate-800 mt-1">94.2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Content */}
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Local RAG Security (Sovereignty)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Defend your data sovereignty. On-premise AI analysis ensures zero external data leakage, keeping sensitive policy information within your walls.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Automation Engine (n8n + Supabase)</h4>
                <p className="text-slate-600 leading-relaxed">
                  "Zero-Click" pipelines. Automatically convert complex PDF reports into structured, queryable data for instant cross-departmental access.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <LayoutDashboard size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Decision Intelligence (Tableau Integration)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Policy-maker focused UI. Real-time monitoring of Scope 1-2-3 emissions and ESG Reporting BRT compliance at a single glance.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-3">
                {['Local RAG', 'n8n', 'Supabase', 'Tableau', 'SDG 13', 'ESG Scope 123'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-tighter">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFocus;
