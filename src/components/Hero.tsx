
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,138,76,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 px-6 py-3 rounded-full text-sm font-medium animate-pulse">
                🚀 Trusted by 100+ Global Success Stories
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Skyrocket Your Business with
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                  High-Converting Digital Marketing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                Get premium digital marketing services at unbeatable rates. We've helped businesses in 15+ countries achieve 3x revenue growth with our proven strategies.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-slate-300">5.0 (47 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="font-bold mb-4 text-orange-300 text-lg">Why Pay More When You Can Get Premium Quality?</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-slate-400 block mb-1">US/UK Agencies:</span>
                  <span className="text-red-400 font-bold text-lg line-through">$50-150/hr</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Our Premium Rate:</span>
                  <span className="text-green-400 font-bold text-lg">$15-35/hr</span>
                </div>
              </div>
              <div className="mt-4 text-slate-200 text-sm">
                💰 <strong>Save up to 70%</strong> while getting the same premium quality
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 animate-pulse"
              >
                Request Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
              >
                View Success Stories
              </Link>
            </div>

            {/* Guarantee */}
            <div className="flex items-center text-sm text-slate-300">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>100% Money-Back Guarantee • Free Strategy Session • No Long-Term Contracts</span>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-8 transform hover:rotate-0 rotate-2 transition-transform duration-500 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-slate-800 font-bold text-xl mb-2">What You Get:</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-slate-800 font-semibold">High-Converting Websites</span>
                      <p className="text-slate-600 text-sm">Mobile-optimized & SEO-ready</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-slate-800 font-semibold">Meta Ads That Convert</span>
                      <p className="text-slate-600 text-sm">Avg. 4x ROI for our clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-slate-800 font-semibold">Complete eCommerce Setup</span>
                      <p className="text-slate-600 text-sm">From store to fulfillment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-6 mt-6 border border-slate-200">
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 font-medium text-lg mb-2">
                    "Revenue increased 300% in just 6 months!"
                  </p>
                  <p className="text-slate-500 text-sm">- Sarah M., eCommerce Store Owner, UAE</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
