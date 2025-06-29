
import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: 'TechCorp', country: 'USA' },
    { name: 'InnovateUK', country: 'UK' },
    { name: 'Dubai Digital', country: 'UAE' },
    { name: 'Mumbai Tech', country: 'India' },
    { name: 'Kuwait Solutions', country: 'Kuwait' },
    { name: 'Global Ventures', country: 'Multi' }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Trusted by Leading Companies Worldwide
          </h2>
          <p className="text-slate-600">
            Join hundreds of successful businesses that chose us for their digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="group text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-6 mb-2 group-hover:from-orange-50 group-hover:to-orange-100 transition-colors">
                <div className="h-8 bg-gradient-to-r from-slate-400 to-slate-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{logo.name}</span>
                </div>
              </div>
              <span className="text-xs text-slate-400">{logo.country}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            ✓ 95% Client Retention Rate • 100+ Successful Projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
