import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">VelciPet</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          </ul>
        </nav>
        <Link href="/appointment">
          <Button>Make an Appointment</Button>
        </Link>
      </div>
    </header>
  );
}

