
import React, { useState } from 'react';
import { Mail, Phone, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours with a detailed proposal.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,138,76,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
              🎯 Free Strategy Session - Limited Time Offer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Transform Your Business?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Get your free consultation worth $500 and discover how we can 3x your revenue with our proven digital marketing strategies. Join 150+ successful businesses worldwide!
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center text-slate-300">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                <span>5.0 Rating (47+ Reviews)</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24hr Response Guarantee</span>
              </div>
              <div className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>100% Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Request Your Free Consultation</h2>
                  <p className="text-slate-600 text-lg">Fill out the form below and we'll contact you within 24 hours with a detailed strategy for your business.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="website-development">High-Converting Websites</option>
                        <option value="meta-ads">Meta Ads That Convert</option>
                        <option value="ecommerce">Complete eCommerce Setup</option>
                        <option value="lead-generation">Lead Generation Systems</option>
                        <option value="telecalling">Professional Telecalling</option>
                        <option value="fulfillment">Pan-India Fulfillment</option>
                        <option value="multiple">Complete Digital Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        Investment Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select investment range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000+">$10,000+</option>
                        <option value="revenue-share">Revenue Sharing Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Describe your business goals, target audience, and what success looks like for you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Request Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Email Us</div>
                      <div className="text-slate-600 mb-1">support@urban-bazaar.site</div>
                      <div className="text-slate-500 text-sm">We respond within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Call or WhatsApp</div>
                      <div className="text-slate-600 mb-1">+91 93816 17904</div>
                      <div className="text-slate-500 text-sm">Available 24/7 for urgent queries</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Business Hours</div>
                      <div className="text-slate-600 mb-1">Mon-Sat: 9 AM - 8 PM IST</div>
                      <div className="text-slate-500 text-sm">Sunday: Emergency support only</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Why Choose ASN Creative?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Premium quality services at 70% less cost than US/UK agencies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Proven track record with 150+ successful projects across 15+ countries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Dedicated account manager and 24/7 support across all time zones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Flexible payment options including revenue sharing partnerships</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <a
                      href="https://wa.me/+919381617904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors duration-300 shadow-lg"
                    >
                      Start WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</div>
                      <span className="text-slate-300">We respond within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</div>
                      <span className="text-slate-300">Free strategy session & market analysis</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</div>
                      <span className="text-slate-300">Detailed proposal with transparent pricing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-sm font-bold">4</div>
                      <span className="text-slate-300">Project kickoff within 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">We Serve Clients Globally</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From our base in India, we provide services to businesses across multiple continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="font-bold text-slate-800 mb-2">India</h3>
              <p className="text-slate-600 text-sm">Our home base and primary operations center</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🇦🇪</div>
              <h3 className="font-bold text-slate-800 mb-2">UAE & Middle East</h3>
              <p className="text-slate-600 text-sm">Growing presence in Dubai, Abu Dhabi, Kuwait</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="font-bold text-slate-800 mb-2">United Kingdom</h3>
              <p className="text-slate-600 text-sm">Serving London and major UK business centers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="font-bold text-slate-800 mb-2">United States</h3>
              <p className="text-slate-600 text-sm">East and West Coast business partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
