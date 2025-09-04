'use client'

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import Footer from '../footer/page';
const KontakPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor",
      details: [
        "Jl. Teknologi No. 123",
        "Pontianak, Kalimantan Barat",
        "Indonesia 78124"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      details: [
        "+62 561 123456",
        "+62 812 3456 7890"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@irengroup.com",
        "support@irengroup.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            HUBUNGI KAMI
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Mari berdiskusi tentang proyek Anda dan bagaimana kami dapat membantu mewujudkannya
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            CONTACT
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Kirim Pesan</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Pilih layanan</option>
                    <option value="web-development">Exploration</option>
                    <option value="mobile-app">Mining</option>
                    <option value="system-information">Environmental</option>
                    <option value="it-consulting">Trading</option>
                    <option value="security">Stevedoring/Cargodoring</option>
                    <option value="other">Licensing</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-orange-600 cursor-pointer transition-all duration-300 font-bold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
                <p className="text-gray-600 mb-8">
                  Jangan ragu untuk menghubungi kami melalui berbagai saluran komunikasi yang tersedia
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Kami</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Google Maps</p>
                    <p className="text-sm">Jl. Teknologi No. 123, Pontianak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Berapa lama waktu pengerjaan proyek?
              </h3>
              <p className="text-gray-600">
                Waktu pengerjaan bervariasi tergantung kompleksitas proyek, mulai dari 2 minggu untuk website sederhana hingga 6 bulan untuk sistem yang kompleks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Apakah ada garansi setelah proyek selesai?
              </h3>
              <p className="text-gray-600">
                Ya, kami memberikan garansi 6-12 bulan untuk bug fixing dan maintenance support setelah proyek selesai.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Bagaimana sistem pembayaran?
              </h3>
              <p className="text-gray-600">
                Pembayaran dapat dilakukan secara bertahap sesuai milestone proyek: 30% di awal, 40% saat development, dan 30% saat serah terima.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Apakah menerima proyek dari luar Pontianak?
              </h3>
              <p className="text-gray-600">
                Tentu saja! Kami melayani klien dari seluruh Indonesia dengan sistem komunikasi remote yang efektif.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};


export default KontakPage;