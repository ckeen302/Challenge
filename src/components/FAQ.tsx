import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is VelciPet?',
    answer: 'VelciPet is a platform designed to simplify pet management, offering comprehensive veterinary services and care for your beloved animals.',
  },
  {
    question: 'How do I get started?',
    answer: 'To get started with VelciPet, simply create an account on our website or mobile app. Then, follow the setup guide to add your pets and schedule your first appointment.',
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including preventative care, surgeries, emergency services, dental care, and specialized treatments for various pet health conditions.',
  },
  {
    question: 'How can I schedule an appointment?',
    answer: 'You can schedule an appointment through our website, mobile app, or by calling our clinic directly. We offer flexible scheduling options to accommodate your needs.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-100 py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Still have questions?</h3>
          <form
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Your question has been submitted.');
            }}
          >
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
            <Button type="submit" className="w-full">
              Submit Your Question
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

