import Image from 'next/image';

export function Team() {
  const teamMembers = [
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
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
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
  );
}

