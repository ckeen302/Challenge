import Link from "next/link"
import { PawPrintIcon as Paw, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Paw className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">VelciPet</span>
            </Link>
            <p className="mt-4">Compassionate care for your beloved pets.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/appointment" className="hover:text-primary">Make an Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>Preventative Care</li>
              <li>Surgery</li>
              <li>Emergency Services</li>
              <li>Pet Grooming</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect With Us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-2 hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-primary">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-primary">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} VelciPet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

