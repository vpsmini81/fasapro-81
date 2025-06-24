import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'info@fasapro.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      info: '123 Business Ave, Tech City, TC 12345',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon-Fri: 8:00 AM - 6:00 PM',
      description: 'Weekend support available'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with our IT solutions? Let's discuss your 
              project requirements and create a customized strategy for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{info.info}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="website-development">Website Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="it-auditing">IT Auditing</option>
                      <option value="it-consulting">IT Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Fasapro?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600">
                      Our certified professionals bring years of experience in cybersecurity, 
                      compliance, and software development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
                    <p className="text-gray-600">
                      We've successfully completed 100+ projects, helping businesses achieve 
                      their digital transformation goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                    <p className="text-gray-600">
                      Our dedicated support team ensures your systems run smoothly with 
                      round-the-clock monitoring and assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h4>
                    <p className="text-gray-600">
                      Every business is unique. We create tailored solutions that align 
                      with your specific requirements and budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent matters, please call us directly at +1 (555) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;