'use client'

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Building2, Factory, ArrowRight , Phone} from 'lucide-react';
import Footer from '../footer/page';

const TentangPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
            {/* HERO SECTION */}
      <section id="hero" className="relative h-screen bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#6b7069] text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            TENTANG KAMI
          </div>
        </div>
        
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="transform transition-all duration-1000">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                  TENTANG KAMI
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl text-white/90 mb-6 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-4xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ipsum ipsam iusto est error doloremque ad delectus eum odio in.
              </p>
              
              <div className="w-32 h-1 bg-white/50 mx-auto mb-10"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="#services" className="group bg-white text-[#2d3b2f] px-10 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
                  <Factory className="w-5 h-5" />
                  Jelajahi Layanan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link href="/kontak" className="group border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#2d3b2f] transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
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