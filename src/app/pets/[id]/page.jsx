'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaPaw } from 'react-icons/fa';
import ContactForm from '../../../components/ContactForm';
import { pets } from '../../../data/pets';

const PetDetailsPage = ({ params }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const pet = pets.find(p => p.id === parseInt(unwrappedParams.id));

  if (!pet) {
    notFound();
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? pet.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === pet.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAdoptClick = () => {
    setShowContactForm(true);
    // Scroll to contact form
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to your backend
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
          <Link 
            href="/" 
            className="hover:text-blue-600 transition-colors"
            aria-label="Go to home page"
          >
            Home
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link 
            href="/pets" 
            className="hover:text-blue-600 transition-colors"
            aria-label="Go to pets listing"
          >
            Pets
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">{pet.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Pet Images */}
          <div>
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-4">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={pet.images[currentImageIndex]}
                  alt={`${pet.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {pet.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {/* Image Thumbnails */}
            {pet.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {pet.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${pet.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pet Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{pet.name}</h1>
                <p className="text-xl text-gray-600">{pet.breed} • {pet.gender}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                pet.species === 'Dog' ? 'bg-blue-100 text-blue-800' :
                pet.species === 'Cat' ? 'bg-purple-100 text-purple-800' :
                'bg-green-100 text-green-800'
              }`}>
                {pet.species}
              </span>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Age</div>
                <div className="text-lg font-semibold text-gray-900">
                  {pet.age} {pet.age === 1 ? 'year' : 'years'} old
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Location</div>
                <div className="text-lg font-semibold text-gray-900">{pet.location}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Qualities</h3>
              <div className="flex flex-wrap gap-2">
                {pet.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Adopt Button */}
            <button
              onClick={handleAdoptClick}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mb-6"
              aria-label={`Start adoption process for ${pet.name}`}
            >
              🐾 Adopt {pet.name}
            </button>

            {/* Shelter Info */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shelter Information</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Shelter:</span> {pet.shelter}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> 
                  <a 
                    href={`mailto:${pet.contactEmail}`}
                    className="text-blue-600 hover:text-blue-700 ml-1 transition-colors"
                    aria-label={`Email ${pet.shelter}`}
                  >
                    {pet.contactEmail}
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> 
                  <a 
                    href={`tel:${pet.contactPhone}`}
                    className="text-blue-600 hover:text-blue-700 ml-1 transition-colors"
                    aria-label={`Call ${pet.shelter}`}
                  >
                    {pet.contactPhone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {pet.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{pet.description}</p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Information</h3>
            <p className="text-gray-700 leading-relaxed">{pet.healthNotes}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Behavior & Training</h2>
            <p className="text-gray-700 leading-relaxed">{pet.behaviorNotes}</p>
          </div>
        </div>

        {/* Contact Form */}
        {showContactForm && (
          <div id="contact-form" className="max-w-2xl mx-auto">
            <ContactForm
              petName={pet.name}
              shelterEmail={pet.contactEmail}
              onSubmit={handleContactSubmit}
            />
          </div>
        )}

        {/* Back to Pets Button */}
        <div className="text-center mt-12">
          <Link
            href="/pets"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            aria-label="Go back to pets listing"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Pets
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PetDetailsPage;