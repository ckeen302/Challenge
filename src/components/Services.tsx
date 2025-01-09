export function Services() {
    const services = [
      {
        title: 'Preventative Care',
        icon: '🩺',
        description: 'Regular check-ups and vaccinations to keep your pet healthy.',
      },
      {
        title: 'Surgery',
        icon: '🏥',
        description: 'State-of-the-art surgical procedures for your pet\'s needs.',
      },
      {
        title: 'Emergency Services',
        icon: '🚑',
        description: '24/7 emergency care for your peace of mind.',
      },
    ];
  
    return (
      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  