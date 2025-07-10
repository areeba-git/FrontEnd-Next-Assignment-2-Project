'use client';

import { useState, useMemo } from 'react';
import PetCard from '../../components/PetCard';
import FilterPanel from '../../components/FilterPanel';
import SearchBar from '../../components/SearchBar';
import { pets } from '../../data/pets';

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'age', 'species'

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const filteredAndSortedPets = useMemo(() => {
    let filtered = pets.filter(pet => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          pet.name.toLowerCase().includes(searchLower) ||
          pet.breed.toLowerCase().includes(searchLower) ||
          pet.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          pet.description.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      // Species filter
      if (filters.species && pet.species !== filters.species) {
        return false;
      }

      // Breed filter
      if (filters.breed && pet.breed !== filters.breed) {
        return false;
      }

      // Age range filter
      if (filters.ageRange) {
        const [min, max] = filters.ageRange.split('-').map(n => n === '+' ? Infinity : parseInt(n));
        if (max === undefined) {
          if (pet.age < min) return false;
        } else {
          if (pet.age < min || pet.age > max) return false;
        }
      }

      // Gender filter
      if (filters.gender && pet.gender !== filters.gender) {
        return false;
      }

      // Location filter
      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        if (!pet.location.toLowerCase().includes(locationLower)) {
          return false;
        }
      }

      // Shelter filter
      if (filters.shelter && pet.shelter !== filters.shelter) {
        return false;
      }

      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        const hasAllTags = filters.tags.every(tag => 
          pet.tags.some(petTag => petTag.toLowerCase().includes(tag.toLowerCase()))
        );
        if (!hasAllTags) return false;
      }

      return true;
    });

    // Sort pets
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'age':
          return a.age - b.age;
        case 'species':
          return a.species.localeCompare(b.species);
        default:
          return 0;
      }
    });

    return filtered;
  }, [pets, searchTerm, filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_7.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Find Your Perfect Pet
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Browse through our collection of loving pets waiting for their forever homes
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <SearchBar onSearch={handleSearch} />
            
            <div className="flex items-center gap-4 text-black">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Sort pets by"
                >
                  <option value="name">Name</option>
                  <option value="age">Age</option>
                  <option value="species">Species</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="Grid view"
                  aria-pressed={viewMode === 'grid'}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredAndSortedPets.length} pet{filteredAndSortedPets.length !== 1 ? 's' : ''} found
              </p>
              
              {(searchTerm || Object.keys(filters).length > 0) && (
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  aria-label="Clear all filters and search"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Pet Grid/List */}
            {filteredAndSortedPets.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredAndSortedPets.map(pet => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pets found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find more pets.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  aria-label="Clear filters to see all pets"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;