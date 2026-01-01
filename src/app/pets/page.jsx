'use client';

import { useState, useMemo } from 'react';
import PetCard from '../../components/PetCard';
import FilterPanel from '../../components/FilterPanel';
import SearchBar from '../../components/SearchBar';
import PetAgeCalculator from '@/components/PetAgeCalculator';
import PetWeightBMIChecker from '@/components/PetWeightBMIChecker';
import PetCareGuides from '@/components/PetCareGuides'; 
import PetFoodRecipeGenerator from '@/components/PetFoodRecipeGenerator';
import PrintableCharts
 from '@/components/PrintableCharts';
import PetBreedIdentifier from '@/components/PetBreedIdentifier';
import PetNameGenerator from '@/components/PetNameGenerator';
import { pets } from '../../data/pets';

const ToolsSection = ({ tools, activeTool, onToolSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pet Care Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => onToolSelect(tool.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 ${
              activeTool === tool.id
                ? 'bg-blue-50 border-2 border-blue-500 shadow-sm'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
            aria-label={`Open ${tool.name} tool`}
            aria-pressed={activeTool === tool.id}
          >
            <div className={`text-2xl mb-2 ${activeTool === tool.id ? 'text-blue-600' : 'text-gray-600'}`}>
              {tool.icon}
            </div>
            <span className={`text-sm font-medium text-center ${activeTool === tool.id ? 'text-blue-700' : 'text-gray-700'}`}>
              {tool.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [activeTool, setActiveTool] = useState(null);

  const tools = [
    { id: 'age-calculator', name: 'Age Calculator', icon: '📅' },
    { id: 'weight-checker', name: 'Weight/BMI Checker', icon: '⚖️' },
    { id: 'care-guides', name: 'Care Guides', icon: '📘' },
    { id: 'recipe-generator', name: 'Recipe Generator', icon: '🍲' },
    { id: 'printable-charts', name: 'Printable Charts', icon: '📊' },
    { id: 'breed-identifier', name: 'Breed Identifier', icon: '🐶' },
    { id: 'name-generator', name: 'Name Generator', icon: '✨' },
  ];

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
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          pet.name.toLowerCase().includes(searchLower) ||
          pet.breed.toLowerCase().includes(searchLower) ||
          pet.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          pet.description.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      if (filters.species && pet.species !== filters.species) {
        return false;
      }

      if (filters.breed && pet.breed !== filters.breed) {
        return false;
      }

      if (filters.ageRange) {
        const [min, max] = filters.ageRange.split('-').map(n => n === '+' ? Infinity : parseInt(n));
        if (max === undefined) {
          if (pet.age < min) return false;
        } else {
          if (pet.age < min || pet.age > max) return false;
        }
      }

      if (filters.gender && pet.gender !== filters.gender) {
        return false;
      }

      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        if (!pet.location.toLowerCase().includes(locationLower)) {
          return false;
        }
      }

      if (filters.shelter && pet.shelter !== filters.shelter) {
        return false;
      }

      if (filters.tags && filters.tags.length > 0) {
        const hasAllTags = filters.tags.every(tag => 
          pet.tags.some(petTag => petTag.toLowerCase().includes(tag.toLowerCase()))
        );
        if (!hasAllTags) return false;
      }

      return true;
    });

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

  const renderActiveTool = () => {
    switch (activeTool) {
      case 'age-calculator':
        return <PetAgeCalculator />;
      case 'weight-checker':
        return <PetWeightBMIChecker />;
      case 'care-guides':
        return <PetCareGuides />;
      case 'recipe-generator':
        return <PetFoodRecipeGenerator />;
      case 'printable-charts':
        return <PrintableCharts />;
      case 'breed-identifier':
        return <PetBreedIdentifier />;
      case 'name-generator':
        return <PetNameGenerator />;
      default:
        return null;
    }
  };

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
          Our Pet Care Services
          </h1>
          <p className="text-xl text-blue-100 mb-6">
           Discover amazing tools to keep your furry friends happy and healthy!🐾


          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tools Section */}
        <ToolsSection 
          tools={tools} 
          activeTool={activeTool} 
          onToolSelect={setActiveTool} 
        />

        {/* Active Tool Display */}
        {activeTool && (
          <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {tools.find(t => t.id === activeTool)?.name}
              </h3>
              <button
                onClick={() => setActiveTool(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close tool"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderActiveTool()}
          </div>
        )}

        {/* Header */}
       
      </div>
    </div>
  );
};

export default PetsPage;