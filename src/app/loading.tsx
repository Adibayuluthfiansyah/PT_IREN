'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Zap } from 'lucide-react'

const Loading = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    setProgress(0)
    
    // Simulasi progress loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 100)

    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }, 1200)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [pathname])

  if (!loading) return null

  return (
    <>
      {/* Custom CSS for professional animations */}
      <style jsx global>{`
        @keyframes logoFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
          }
          50% { 
            transform: translateY(-10px) rotate(5deg);
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
          }
        }
        
        @keyframes energyPulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @keyframes progressGlow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(255,255,255,0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4);
          }
        }
        
        @keyframes particleFloat {
          0% { 
            opacity: 0;
            transform: translateY(30px) scale(0);
          }
          50% { 
            opacity: 1;
            transform: translateY(-10px) scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-50px) scale(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-logo-float {
          animation: logoFloat 3s ease-in-out infinite;
        }
        
        .animate-energy-pulse {
          animation: energyPulse 2s ease-in-out infinite;
        }
        
        .animate-progress-glow {
          animation: progressGlow 2s ease-in-out infinite;
        }
        
        .animate-particle-float {
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] flex items-center justify-center overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Energy Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center text-white animate-slide-up">
          {/* Company Logo Section */}
          <div className="mb-12">
            <div className="relative inline-block">
              {/* Main Logo Container */}
              <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 animate-logo-float border border-white/20">
                <div className="relative">
                  {/* Energy Icon with Pulse Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-energy-pulse"></div>
                  <Zap className="w-16 h-16 text-white relative z-10" />
                </div>
              </div>
            </div>
            
            {/* Company Name */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              PT INTI REFORMASI ENERGI
            </h1>
            <p className="text-lg text-white/80 font-light">Solusi Terpadu Industri Energi</p>
          </div>

          {/* Progress Section */}
          <div className="w-80 mx-auto">
            {/* Progress Bar */}
            <div className="relative mb-6">
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full transition-all duration-300 ease-out animate-progress-glow"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
              </div>
              
              {/* Progress Percentage */}
              <div className="absolute -top-8 left-0 right-0 text-center">
                <span className="text-sm font-medium text-white/90">
                  {Math.round(Math.min(progress, 100))}%
                </span>
              </div>
            </div>

            {/* Loading Status Text */}
            <div className="space-y-2">
              <p className="text-lg font-medium text-white">
                {progress < 30 && "Memuat sumber daya..."}
                {progress >= 30 && progress < 60 && "Menyiapkan konten..."}
                {progress >= 60 && progress < 90 && "Hampir selesai..."}
                {progress >= 90 && "Selesai!"}
              </p>
              
              {/* Animated Dots */}
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Professional Touch */}
          <div className="mt-8 text-xs text-white/50 font-light tracking-wider">
            PROFESSIONAL ENERGY SOLUTIONS
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </>
  )
}

export default Loading