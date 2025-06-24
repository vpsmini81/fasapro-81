import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/4f4c2a19-1937-48bb-821d-ce787f702dce.png" 
                alt="Fasa Centra Technologies Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-gray-900 text-lg font-bold leading-tight">Fasa Centra</span>
                <span className="text-gray-600 text-sm font-medium leading-tight">Technologies Ltd.</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Professional IT consulting and services company, specializing in cybersecurity, 
              compliance, and digital transformation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@fasapro.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Business Ave, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/website-development" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/it-auditing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  IT Auditing
                </Link>
              </li>
              <li>
                <Link to="/services/it-consulting" className="text-gray-600 hover:text-gray-900 transition-colors">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Fasa Centra Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;