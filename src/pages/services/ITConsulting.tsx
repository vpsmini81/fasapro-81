import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, Lightbulb, TrendingUp, ArrowRight, Check, FileText, Shield, Award, BadgeCheck } from 'lucide-react';

const ITConsulting = () => {
  const services = [
    'Rencana Strategi TI',
    'SOP TI',
    'Manajemen Risiko TI',
    'BCP & DRP',
    'ISO 27001:2022 Certification Assistance',
    'Licensing for Payment System Providers',
    'Technology Assessment & Planning',
    'Change Management Support'
  ];

  const coreServices = [
    {
      icon: Shield,
      title: 'Pendampingan ISO 27001:2022',
      description: 'Layanan utama kami dalam pendampingan implementasi dan sertifikasi ISO 27001:2022 untuk sistem manajemen keamanan informasi.',
      color: 'from-blue-500 to-blue-600',
      featured: true
    },
    {
      icon: FileText,
      title: 'Rencana Strategi TI',
      description: 'Pengembangan strategi teknologi informasi yang komprehensif untuk mendukung tujuan bisnis jangka panjang.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'SOP TI',
      description: 'Penyusunan Standard Operating Procedures untuk operasional TI yang efisien dan terstandarisasi.',
      color: 'from-blue-600 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Manajemen Risiko TI',
      description: 'Identifikasi, analisis, dan mitigasi risiko teknologi informasi untuk melindungi aset digital organisasi.',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'BCP & DRP',
      description: 'Business Continuity Planning dan Disaster Recovery Planning untuk memastikan kontinuitas operasional bisnis.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Licensing Payment System',
      description: 'Bantuan perizinan untuk penyedia sistem pembayaran sesuai regulasi Bank Indonesia dan OJK.',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  const certifications = [
    {
      title: 'Certified BSI ISO 27001:2022 Lead Implementer',
      description: 'Sertifikasi resmi BSI sebagai Lead Implementer untuk ISO 27001:2022',
      icon: BadgeCheck,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'BNSP Certified',
      description: 'Sertifikasi Badan Nasional Sertifikasi Profesi untuk kompetensi profesional',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Analisis Bisnis',
      description: 'Kami menganalisis proses bisnis saat ini, landscape teknologi, dan tujuan strategis untuk memahami kebutuhan Anda.'
    },
    {
      step: 2,
      title: 'Pengembangan Strategi',
      description: 'Mengembangkan strategi TI yang disesuaikan dengan tujuan bisnis dan mendukung pertumbuhan jangka panjang.'
    },
    {
      step: 3,
      title: 'Perencanaan Implementasi',
      description: 'Membuat roadmap detail dengan timeline, milestone, dan kebutuhan sumber daya untuk eksekusi yang sukses.'
    },
    {
      step: 4,
      title: 'Dukungan Berkelanjutan',
      description: 'Menyediakan panduan dan dukungan berkelanjutan sepanjang proses implementasi dan seterusnya.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <span className="text-blue-600 font-medium">IT Consulting</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Layanan IT Consulting Strategis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigasi transformasi digital dengan panduan ahli. Layanan IT consulting kami membantu Anda 
                memanfaatkan teknologi secara strategis untuk mendorong pertumbuhan bisnis dan efisiensi operasional.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Konsultasi Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="IT Consulting Strategy"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 border border-blue-200 mb-6">
              <Shield className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Layanan Utama</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pendampingan ISO 27001:2022
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spesialisasi utama kami dalam pendampingan implementasi dan sertifikasi ISO 27001:2022 
              dengan dukungan dari konsultan bersertifikat BSI dan BNSP.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pendampingan ISO 27001:2022
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Implementasi sistem manajemen keamanan informasi yang komprehensif sesuai standar ISO 27001:2022 
                  dengan pendampingan dari konsultan bersertifikat untuk memastikan kesuksesan sertifikasi.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Gap Analysis & Risk Assessment',
                    'Dokumentasi ISMS Lengkap',
                    'Training & Awareness Program',
                    'Internal Audit Support',
                    'Management Review Facilitation',
                    'Certification Audit Preparation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-blue-500 w-4 h-4 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop"
                  alt="ISO 27001 Implementation"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sertifikasi Profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim konsultan kami memiliki sertifikasi profesional yang diakui secara internasional dan nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 text-center shadow-sm hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Consulting Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan panduan ahli di semua aspek perencanaan dan implementasi TI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 text-center shadow-sm hover:shadow-md ${
                  service.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                {service.featured && (
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      Layanan Utama
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih IT Consulting Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami membawa keahlian teknis mendalam dan business acumen untuk membantu Anda membuat keputusan teknologi yang tepat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Strategic Thinking', description: 'Strategi teknologi yang selaras dengan tujuan bisnis' },
              { icon: TrendingUp, title: 'Growth Focus', description: 'Solusi yang dirancang untuk berkembang bersama bisnis Anda' },
              { icon: Target, title: 'Results-Driven', description: 'Hasil yang terukur dan nilai bisnis yang nyata' },
              { icon: Search, title: 'Deep Analysis', description: 'Assessment menyeluruh terhadap kondisi saat ini dan peluang' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              Proses Consulting Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologi terbukti yang memberikan insight actionable dan rekomendasi strategis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
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

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Layanan Consulting Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Dari strategi cybersecurity hingga transformasi digital, kami menyediakan panduan ahli 
                di semua aspek perencanaan dan implementasi TI.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Strategic consulting"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Transformasi Bisnis Anda dengan Panduan TI Strategis
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Biarkan konsultan ahli kami membantu Anda mengembangkan strategi teknologi yang mendorong pertumbuhan, 
            meningkatkan efisiensi, dan memposisikan bisnis Anda untuk kesuksesan masa depan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Jadwalkan Konsultasi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Bertemu Konsultan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;