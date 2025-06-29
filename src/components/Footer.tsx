
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-slate-600 to-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                ASN
              </div>
              <span className="ml-2 text-white font-semibold text-lg">Creative Agency</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Empowering businesses globally with cutting-edge digital marketing solutions. 
              From India to the world, we deliver results that matter.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-slate-300">support@asn.enterprises</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-slate-300">+91 93816 17904 </span>
                <span className="text-slate-300"> , +91 9548175655</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-300 hover:text-orange-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Website Development</li>
              <li className="text-slate-300">Meta Ads Management</li>
              <li className="text-slate-300">eCommerce Setup</li>
              <li className="text-slate-300">Lead Generation</li>
              <li className="text-slate-300">Telecalling Services</li>
              <li className="text-slate-300">Pan-India Fulfillment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2025 ASN Creative Agency. All rights reserved. | Serving clients in India, UAE, Kuwait, UK, US & globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
