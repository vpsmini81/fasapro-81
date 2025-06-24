import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Globe, Shield, Code, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every solution we deliver, ensuring your business data and systems are protected.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'With over 15 years in IT consulting, John leads our strategic vision and client relationships.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Sarah brings deep technical expertise in cybersecurity and enterprise architecture.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      bio: 'Michael specializes in modern web technologies and mobile app development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      position: 'Security Consultant',
      bio: 'Emily is our ISO 27001 expert, helping clients achieve and maintain compliance.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const certifications = [
    {
      title: 'ISO 27001:2022 Lead Implementer',
      description: 'Certified expertise in implementing and maintaining Information Security Management Systems',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'CISSP Certified',
      description: 'Certified Information Systems Security Professional with advanced cybersecurity knowledge',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'AWS Solutions Architect',
      description: 'Professional certification in designing and deploying scalable cloud solutions',
      icon: Code,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Project Management Professional',
      description: 'PMP certified for effective project management and delivery excellence',
      icon: Clock,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const timelineItems = [
    {
      date: "2024-01-15",
      title: "ISO 27001 Certification",
      description: "Achieved ISO 27001:2022 certification, reinforcing our commitment to information security",
      icon: <Shield className="h-3 w-3" />,
    },
    {
      date: "2023-08-20",
      title: "Mobile Development Expansion",
      description: "Launched comprehensive mobile app development services for iOS and Android",
      icon: <Code className="h-3 w-3" />,
    },
    {
      date: "2023-03-10",
      title: "50+ Client Milestone",
      description: "Reached milestone of serving over 50 satisfied clients across various industries",
      icon: <Users className="h-3 w-3" />,
    },
    {
      date: "2022-11-05",
      title: "Cloud Infrastructure Focus",
      description: "Expanded services to include comprehensive cloud migration and AWS solutions",
      icon: <Sparkles className="h-3 w-3" />,
    },
    {
      date: "2022-06-01",
      title: "Cybersecurity Division",
      description: "Established dedicated cybersecurity consulting division with certified experts",
      icon: <Shield className="h-3 w-3" />,
    },
    {
      date: "2021-09-15",
      title: "Team Expansion",
      description: "Doubled our team size to meet growing demand for IT consulting services",
      icon: <Users className="h-3 w-3" />,
    },
    {
      date: "2020-03-01",
      title: "Remote Services Launch",
      description: "Adapted to provide fully remote IT consulting and support services",
      icon: <Globe className="h-3 w-3" />,
    },
    {
      date: "2019-01-01",
      title: "Fasapro Founded",
      description: "Founded Fasapro with a mission to bridge technology gaps for businesses",
      icon: <Sparkles className="h-3 w-3" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern office building"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20"></div>
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fasapro
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking IT consulting firm dedicated to empowering businesses 
              through innovative technology solutions, cybersecurity expertise, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-sm shadow-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business success, 
                  Fasapro has grown from a small consultancy to a trusted partner for organizations 
                  seeking digital transformation.
                </p>
                <p>
                  Our journey began when we recognized that many businesses struggle to navigate 
                  the rapidly evolving technology landscape while maintaining security and compliance. 
                  We set out to change that by providing expert guidance, cutting-edge solutions, 
                  and unwavering support.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in IT consulting, 
                  helping our clients not just adapt to change, but lead it in their industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones and achievements that have shaped Fasapro into the trusted IT consulting partner we are today.
            </p>
          </div>

          <Timeline
            items={timelineItems}
            initialCount={4}
            showMoreText="Load More Milestones"
            showLessText="Show Less"
            dotClassName="bg-gradient-to-b from-blue-600 to-purple-600 ring-1 ring-gray-300"
            lineClassName="border-l border-gray-300"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-600"
            dateClassName="text-blue-600"
            className="text-gray-900"
          />
        </div>
      </section>

      {/* Our Values section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional certifications and expertise that validate our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-blue-300 text-center shadow-sm hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business 
            and achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start the Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;