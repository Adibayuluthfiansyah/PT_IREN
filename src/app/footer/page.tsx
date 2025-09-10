import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Leaf, Zap, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '/tentang' },
        { name: 'Visi & Misi', href: '/tentang#visi-misi' },
        { name: 'Sejarah', href: '/tentang#sejarah' },
        { name: 'Tim Management', href: '/tentang#tim' },
      ]
    },
    {
      title: 'Layanan',
      links: [
        { name: 'Eksplorasi Energi', href: '/layanan#eksplorasi' },
        { name: 'Konsultasi Teknis', href: '/layanan#konsultasi' },
        { name: 'Survey & Pemetaan', href: '/layanan#survey' },
        { name: 'Manajemen Proyek', href: '/layanan#manajemen' },
      ]
    },
    {
      title: 'Industri',
      links: [
        { name: 'Oil & Gas', href: '/industri#oil-gas' },
        { name: 'Energi Terbarukan', href: '/industri#renewable' },
        { name: 'Pertambangan', href: '/industri#mining' },
        { name: 'Infrastruktur', href: '/industri#infrastruktur' },
      ]
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 md:col-span-4">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold block">PT INTI REFORMASI ENERGI</span>
                  <span className="text-white/70 text-sm">Energy Solutions Partner</span>
                </div>
              </div>
              
              <p className="text-white/80 mb-8 leading-relaxed text-lg max-w-md">
                Menjadi mitra terpercaya dalam solusi energi berkelanjutan dengan teknologi mutakhir dan komitmen terhadap inovasi untuk masa depan yang lebih baik.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">Pontianak, West Kalimantan</p>
                    <p className="text-white/70 text-sm">Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">+62 135 (Call Center)</p>
                    <p className="text-white/70 text-sm">24/7 Support Available</p>
                  </div>
                </div>
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">info@intireformasienergi.co.id</p>
                    <p className="text-white/70 text-sm">Business Inquiries</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white/90 font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1 md:col-span-1">
                <h4 className="text-xl font-bold mb-6 text-white">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-flex items-center group text-sm"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Signup */}
            <div className="lg:col-span-1 md:col-span-2">
              <h4 className="text-xl font-bold mb-6 text-white">Newsletter</h4>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Dapatkan update terbaru tentang inovasi energi dan proyek-proyek terkini kami.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-300"
                  />
                  <button className="bg-white text-[#2d3b2f] px-6 py-3 rounded-xl font-bold hover:bg-white/90 hover:scale-105 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    <Mail className="w-4 h-4" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-white/70 text-sm">
                  © 2025 PT INTI REFORMASI ENERGI. Hak Cipta Dilindungi Undang-Undang.
                </p>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    Kebijakan Privasi
                  </Link>
                  <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    Syarat & Ketentuan
                  </Link>
                  <Link href="/cookies" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <span>Powered by</span>
                  <span className="font-bold text-white">BANDITO</span>
                </div>
                <div className="flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                  <Leaf className="w-5 h-5 text-green-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">Clean Energy Initiative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;