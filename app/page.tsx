'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import CaseStudy from '@/components/sections/CaseStudy'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Main content sections */}
      <div id="hero">
        <Hero />
      </div>
      <Problem />
      <Solution />
      <HowItWorks />
      <CaseStudy />
      <Team />
      <Contact />
      
      <Footer />
    </main>
  )
}