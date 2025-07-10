import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const stats = [
    { number: '10,000+', label: 'Pets Adopted', description: 'Happy pets in loving homes' },
    { number: '500+', label: 'Partner Shelters', description: 'Across the country' },
    { number: '50,000+', label: 'Happy Families', description: 'Connected with their perfect pets' },
    { number: '24/7', label: 'Support Available', description: 'We\'re here when you need us' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/images/animals.jpg',
      description: 'Sarah founded PetAdopt after volunteering at local shelters for over 10 years. Her passion for animal welfare drives our mission every day.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Shelter Relations',
      image: '/images/animals_2.jpg',
      description: 'Mike works directly with shelters to ensure we\'re providing the best platform for showcasing their amazing animals.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Adoption Specialist',
      image: '/images/animals_3.jpg',
      description: 'Emily helps families navigate the adoption process and ensures every match is perfect for both pet and family.'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Compassion First',
      description: 'Every decision we make is guided by our love for animals and commitment to their wellbeing.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community Focused',
      description: 'We believe in building strong relationships between pets, families, and local shelters.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparency',
      description: 'We provide honest, detailed information about every pet to ensure the best matches.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We use technology to make pet adoption easier, faster, and more effective than ever before.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_4.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Mission: Every Pet Deserves Love
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            We're dedicated to connecting loving families with pets in need, creating lasting bonds that change lives forever.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              PetAdopt was born from a simple observation: too many wonderful pets were waiting in shelters while loving families were searching for their perfect companions. The traditional adoption process was often complicated, time-consuming, and didn't showcase these amazing animals in their best light.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In 2020, our founder Sarah Johnson decided to bridge this gap. After years of volunteering at local shelters and seeing countless pets find homes through word-of-mouth and chance encounters, she envisioned a platform that would make pet adoption as easy as finding your next favorite restaurant or booking a vacation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, PetAdopt partners with over 500 shelters across the country, helping thousands of pets find their forever homes every month. We've streamlined the adoption process while maintaining the personal touch that makes each adoption special.
            </p>
            
            <p className="text-lg leading-relaxed">
              But we're more than just a platform – we're a community of pet lovers, shelter advocates, and families who believe that every pet deserves a second chance at happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference, one adoption at a time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md p-6">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind PetAdopt</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Help</h2>
            <p className="text-xl text-gray-600">Supporting pets, shelters, and families</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Pets</h3>
                <p className="text-gray-700 leading-relaxed">
                  We give every pet a beautiful profile that showcases their personality, helping them stand out and find their perfect match faster.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Shelters</h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide free tools and support to help shelters manage their adoptions more efficiently and reach more potential adopters.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Families</h3>
                <p className="text-gray-700 leading-relaxed">
                  We make it easy to find and connect with pets that match your lifestyle, preferences, and living situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're looking to adopt, volunteer, or partner with us, there are many ways to help pets in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pets"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              aria-label="Browse pets available for adoption"
            >
              Browse Pets
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              aria-label="Contact us to get involved"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;