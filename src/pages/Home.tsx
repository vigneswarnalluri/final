
import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import OurProcess from '../components/OurProcess';
import { ArrowRight, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <OurProcess />
      <Testimonials />
      
      {/* Enhanced Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join the ranks of successful businesses that have chosen us as their digital growth partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">150+</div>
              <div className="text-slate-800 font-semibold text-lg mb-2">Projects Completed</div>
              <div className="text-slate-600">Across 15+ industries and countries</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">15+</div>
              <div className="text-slate-800 font-semibold text-lg mb-2">Countries Served</div>
              <div className="text-slate-600">From India to USA, UK, UAE & beyond</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-4">98%</div>
              <div className="text-slate-800 font-semibold text-lg mb-2">Client Satisfaction</div>
              <div className="text-slate-600">Based on verified client feedback</div>
            </div>
          </div>

          {/* Enhanced Value Propositions */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">✓</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">24/7 Support</h3>
              <p className="text-slate-600 text-sm">Round-the-clock assistance across all time zones</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Fast Delivery</h3>
              <p className="text-slate-600 text-sm">Most projects completed within 2-4 weeks</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Results Guaranteed</h3>
              <p className="text-slate-600 text-sm">100% money-back guarantee on all projects</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Premium Quality</h3>
              <p className="text-slate-600 text-sm">Top-tier services at unbeatable prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Urgency */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,76,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 text-red-300 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
              🔥 Limited Time: Free Strategy Session Worth $500
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to 3x Your Revenue?
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Let's Make It Happen!
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of successful businesses who've transformed their digital presence with our proven strategies. Don't let your competitors get ahead!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center"
            >
              Get Your Free $500 Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/+919381617904"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/40 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm flex items-center"
            >
              <Phone className="mr-3 h-6 w-6" />
              WhatsApp Now
            </a>
          </div>

          {/* Urgency Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">Free</div>
              <div className="text-sm text-slate-300">Initial Consultation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-green-400 mb-2">24hrs</div>
              <div className="text-sm text-slate-300">Response Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-slate-300">Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
