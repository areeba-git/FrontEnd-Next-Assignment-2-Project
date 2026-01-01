'use client';

import { useState } from 'react';

const PetNameGenerator = () => {
  const [petType, setPetType] = useState('dog');
  const [gender, setGender] = useState('any');
  const [theme, setTheme] = useState('classic');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const nameThemes = {
    classic: ["Max", "Bella", "Charlie", "Lucy", "Cooper", "Daisy", "Rocky", "Molly"],
    unique: ["Zephyr", "Nova", "Atlas", "Luna", "Orion", "Stella", "Phoenix", "Aurora"],
    food: ["Cookie", "Peanut", "Ginger", "Mocha", "Cocoa", "Honey", "Olive", "Berry"],
    nature: ["River", "Willow", "Sky", "Forest", "Ocean", "Storm", "Meadow", "Stone"],
    mythology: ["Zeus", "Athena", "Thor", "Freya", "Apollo", "Artemis", "Odin", "Hera"],
    cute: ["Bubbles", "Pudding", "Snuggles", "Cupcake", "Buttons", "Sprinkles", "Peaches", "Waffles"],
  };

  const generateNames = () => {
    const names = nameThemes[theme] || nameThemes.classic;
    
    // Filter by gender if specified
    let filteredNames = names;
    if (gender !== 'any') {
      // In a real app, you'd have gender-specific name lists
      filteredNames = names.slice(0, 6); // Mock filter
    }
    
    // Shuffle and get 8 names
    const shuffled = [...filteredNames].sort(() => 0.5 - Math.random());
    setGeneratedNames(shuffled.slice(0, 8));
  };

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Type
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="rabbit">Rabbit</option>
                <option value="bird">Bird</option>
                <option value="small-pet">Small Pet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender Preference
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name Theme
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="classic">Classic</option>
                <option value="unique">Unique</option>
                <option value="food">Food Inspired</option>
                <option value="nature">Nature</option>
                <option value="mythology">Mythology</option>
                <option value="cute">Cute & Funny</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateNames}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-6"
          >
            Generate Names
          </button>

          {generatedNames.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Generated Names</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {generatedNames.map((name, index) => (
                  <div key={index} className="relative">
                    <button
                      onClick={() => toggleFavorite(name)}
                      className="absolute top-2 right-2 text-lg"
                      aria-label={favorites.includes(name) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favorites.includes(name) ? '❤️' : '🤍'}
                    </button>
                    <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors">
                      <div className="text-xl font-bold text-gray-900">{name}</div>
                      <div className="text-sm text-gray-600 mt-1">{theme} theme</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {favorites.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="font-bold text-lg text-yellow-800 mb-4">Your Favorites</h4>
              <div className="space-y-2">
                {favorites.map((name, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="font-medium">{name}</span>
                    <button
                      onClick={() => toggleFavorite(name)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove from favorites"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setFavorites([])}
                className="w-full mt-4 text-sm text-yellow-700 hover:text-yellow-800 font-medium"
              >
                Clear All Favorites
              </button>
            </div>
          )}

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-bold text-lg text-blue-800 mb-4">Naming Tips</h4>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Choose 1-2 syllable names for easier recall</li>
              <li>• Avoid names that sound like commands</li>
              <li>• Test how the name feels calling it out loud</li>
              <li>• Consider names that won't be embarrassing in public</li>
              <li>• Let the name match your pet's personality</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h4 className="font-bold text-lg text-purple-800 mb-4">Popular Themes</h4>
            <div className="space-y-3">
              {Object.keys(nameThemes).map((themeName) => (
                <div key={themeName} className="flex items-center justify-between">
                  <span className="capitalize">{themeName}</span>
                  <span className="text-sm text-purple-600">
                    {nameThemes[themeName].length} names
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Save Your Names</h4>
            <p className="text-gray-600 text-sm">Export your favorite names for reference</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Export as PDF
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Share List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetNameGenerator;