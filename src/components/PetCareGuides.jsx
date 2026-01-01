'use client';

import { useState } from 'react';

const PetCareGuides = () => {
  const [selectedPet, setSelectedPet] = useState('dog');
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = {
    dog: [
      { id: 1, title: "Puppy Care Guide", description: "Complete guide for raising a healthy puppy", pages: 12, size: "2.4 MB" },
      { id: 2, title: "Senior Dog Care", description: "Caring for aging dogs", pages: 8, size: "1.8 MB" },
      { id: 3, title: "Training Basics", description: "Essential obedience training", pages: 10, size: "2.1 MB" },
    ],
    cat: [
      { id: 1, title: "Kitten Care Guide", description: "Complete guide for raising kittens", pages: 10, size: "2.0 MB" },
      { id: 2, title: "Litter Box Training", description: "Proper litter box setup and training", pages: 6, size: "1.5 MB" },
      { id: 3, title: "Indoor Cat Enrichment", description: "Keeping indoor cats happy", pages: 8, size: "1.7 MB" },
    ],
    bird: [
      { id: 1, title: "Bird Nutrition Guide", description: "Proper diet for pet birds", pages: 7, size: "1.6 MB" },
      { id: 2, title: "Cage Setup Guide", description: "Creating the perfect habitat", pages: 5, size: "1.3 MB" },
    ],
  };

  const handleDownload = (guide) => {
    // In a real app, this would trigger an actual download
    alert(`Downloading: ${guide.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 border-b border-gray-200">
        {['dog', 'cat', 'bird', 'rabbit', 'small-pets'].map((pet) => (
          <button
            key={pet}
            onClick={() => setSelectedPet(pet)}
            className={`pb-2 px-1 text-sm font-medium transition-colors ${
              selectedPet === pet
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {pet.charAt(0).toUpperCase() + pet.slice(1).replace('-', ' ')} Guides
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides[selectedPet]?.map((guide) => (
          <div key={guide.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">{guide.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
              </div>
              <div className="text-2xl">📘</div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{guide.pages} pages</span>
              <span>{guide.size}</span>
            </div>

            <button
              onClick={() => handleDownload(guide)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </button>
          </div>
        )) || (
          <div className="col-span-3 text-center py-12 text-gray-500">
            No guides available for this pet type yet.
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Guides are for informational purposes only</li>
          <li>• Always consult with a veterinarian for specific advice</li>
          <li>• Regular check-ups are essential for pet health</li>
          <li>• Emergency contacts should be readily available</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCareGuides;