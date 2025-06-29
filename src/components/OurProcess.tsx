
import React from 'react';
import { MessageCircle, Search, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

const OurProcess = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Free Strategy Session",
      description: "We start with a comprehensive consultation to understand your business goals, target audience, and current challenges. No obligations, just valuable insights.",
      duration: "30-60 minutes",
      deliverable: "Custom strategy roadmap"
    },
    {
      icon: Search,
      step: "02", 
      title: "Deep Market Analysis",
      description: "Our team conducts thorough competitor research and market analysis to identify opportunities and create a winning strategy tailored to your industry.",
      duration: "3-5 days",
      deliverable: "Detailed market report"
    },
    {
      icon: Rocket,
      step: "03",
      title: "Implementation & Launch", 
      description: "We execute your digital marketing strategy with precision, creating high-converting websites, optimized ad campaigns, and engaging content that drives results.",
      duration: "2-4 weeks",
      deliverable: "Live campaigns & assets"
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Optimize & Scale",
      description: "Continuous monitoring, testing, and optimization ensure maximum ROI. We scale successful campaigns and refine strategies based on real data.",
      duration: "Ongoing",
      deliverable: "Monthly performance reports"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎯 Proven Process, Guaranteed Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our systematic approach ensures every project delivers exceptional results. Here's exactly how we work together to achieve your goals.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl group-hover:border-orange-200 transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Timeline:</span>
                        <span className="font-medium text-slate-700">{step.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">You Get:</span>
                        <span className="font-medium text-green-600">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Our Process Works */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Why Our Process Delivers Results</h3>
                <p className="text-slate-300 text-lg">
                  Every step is designed to maximize your ROI and ensure long-term success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Data-Driven Decisions</h4>
                  <p className="text-slate-300 text-sm">Every strategy is backed by comprehensive market research and competitor analysis</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Transparent Communication</h4>
                  <p className="text-slate-300 text-sm">Regular updates, detailed reports, and direct access to your dedicated team</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Continuous Optimization</h4>
                  <p className="text-slate-300 text-sm">We constantly test and refine strategies to ensure maximum performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6">Book your free strategy session today and see how we can transform your business</p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
