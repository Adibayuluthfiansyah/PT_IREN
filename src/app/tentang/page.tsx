'use client'

import React from 'react';
import { CheckCircle } from 'lucide-react';

const TentangPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            TENTANG KAMI
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            IREN GROUP
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo and Company Info */}
            <div className="flex flex-col items-start">
              <div className="mb-8">
                <div className="text-6xl font-bold mb-4">
                  <div className="flex items-center">
                    <span className="text-orange-500 text-8xl">I</span>
                    <span className="text-teal-500 text-8xl">R</span>
                    <span className="text-orange-500 text-8xl">E</span>
                    <span className="text-teal-500 text-8xl">N</span>
                  </div>
                  <div className="text-2xl text-gray-700 mt-2 tracking-wider">
                    GROUP
                  </div>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                IREN GROUP adalah holding dari perusahaan-perusahaan yang memiliki bakat secara alamiah, tak pernah lelah sekaligus 
                gigih. Group Perusahaan ini menuntut kesempurnaan dalam segala hal dan sangat kritis pada pekerjaan, pengembangan personil dan 
                usaha ke depan.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                IREN mempunyai akronim dari Inovatif Responsif Efisien Nyata Andal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-500 mb-8">VISI</h2>
            <p className="text-xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
              Merubah masa depan yang lebih baik dengan pikiran dan perjuangan bersama
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-12">MISI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-left">
                    memberikan pelayanan prima sesuai kebutuhan klien dengan SDM yang berkompeten
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-left">
                    mengutamakan kerjasama yang terbuka dan jujur demi tercipta tujuan bersama
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-left">
                    Bersikap profesional guna memberikan informasi dan teknologi sesuai sasaran
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangPage