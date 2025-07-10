'use client';

import { useState } from 'react';
import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'help@petadopt.com',
      link: 'mailto:help@petadopt.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      description: 'Speak with our adoption specialists',
      contact: '(555) PET-LOVE',
      link: 'tel:+1-555-738-5683'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      description: 'Come see us at our main office',
      contact: '123 Pet Street, Animal City, AC 12345',
      link: 'https://maps.google.com/?q=123+Pet+Street+Animal+City+AC+12345'
    }
  ];

  const faqItems = [
    {
      question: 'How does the adoption process work?',
      answer: 'Our adoption process is simple: browse pets, contact the shelter, meet the pet, complete the application, and welcome your new family member home! Each shelter may have slightly different requirements.'
    },
    {
      question: 'What are the adoption fees?',
      answer: 'Adoption fees vary by shelter and pet type. Fees typically cover vaccinations, spaying/neutering, microchipping, and other medical care. Contact the specific shelter for exact fees.'
    },
    {
      question: 'Can I return a pet if it doesn\'t work out?',
      answer: 'Most shelters have return policies, though they vary. We encourage thorough consideration and meeting the pet multiple times before adopting. Contact the shelter directly about their specific return policy.'
    },
    {
      question: 'Do you have pets for people with allergies?',
      answer: 'Yes! Some pets are considered hypoallergenic or produce fewer allergens. Use our filters to search for specific breeds, or contact us for recommendations based on your specific allergies.'
    },
    {
      question: 'How do I prepare my home for a new pet?',
      answer: 'Pet-proof your home, get necessary supplies (food, bed, toys, etc.), establish a routine, and prepare other pets for the new arrival. We can provide a detailed checklist based on the type of pet you\'re adopting.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_8.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100">
            Have questions about pet adoption? We're here to help you find your perfect companion.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 mb-4">{info.description}</p>
              <a
                href={info.link}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                aria-label={`${info.title}: ${info.contact}`}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {info.contact}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {/* Topic Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What can we help you with?
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                aria-label="Select inquiry topic"
              >
                <option value="">Select a topic</option>
                <option value="adoption">Pet Adoption Questions</option>
                <option value="shelter">Shelter Partnership</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <ContactForm
              petName=""
              shelterEmail="help@petadopt.com"
              onSubmit={handleContactSubmit}
            />
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Need More Help?
              </h3>
              <p className="text-blue-800 mb-4">
                Can't find what you're looking for? Our support team is available Monday through Friday, 9 AM to 6 PM EST.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:help@petadopt.com"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                  aria-label="Email our support team"
                >
                  Email Support
                </a>
                <a
                  href="tel:+1-555-738-5683"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors text-center"
                  aria-label="Call our support team"
                >
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Pet Support</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">24/7 Emergency Line:</span></p>
                <p className="text-blue-600 font-medium">(555) PET-HELP</p>
                <p className="text-sm text-gray-600">For urgent pet health or safety concerns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;