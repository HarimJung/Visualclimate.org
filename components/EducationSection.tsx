
import React from 'react';
import { BookOpen, Award, Users, ArrowRight } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[50px] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-blue-200 uppercase tracking-widest">Educational Initiative</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight">
                AI-Driven Climate Intelligence: <br />
                <span className="text-blue-100">From Data to Action</span>
              </h3>
              <p className="text-xl text-blue-100 font-light leading-relaxed">
                We empower your workforce to automate 80% of climate reporting tasks without expensive proprietary tools. Through the <span className="font-bold">Resilience.OS</span> template, we establish the global standard for climate experts.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-200" size={20} />
                  <span className="font-medium">UN & International Body Standard Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="text-blue-200" size={20} />
                  <span className="font-medium">Open-Source Based Zero-Cost Deployment Training</span>
                </div>
              </div>

              <button className="mt-8 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all flex items-center space-x-2 group">
                <span>View Full Curriculum</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-blue-500/30 backdrop-blur-md rounded-3xl border border-blue-400/50 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600">
                    <Users size={24} />
                  </div>
                  <h5 className="font-bold text-xl">Expert Lead</h5>
                  <p className="text-sm text-blue-100">Trained by world-class data architects specializing in climate resilience.</p>
                </div>
                <div className="p-8 bg-blue-500/30 backdrop-blur-md rounded-3xl border border-blue-400/50 mt-12 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600">
                    <Award size={24} />
                  </div>
                  <h5 className="font-bold text-xl">Global Standard</h5>
                  <p className="text-sm text-blue-100">Certificates recognized by top-tier climate policy institutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
