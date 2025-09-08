'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  CheckCircle, Mail,  Lightbulb, Shield,Handshake, Diamond, Truck, ArrowRight, TrendingUp, Award, Target,Zap, Leaf, Globe, Building2, Factory, ChevronRight, Star, X
} from 'lucide-react'

type VisibilityMap = Record<string, boolean>

// Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed top-20 right-4 z-[60] p-4 rounded-lg shadow-2xl flex items-center gap-3 transform transition-all duration-500 animate-slide-in ${
      type === 'success' 
        ? 'bg-green-600 text-white border-l-4 border-green-400' 
        : 'bg-red-600 text-white border-l-4 border-red-400'
    }`}>
      {type === 'success' ? <CheckCircle size={20} /> : <X size={20} />}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70 text-lg font-bold">×</button>
    </div>
  )
}

// Animated Counter Hook
const useAnimatedCounter = (end: number, duration: number = 2500): [number, React.Dispatch<React.SetStateAction<boolean>>] => {
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

const Beranda: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<VisibilityMap>({})
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // Slides data
  const heroSlides = [
    { 
      title: "PT INTI REFORMASI ENERGI", 
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique.", 
      icon: <Zap className="w-16 h-16 mb-6 mx-auto text-white animate-pulse" />
    },
    { 
      title: "Lorem, ipsum dolor. ", 
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique.",
      icon: <Factory className="w-16 h-16 mb-6 mx-auto text-white animate-bounce" />
    },
    { 
      title: "Lorem, ipsum dolor. ", 
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique.",
      icon: <Leaf className="w-16 h-16 mb-6 mx-auto text-white animate-pulse" />
    }
  ]

  // Services data
  const services = [
    { 
      title: "Lorem, ipsum dolor. ", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique", 
      icon: <Globe className="w-10 h-10" />,
      color: "from-blue-500 to-blue-700"
    },
    { 
      title: "Lorem, ipsum dolor", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique", 
      icon: <Diamond className="w-10 h-10" />,
      color: "from-purple-500 to-purple-700"
    },
    { 
      title: "Lorem, ipsum dolor", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique", 
      icon: <Leaf className="w-10 h-10" />,
      color: "from-green-500 to-green-700"
    },
    { 
      title: "Lorem, ipsum dolor", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique", 
      icon: <Truck className="w-10 h-10" />,
      color: "from-orange-500 to-orange-700"
    }
  ]

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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

  // Newsletter submission handler
  const handleNewsletterSubmit = async () => {
    if (!email.trim()) {
      setToast({ message: 'Silakan masukkan alamat email yang valid!', type: 'error' })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate success/failure (80% success rate)
      const isSuccess = Math.random() > 0.2
      
      if (isSuccess) {
        setToast({ message: 'Berhasil! Email Anda telah terdaftar untuk newsletter.', type: 'success' })
        setEmail('')
      } else {
        setToast({ message: 'Gagal mengirim! Silakan coba lagi nanti.', type: 'error' })
      }
    } catch (error) {
      setToast({ message: 'Terjadi kesalahan sistem! Silakan coba lagi.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNewsletterSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#6b7069] text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="transform transition-all duration-1000">
              {heroSlides[currentSlide].icon}
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl text-white/90 mb-6 font-light">
                {heroSlides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-4xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/tentang" className="group bg-white text-[#2d3b2f] px-10 py-4 rounded-full font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
                  <Building2 className="w-5 h-5" />
                  Selengkapnya Tentang Kami
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link href="/layanan" className="group border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#2d3b2f] transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
                  <Factory className="w-5 h-5" />
                  Selanjutnya Layanan Kami
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 transform ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/70 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section id="services-overview" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['services-overview'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Our Core Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, veniam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-[#4a5c4d]/30 relative overflow-hidden ${isVisible['services-overview'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="text-[#4a5c4d] group-hover:text-[#2d3b2f]  mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#2d3b2f] mb-4 group-hover:text-[#4a5c4d] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#6b7069] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-[#4a5c4d] group-hover:text-[#2d3b2f] font-bold transition-colors duration-300">
                  <span>Learn more</span>
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
            <h2 className="text-3xl md:text-6xl font-bold mb-6">Our Impact</h2>
            <div className="w-32 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence through measurable results and sustainable growth across Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <Target size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {projectsCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Successfully Completed Projects</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
            
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <Award size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {clientsCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Satisfied Clients Worldwide</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
            
            <div className={`text-center group transform transition-all duration-1000 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 hover:bg-white/20 transition-all duration-500 border border-white/20">
                <TrendingUp size={64} className="mx-auto mb-6 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {experienceCount}+
                </div>
                <p className="text-lg text-white/90 font-medium">Years of Industry Experience</p>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-6 group-hover:from-white transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Kenapa harus PT INTI REFORMASI ENERGI?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nobis!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation Leader", description: "Teknologi mutakhir dan solusi berpikiran ke depan untuk sektor energi", color: "from-yellow-400 to-orange-500" },
              { icon: <Shield className="w-12 h-12" />, title: "Safety First", description: "Komitmen tanpa kompromi terhadap standar keselamatan dan jaminan kualitas", color: "from-blue-400 to-blue-600" },
              { icon: <Handshake className="w-12 h-12" />, title: "Trusted Partnership", description: "Hubungan jangka panjang yang dibangun di atas keandalan, kepercayaan, dan kesuksesan bersama", color: "from-green-400 to-green-600" },
              { icon: <Building2 className="w-12 h-12" />, title: "Industry Expertise", description: "Pengetahuan dan pengalaman yang mendalam di sektor energi dan pertambangan", color: "from-purple-400 to-purple-600" },
              { icon: <Leaf className="w-12 h-12" />, title: "Sustainable Practice", description: "Pengelolaan lingkungan dan operasi yang bertanggung jawab untuk generasi mendatang", color: "from-emerald-400 to-emerald-600" },
              { icon: <Star className="w-12 h-12" />, title: "Quality Assurance", description: "Proses bersertifikat ISO dan kepatuhan terhadap standar internasional", color: "from-red-400 to-red-600" }
            ].map((item, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-[#4a5c4d]/5 hover:to-[#2d3b2f]/5 transition-all duration-700 transform hover:-translate-y-3 border border-transparent hover:border-[#4a5c4d]/20 hover:shadow-2xl ${isVisible['why-choose'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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

      {/* NEWSLETTER SECTION */}
      <section id="newsletter" className="py-24 bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible.newsletter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Mail className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Tetap terhubung dengan kami
            </h2>
            
            <div className="w-32 h-1 bg-white/50 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dapatkan update terbaru tentang proyek, inovasi, dan perkembangan industri energi langsung ke email Anda
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleEmailKeyPress}
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-6 py-4 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 rounded-xl border border-white/10 focus:border-white/30 transition-all duration-300"
                  disabled={isSubmitting}
                />
                <button 
                  onClick={handleNewsletterSubmit}
                  disabled={isSubmitting || !email.trim()}
                  className="px-8 py-4 bg-white text-[#2d3b2f] rounded-xl font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[160px] shadow-lg cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-3 border-[#2d3b2f]/30 border-t-[#2d3b2f] rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Mail size={22} />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                Dengan berlangganan, Anda menyetujui kebijakan privasi kami dan akan menerima newsletter berkala
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Beranda