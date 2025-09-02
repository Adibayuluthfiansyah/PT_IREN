// components/Footer.tsx
import React from 'react';

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
    <footer className="bg-gray-900 text-white">
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
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Pontianak, Indonesia</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">135 (Call Center)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">info@intireformasienergi.co.id</span>
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
                      className="text-gray-300 hover:text-white transition-colors duration-300"
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Powered by : BANDITO</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Clean Energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;