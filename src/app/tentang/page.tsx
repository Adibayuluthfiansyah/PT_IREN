'use client'
import React from 'react'

const tentangPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
         {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            TENTANG KAMI
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        {/* Decorative overlay text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-9xl font-bold tracking-widest transform rotate-12">
            IREN GROUP
          </div>
        </div>
      </section>
    </div>
  )
}

export default tentangPage