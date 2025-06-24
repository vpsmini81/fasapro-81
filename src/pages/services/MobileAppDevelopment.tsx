import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Zap, Shield, ArrowRight, Check, Bug, Apple } from 'lucide-react';

const MobileAppDevelopment = () => {
  const features = [
    'Pengembangan Native iOS & Android',
    'Solusi Cross-Platform (Flutter/React Native)',
    'Desain UI/UX Kustom',
    'Integrasi API & Backend Services',
    'Push Notifications & Analytics',
    'App Store Optimization',
    'Fungsionalitas Offline',
    'Keamanan & Perlindungan Data'
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Pengembangan aplikasi Android native menggunakan Kotlin/Java dengan performa optimal dan user experience yang luar biasa.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Apple,
      title: 'iOS App Development',
      description: 'Aplikasi iOS native dengan Swift yang mengikuti design guidelines Apple untuk pengalaman pengguna yang seamless.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Bug,
      title: 'Bug Fixing',
      description: 'Layanan perbaikan bug dan maintenance aplikasi untuk memastikan aplikasi berjalan lancar dan stabil.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const platforms = [
    { name: 'iOS', description: 'Pengembangan Swift native untuk iPhone dan iPad', color: 'from-blue-500 to-blue-600' },
    { name: 'Android', description: 'Pengembangan Kotlin/Java native untuk perangkat Android', color: 'from-green-500 to-green-600' },
    { name: 'Flutter', description: 'Pengembangan cross-platform dengan single codebase', color: 'from-cyan-500 to-cyan-600' },
    { name: 'React Native', description: 'Aplikasi cross-platform dengan performa native', color: 'from-purple-500 to-purple-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategi & Perencanaan',
      description: 'Kami menganalisis kebutuhan aplikasi, target audiens, dan positioning pasar untuk membuat strategi pengembangan yang komprehensif.'
    },
    {
      step: 2,
      title: 'Desain UI/UX',
      description: 'Desainer kami menciptakan interface yang intuitif dan engaging yang memberikan pengalaman pengguna luar biasa di semua perangkat.'
    },
    {
      step: 3,
      title: 'Pengembangan & Testing',
      description: 'Kami membangun aplikasi menggunakan best practices, menerapkan testing menyeluruh untuk memastikan kualitas dan performa.'
    },
    {
      step: 4,
      title: 'Peluncuran & Dukungan',
      description: 'Setelah deployment di app store, kami menyediakan maintenance berkelanjutan, update, dan optimasi performa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-600 font-medium">Pengembangan Aplikasi Mobile</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Aplikasi Mobile Native & Cross-Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bangun aplikasi mobile yang powerful untuk melibatkan pengguna dan mendorong pertumbuhan bisnis. 
                Kami menciptakan aplikasi iOS, Android native, dan cross-platform dengan pengalaman pengguna yang luar biasa.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Proyek Aplikasi Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Pengembangan Aplikasi Mobile"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Pengembangan Mobile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi pengembangan aplikasi mobile komprehensif untuk semua kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 group shadow-sm hover:shadow-lg text-center"
              >
                <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Keahlian Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami mengembangkan untuk semua platform mobile utama menggunakan teknologi terdepan dan best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 text-center shadow-sm hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${platform.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Aplikasi Mobile?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aplikasi mobile memberikan keunggulan unik untuk melibatkan pelanggan dan mengembangkan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Engagement Lebih Baik', description: 'Komunikasi langsung dengan pengguna melalui push notifications' },
              { icon: Zap, title: 'Performa Superior', description: 'Loading time lebih cepat dan pengalaman pengguna yang lebih smooth' },
              { icon: Shield, title: 'Keamanan Enhanced', description: 'Fitur keamanan built-in dan perlindungan data' },
              { icon: Smartphone, title: 'Akses Offline', description: 'Fungsionalitas inti tersedia tanpa koneksi internet' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Pengembangan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dari konsep hingga app store, kami memandu Anda melalui setiap langkah pengembangan aplikasi mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fitur Aplikasi Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap aplikasi mobile yang kami kembangkan mencakup fitur-fitur essential yang memastikan 
                pengalaman pengguna yang excellent, performa, dan kesuksesan bisnis.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Fitur aplikasi mobile"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Membangun Aplikasi Mobile Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mari ciptakan aplikasi mobile yang melibatkan pengguna dan mendorong pertumbuhan bisnis. 
            Hubungi kami hari ini untuk mendiskusikan ide aplikasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Mulai Proyek Anda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Portfolio Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;