import Image from 'next/image';
import Link from 'next/link';

const PetCard = ({ pet }) => {
  const { id, name, species, breed, age, gender, location, images, tags, featured } = pet;

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      {featured && (
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 text-center">
          Featured Pet
        </div>
      )}
      
      {/* Pet Image */}
      <div className="relative h-48 w-full">
        <Image
          src={images[0]}
          alt={`${name} - ${breed}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            species === 'Dog' ? 'bg-blue-100 text-blue-800' :
            species === 'Cat' ? 'bg-purple-100 text-purple-800' :
            'bg-green-100 text-green-800'
          }`}>
            {species}
          </span>
        </div>
      </div>

      {/* Pet Information */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{age} {age === 1 ? 'year' : 'years'}</span>
        </div>
        
        <p className="text-gray-600 mb-2">{breed} • {gender}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg 
            className="h-4 w-4 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link
          href={`/pets/${id}`}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center block font-medium"
          aria-label={`View details for ${name}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;