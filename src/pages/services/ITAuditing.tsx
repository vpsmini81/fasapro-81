import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Search, Award, ArrowRight, Check, Target, BarChart3 } from 'lucide-react';

const ITAssurance = () => {
  const services = [
    'Implementasi & Sertifikasi ISO 27001:2022',
    'Security Risk Assessments',
    'Vulnerability Testing & Analysis',
    'Compliance Gap Analysis',
    'Data Protection Impact Assessments (DPIA)',
    'Business Continuity Planning',
    'Incident Response Planning',
    'Pengembangan Kebijakan Keamanan'
  ];

  const coreServices = [
    {
      icon: Shield,
      title: 'IT Audit',
      description: 'Audit komprehensif sistem IT untuk memastikan keamanan, compliance, dan efisiensi operasional sesuai standar industri.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Assessment Tata Kelola TI',
      description: 'Evaluasi mendalam terhadap tata kelola teknologi informasi untuk meningkatkan efektivitas dan alignment dengan tujuan bisnis.',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management Systems', color: 'from-purple-500 to-purple-600' },
    { name: 'ISO 27017', description: 'Cloud Security Controls', color: 'from-blue-500 to-blue-600' },
    { name: 'GDPR', description: 'General Data Protection Regulation', color: 'from-purple-600 to-blue-500' },
    { name: 'SOC 2', description: 'Service Organization Control 2', color: 'from-blue-600 to-purple-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment Awal',
      description: 'Kami mengevaluasi postur keamanan saat ini dan mengidentifikasi area untuk perbaikan melalui analisis komprehensif.'
    },
    {
      step: 2,
      title: 'Gap Analysis',
      description: 'Membandingkan kontrol yang ada dengan standar industri dan persyaratan regulasi untuk mengidentifikasi kesenjangan.'
    },
    {
      step: 3,
      title: 'Rencana Implementasi',
      description: 'Mengembangkan roadmap detail untuk mengatasi kesenjangan yang teridentifikasi dan mencapai tujuan compliance.'
    },
    {
      step: 4,
      title: 'Dukungan Sertifikasi',
      description: 'Memandu Anda melalui proses sertifikasi dan menyediakan monitoring compliance berkelanjutan.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-purple-600 font-medium">IT Assurance</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                IT Assurance & Security Auditing Komprehensif
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Lindungi bisnis Anda dengan assessment keamanan menyeluruh dan audit compliance. 
                Kami mengkhususkan diri dalam sertifikasi ISO 27001 dan compliance regulasi untuk melindungi aset digital Anda.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Jadwalkan Audit Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop"
                alt="IT Security Auditing"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Inti Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi IT Assurance komprehensif untuk memastikan keamanan dan tata kelola teknologi informasi yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 group shadow-sm hover:shadow-lg text-center"
              >
                <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
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

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Sertifikasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami membantu Anda mencapai dan mempertahankan compliance dengan standar internasional dan regulasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 text-center shadow-sm hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IT Assurance Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa IT Assurance Penting
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              IT Assurance reguler sangat penting untuk mempertahankan keamanan, compliance, dan business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Mitigasi Risiko', description: 'Identifikasi dan atasi kerentanan keamanan sebelum menjadi ancaman' },
              { icon: FileText, title: 'Regulatory Compliance', description: 'Penuhi standar industri dan hindari pelanggaran compliance yang mahal' },
              { icon: Search, title: 'Process Improvement', description: 'Optimasi proses keamanan dan efisiensi operasional' },
              { icon: Award, title: 'Competitive Advantage', description: 'Demonstrasikan komitmen keamanan kepada klien dan partner' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
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
              Proses Auditing Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pendekatan sistematis untuk mengevaluasi dan meningkatkan postur keamanan organisasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Layanan Audit Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Layanan IT Assurance kami mencakup semua aspek manajemen keamanan informasi, 
                membantu Anda membangun framework keamanan yang robust untuk melindungi bisnis.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Layanan audit keamanan"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Focus Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Spesialisasi ISO 27001:2022
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami adalah ahli bersertifikat dalam implementasi ISO 27001 dan dukungan sertifikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Gap Analysis', description: 'Assessment komprehensif kondisi saat ini terhadap persyaratan ISO 27001' },
              { title: 'Dukungan Implementasi', description: 'Panduan step-by-step melalui proses implementasi' },
              { title: 'Persiapan Sertifikasi', description: 'Persiapan menyeluruh untuk audit sertifikasi eksternal' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Amankan Bisnis Anda Hari Ini
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Jangan tunggu insiden keamanan terjadi. Mari bantu Anda membangun framework keamanan yang robust 
            untuk melindungi bisnis dan memastikan compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Jadwalkan Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Pelajari Tentang Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAssurance;