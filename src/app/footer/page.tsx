import React from 'react';
import { MapPin, Phone, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '#' },
        { name: 'Visi & Misi', href: '#' },
        { name: 'Bisnis', href: '#' },
      ]
    },
    {
      title: 'Bisnis',
      links: [
        { name: 'Eksplorasi & Produksi', href: '#' },
        { name: 'Pengolahan & Petrokimia', href: '#' },
        { name: 'Pemasaran & Niaga', href: '#' },
        { name: 'Gas & Energi Baru', href: '#' },
        { name: 'International', href: '#' }
      ]
    },
    {
      title: 'Layanan',
      links: [
        { name: 'Ngukur Tanah', href: '#' },
        { name: 'Surveyor', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                LOGO
              </div>
              <span className="text-2xl font-bold">PT INTI REFORMASI ENERGI</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, magni.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center group hover:text-orange-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-red-400 mr-3 group-hover:text-orange-400" />
                <span className="text-gray-300 group-hover:text-white">Pontianak, Indonesia</span>
              </div>
              <div className="flex items-center group hover:text-orange-400 transition-colors duration-300">
                <Phone className="w-5 h-5 text-red-400 mr-3 group-hover:text-orange-400" />
                <span className="text-gray-300 group-hover:text-white">135 (Call Center)</span>
              </div>
              <div className="flex items-center group hover:text-orange-400 transition-colors duration-300">
                <Mail className="w-5 h-5 text-red-400 mr-3 group-hover:text-orange-400" />
                <span className="text-gray-300 group-hover:text-white">info@intireformasienergi.co.id</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 PT INTI REFORMASI ENERGI Hak Cipta Dilindungi.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Syarat & Ketentuan
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by : BANDITO</span>
              <div className="flex items-center space-x-2 group hover:text-green-400 transition-colors duration-300">
                <Leaf className="w-5 h-5 text-green-500 group-hover:text-green-400 transform group-hover:rotate-12 transition-all duration-300" />
                <span className="text-sm font-medium group-hover:text-green-400">Clean Energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;