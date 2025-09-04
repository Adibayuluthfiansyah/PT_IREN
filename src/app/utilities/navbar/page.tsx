'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl text-black font-bold">
            IREN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-300 transition-colors">
              Beranda
            </Link>
            <Link href="/tentang" className="text-black hover:text-gray-300 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/layanan" className="text-black hover:text-gray-300 transition-colors">
              Layanan
            </Link>
            <Link href="/kontak" className="text-black hover:text-gray-300 transition-colors">
              Kontak
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black hover:text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}  className='cursor-pointer'/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/beranda" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Beranda
              </Link>
              <Link href="/tentang-kami" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Tentang Kami
              </Link>
              <Link href="/layanan" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Layanan
              </Link>
              <Link href="/kontak" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
