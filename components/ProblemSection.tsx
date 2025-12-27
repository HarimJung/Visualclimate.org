
import React from 'react';
import { Database, ShieldAlert } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 inline-block">The Climate Dilemma</span>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Why Traditional <br /> Reporting <span className="text-blue-600">is Failing</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm mb-2">
            International agencies are drowning in data but starving for intelligence. We provide the bridge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group p-12 bg-white rounded-[48px] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl shadow-sm">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
              <Database size={32} />
            </div>
            <h4 className="text-3xl font-bold text-slate-900 mb-6">The Content Deluge</h4>
            <p className="text-slate-500 text-xl leading-relaxed">
              Manually analyzing IPCC reports is no longer sustainable. Our AI compresses <span className="font-bold text-slate-900">10 hours of work into 10 minutes</span> of high-fidelity policy insights.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-12 bg-white rounded-[48px] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform">
              <ShieldAlert size={32} />
            </div>
            <h4 className="text-3xl font-bold text-slate-900 mb-6">Security Sovereignity</h4>
            <p className="text-slate-500 text-xl leading-relaxed">
              Cloud AI leaks proprietary data. Our <span className="font-bold text-slate-900">Local RAG</span> architecture ensures your intelligence stays strictly on your servers. Zero risk, total control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
