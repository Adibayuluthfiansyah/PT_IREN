'use client'

import React, { useState } from 'react' // Tambahkan { useState }
import Link from 'next/link'
import { CheckCircle,  Mail, Users, Lightbulb, Shield, Handshake, Diamond, Truck, FileText} from 'lucide-react';

const Beranda = () => {
  const [email, setEmail] = useState(''); 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            PT.INTI REFORMASI ENERGI
          </h1>
          <p className="mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at veritatis ratione!
          </p>
          <Link href="/tentang">
            <button className="relative z-10 cursor-pointer bg-transparent border-1 border-white text-white px-8 py-4 rounded-full text-md font-medium hover:bg-orange-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Profil Company
            </button>
          </Link>
        </div>
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
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
                    <span className="text-orange-500 text-8xl">O</span>
                    <span className="text-black text-8xl">G</span>
                    <span className="text-orange-500 text-8xl">O</span>
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

          {/* Misi */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iusto?
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

      {/* Kenapa Harus Kami Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">KENAPA HARUS IREN GROUP?</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam necessitatibus voluptate repellat facere nostrum! Aliquid debitis non iste in ex explicabo odit ipsum molestias repellat vero, enim aliquam alias autem harum architecto tempora. Minima repellendus cupiditate mollitia, libero modi similique, architecto porro quod saepe rerum esse, quibusdam nostrum officiis nemo?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg text-white">
              <div className="mb-6">
                <Users size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos reiciendis consectetur?
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-100 hover:border-gray-700 transition-colors">
              <div className="mb-6 text-gray-700">
                <Lightbulb size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Creative</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis enim dolor deserunt, cumque iure.
              </p>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg text-white">
              <div className="mb-6">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety</h3>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis amet eveniet nam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">BIDANG USAHA</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum inventore quis reprehenderit eum repellat quaerat soluta quisquam aliquam minima numquam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Handshake className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Exploration</h3>
              <p className="text-gray-700">
                Layanan eksplorasi pertambangan sesuai kebutuhan perusahaan/organisasi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Diamond className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mining</h3>
              <p className="text-gray-700">
                Layanan yang bergerak dipertambangan yang dilakukan oleh para profesional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Shield className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Environmental</h3>
              <p className="text-gray-700">
                Mempelajari dan menyelesaikan permasalahan lingkungan seperti konservasi sumber daya air.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Handshake className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Trading</h3>
              <p className="text-gray-700">
                Perdagangan jual beli barang atau jasa, baik ekspor maupun impor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Truck className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Stevedoring/Cargodoring</h3>
              <p className="text-gray-700">
                Layanan bongkar muat/kargo untuk kebutuhan bisnis perusahaan/individual.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <FileText className="text-teal-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Licensing</h3>
              <p className="text-gray-700">
                Layanan perizinan yang mencakup perizinan tambang, dan lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">HUBUNGAN & BANTUAN</h2>
          <p className="text-xl mb-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nemo.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white flex-1 px-6 py-4 rounded-l-full text-gray-900 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 cursor-pointer px-8 py-4 rounded-r-full transition-colors">
                <Mail size={25} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Beranda