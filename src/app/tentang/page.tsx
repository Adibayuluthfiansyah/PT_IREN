'use client'

import React from 'react';
import { CheckCircle } from 'lucide-react';
import Footer from '../footer/page';

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
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
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
                    <span className="text-black text-8xl">L</span>
                    <span className="text-red-500 text-8xl">O</span>
                    <span className="text-black text-8xl">G</span>
                    <span className="text-red-500 text-8xl">O</span>
                  </div>
                  <div className="text-2xl text-gray-700 mt-2 tracking-wider">
                    GROUP
                  </div>
                </div>
              </div>
            </div>

            {/* Deskripsi Perusahaan */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestiae ab nemo. Libero, impedit expedita? Ducimus quia minus suscipit saepe dicta voluptatibus porro quidem odio ab nihil cupiditate ipsam magni consequatur quos eaque dolore autem totam, aspernatur error similique possimus beatae recusandae! Distinctio modi natus labore quis nesciunt ex facilis.
              </p>
              <p className=" text-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">VISI</h2>
            <p className="text-xl italic max-w-4xl mx-auto leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. A, voluptatem!
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">MISI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="flex-shrink-0 mt-1" size={24} />
                  <p className=" text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, distinctio!
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="flex-shrink-0 mt-1" size={24} />
                  <p className="text-left">
                    mengutamakan kerjasama yang terbuka dan jujur demi tercipta tujuan bersama
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="flex items-start space-x-4">
                  <CheckCircle className=" flex-shrink-0 mt-1" size={24} />
                  <p className="text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, repellendus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default TentangPage