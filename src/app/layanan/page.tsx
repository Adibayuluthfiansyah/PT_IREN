'use client'

import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, Headphones, ArrowRight } from 'lucide-react';
import Footer from '../footer/page';

const LayananPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Pengembangan Aplikasi",
      description: "Membangun aplikasi custom sesuai kebutuhan bisnis dengan teknologi terdepan dan arsitektur yang scalable.",
      features: ["Web Application", "Mobile App", "Desktop Application", "API Development"],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Development",
      description: "Membuat website profesional yang responsif, SEO-friendly, dan user-friendly untuk meningkatkan online presence.",
      features: ["Company Profile", "E-Commerce", "Landing Page", "Content Management"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Sistem Informasi",
      description: "Mengembangkan sistem informasi terintegrasi untuk mengelola data dan proses bisnis dengan efisien.",
      features: ["ERP System", "CRM System", "Inventory Management", "HR Management"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Keamanan IT",
      description: "Menyediakan solusi keamanan IT komprehensif untuk melindungi aset digital dan data perusahaan.",
      features: ["Security Audit", "Penetration Testing", "Data Protection", "Network Security"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Solutions",
      description: "Menghadirkan solusi mobile yang inovatif untuk mempermudah akses layanan di era digital.",
      features: ["iOS Development", "Android Development", "Cross Platform", "Mobile UI/UX"]
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Memberikan konsultasi IT profesional untuk strategi teknologi yang tepat sesuai kebutuhan bisnis.",
      features: ["Technology Strategy", "System Architecture", "Digital Transformation", "Technical Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            LAYANAN KAMI
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus velit dolorum neque. Natus laudantium ipsa soluta rerum provident!
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            SERVICES
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Layanan Profesional Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6 mx-auto">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-black mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-all duration-300 font-medium cursor-pointer">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk bisnis Anda
          </p>
          <div className="space-x-4">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all duration-300 cursor-pointer">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500  transition-all duration-300 cursor-pointer">
              Portfolio Kami
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LayananPage;