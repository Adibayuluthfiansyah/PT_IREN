'use client'

import React from 'react';
import { Handshake, Diamond, Shield, Truck, FileText } from 'lucide-react';
import Footer from '../footer/page';

const LayananPage = () => {
  const services = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Exploration",
      description: "Layanan eksplorasi pertambangan sesuai kebutuhan perusahaan/organisasi."
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Mining",
      description: "Layanan yang bergerak dipertambangan yang dilakukan oleh para profesional."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental",
      description: "Mempelajari dan menyelesaikan permasalahan lingkungan seperti konservasi sumber daya air."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Trading",
      description: "Perdagangan jual beli barang atau jasa, baik ekspor maupun impor."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Stevedoring/Cargodoring",
      description: "Layanan bongkar muat/kargo untuk kebutuhan bisnis perusahaan/individual."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Licensing",
      description: "Layanan perizinan yang mencakup perizinan tambang, dan lainnya."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            LAYANAN
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kami menawarkan berbagai layanan untuk membantu perusahaan/organisasi atau individual bekerja lebih baik. Kami dapat memberikan layanan yang disesuaikan dengan bisnis anda.
          </p>
          <div className="w-24 h-1 bg-teal-300 mx-auto"></div>
        </div>
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            SERVICES
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">BIDANG USAHA</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Kami menawarkan berbagai layanan untuk membantu perusahaan/organisasi atau individual bekerja lebih baik. Kami dapat memberikan layanan yang disesuaikan dengan bisnis anda. Layanan yang kami berikan mencakup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="text-teal-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk konsultasi dan dapatkan solusi terbaik sesuai kebutuhan bisnis Anda
          </p>
          <div className="space-x-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-all duration-300 cursor-pointer">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-teal-600 transition-all duration-300 cursor-pointer">
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