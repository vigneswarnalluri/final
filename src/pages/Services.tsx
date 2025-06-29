
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites that convert visitors into customers",
      features: [
        "Responsive Design (Mobile-First)",
        "SEO Optimization",
        "Fast Loading Speed",
        "Content Management System",
        "E-commerce Integration",
        "Analytics Setup"
      ],
      pricing: "Starting from $500",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Meta Ads Management",
      description: "Facebook & Instagram advertising that delivers ROI",
      features: [
        "Campaign Strategy & Setup",
        "Audience Research & Targeting",
        "Creative Development",
        "A/B Testing",
        "Performance Optimization",
        "Detailed Reporting"
      ],
      pricing: "From $300/month + ad spend",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Dropshipping/eCommerce Setup",
      description: "Complete online store solutions",
      features: [
        "Store Setup & Design",
        "Product Research",
        "Supplier Integration",
        "Payment Gateway Setup",
        "Order Management System",
        "Customer Support Setup"
      ],
      pricing: "Starting from $800",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Lead Generation",
      description: "Qualified leads for your sales pipeline",
      features: [
        "Target Audience Research",
        "Multi-Channel Campaigns",
        "Lead Qualification",
        "CRM Integration",
        "Follow-up Automation",
        "Performance Tracking"
      ],
      pricing: "From $2-10 per qualified lead",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Telecalling Services",
      description: "Professional phone-based sales & support",
      features: [
        "Trained Sales Agents",
        "Script Development",
        "Call Recording & Analytics",
        "CRM Integration",
        "Follow-up Systems",
        "Performance Reports"
      ],
      pricing: "From $5/hour per agent",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Pan-India Fulfillment",
      description: "Complete logistics using Shiprocket",
      features: [
        "Warehouse Management",
        "Multi-Courier Network",
        "Real-time Tracking",
        "Return Management",
        "Cash on Delivery",
        "Customer Notifications"
      ],
      pricing: "Pay per shipment",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to help your business 
              thrive in the global marketplace with competitive Indian pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {service.pricing}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <a
                      href="/contact"
                      className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Sharing & White Label */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Special Partnership Models</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We offer flexible partnership options to help agencies and entrepreneurs scale their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Revenue Sharing Model</h3>
              <p className="mb-6">
                Partner with us and share in the success. We'll handle the execution while you focus on client relationships.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  No upfront costs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Share in client revenue
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Full service delivery
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">White Label Solutions</h3>
              <p className="mb-6">
                Offer our services under your brand. Perfect for agencies looking to expand their service offerings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Your branding
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Direct client communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Wholesale pricing
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Choose the service that fits your needs or let us create a custom package for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/+919381617904"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
