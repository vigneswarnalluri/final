
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Solutions",
      country: "🇺🇸 United States",
      rating: 5,
      text: "ASN Creative transformed our online presence completely. Our leads increased by 400% within 3 months, and the quality of our website exceeded all expectations. Best investment we've made!",
      result: "400% increase in leads"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Founder, Dubai Retail Co.",
      country: "🇦🇪 UAE",
      rating: 5,
      text: "Working with ASN was a game-changer. Their Meta ads strategy generated 10x ROI, and their team's professionalism is unmatched. They understand both local and international markets perfectly.",
      result: "10x ROI on Meta Ads"
    },
    {
      name: "James Thompson",
      role: "Director, London Consulting",
      country: "🇬🇧 United Kingdom", 
      rating: 5,
      text: "The quality of work is exceptional, and the cost savings compared to UK agencies are incredible. They delivered everything on time and exceeded our expectations. Highly recommended!",
      result: "70% cost savings"
    },
    {
      name: "Priya Sharma",
      role: "Co-founder, Mumbai Startups",
      country: "🇮🇳 India",
      rating: 5,
      text: "ASN helped us scale from a local business to serving international clients. Their eCommerce setup and digital marketing strategy brought us customers from 12 countries!",
      result: "Expanded to 12 countries"
    },
    {
      name: "Mohammed Hassan",
      role: "Owner, Kuwait Trade",
      country: "🇰🇼 Kuwait",
      rating: 5,
      text: "Professional, reliable, and results-driven. They built our entire digital infrastructure and now handle all our online marketing. Revenue has tripled since we started working with them.",
      result: "300% revenue growth"
    },
    {
      name: "Lisa Chen",
      role: "Marketing Head, California Tech",
      country: "🇺🇸 United States",
      rating: 5,
      text: "Their understanding of global markets is impressive. They created campaigns that worked perfectly for our diverse customer base. The communication and delivery were flawless.",
      result: "Global market expansion"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,138,76,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Real Results from Real Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Success Stories That Speak for Themselves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses across the globe achieve remarkable growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-200 group-hover:text-orange-300 transition-colors" />
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-3 py-2 inline-block mb-4">
                  <span className="text-green-700 font-semibold text-sm">{testimonial.result}</span>
                </div>
              </div>

              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  <div className="text-slate-500 text-xs">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 inline-block">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-slate-600 mb-6">Get your free consultation and see how we can transform your business</p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
