import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    { name: 'Pengembangan Website', path: '/services/website-development' },
    { name: 'Pengembangan Aplikasi Mobile', path: '/services/mobile-app-development' },
    { name: 'IT Assurance', path: '/services/it-auditing' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Company Name */}
          <Link to="/" className="flex items-center space-x-3 p-2">
            <img 
              src="/lovable-uploads/4f4c2a19-1937-48bb-821d-ce787f702dce.png" 
              alt="Fasa Centra Technologies Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
            <div className="flex flex-col">
              <span className="text-gray-900 text-lg md:text-xl font-bold leading-tight">Fasa Centra</span>
              <span className="text-gray-600 text-xs md:text-sm font-medium leading-tight">Technologies Ltd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${
                isActive('/') ? 'text-gray-900' : ''
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${
                isActive('/about') ? 'text-gray-900' : ''
              }`}
            >
              Tentang
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Layanan
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium"
                  >
                    Semua Layanan
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${
                isActive('/gallery') ? 'text-gray-900' : ''
              }`}
            >
              Galeri
            </Link>
            <Link
              to="/blog"
              className={`text-gray-600 hover:text-gray-900 transition-colors font-medium ${
                isActive('/blog') ? 'text-gray-900' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 mb-4 p-4 shadow-xl border border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                onClick={handleMobileMenuItemClick}
              >
                Beranda
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                onClick={handleMobileMenuItemClick}
              >
                Tentang
              </Link>
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-200 pt-2">
                <button
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                >
                  <span>Layanan</span>
                  <ChevronRight 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {/* Collapsible Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-300 pl-4">
                    <Link
                      to="/services"
                      className="block text-gray-500 hover:text-gray-900 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 text-sm"
                      onClick={handleMobileMenuItemClick}
                    >
                      Semua Layanan
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-gray-500 hover:text-gray-900 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 text-sm"
                        onClick={handleMobileMenuItemClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link 
                to="/gallery" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                onClick={handleMobileMenuItemClick}
              >
                Galeri
              </Link>
              
              <Link 
                to="/blog" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-3 px-2 rounded-md hover:bg-gray-50"
                onClick={handleMobileMenuItemClick}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center mt-4 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                onClick={handleMobileMenuItemClick}
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;