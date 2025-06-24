import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Search, Zap, ArrowRight, Check, Globe, Settings, Wrench } from 'lucide-react';

const WebsiteDevelopment = () => {
  const features = [
    'Desain Responsif untuk Semua Perangkat',
    'Optimasi SEO & Performa',
    'Sistem Manajemen Konten Kustom',
    'Integrasi E-commerce',
    'Desain UI/UX Modern',
    'Progressive Web App Development',
    'Integrasi API Pihak Ketiga',
    'Setup Analytics & Tracking'
  ];

  const services = [
    {
      icon: Globe,
      title: 'Company Profile',
      description: 'Website profil perusahaan yang profesional dan menarik untuk membangun kredibilitas bisnis Anda.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Code,
      title: 'Web Apps',
      description: 'Aplikasi web kustom yang powerful dan scalable untuk mendukung operasional bisnis Anda.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wrench,
      title: 'Web Maintenance',
      description: 'Layanan pemeliharaan website berkelanjutan untuk memastikan performa optimal dan keamanan.',
      color: 'from-green-600 to-purple-500'
    }
  ];

  const technologies = [
    { name: 'React', color: 'text-green-600' },
    { name: 'Next.js', color: 'text-purple-600' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'TypeScript', color: 'text-purple-500' },
    { name: 'Tailwind CSS', color: 'text-green-500' },
    { name: 'MongoDB', color: 'text-purple-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Analisis & Perencanaan',
      description: 'Kami menganalisis kebutuhan bisnis, target audiens, dan tujuan proyek untuk membuat strategi pengembangan yang komprehensif.'
    },
    {
      step: 2,
      title: 'Desain & Prototyping',
      description: 'Tim desain kami membuat wireframe dan prototype, memastikan pengalaman pengguna selaras dengan brand dan tujuan Anda.'
    },
    {
      step: 3,
      title: 'Pengembangan & Testing',
      description: 'Kami membangun website menggunakan teknologi modern, menerapkan testing ketat untuk memastikan kualitas dan performa.'
    },
    {
      step: 4,
      title: 'Peluncuran & Optimasi',
      description: 'Setelah deployment berhasil, kami menyediakan dukungan berkelanjutan dan optimasi untuk menjaga performa puncak.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-600 font-medium">Pengembangan Website</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Solusi Pengembangan Website Kustom
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ciptakan website yang menakjubkan dan berperforma tinggi yang mendorong engagement dan konversi. 
                Tim ahli kami membangun solusi responsif dan scalable yang disesuaikan dengan kebutuhan bisnis Anda.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Proyek Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Pengembangan Website"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-purple-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan yang Kami Berikan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Layanan pengembangan website komprehensif yang mencakup setiap aspek kehadiran online Anda.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: 'Desain Responsif', description: 'Pengalaman sempurna di semua perangkat dan ukuran layar' },
              { icon: Search, title: 'SEO Optimized', description: 'Dibangun dengan praktik SEO terbaik untuk ranking pencarian yang lebih baik' },
              { icon: Zap, title: 'Performa Cepat', description: 'Dioptimalkan untuk kecepatan loading yang sangat cepat' },
              { icon: Code, title: 'Kode Bersih', description: 'Kode yang maintainable, scalable, dan terdokumentasi dengan baik' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami memanfaatkan teknologi terdepan untuk membangun website modern dan scalable.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-300"
              >
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
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
              Proses Pengembangan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologi terbukti yang memastikan pengiriman proyek yang sukses dan kepuasan klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-green-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fitur Website Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap website yang kami bangun mencakup serangkaian fitur komprehensif yang dirancang untuk 
                memaksimalkan performa, usability, dan hasil bisnis.
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
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
                alt="Fitur website"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-purple-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Membangun Website Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mari ciptakan website yang menakjubkan dan menghasilkan hasil untuk bisnis Anda. 
            Hubungi kami hari ini untuk mendiskusikan kebutuhan proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Mulai Hari Ini
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Karya Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;