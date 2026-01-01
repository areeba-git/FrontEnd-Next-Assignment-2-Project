'use client';

import { useState } from 'react';

const PrintableCharts = () => {
  const [selectedCategory, setSelectedCategory] = useState('health');

  const charts = {
    health: [
      { id: 1, title: "Vaccination Schedule", description: "Complete vaccination timeline for puppies/kittens", format: "A4", pages: 1 },
      { id: 2, title: "Weight Tracker", description: "Monthly weight tracking chart", format: "A4", pages: 2 },
      { id: 3, title: "Medication Log", description: "Daily medication tracking sheet", format: "Letter", pages: 1 },
    ],
    training: [
      { id: 1, title: "Potty Training Chart", description: "Daily progress tracker for house training", format: "A4", pages: 1 },
      { id: 2, title: "Obedience Training Log", description: "Track command learning progress", format: "Letter", pages: 2 },
    ],
    care: [
      { id: 1, title: "Grooming Schedule", description: "Regular grooming maintenance tracker", format: "A4", pages: 1 },
      { id: 2, title: "Feeding Schedule", description: "Daily feeding times and portions", format: "Letter", pages: 1 },
      { id: 3, title: "Exercise Log", description: "Daily exercise and activity tracker", format: "A4", pages: 1 },
    ],
  };

  const handlePrint = (chart) => {
    // In a real app, this would open print dialog
    alert(`Printing: ${chart.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['health', 'training', 'care'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-4 rounded-lg text-center transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">
              {category === 'health' ? '🏥' : category === 'training' ? '🎓' : '🛁'}
            </div>
            <div className="font-medium capitalize">{category} Charts</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charts[selectedCategory].map((chart) => (
          <div key={chart.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">{chart.title}</h4>
                <p className="text-sm text-gray-600">{chart.description}</p>
              </div>
              <div className="text-2xl">📊</div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>{chart.format} format</span>
              <span>{chart.pages} page{chart.pages !== 1 ? 's' : ''}</span>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handlePrint(chart)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Print Chart
              </button>
              <button className="px-4 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-bold text-lg text-gray-900 mb-4">Printing Instructions:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl mb-2">🖨️</div>
            <h5 className="font-semibold text-gray-900 mb-2">Step 1: Select Paper</h5>
            <p className="text-sm text-gray-600">Use standard A4 or Letter paper for best results</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">⚙️</div>
            <h5 className="font-semibold text-gray-900 mb-2">Step 2: Printer Settings</h5>
            <p className="text-sm text-gray-600">Set to "Fit to Page" and high quality</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">📝</div>
            <h5 className="font-semibold text-gray-900 mb-2">Step 3: Laminate (Optional)</h5>
            <p className="text-sm text-gray-600">Laminate for reusable dry-erase surface</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintableCharts;