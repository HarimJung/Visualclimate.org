
import React from 'react';
import { Globe, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">VISUAL CLIMATE</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pioneering the future of climate intelligence through secure, localized AI automation for global policy makers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h6 className="font-bold text-slate-900 mb-6">Solutions</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Local RAG Systems</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Resilience.OS</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Data Pipelines (n8n)</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tableau Dashboards</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-slate-900 mb-6">Academy</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Curriculum Overview</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Certification Program</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Enterprise Training</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-slate-900 mb-6">Stay Updated</h6>
            <p className="text-sm text-slate-500 mb-4">Subscribe to our newsletter for the latest in climate AI policy.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="email@agency.org" 
                className="flex-1 bg-slate-50 border border-slate-200 rounded-l-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-3 rounded-r-xl hover:bg-blue-700 transition-all">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © 2025 Visual Climate Architecture Lab. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">SLA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
