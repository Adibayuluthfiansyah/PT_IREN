'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, Factory, ArrowRight, Phone, Lightbulb, Shield, 
  Handshake, Leaf, Star, Target, Award, TrendingUp
} from 'lucide-react';
import Footer from '../footer/page';

type VisibilityMap = Record<string, boolean>

// Animated Counter Hook
const useAnimatedCounter = (
  end: number,
  duration: number = 2500
): [number, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [count, setCount] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState<boolean>(false)

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return [count, setHasStarted]
}

const TentangPage = () => {
  const [isVisible, setIsVisible] = useState<VisibilityMap>({
    hero: true // fallback agar hero tetap kelihatan
  });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.2 }
    )

    // hanya observe section, bukan semua elemen dengan id
    const elements = document.querySelectorAll<HTMLElement>('section[id]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Counter animations
  const [projectsCount, startProjectsCount] = useAnimatedCounter(150)
  const [clientsCount, startClientsCount] = useAnimatedCounter(89)
  const [experienceCount, startExperienceCount] = useAnimatedCounter(15)

  useEffect(() => {
    if (isVisible.stats) {
      startProjectsCount(true)
      startClientsCount(true)
      startExperienceCount(true)
    }
  }, [isVisible.stats, startProjectsCount, startClientsCount, startExperienceCount])


  return (
      <div className="min-h-screen bg-white overflow-x-hidden overflow-y-auto">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen pt-25 bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#6b7069] text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-3/4 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            ABOUT US
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
                PT INTI REFORMASI ENERGI
              </h2>

              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-4xl mx-auto leading-relaxed">
                Mempelopori transformasi energi berkelanjutan di Indonesia dengan
                inovasi terdepan dan komitmen terhadap masa depan yang lebih hijau
              </p>

              <div className="w-32 h-1 bg-white/50 mx-auto mb-10"></div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="#company-profile"
                  className="group bg-white text-[#2d3b2f] px-10 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                >
                  <Factory className="w-5 h-5" />
                  Profil Perusahaan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/kontak"
                  className="group border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#2d3b2f] transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE SECTION */}
      <section id="company-profile" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo and Company Info */}
            <div className={`transform transition-all duration-1000 ${isVisible['company-profile'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-[#2d3b2f]/5 to-[#4a5c4d]/5 rounded-3xl p-10 shadow-xl border border-[#4a5c4d]/10">
                <div className="text-center mb-8">
                  <div className="text-6xl md:text-8xl font-bold mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[#2d3b2f] drop-shadow-lg">I</span>
                      <span className="text-[#4a5c4d] drop-shadow-lg">R</span>
                      <span className="text-[#2d3b2f] drop-shadow-lg">E</span>
                      <span className="text-[#4a5c4d] drop-shadow-lg">N</span>
                    </div>
                    <div className="text-xl md:text-2xl text-[#6b7069] mt-2 tracking-wider font-medium">
                      GROUP
                    </div>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#2d3b2f] mb-4">PT INTI REFORMASI ENERGI</h3>
                  <p className="text-[#6b7069] leading-relaxed">
                    Didirikan dengan visi untuk menciptakan masa depan energi yang berkelanjutan di Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible['company-profile'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2d3b2f] leading-tight">
                Memimpin Transformasi <span className="text-[#4a5c4d]">Energi Berkelanjutan</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f]"></div>
              
              <p className="text-lg text-[#6b7069] leading-relaxed">
                PT INTI REFORMASI ENERGI adalah perusahaan terdepan yang bergerak di sektor energi berkelanjutan dengan fokus pada eksplorasi, penambangan, dan pengelolaan sumber daya energi ramah lingkungan. Kami berkomitmen untuk menciptakan solusi inovatif yang mendukung transisi energi Indonesia menuju masa depan yang lebih hijau dan berkelanjutan.
              </p>
              
              <p className="text-lg text-[#6b7069] leading-relaxed">
                Dengan tim ahli yang berpengalaman dan teknologi mutakhir, kami telah berhasil menjalankan berbagai proyek strategis di seluruh Indonesia, memberikan kontribusi nyata bagi pengembangan infrastruktur energi nasional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4a5c4d]/10">
                  <div className="text-3xl font-bold text-[#2d3b2f] mb-2">2018</div>
                  <div className="text-[#6b7069] font-medium">Tahun Didirikan</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4a5c4d]/10">
                  <div className="text-3xl font-bold text-[#2d3b2f] mb-2">150+</div>
                  <div className="text-[#6b7069] font-medium">Proyek Selesai</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4a5c4d]/10">
                  <div className="text-3xl font-bold text-[#2d3b2f] mb-2">15+</div>
                  <div className="text-[#6b7069] font-medium">Provinsi Terjangkau</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - consistent with home page */}
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
              Membuktikan dedikasi kami melalui hasil nyata dan dampak positif bagi Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <Target size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {projectsCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Proyek Berhasil Diselesaikan</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
            
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <Award size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {clientsCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Klien Puas dan Terpercaya</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
            
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <TrendingUp size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {experienceCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Tahun Pengalaman Industri</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI MISI SECTION */}
      <section id="vision-mission" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['vision-mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2d3b2f]">VISI</h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-8"></div>
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#2d3b2f]/5 to-[#4a5c4d]/5 rounded-3xl p-10 shadow-xl border border-[#4a5c4d]/10">
              <p className="text-xl md:text-2xl italic text-[#2d3b2f] leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laudantium!
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className={`transform transition-all duration-1000 ${isVisible['vision-mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-[#2d3b2f]">MISI</h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Inovasi Berkelanjutan",
                  description: "Mengembangkan teknologi dan solusi energi inovatif yang ramah lingkungan dan berkelanjutan untuk masa depan Indonesia yang lebih hijau",
                  icon: <Lightbulb className="w-8 h-8" />,
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  title: "Kemitraan Strategis", 
                  description: "Mengutamakan kerjasama yang terbuka, jujur, dan saling menguntungkan dengan semua stakeholder demi tercapainya tujuan bersama",
                  icon: <Handshake className="w-8 h-8" />,
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Keunggulan Operasional",
                  description: "Menjalankan operasi dengan standar kualitas tertinggi, efisiensi maksimal, dan komitmen terhadap keselamatan kerja",
                  icon: <Star className="w-8 h-8" />,
                  color: "from-purple-400 to-purple-600"
                },
                {
                  title: "Tanggung Jawab Lingkungan",
                  description: "Melaksanakan seluruh kegiatan usaha dengan memperhatikan kelestarian lingkungan dan prinsip pembangunan berkelanjutan",
                  icon: <Leaf className="w-8 h-8" />,
                  color: "from-green-400 to-green-600"
                },
                {
                  title: "Pengembangan SDM",
                  description: "Mengembangkan kapasitas sumber daya manusia yang kompeten, profesional, dan berintegritas tinggi",
                  icon: <Building2 className="w-8 h-8" />,
                  color: "from-indigo-400 to-indigo-600"
                },
                {
                  title: "Kepuasan Stakeholder",
                  description: "Memberikan nilai tambah maksimal kepada seluruh stakeholder melalui kinerja yang konsisten dan terpercaya",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-red-400 to-red-600"
                }
              ].map((mission, index) => (
                <div
                  key={index}
                  className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-[#4a5c4d]/30 relative overflow-hidden ${isVisible['vision-mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${mission.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${mission.color} flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className="text-white">
                        {mission.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#2d3b2f] mb-3 group-hover:text-[#4a5c4d] transition-colors duration-300">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[#6b7069] leading-relaxed ml-16">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - consistent with home page */}
      <section id="why-choose" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Keunggulan kompetitif yang menjadikan kami mitra terpercaya dalam setiap proyek energi berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: <Lightbulb className="w-12 h-12" />, 
                title: "Teknologi Terdepan", 
                description: "Menggunakan teknologi mutakhir dan solusi inovatif untuk mengoptimalkan setiap aspek proyek energi berkelanjutan",
                color: "from-yellow-400 to-orange-500" 
              },
              { 
                icon: <Shield className="w-12 h-12" />, 
                title: "Keamanan Terjamin", 
                description: "Komitmen tanpa kompromi terhadap standar keselamatan internasional dan jaminan kualitas terbaik",
                color: "from-blue-400 to-blue-600" 
              },
              { 
                icon: <Handshake className="w-12 h-12" />, 
                title: "Partnership Terpercaya", 
                description: "Membangun hubungan jangka panjang berdasarkan kepercayaan, transparansi, dan kesuksesan bersama",
                color: "from-green-400 to-green-600" 
              },
              { 
                icon: <Building2 className="w-12 h-12" />, 
                title: "Keahlian Industri", 
                description: "Tim ahli dengan pengalaman mendalam di sektor energi, pertambangan, dan infrastruktur berkelanjutan",
                color: "from-purple-400 to-purple-600" 
              },
              { 
                icon: <Leaf className="w-12 h-12" />, 
                title: "Praktik Berkelanjutan", 
                description: "Menjalankan operasi yang bertanggung jawab terhadap lingkungan untuk generasi masa depan",
                color: "from-emerald-400 to-emerald-600" 
              },
              { 
                icon: <Star className="w-12 h-12" />, 
                title: "Jaminan Kualitas", 
                description: "Sistem manajemen bersertifikat ISO dan kepatuhan penuh terhadap standar internasional",
                color: "from-red-400 to-red-600" 
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group p-8 rounded-3xl hover:bg-gradient-to-br hover:from-[#4a5c4d]/5 hover:to-[#2d3b2f]/5 transition-all duration-700 transform hover:-translate-y-3 border border-transparent hover:border-[#4a5c4d]/20 hover:shadow-2xl ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 120}ms` }}
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
      
      <Footer/>
    </div>
  );
};

export default TentangPage