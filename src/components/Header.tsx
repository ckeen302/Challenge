'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, PawPrintIcon as Paw } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  return (
    <header className={`fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Paw className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-gray-900">VelciPet</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900" onClick={(e) => scrollToSection(e, 'top')}>Home</a>
          <a href="#team" className="text-gray-600 hover:text-gray-900" onClick={(e) => scrollToSection(e, 'team')}>About Us</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </nav>
        <Button asChild>
          <Link href="/appointment">
            Make an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  )
}

