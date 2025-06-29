
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ASN Creative Agency
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're a global digital marketing agency based in India, specializing in delivering 
              premium services at competitive pricing to businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To bridge the gap between high-quality digital marketing services and affordability, 
                making premium solutions accessible to businesses of all sizes across the globe.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that every business deserves world-class digital marketing, regardless of 
                their location or budget constraints.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Premium quality at Indian pricing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Proven track record across 15+ countries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Revenue-sharing & white-label solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  24/7 support across time zones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Approach</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine strategic thinking with tactical execution to deliver measurable results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Research & Strategy</h3>
              <p className="text-slate-600">
                Deep market analysis and competitor research to create data-driven strategies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Implementation</h3>
              <p className="text-slate-600">
                Flawless execution using cutting-edge tools and proven methodologies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Optimization</h3>
              <p className="text-slate-600">
                Continuous monitoring and optimization to maximize ROI and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Global Reach, Local Expertise</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              From our base in India, we serve clients across multiple continents, 
              understanding local markets while maintaining global standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">🇮🇳</div>
              <div className="font-semibold text-slate-800">India</div>
              <div className="text-sm text-slate-600">Home Base</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">🇦🇪</div>
              <div className="font-semibold text-slate-800">UAE</div>
              <div className="text-sm text-slate-600">Middle East Hub</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">🇬🇧</div>
              <div className="font-semibold text-slate-800">UK</div>
              <div className="text-sm text-slate-600">European Market</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">🇺🇸</div>
              <div className="font-semibold text-slate-800">USA</div>
              <div className="text-sm text-slate-600">Americas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help scale your business with our proven digital marketing strategies
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
