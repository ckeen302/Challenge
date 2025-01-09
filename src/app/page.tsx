'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
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

      <main className="flex-grow">
        <section id="home" className="bg-blue-50 py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Compassionate Care for Your Pets</h1>
                <p className="text-xl mb-6">At VelciPet, we provide professional and loving care for your furry family members.</p>
                <Link href="/appointment">
                  <Button size="lg">Schedule an Appointment</Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Happy pets" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                title: 'Preventative Care',
                icon: '🩺',
                description: 'Regular check-ups and vaccinations to keep your pet healthy.',
              }, {
                title: 'Surgery',
                icon: '🏥',
                description: 'State-of-the-art surgical procedures for your pet\'s needs.',
              }, {
                title: 'Emergency Services',
                icon: '🚑',
                description: '24/7 emergency care for your peace of mind.',
              }].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50 py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Jane Smith',
                  title: 'Senior Veterinarian',
                  image: '/images/injection.jpg',
                  description: 'Dr. Smith has over 15 years of experience in veterinary medicine, specializing in small animal care.',
                },
                {
                  name: 'Dr. John Doe',
                  title: 'Veterinary Surgeon',
                  image: '/images/veterinarian-hugging-and-malamute.JPG',
                  description: 'Dr. Doe is our expert surgeon, with a focus on orthopedic and soft tissue procedures.',
                },
                {
                  name: 'Sarah Johnson',
                  title: 'Veterinary Technician',
                  image: '/images/x-ray-image-of-puppy.jpg',
                  description: 'Sarah ensures our patients receive the best care and comfort during their visits.',
                },
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center mb-2">{member.title}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-8 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <ul className="mb-6">
              <li className="mb-4">
                <h3 className="text-xl font-semibold text-blue-600">What is VelciPet?</h3>
                <p>VelciPet is a platform designed to simplify pet management.</p>
              </li>
              <li className="mb-4">
                <h3 className="text-xl font-semibold text-blue-600">How do I get started?</h3>
                <p>Create an account and follow the setup guide to start using VelciPet.</p>
              </li>
            </ul>
            <form
              id="faq-form"
              className="bg-white p-6 shadow-md rounded"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your question has been submitted.');
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Submit Your Question</h3>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Your Question
              </label>
              <textarea
                id="question"
                name="question"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Type your question here..."
                required
              ></textarea>
              <Button type="submit">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>

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
    </div>
  );
};
