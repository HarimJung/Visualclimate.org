
import React from 'react';
import { Globe } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-effect border-b border-slate-200 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Globe className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">VISUAL CLIMATE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">Vision</a>
          <a href="#product" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#education" className="hover:text-blue-600 transition-colors">Academy</a>
          <a href="#trust" className="hover:text-blue-600 transition-colors">Trust</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-blue-600">Contact Us</button>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
