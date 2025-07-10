'use client';

import { useState } from 'react';
import { breeds, shelters, commonTags } from '../data/pets';

const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const handleTagToggle = (tag) => {
    const currentTags = filters.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    onFilterChange('tags', newTags);
  };

  const handleClearAll = () => {
    onClearFilters();
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={togglePanel}
          className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle filters"
        >
          <span>Filters</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block p-4`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={handleClearAll}
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Clear all filters"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          {/* Species Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Species
            </label>
            <select
              value={filters.species || ''}
              onChange={(e) => handleFilterChange('species', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by species"
            >
              <option value="">All Species</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
              <option value="Bird">Birds</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Breed Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Breed
            </label>
            <select
              value={filters.breed || ''}
              onChange={(e) => handleFilterChange('breed', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by breed"
            >
              <option value="">All Breeds</option>
              {filters.species && breeds[filters.species] && breeds[filters.species].map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>

          {/* Age Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age Range
            </label>
            <select
              value={filters.ageRange || ''}
              onChange={(e) => handleFilterChange('ageRange', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by age range"
            >
              <option value="">All Ages</option>
              <option value="0-1">Puppy/Kitten (0-1 years)</option>
              <option value="1-3">Young (1-3 years)</option>
              <option value="3-7">Adult (3-7 years)</option>
              <option value="7+">Senior (7+ years)</option>
            </select>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              value={filters.gender || ''}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by gender"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={filters.location || ''}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              placeholder="Enter city or ZIP code"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by location"
            />
          </div>

          {/* Shelter Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shelter
            </label>
            <select
              value={filters.shelter || ''}
              onChange={(e) => handleFilterChange('shelter', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              aria-label="Filter by shelter"
            >
              <option value="">All Shelters</option>
              {shelters.map(shelter => (
                <option key={shelter} value={shelter}>{shelter}</option>
              ))}
            </select>
          </div>

          {/* Tags Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {commonTags.slice(0, 15).map(tag => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.tags || []).includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    aria-label={`Filter by ${tag}`}
                  />
                  <span className="ml-2 text-sm text-gray-700">{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;