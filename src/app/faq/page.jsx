import Link from 'next/link';

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I adopt a pet?",
      answer: "To adopt a pet, browse our available pets, fill out an adoption application, and schedule a meet-and-greet. Our team will guide you through the entire process to ensure the best match for both you and your new companion."
    },
    {
      id: 2,
      question: "What is the adoption fee?",
      answer: "Adoption fees vary by pet type and age. Dogs typically range from $150-$400, cats from $100-$250, and other pets vary. All fees include spaying/neutering, vaccinations, microchipping, and health checks."
    },
    {
      id: 3,
      question: "Are the pets vaccinated and spayed/neutered?",
      answer: "Yes, all our pets are up-to-date on vaccinations, spayed or neutered (age permitting), microchipped, and have received a health examination from our veterinary partners."
    },
    {
      id: 4,
      question: "Can I return a pet if it doesn't work out?",
      answer: "We understand that sometimes adoptions don't work out. We have a 30-day return policy and will work with you to find solutions. Our goal is to ensure every pet finds their perfect forever home."
    },
    {
      id: 5,
      question: "Do you have a trial period?",
      answer: "Yes, we offer a 2-week trial period for most adoptions. This allows you and your new pet to adjust to each other and ensures it's a good fit for everyone involved."
    },
    {
      id: 6,
      question: "What should I bring when adopting?",
      answer: "Bring a valid ID, proof of residence, and if you rent, a letter from your landlord allowing pets. If you have other pets, we may require vaccination records and a meet-and-greet."
    },
    {
      id: 7,
      question: "How long does the adoption process take?",
      answer: "The adoption process typically takes 1-3 days. This includes application review, reference checks, and scheduling a meet-and-greet. We want to ensure the best match for both you and the pet."
    },
    {
      id: 8,
      question: "Can I volunteer at your shelter?",
      answer: "Absolutely! We welcome volunteers of all ages and skill levels. Visit our volunteer page to learn about opportunities including dog walking, cat socialization, administrative help, and special events."
    },
    {
      id: 9,
      question: "Do you accept pet surrenders?",
      answer: "Yes, we accept pet surrenders when space allows. There is a surrender fee to help cover care costs. Please contact us to discuss your situation and available options."
    },
    {
      id: 10,
      question: "What if I find a lost pet?",
      answer: "If you find a lost pet, please bring them to our shelter or contact us immediately. We'll scan for microchips, check our lost pet database, and help reunite them with their family."
    },
    {
      id: 11,
      question: "Do you provide training resources?",
      answer: "Yes! We offer post-adoption support including training tips, behavioral guidance, and referrals to local trainers. We want to ensure your adoption is successful long-term."
    },
    {
      id: 12,
      question: "Can I adopt if I live in an apartment?",
      answer: "Yes, many of our pets are suitable for apartment living. We'll help match you with a pet that fits your living situation, lifestyle, and activity level."
    },
    {
      id: 13,
      question: "What are your shelter hours?",
      answer: "We're open Tuesday-Sunday, 10 AM - 6 PM. We're closed on Mondays for deep cleaning and veterinary care. Holiday hours may vary - please check our website or call ahead."
    },
    {
      id: 14,
      question: "Do you have senior pet adoption programs?",
      answer: "Yes! We have special programs for senior pets (7+ years) including reduced adoption fees and ongoing support. Senior pets make wonderful, calm companions and deserve loving homes too."
    },
    {
      id: 15,
      question: "How can I donate to support your mission?",
      answer: "We accept monetary donations, pet supplies, blankets, toys, and food. You can donate online, in-person, or through our Amazon wishlist. Every donation helps us care for more pets in need."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_9.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about pet adoption, our services, and how you can help
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-start">
                <span className="text-blue-600 mr-3 text-2xl">Q:</span>
                {faq.question}
              </h3>
              <div className="ml-8">
                <p className="text-gray-600 leading-relaxed">
                  <span className="text-green-600 font-semibold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our friendly team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:help@Pupps.com"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Email Support
            </a>
            <a
              href="tel:+1-555-PET-LOVE"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/adoption-process"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              Adoption Process
            </h3>
            <p className="text-gray-600 text-sm">
              Learn about our step-by-step adoption process
            </p>
          </Link>

          <Link
            href="/pets"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="text-3xl mb-3">🐾</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              Browse Pets
            </h3>
            <p className="text-gray-600 text-sm">
              Find your perfect companion from our available pets
            </p>
          </Link>

          <Link
            href="/volunteer"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
              Volunteer
            </h3>
            <p className="text-gray-600 text-sm">
              Join our team and help make a difference
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;