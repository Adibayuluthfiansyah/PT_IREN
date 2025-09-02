import React from 'react'

const Beranda = () => {
  return (
       <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            PT.INTI REFORMASI ENERGI
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at veritatis ratione!
          </p>
          <div className="w-24 h-1 mx-auto p-2">
           <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Profil Company
          </button>
          </div>
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

export default Beranda