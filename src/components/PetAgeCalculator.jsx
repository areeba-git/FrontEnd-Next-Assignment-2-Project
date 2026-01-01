'use client';

import { useState } from 'react';

const PetAgeCalculator = () => {
  const [species, setSpecies] = useState('dog');
  const [humanYears, setHumanYears] = useState('');
  const [petYears, setPetYears] = useState(null);

  const calculateAge = () => {
    const years = parseInt(humanYears);
    if (isNaN(years) || years <= 0) return;

    let result;
    if (species === 'dog') {
      if (years <= 2) result = years * 10.5;
      else result = 21 + (years - 2) * 4;
    } else if (species === 'cat') {
      if (years === 1) result = 15;
      else if (years === 2) result = 24;
      else result = 24 + (years - 2) * 4;
    } else if (species === 'rabbit') {
      result = years * 12;
    } else if (species === 'bird') {
      result = years * 5;
    }

    setPetYears(result.toFixed(1));
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">How Pet Age Conversion Works:</h4>
        <p className="text-blue-700 text-sm">
          Different species age at different rates. This calculator uses scientifically-backed formulas 
          to estimate your pet's equivalent human age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet Species
            </label>
            <select
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
              <option value="hamster">Hamster</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet's Age in Human Years
            </label>
            <input
              type="number"
              min="0"
              max="30"
              value={humanYears}
              onChange={(e) => setHumanYears(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter age in years"
            />
          </div>

          <button
            onClick={calculateAge}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Calculate Pet Age
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-lg text-gray-900 mb-4">Calculation Result</h4>
          {petYears ? (
            <div className="text-center py-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">{petYears}</div>
              <div className="text-gray-600">Equivalent human years</div>
              <div className="mt-4 text-sm text-gray-500">
                Your {species} is approximately {petYears} in human years
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Enter your pet's details to see their equivalent human age
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h5 className="font-semibold text-gray-900 mb-2">Quick Reference:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1 dog year ≈ 15 human years</li>
              <li>• 1 cat year ≈ 15 human years (first year)</li>
              <li>• Small dogs age faster after 7 years</li>
              <li>• Indoor pets typically live longer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetAgeCalculator;