'use client'

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle, X } from 'lucide-react';
import Footer from '../footer/page';

type VisibilityMap = Record<string, boolean>

// Toast Component (consistent with home page)
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

const KontakPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState<VisibilityMap>({});

  // Intersection Observer for scroll animations (consistent with home page)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToast({ message: 'Silakan lengkapi semua field yang wajib diisi!', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/failure (80% success rate)
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        setToast({ message: 'Berhasil! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.', type: 'success' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setToast({ message: 'Gagal mengirim pesan! Silakan coba lagi nanti.', type: 'error' });
      }
    } catch (error) {
      setToast({ message: 'Terjadi kesalahan sistem! Silakan coba lagi.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting) {
      handleSubmit(e);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Alamat Kantor",
      details: [
        "Jl. Ahmad Yani No. 123",
        "Pontianak Kota, Kalimantan Barat",
        "Indonesia 78124"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telepon",
      details: [
        "+62 561 123456",
        "+62 812 3456 7890"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: [
        "info@intireformasi.com",
        "support@intireformasi.com"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup"
      ],
      color: "from-orange-500 to-orange-700"
    }
  ];

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

      {/* HERO SECTION - consistent with home page */}
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
            CONTACT
          </div>
        </div>
        
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="transform transition-all duration-1000">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-pulse">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                  HUBUNGI KAMI
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl text-white/90 mb-6 font-light">
                Mari Berdiskusi Tentang Proyek Anda
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-4xl mx-auto leading-relaxed">
                Kami siap membantu mewujudkan visi energi berkelanjutan Anda dengan solusi terdepan dan pelayanan terpercaya
              </p>
              
              <div className="w-32 h-1 bg-white/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS - consistent styling with home page services */}
      <section id="contact-info" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Informasi Kontak
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Jangan ragu untuk menghubungi kami melalui berbagai saluran komunikasi yang tersedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-[#4a5c4d]/30 relative overflow-hidden ${isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="text-[#4a5c4d] group-hover:text-[#2d3b2f]  duration-500 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform ">
                  {info.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#2d3b2f] mb-4 group-hover:text-[#4a5c4d] transition-colors duration-300">
                  {info.title}
                </h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#6b7069] leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & MAP SECTION */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-[#2d3b2f]/5 to-[#4a5c4d]/5 rounded-3xl p-10 shadow-xl border border-[#4a5c4d]/10">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#4a5c4d] to-[#2d3b2f] mr-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2d3b2f]">Kirim Pesan</h2>
                </div>
                <p className="text-[#6b7069] text-lg mb-10 leading-relaxed">
                  Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#2d3b2f] mb-3">
                        Nama Lengkap *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-4 w-5 h-5 text-[#6b7069]" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4a5c4d] focus:border-[#4a5c4d] transition-all duration-300 text-[#2d3b2f] placeholder-[#6b7069]/60"
                          placeholder="Masukkan nama lengkap"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#2d3b2f] mb-3">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-[#6b7069]" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onKeyPress={handleEmailKeyPress}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4a5c4d] focus:border-[#4a5c4d] transition-all duration-300 text-[#2d3b2f] placeholder-[#6b7069]/60"
                          placeholder="email@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-[#2d3b2f] mb-3">
                        Nomor Telepon
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-[#6b7069]" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4a5c4d] focus:border-[#4a5c4d] transition-all duration-300 text-[#2d3b2f] placeholder-[#6b7069]/60"
                          placeholder="+62 812 3456 7890"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-[#2d3b2f] mb-3">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4a5c4d] focus:border-[#4a5c4d] transition-all duration-300 text-[#2d3b2f] placeholder-[#6b7069]/60"
                        placeholder="Nama perusahaan"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#2d3b2f] mb-3">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4a5c4d] focus:border-[#4a5c4d] transition-all duration-300 text-[#2d3b2f] placeholder-[#6b7069]/60 resize-none"
                      placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                    className="w-full bg-gradient-to-r from-[#2d3b2f] to-[#4a5c4d] text-white px-8 py-5 rounded-xl hover:from-[#4a5c4d] hover:to-[#2d3b2f] transition-all duration-300 font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none min-h-[60px] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Location */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[#2d3b2f]/5 to-[#4a5c4d]/5 rounded-3xl p-10 shadow-xl border border-[#4a5c4d]/10">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#4a5c4d] to-[#2d3b2f] mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#2d3b2f]">Lokasi Kami</h3>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#4a5c4d]/20 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8173094315967!2d109.32227431475391!3d-0.02610943572853742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59c2dc9e2d2d%3A0x9d5b6b88b8b8b8b8!2sJl.%20Ahmad%20Yani%2C%20Pontianak%20Kota%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat!5e0!3m2!1sen!2sid!4v1625123456789!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor PT INTI REFORMASI ENERGI"
                  ></iframe>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#4a5c4d]/10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#4a5c4d] to-[#2d3b2f]">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2d3b2f] mb-2">Alamat Lengkap:</h4>
                      <p className="text-[#6b7069] leading-relaxed">
                        Jl. Ahmad Yani No. 123, Pontianak Kota<br />
                        Kalimantan Barat, Indonesia 78124
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - consistent with home page styling */}
      <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2d3b2f] mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#4a5c4d] to-[#2d3b2f] mx-auto mb-6"></div>
            <p className="text-xl text-[#6b7069] max-w-4xl mx-auto leading-relaxed">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Berapa lama waktu pengerjaan proyek?",
                answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek, mulai dari 2-4 minggu untuk konsultasi sederhana hingga 6-12 bulan untuk proyek eksplorasi dan penambangan yang kompleks."
              },
              {
                question: "Apakah ada garansi setelah proyek selesai?",
                answer: "Ya, kami memberikan garansi dan support maintenance untuk semua proyek sesuai dengan kontrak yang disepakati, dengan periode garansi yang disesuaikan dengan jenis layanan."
              },
              {
                question: "Bagaimana sistem pembayaran?",
                answer: "Pembayaran dapat dilakukan secara bertahap sesuai milestone proyek: down payment 30%, progress payment 40%, dan final payment 30% saat serah terima proyek."
              },
              {
                question: "Apakah melayani proyek di luar Kalimantan Barat?",
                answer: "Tentu saja! Kami melayani proyek di seluruh Indonesia dengan tim yang berpengalaman dan jaringan kerjasama yang luas di berbagai daerah."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 hover:border-[#4a5c4d]/30 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-[#2d3b2f] mb-4 group-hover:text-[#4a5c4d] transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-[#6b7069] leading-relaxed">
                  {faq.answer}
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

export default KontakPage;