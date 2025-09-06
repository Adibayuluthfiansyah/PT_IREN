'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Handshake, Diamond, Shield, Truck, FileText, ArrowRight, 
  CheckCircle, Star, Zap, Building2, Factory, Globe, 
  Target, Award, TrendingUp, Mail, Phone, MapPin
} from 'lucide-react'

type VisibilityMap = Record<string, boolean>

const LayananPage = () => {
  const [isVisible, setIsVisible] = useState<VisibilityMap>({})


  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }))
      })
    }, { threshold: 0.2 })

    const elements = document.querySelectorAll<HTMLElement>('[id]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Diamond className="w-12 h-12" />,
      title: "Exploration",
      description: "Layanan eksplorasi pertambangan sesuai kebutuhan perusahaan/organisasi dengan teknologi mutakhir dan tim ahli berpengalaman.",
      color: "from-blue-500 to-blue-700",
      features: ["Survei Geologi", "Mapping Digital", "Analisis Sampel"]
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Mining",
      description: "Layanan pertambangan yang dilakukan oleh para profesional dengan standar internasional dan keselamatan kerja terjamin.",
      color: "from-orange-500 to-orange-700",
      features: ["Open Pit Mining", "Underground Mining", "Processing Plant"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Environmental",
      description: "Solusi lingkungan terpadu untuk konservasi sumber daya air dan pengelolaan dampak lingkungan yang berkelanjutan.",
      color: "from-green-500 to-green-700",
      features: ["Environmental Impact", "Water Conservation", "Rehabilitation"]
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Trading",
      description: "Perdagangan jual beli barang dan jasa secara ekspor maupun impor dengan jaringan global yang luas dan terpercaya.",
      color: "from-purple-500 to-purple-700",
      features: ["Export Services", "Import Management", "Global Network"]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Stevedoring/Cargodoring",
      description: "Layanan bongkar muat dan kargo profesional untuk kebutuhan bisnis perusahaan dan individual dengan efisiensi tinggi.",
      color: "from-indigo-500 to-indigo-700",
      features: ["Port Operations", "Cargo Handling", "Logistics Support"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Licensing",
      description: "Layanan perizinan komprehensif yang mencakup perizinan tambang dan regulasi industri dengan proses yang transparan.",
      color: "from-red-500 to-red-700",
      features: ["Mining Permits", "Legal Compliance", "Documentation"]
    }
  ]

  const stats = [
    { icon: <Target size={48} />, number: "150+", label: "Proyek Selesai", delay: "0ms" },
    { icon: <Award size={48} />, number: "89+", label: "Klien Puas", delay: "200ms" },
    { icon: <TrendingUp size={48} />, number: "15+", label: "Tahun Pengalaman", delay: "400ms" },
    { icon: <Star size={48} />, number: "98%", label: "Success Rate", delay: "600ms" }
  ]

  const whyChooseUs = [
    { 
      icon: <Zap className="w-10 h-10" />, 
      title: "Teknologi Terdepan", 
      description: "Menggunakan teknologi dan peralatan terbaru untuk hasil optimal",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: <Shield className="w-10 h-10" />, 
      title: "Standar Keselamatan Tinggi", 
      description: "Menerapkan protokol keselamatan internasional yang ketat",
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: <Building2 className="w-10 h-10" />, 
      title: "Tim Profesional", 
      description: "Didukung oleh tenaga ahli bersertifikat dan berpengalaman",
      color: "from-purple-400 to-purple-600"
    },
    { 
      icon: <CheckCircle className="w-10 h-10" />, 
      title: "Kualitas Terjamin", 
      description: "Berkomitmen memberikan layanan berkualitas tinggi dan tepat waktu",
      color: "from-green-400 to-green-600"
    }
  ]


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
            SERVICES
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
                  LAYANAN KAMI
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl text-white/90 mb-6 font-light">
                Solusi Terpadu untuk Industri Energi
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-4xl mx-auto leading-relaxed">
                Kami menawarkan berbagai layanan profesional untuk membantu perusahaan dan organisasi mencapai tujuan bisnis dengan solusi yang disesuaikan dengan kebutuhan Anda.
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              BIDANG USAHA
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Kami menawarkan berbagai layanan untuk membantu perusahaan/organisasi atau individual bekerja lebih baik. Kami dapat memberikan layanan yang disesuaikan dengan bisnis anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-[#4a5c4d]/30 relative overflow-hidden ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#2d3b2f] mb-4 group-hover:text-[#4a5c4d] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#6b7069] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#6b7069]">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-[#4a5c4d] group-hover:text-[#2d3b2f] font-bold transition-colors duration-300 cursor-pointer">
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="py-24 bg-gradient-to-r from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold mb-6">Pencapaian Kami</h2>
            <div className="w-32 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence through measurable results and sustainable growth across Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: stat.delay }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-lg text-white/90 font-medium">{stat.label}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-4 group-hover:from-white transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Keunggulan dan komitmen yang membuat kami menjadi pilihan terdepan dalam industri energi dan pertambangan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-[#4a5c4d]/5 hover:to-[#2d3b2f]/5 transition-all duration-700 transform hover:-translate-y-3 border border-transparent hover:border-[#4a5c4d]/20 hover:shadow-2xl ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#2d3b2f] mb-4 group-hover:text-[#4a5c4d] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#6b7069] leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="py-24 bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Handshake className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Siap Bekerja Sama dengan Kami?
            </h2>
            
            <div className="w-32 h-1 bg-white/50 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Hubungi kami sekarang untuk konsultasi dan dapatkan solusi terbaik sesuai kebutuhan bisnis Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontak" className="group bg-white text-[#2d3b2f] px-10 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
                <Phone className="w-5 h-5" />
                Hubungi Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link href="/tentang" className="group border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#2d3b2f] transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
                <Building2 className="w-5 h-5" />
                Portfolio Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LayananPage