
import React, { useRef, useState } from 'react';
import { Lock, Cpu, Activity, ArrowUpRight, CheckCircle2, Globe, TrendingUp, Download, X, Wand2, TrendingDown, Monitor, BarChart2, Play, Pause, Maximize2 } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Core Architecture</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter">
            Architecting <span className="blue-gradient-text">Climate Intelligence</span>
          </h2>
        </div>

        {/* 5-Component Bento Grid with increased height for the Dashboard Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 gap-6 h-auto md:h-[1350px]">
          
          {/* Card 1: Sovereign Policy Ledger */}
          <div className="md:col-span-8 md:row-span-1 bento-card rounded-[48px] p-10 flex flex-col justify-between overflow-hidden relative group bg-white border border-slate-100">
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-100">
                <Lock size={24} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Sovereign Policy Ledger</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Track and categorize climate policy impacts automatically using our secure <span className="text-blue-600">Local RAG ledger</span>. Absolute data sovereignty.
              </p>
            </div>
            {/* Visual: Peeking Blue Card */}
            <div className="absolute -bottom-16 -right-16 w-[400px] h-64 bg-gradient-to-br from-blue-700 to-blue-500 rounded-[40px] p-10 text-white shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] transform rotate-[-6deg] group-hover:rotate-0 group-hover:translate-x-[-20px] group-hover:translate-y-[-20px] transition-all duration-700 ease-out flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20"><Cpu size={28} /></div>
                <div className="text-right">
                  <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">POLICY IDENTIFIER</p>
                  <p className="text-sm font-black text-white/90">VC-SDG13-2025-X01</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-1">ACTIVE ARCHITECTURE</p>
                <p className="text-2xl font-black tracking-tighter">RESILIENCE.OS CORE</p>
              </div>
            </div>
          </div>

          {/* Card 2: Emission Quotas */}
          <div className="md:col-span-4 md:row-span-1 bento-card rounded-[48px] p-10 flex flex-col justify-between group overflow-hidden bg-white border border-slate-100">
            <div className="relative z-10">
               <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <Activity size={24} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Emission Quotas</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                 Set specific reduction targets and track progress towards them in real-time.
               </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-5 group-hover:translate-y-[-8px] transition-transform duration-500 shadow-sm relative">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-blue-600"><Monitor size={22} className="text-blue-600" /></div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TARGET: NET ZERO</p>
                    <p className="text-lg font-black text-slate-800">2.4M Tons Reduc.</p>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-slate-400">
                    <span>PROGRESS</span>
                    <span>72%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                     <div className="h-full w-[72%] bg-blue-600 rounded-full transition-all"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 3: Data Sovereignty */}
          <div className="md:col-span-4 md:row-span-1 bento-card rounded-[48px] p-10 group overflow-hidden relative bg-white border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Data Sovereignty</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Visualize reporting transparency for Scope 1-2-3 with absolute security.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-emerald-500 font-black text-xs uppercase mt-4">
              <CheckCircle2 size={14} />
              <span>Verified On-Premise</span>
            </div>
          </div>

          {/* Card 4: Intelligent Mapping */}
          <div className="md:col-span-8 md:row-span-1 bento-card rounded-[48px] p-10 group overflow-hidden relative bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><Globe size={20} /></div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Real-time Data Sync</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Direct pipelines to Tableau dashboards. Seamlessly transform PDF reports into visual intelligence.
              </p>
              <div className="flex gap-2">
                {['Scope 1-2-3', 'SDG 13'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-400 uppercase">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
               <div className="space-y-4">
                  <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-blue-50 rounded-xl"></div>
                    <div className="h-12 bg-slate-50 rounded-xl"></div>
                  </div>
                  <div className="h-20 bg-slate-50 rounded-xl flex items-end gap-1 px-2 pb-2">
                    {[30, 50, 80, 60, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-200 rounded-sm" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Card 5: LARGE SHOWCASE - Automate Your Climate Roadmap */}
          <div className="md:col-span-12 md:row-span-2 bento-card rounded-[48px] p-12 flex flex-col gap-12 overflow-hidden bg-blue-600 text-white border-none relative group">
             {/* Subtle Background Pattern */}
             <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
             
             {/* Top Text Content */}
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="space-y-6 flex-1">
                   <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-blue-300 animate-ping"></div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">Active Intelligence Engine</span>
                   </div>
                   <h3 className="text-5xl md:text-7xl font-black leading-[0.85] tracking-tighter">
                     Automate Your <br />
                     <span className="text-blue-200">Climate Roadmap</span>
                   </h3>
                </div>
                <div className="max-w-md space-y-6">
                   <p className="text-blue-100/90 text-lg font-medium leading-relaxed">
                     Join the global organizations using Resilience.OS to architect secure, real-time intelligence for the world's most critical policy decisions.
                   </p>
                   <div className="flex gap-4">
                      <button className="px-8 py-4 bg-white text-blue-600 rounded-[20px] font-black text-lg hover:shadow-2xl transition-all active:scale-95">Get Started</button>
                      <button className="px-8 py-4 bg-blue-700/50 text-white rounded-[20px] font-black text-lg border border-white/20 hover:bg-blue-800 transition-all active:scale-95">Learn More</button>
                   </div>
                </div>
             </div>

             {/* VIDEO SHOWCASE - Replacing the manual dashboard reconstruction */}
             <div className="relative z-10 flex-1 w-full mt-4 h-full min-h-[600px]">
                <div className="relative w-full h-full bg-[#0F172A] rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group/player">
                  {/* Dashboard Header Bar */}
                  <div className="absolute top-0 left-0 right-0 h-14 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 z-20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Resilience.OS Dashboard — Global Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-4">
                       <div className="h-6 w-24 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                         <span className="text-[8px] font-black text-blue-400">LIVE SYNCING</span>
                       </div>
                       <Maximize2 size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Video Element */}
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-90 scale-105 group-hover/player:scale-100 transition-transform duration-[2000ms] ease-out"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  >
                    {/* Placeholder high-end tech video */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-data-screen-in-a-dark-room-41662-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* UI Overlay - Recreating the "Dashboard" look over the video */}
                  <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end p-12">
                     <div className="grid grid-cols-12 gap-6 w-full h-[70%]">
                        {/* Overlay elements to match the "messy" reference but professionally */}
                        <div className="col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex flex-col justify-between">
                           <div>
                              <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1">Regional Distribution</p>
                              <h4 className="text-2xl font-black">Carbon Clock</h4>
                           </div>
                           <div className="flex items-center justify-center">
                              <div className="relative w-40 h-40 border-[8px] border-white/5 rounded-full flex items-center justify-center">
                                 <div className="absolute inset-0 border-t-[8px] border-blue-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                 <span className="text-3xl font-black">1990</span>
                              </div>
                           </div>
                           <div className="text-[10px] font-medium text-blue-100/60 leading-relaxed italic">
                             AI-Powered analysis of emission trends per capita.
                           </div>
                        </div>

                        <div className="col-span-8 grid grid-rows-3 gap-6">
                           <div className="grid grid-cols-4 gap-6">
                              {[
                                { l: 'Global Share', v: '13.6%', t: '-39.5%' },
                                { l: 'Cum. Share', v: '24.1%', t: '-21.9%' },
                                { l: 'Pop. Index', v: '7.1', t: '-42.8%' },
                                { l: 'Emission', v: '5,057', t: '-1.2%' }
                              ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                                   <p className="text-[8px] font-black text-slate-400 uppercase mb-2">{item.l}</p>
                                   <p className="text-xl font-black">{item.v}</p>
                                   <p className="text-[8px] font-bold text-red-400 flex items-center gap-1 mt-1">
                                      <TrendingDown size={8} /> {item.t}
                                   </p>
                                </div>
                              ))}
                           </div>
                           
                           <div className="row-span-2 bg-blue-600/10 backdrop-blur-lg border border-white/10 rounded-[32px] p-8 flex items-end justify-between overflow-hidden relative">
                              <div className="relative z-10">
                                 <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2">Real-time Visualization</p>
                                 <h4 className="text-3xl font-black">Emission Vectors</h4>
                              </div>
                              <div className="absolute inset-x-8 bottom-8 flex items-end gap-2 h-1/2">
                                 {[40, 60, 30, 80, 50, 90, 45, 70, 85, 55].map((h, i) => (
                                   <div 
                                     key={i} 
                                     className="flex-1 bg-blue-400/30 border-t border-blue-400 rounded-t-sm" 
                                     style={{ height: `${h}%`, transition: 'height 1s ease-in-out', transitionDelay: `${i * 100}ms` }}
                                   ></div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 group-hover/player:bg-transparent transition-all pointer-events-none flex items-center justify-center">
                    <button 
                      onClick={togglePlay}
                      className="pointer-events-auto w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white opacity-0 group-hover/player:opacity-100 transition-all scale-75 group-hover/player:scale-100 hover:bg-white hover:text-blue-600 shadow-2xl"
                    >
                      {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-2" />}
                    </button>
                  </div>

                  {/* AI Status Bar Footer */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-600 px-8 flex justify-between items-center z-20">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                          <Wand2 size={20} className="animate-pulse" />
                       </div>
                       <p className="text-[12px] font-bold tracking-tight">AI Status: Analyzing historical trends for North American energy sectors. Efficiency gains predicted.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                       <span className="text-[10px] font-black tracking-widest uppercase opacity-60">Source: Resilience.OS Core</span>
                       <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
