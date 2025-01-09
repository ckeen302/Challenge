import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="bg-blue-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Compassionate Care for Your Pets</h1>
            <p className="text-xl mb-6">
              At VelciPet, we provide professional and loving care for your furry family members.
            </p>
            <Link href="/appointment">
              <Button size="lg">Schedule an Appointment</Button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-6"> {/* Add `md:pl-6` for spacing */}
            <Image
              src="/images/landingpage.png"
              alt="Veterinarian and Rabbit"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
