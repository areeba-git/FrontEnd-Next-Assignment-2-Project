import Link from 'next/link';

export const metadata = {
  title: 'Adoption Process | PetAdopt - Your Guide to Pet Adoption',
  description: 'Learn about our comprehensive pet adoption process. From application to bringing your new furry friend home, we guide you every step of the way.',
  keywords: 'pet adoption process, adopt a pet, pet adoption steps, dog adoption, cat adoption, pet rescue',
};

const AdoptionProcessPage = () => {
  const adoptionSteps = [
    {
      step: 1,
      title: "Browse Available Pets",
      description: "Explore our collection of adorable pets looking for their forever homes. Use our filters to find pets that match your lifestyle and preferences.",
      icon: "🔍",
      details: [
        "Browse by species, age, size, and temperament",
        "Read detailed pet profiles and medical histories",
        "View multiple photos of each pet",
        "Save your favorite pets to compare later"
      ]
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete our comprehensive adoption application to help us understand your living situation and what you're looking for in a pet.",
      icon: "📝",
      details: [
        "Provide personal and contact information",
        "Describe your living situation and experience with pets",
        "List preferences for pet characteristics",
        "Include references from veterinarians or previous pet experiences"
      ]
    },
    {
      step: 3,
      title: "Application Review",
      description: "Our adoption team carefully reviews your application to ensure the best match between you and your potential new pet.",
      icon: "🔍",
      details: [
        "Background check and reference verification",
        "Review of living situation and pet experience",
        "Assessment of compatibility with chosen pet",
        "Response within 2-3 business days"
      ]
    },
    {
      step: 4,
      title: "Meet & Greet",
      description: "Schedule a visit to meet your potential new family member in person and see if it's the perfect match.",
      icon: "🤝",
      details: [
        "Spend quality time with the pet",
        "Bring family members and existing pets if applicable",
        "Ask questions about the pet's behavior and needs",
        "Receive guidance from our adoption counselors"
      ]
    },
    {
      step: 5,
      title: "Home Visit",
      description: "Our team conducts a friendly home visit to ensure your space is safe and suitable for your new pet.",
      icon: "🏠",
      details: [
        "Safety assessment of your home environment",
        "Recommendations for pet-proofing if needed",
        "Discussion of pet care arrangements",
        "Final approval for adoption"
      ]
    },
    {
      step: 6,
      title: "Adoption Finalization",
      description: "Complete the adoption paperwork, pay the adoption fee, and prepare to welcome your new family member home.",
      icon: "✅",
      details: [
        "Sign adoption contract and agreements",
        "Pay adoption fee (includes spay/neuter, vaccinations, microchip)",
        "Receive pet's medical records and care instructions",
        "Schedule follow-up appointments if needed"
      ]
    },
    {
      step: 7,
      title: "Welcome Home",
      description: "Take your new pet home and begin your wonderful journey together with ongoing support from our team.",
      icon: "🏡",
      details: [
        "Transition tips for the first few days",
        "24/7 support hotline for questions",
        "Follow-up calls to check on adjustment",
        "Access to training resources and recommendations"
      ]
    }
  ];

  const requirements = [
    {
      category: "Age Requirement",
      description: "Must be 21 years or older to adopt",
      icon: "👤"
    },
    {
      category: "Housing",
      description: "Stable housing situation with landlord approval if renting",
      icon: "🏠"
    },
    {
      category: "Financial Stability",
      description: "Ability to provide ongoing care including food, medical expenses, and supplies",
      icon: "💰"
    },
    {
      category: "Time Commitment",
      description: "Adequate time for training, exercise, and companionship",
      icon: "⏰"
    },
    {
      category: "Family Agreement",
      description: "All household members must agree to the adoption",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      category: "Pet Experience",
      description: "Previous pet ownership experience preferred but not required",
      icon: "🐾"
    }
  ];

  const adoptionFees = [
    {
      type: "Dogs (Adult)",
      fee: "$150 - $300",
      includes: "Spay/neuter, vaccinations, microchip, health check"
    },
    {
      type: "Dogs (Puppy)",
      fee: "$200 - $400",
      includes: "Initial vaccinations, microchip, spay/neuter voucher"
    },
    {
      type: "Cats (Adult)",
      fee: "$75 - $150",
      includes: "Spay/neuter, vaccinations, microchip, health check"
    },
    {
      type: "Cats (Kitten)",
      fee: "$100 - $200",
      includes: "Initial vaccinations, microchip, spay/neuter voucher"
    },
    {
      type: "Small Animals",
      fee: "$25 - $75",
      includes: "Health check, basic care supplies"
    },
    {
      type: "Senior Pets (7+ years)",
      fee: "$50 - $100",
      includes: "All standard services, senior care guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_5.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Adoption Process
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your journey to finding the perfect companion starts here. We've made our adoption process simple, thorough, and designed to ensure the best match for both you and your new pet.
            </p>
            <Link
              href="/pets"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Browsing Pets
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Adoption Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7 Simple Steps to Adoption
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive process ensures that every pet finds the right home and every family finds the perfect companion.
            </p>
          </div>

          <div className="space-y-8">
            {adoptionSteps.map((step, index) => (
              <div key={step.step} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                          Step {step.step}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adoption Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To ensure the best outcomes for our pets, we have established these basic requirements for all potential adopters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{requirement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {requirement.category}
                </h3>
                <p className="text-gray-600">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Fees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Adoption Fees
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our adoption fees help cover the cost of medical care, spaying/neutering, vaccinations, and other essential services. Every penny goes toward caring for the animals in our program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptionFees.map((fee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{fee.type}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">{fee.fee}</div>
                <p className="text-gray-600 text-sm">{fee.includes}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              💡 Good to Know
            </h3>
            <ul className="text-blue-800 space-y-1">
              <li>• Adoption fees may vary based on breed, age, and medical needs</li>
              <li>• Senior citizens (65+) receive a 25% discount on adoption fees</li>
              <li>• Military personnel receive a 15% discount with valid ID</li>
              <li>• Special promotions may be available during certain times of the year</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does the adoption process take?
              </h3>
              <p className="text-gray-600">
                The entire process typically takes 1-2 weeks from application submission to taking your pet home. This timeline allows for proper screening and ensures the best match for both you and your new pet.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I return a pet if it doesn't work out?
              </h3>
              <p className="text-gray-600">
                Yes, we have a 30-day return policy. If for any reason the adoption doesn't work out, you can return the pet to us. We want to ensure every pet finds their perfect forever home.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer post-adoption support?
              </h3>
              <p className="text-gray-600">
                Absolutely! We provide ongoing support including training resources, behavioral guidance, and a 24/7 helpline for any questions or concerns during your pet's transition period.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I rent my home?
              </h3>
              <p className="text-gray-600">
                Renters are welcome to adopt! We just need written permission from your landlord and verification that pets are allowed in your rental property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adoption Journey?
          </h2>
          <p className="text-xl mb-8">
            Browse our available pets and find your perfect companion today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pets"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Available Pets
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionProcessPage;