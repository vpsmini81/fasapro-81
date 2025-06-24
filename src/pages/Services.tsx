import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Shield, Search, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Pengembangan Website',
      description: 'Ciptakan website yang menakjubkan dan responsif yang mendorong engagement dan konversi. Tim kami mengkhususkan diri dalam teknologi web modern termasuk React, Next.js, dan Node.js.',
      features: ['Desain Responsif', 'Optimasi SEO', 'Optimasi Performa', 'CMS Kustom'],
      link: '/services/website-development',
      color: 'from-green-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Pengembangan Aplikasi Mobile',
      description: 'Bangun aplikasi mobile yang powerful untuk platform iOS dan Android. Kami mengembangkan solusi native dan cross-platform menggunakan Flutter dan React Native.',
      features: ['Native iOS & Android', 'Solusi Cross-Platform', 'Desain UI/UX', 'App Store Optimization'],
      link: '/services/mobile-app-development',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'IT Assurance',
      description: 'Assessment keamanan komprehensif dan audit compliance untuk melindungi bisnis Anda. Kami mengkhususkan diri dalam sertifikasi ISO 27001 dan compliance regulasi.',
      features: ['Security Assessments', 'ISO 27001 Compliance', 'Risk Analysis', 'Vulnerability Testing'],
      link: '/services/it-auditing',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'IT Consulting',
      description: 'Panduan TI strategis untuk membantu bisnis Anda memanfaatkan teknologi secara efektif. Konsultan kami menyediakan strategi cybersecurity dan roadmap transformasi digital.',
      features: ['Strategi Cybersecurity', 'Transformasi Digital', 'Perencanaan Teknologi', 'Optimasi Proses'],
      link: '/services/it-consulting',
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Layanan Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solusi TI komprehensif yang dirancang untuk mempercepat pertumbuhan bisnis Anda dan memastikan 
              keunggulan digital di semua inisiatif teknologi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300 group shadow-sm hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Fitur Utama:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologi terbukti yang memastikan pengiriman proyek yang sukses dan kepuasan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Kami menganalisis kebutuhan bisnis dan persyaratan teknis Anda.' },
              { step: '02', title: 'Perencanaan', description: 'Mengembangkan strategi komprehensif dan roadmap proyek.' },
              { step: '03', title: 'Implementasi', description: 'Eksekusi solusi dengan update progress reguler.' },
              { step: '04', title: 'Dukungan', description: 'Maintenance berkelanjutan dan dukungan optimasi.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap untuk Memulai?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan proyek Anda dan ciptakan solusi yang disesuaikan 
            untuk mendorong bisnis Anda maju.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Kami Hari Ini
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;