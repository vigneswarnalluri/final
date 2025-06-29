
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites that convert visitors into customers",
      features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Meta Ads Management",
      description: "Targeted Facebook & Instagram advertising campaigns that deliver ROI",
      features: ["Campaign Setup", "A/B Testing", "Performance Tracking", "Optimization"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "eCommerce Setup",
      description: "Complete dropshipping and eCommerce store solutions",
      features: ["Store Setup", "Product Research", "Payment Integration", "Order Management"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Lead Generation",
      description: "Qualified leads delivered directly to your sales pipeline",
      features: ["Target Research", "Multi-Channel Approach", "Quality Leads", "CRM Integration"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Telecalling Services",
      description: "Professional phone-based sales and customer service",
      features: ["Trained Agents", "Script Development", "Call Analytics", "Follow-up Systems"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Pan-India Fulfillment",
      description: "Complete logistics and fulfillment using Shiprocket integration",
      features: ["Warehouse Management", "Order Tracking", "Return Handling", "Multi-Courier Network"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to conversion, we provide end-to-end digital marketing services 
            tailored for businesses targeting Indian and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
