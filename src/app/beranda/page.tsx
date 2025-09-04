'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  CheckCircle, Mail, Users, Lightbulb, Shield,
  Handshake, Diamond, Truck, FileText,
  ArrowRight, TrendingUp, Award, Target
} from 'lucide-react'

type VisibilityMap = Record<string, boolean>

// Hook counter
const useAnimatedCounter = (end: number, duration: number = 2000): [number, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [count, setCount] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState<boolean>(false)

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
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

  // Data carousel
  const heroSlides = [
    { title: "PT INTI REFORMASI ENERGI", subtitle: "Leading Indonesia's Energy Transformation", description: "Pioneering sustainable energy solutions for a greener tomorrow" },
    { title: "INNOVATION & EXCELLENCE", subtitle: "Driving Mining Industry Forward", description: "Advanced mining technologies and environmental stewardship" },
    { title: "SUSTAINABLE FUTURE", subtitle: "Environmental Responsibility", description: "Committed to sustainable practices and community development" }
  ]

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }))
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll<HTMLElement>('[id]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Counter values
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

  // Newsletter
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    alert('Terima kasih! Email Anda telah terdaftar.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#6b7069] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
              <span className="block text-2xl md:text-4xl text-white/80 mt-2">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tentang" className="bg-white text-[#2d3b2f] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">
                Explore Our Story
              </Link>
              <Link href="/layanan" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2d3b2f] transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section id="stats" className="py-16 bg-[#4a5c4d] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Target size={48} className="mx-auto mb-2" />
            <div className="text-4xl font-bold">{projectsCount}+</div>
            <p>Successfully Completed Projects</p>
          </div>
          <div>
            <Award size={48} className="mx-auto mb-2" />
            <div className="text-4xl font-bold">{clientsCount}+</div>
            <p>Satisfied Clients Worldwide</p>
          </div>
          <div>
            <TrendingUp size={48} className="mx-auto mb-2" />
            <div className="text-4xl font-bold">{experienceCount}+</div>
            <p>Years of Industry Experience</p>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-[#2d3b2f] via-[#4a5c4d] to-[#2d3b2f] text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Hubungan & Bantuan</h2>
          <p className="mb-6">Bergabunglah untuk update terbaru.</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white/60 focus:outline-none"
            />
            <button type="submit" className="px-6 py-2 bg-white text-[#2d3b2f] rounded-full font-semibold">
              <span className="flex items-center gap-2">
                <Mail size={20} /> Subscribe
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Beranda
