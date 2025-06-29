
import React from 'react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: "E-commerce Dropshipping Success",
      client: "Fashion Retailer - UAE",
      challenge: "Launch online presence and scale revenue",
      solution: "Complete eCommerce setup with Meta Ads campaign",
      results: ["300% revenue increase in 6 months", "50,000+ website visitors monthly", "25% conversion rate improvement"],
      industry: "Fashion & Lifestyle",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Lead Generation Campaign",
      client: "Real Estate Company - India",
      challenge: "Generate qualified leads for luxury properties",
      solution: "Multi-channel lead generation with telecalling support",
      results: ["500+ qualified leads monthly", "30% increase in property visits", "40% reduction in cost per lead"],
      industry: "Real Estate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SaaS Website Development",
      client: "Tech Startup - UK",
      challenge: "Professional website to attract investors and customers",
      solution: "Custom website with SEO optimization and conversion tracking",
      results: ["150% increase in demo requests", "Top 3 Google rankings", "60% improvement in user engagement"],
      industry: "Technology",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Restaurant Chain Expansion",
      client: "Food Chain - Kuwait",
      challenge: "Digital presence for new market entry",
      solution: "Website development, Meta Ads, and delivery integration",
      results: ["200% online order increase", "5 new locations opened", "35% growth in brand awareness"],
      industry: "Food & Beverage",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      text: "ASN Creative Agency transformed our online presence completely. Their expertise in Meta Ads helped us achieve a 300% ROI within just 3 months.",
      author: "Sarah Al-Rashid",
      position: "CEO, Fashion Forward UAE",
      country: "🇦🇪 UAE"
    },
    {
      text: "The website they built for us is not just beautiful but highly functional. We've seen a significant increase in qualified leads since launch.",
      author: "James Mitchell",
      position: "Founder, TechStart Solutions",
      country: "🇬🇧 UK"
    },
    {
      text: "Their telecalling and lead generation services have been exceptional. Professional, reliable, and results-driven approach.",
      author: "Rajesh Patel",
      position: "Director, Prime Properties",
      country: "🇮🇳 India"
    },
    {
      text: "Working with ASN has been a game-changer. Their understanding of both local and international markets is impressive.",
      author: "Ahmed Al-Sabah",
      position: "Owner, Taste of Arabia",
      country: "🇰🇼 Kuwait"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across the globe achieve remarkable growth 
              through strategic digital marketing and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results from real clients. See how our strategies have transformed businesses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{study.title}</h3>
                      <p className="text-orange-600 font-medium">{study.client}</p>
                    </div>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Challenge:</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Solution:</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-slate-600 text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Client Testimonials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients from around the world say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="text-orange-500 text-2xl mb-2">"</div>
                  <p className="text-slate-700 leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm">{testimonial.position}</div>
                  </div>
                  <div className="text-2xl">{testimonial.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              These numbers represent real businesses we've helped grow and succeed in the global marketplace.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-orange-100">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join the ranks of successful businesses that have transformed their digital presence with our expertise.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Start Your Success Story
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
