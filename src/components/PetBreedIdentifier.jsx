'use client';

import { useState } from 'react';

const PetBreedIdentifier = () => {
  const [petType, setPetType] = useState('dog');
  const [characteristics, setCharacteristics] = useState({
    size: '',
    coat: '',
    ears: '',
    tail: '',
  });
  const [result, setResult] = useState(null);

  const identifyBreed = () => {
    // Mock breed identification logic
    const dogBreeds = [
      { name: "Golden Retriever", confidence: "85%", traits: ["Medium-large", "Long coat", "Floppy ears", "Long tail"] },
      { name: "German Shepherd", confidence: "78%", traits: ["Large", "Medium coat", "Prick ears", "Bushy tail"] },
      { name: "Beagle", confidence: "72%", traits: ["Small-medium", "Short coat", "Floppy ears", "Medium tail"] },
    ];

    const catBreeds = [
      { name: "Siamese", confidence: "82%", traits: ["Medium", "Short coat", "Large ears", "Long tail"] },
      { name: "Maine Coon", confidence: "79%", traits: ["Large", "Long coat", "Tufted ears", "Bushy tail"] },
      { name: "Tabby", confidence: "91%", traits: ["Varies", "Striped coat", "Varies", "Medium tail"] },
    ];

    const results = petType === 'dog' ? dogBreeds : catBreeds;
    setResult(results);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What type of pet?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['dog', 'cat', 'rabbit', 'bird'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPetType(type)}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    petType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-1">
                    {type === 'dog' ? '🐶' : type === 'cat' ? '🐱' : type === 'rabbit' ? '🐰' : '🐦'}
                  </div>
                  <div className="font-medium capitalize">{type}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <select
                value={characteristics.size}
                onChange={(e) => setCharacteristics({...characteristics, size: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coat Type
              </label>
              <select
                value={characteristics.coat}
                onChange={(e) => setCharacteristics({...characteristics, coat: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select coat</option>
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
                <option value="curly">Curly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ear Type
              </label>
              <select
                value={characteristics.ears}
                onChange={(e) => setCharacteristics({...characteristics, ears: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select ears</option>
                <option value="floppy">Floppy</option>
                <option value="prick">Prick/Pointy</option>
                <option value="folded">Folded</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tail Type
              </label>
              <select
                value={characteristics.tail}
                onChange={(e) => setCharacteristics({...characteristics, tail: e.target.value})}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select tail</option>
                <option value="long">Long</option>
                <option value="short">Short</option>
                <option value="curly">Curly</option>
                <option value="bushy">Bushy</option>
              </select>
            </div>
          </div>

          <button
            onClick={identifyBreed}
            disabled={!characteristics.size || !characteristics.coat}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              !characteristics.size || !characteristics.coat
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Identify Breed
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-lg text-gray-900 mb-4">Breed Identification Results</h4>
          
          {result ? (
            <div className="space-y-4">
              {result.map((breed, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-lg text-gray-900">{breed.name}</h5>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {breed.confidence}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Key traits:</span> {breed.traits.join(', ')}
                  </div>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    View Breed Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-4">🔍</div>
              <p>Enter your pet's characteristics to identify possible breeds</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h5 className="font-semibold text-gray-900 mb-2">Identification Tips:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Take clear photos from multiple angles</li>
              <li>• Note distinct markings or colors</li>
              <li>• Consider behavioral characteristics</li>
              <li>• DNA testing is most accurate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetBreedIdentifier;