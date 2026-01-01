'use client';

import { useState } from 'react';

const PetWeightBMIChecker = () => {
  const [species, setSpecies] = useState('dog');
  const [breedSize, setBreedSize] = useState('medium');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const checkWeight = () => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return;

    let status = 'Healthy';
    let message = 'Your pet is at an ideal weight!';
    let bmiCategory = 'Normal';
    let color = 'text-green-600';

    // Simplified BMI logic
    const bmi = w / (breedSize === 'small' ? 5 : breedSize === 'medium' ? 10 : 15);

    if (bmi < 0.8) {
      status = 'Underweight';
      message = 'Your pet may need more nutrition';
      bmiCategory = 'Low';
      color = 'text-yellow-600';
    } else if (bmi > 1.2) {
      status = 'Overweight';
      message = 'Consider dietary adjustments and more exercise';
      bmiCategory = 'High';
      color = 'text-red-600';
    }

    setResult({ status, message, bmiCategory, color, bmi: bmi.toFixed(2) });
  };

  return (
    <div className="space-y-6">
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
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Breed Size
            </label>
            <select
              value={breedSize}
              onChange={(e) => setBreedSize(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="small">Small (under 10kg)</option>
              <option value="medium">Medium (10-25kg)</option>
              <option value="large">Large (over 25kg)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="100"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter weight in kilograms"
            />
          </div>

          <button
            onClick={checkWeight}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Check Weight Status
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-bold text-lg text-gray-900 mb-4">Weight Analysis</h4>
          {result ? (
            <div className="space-y-4">
              <div className={`text-center py-4 rounded-lg ${result.color.replace('text', 'bg')} bg-opacity-10`}>
                <div className={`text-3xl font-bold ${result.color} mb-2`}>{result.status}</div>
                <div className="text-gray-700">{result.message}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-900">{result.bmi}</div>
                  <div className="text-sm text-gray-600">BMI Score</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className={`text-2xl font-bold ${result.color}`}>{result.bmiCategory}</div>
                  <div className="text-sm text-gray-600">Category</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Recommendations:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Monitor weight monthly</li>
                  <li>• Consult with your veterinarian</li>
                  <li>• Adjust portion sizes as needed</li>
                  <li>• Regular exercise is important</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Enter your pet's details to analyze their weight status
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetWeightBMIChecker;