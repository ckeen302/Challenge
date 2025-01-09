import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">VelciPet</h3>
            <p>123 Pet Care Lane, Anytown, USA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@velcipet.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">Instagram</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/appointment">
            <Button>Make an Appointment</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

