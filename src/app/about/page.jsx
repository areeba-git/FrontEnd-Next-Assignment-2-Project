import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian",
      expertise: "Animal Nutrition & Wellness",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
      description: "With 15 years of veterinary experience, Dr. Sarah specializes in preventive care and nutritional planning for pets of all ages."
    },
    {
      name: "Mike Chen",
      role: "Behavior Specialist",
      expertise: "Canine Training & Rehabilitation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      description: "Certified animal behaviorist with expertise in positive reinforcement training and rehabilitation of rescue animals."
    },
    {
      name: "Emma Rodriguez",
      role: "Pet Nutritionist",
      expertise: "Holistic Diet Planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      description: "Holistic nutrition expert focusing on natural diets and custom meal plans for pets with special dietary needs."
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded with a vision for better pet care", icon: "🎯" },
    { year: "2021", event: "Expanded to full-service pet wellness", icon: "🌱" },
    { year: "2022", event: "Launched virtual consultations", icon: "💡" },
    { year: "2023", event: "Industry Excellence Award", icon: "🏆" },
    { year: "2024", event: "Veterinary school partnerships", icon: "🔬" },
    { year: "2025", event: "Multiple locations & community outreach", icon: "🚀" }
  ];

  const values = [
    { 
      icon: "🎓", 
      title: "Expert-Led", 
      description: "Certified veterinarians and animal specialists" 
    },
    { 
      icon: "🌿", 
      title: "Natural & Safe", 
      description: "Rigorous 7-point quality testing" 
    },
    { 
      icon: "🤝", 
      title: "Personalized", 
      description: "Tailored solutions for every pet" 
    },
    { 
      icon: "💝", 
      title: "Compassionate", 
      description: "5% profits support local rescues" 
    },
    { 
      icon: "🔬", 
      title: "Science-Backed", 
      description: "Research-driven pet care approach" 
    },
    { 
      icon: "🏘️", 
      title: "Community", 
      description: "24/7 support and educational workshops" 
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Pets Helped', description: 'Through our comprehensive care programs' },
    { number: '47', label: 'Care Specialists', description: 'Certified veterinarians and experts' },
    { number: '12', label: 'Rescue Partners', description: 'Across multiple communities' },
    { number: '24/7', label: 'Support Available', description: 'We\'re here when you need us' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1514888286974-6d03bdeacba8?w=1920&q=80)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            More Than a Pet Store – 
            <span className="text-yellow-300"> A Pet Sanctuary</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Where expertise meets compassion, and every pet becomes family
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">From Heartbreak to Hope</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                After losing our beloved Golden Retriever, Luna, to preventable health issues, 
                we realized the pet care industry lacked genuine expertise and transparency. 
                What started as a mission to prevent other families from experiencing similar heartbreak 
                has grown into a comprehensive pet wellness ecosystem.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80"
                alt="Our pet care team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Pillars
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Foundation of Trust</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Six core principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Milestones of Growth</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className={`flex items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl z-10">
                      {milestone.icon}
                    </div>
                    <div className={`ml-20 md:ml-8 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:text-right'}`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-lg text-gray-800">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Meet Our Experts
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Minds Behind the Magic</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified professionals dedicated to pet wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-sm font-medium bg-blue-600 inline-block px-3 py-1 rounded-full mb-2">
                        {member.expertise}
                      </div>
                    </div>
                  </div>
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

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of pet parents who trust us with their furry family members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              aria-label="Book a consultation with our experts"
            >
              Book a Consultation
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              aria-label="Meet our expert team"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;