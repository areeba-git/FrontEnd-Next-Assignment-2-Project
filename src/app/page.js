import Image from "next/image";
import Link from "next/link";
import PetCard from "../components/PetCard";
import { pets } from "../data/pets";

export default function Home() {
  const featuredPet = pets.find(pet => pet.featured);
  const recentPets = pets.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your Perfect
                <span className="block text-yellow-300">Pet Companion</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Connect with loving pets in need of homes. Every pet deserves a second chance at happiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pets"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors text-center"
                  aria-label="Browse all available pets"
                >
                  Browse Pets
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors text-center"
                  aria-label="Learn more about our mission"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {featuredPet && (
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Featured Pet
                  </div>
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={featuredPet.images[0]}
                      alt={`${featuredPet.name} - Featured pet`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredPet.name}</h3>
                  <p className="text-gray-600 mb-4">{featuredPet.breed} • {featuredPet.age} years old</p>
                  <Link
                    href={`/pets/${featuredPet.id}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                    aria-label={`View details for ${featuredPet.name}`}
                  >
                    Meet {featuredPet.name}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Pet Adoption Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple process makes it easy to find and adopt your new best friend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Browse Pets</h3>
              <p className="text-gray-600">
                Search through our database of adorable pets looking for homes. Use filters to find your perfect match.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Connect</h3>
              <p className="text-gray-600">
                Found a pet you love? Contact the shelter directly through our platform to learn more and schedule a meet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Adopt</h3>
              <p className="text-gray-600">
                Complete the adoption process with the shelter and welcome your new family member home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Pets Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Meet Some of Our Pets
            </h2>
            <p className="text-xl text-blue-900 max-w-3xl mx-auto">
              These loving animals are waiting for their forever homes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPets.map(pet => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/pets"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
              aria-label="View all available pets"
            >
              View All Pets
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Change a Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Every adoption saves a life and makes room for another pet in need. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pets"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              aria-label="Start browsing pets for adoption"
            >
              Start Adopting
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              aria-label="Contact us for more information"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
