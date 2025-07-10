import Link from 'next/link';

export const metadata = {
  title: 'Volunteer Opportunities | PetAdopt - Make a Difference in Pet Lives',
  description: 'Join our volunteer team and help make a difference in the lives of pets in need. Discover various volunteer opportunities that fit your schedule and interests.',
  keywords: 'pet volunteer, animal shelter volunteer, dog walking volunteer, cat care volunteer, pet rescue volunteer',
};

const VolunteerPage = () => {
  const volunteerOpportunities = [
    {
      title: "Pet Care Assistant",
      description: "Help with daily care activities including feeding, grooming, and providing companionship to our animals.",
      timeCommitment: "4-6 hours per week",
      requirements: ["Love for animals", "Reliable schedule", "Physical ability to handle pets"],
      icon: "🐾",
      tasks: [
        "Feed and water animals according to schedules",
        "Clean kennels and living spaces",
        "Provide exercise and playtime",
        "Basic grooming and health monitoring"
      ]
    },
    {
      title: "Dog Walker",
      description: "Take our dogs on walks and provide them with much-needed exercise and outdoor time.",
      timeCommitment: "2-4 hours per week",
      requirements: ["Comfortable handling dogs of all sizes", "Good physical fitness", "Weather-resistant attitude"],
      icon: "🚶‍♂️",
      tasks: [
        "Walk dogs individually or in small groups",
        "Provide basic training during walks",
        "Monitor dog behavior and health",
        "Maintain walking equipment"
      ]
    },
    {
      title: "Cat Socializer",
      description: "Spend quality time with cats to help them become more comfortable with human interaction.",
      timeCommitment: "3-5 hours per week",
      requirements: ["Patience with shy or fearful cats", "Understanding of cat behavior", "Gentle approach"],
      icon: "🐱",
      tasks: [
        "Socialize cats through play and interaction",
        "Help with feeding and litter maintenance",
        "Assist with cat enrichment activities",
        "Monitor cat health and behavior"
      ]
    },
    {
      title: "Adoption Counselor",
      description: "Help potential adopters find their perfect pet match and guide them through the adoption process.",
      timeCommitment: "6-8 hours per week",
      requirements: ["Excellent communication skills", "Knowledge of animal behavior", "Customer service experience"],
      icon: "🤝",
      tasks: [
        "Meet with potential adopters",
        "Match families with suitable pets",
        "Conduct adoption interviews",
        "Provide post-adoption support"
      ]
    },
    {
      title: "Transport Volunteer",
      description: "Help transport animals to veterinary appointments, adoption events, and between facilities.",
      timeCommitment: "4-6 hours per week",
      requirements: ["Valid driver's license", "Reliable vehicle", "Comfortable transporting animals"],
      icon: "🚗",
      tasks: [
        "Transport animals to vet appointments",
        "Drive pets to adoption events",
        "Pick up new rescues",
        "Emergency transport when needed"
      ]
    },
    {
      title: "Event Coordinator",
      description: "Help organize and run adoption events, fundraisers, and community outreach programs.",
      timeCommitment: "5-10 hours per week",
      requirements: ["Event planning experience", "Strong organizational skills", "Leadership abilities"],
      icon: "📅",
      tasks: [
        "Plan and coordinate adoption events",
        "Organize fundraising activities",
        "Manage volunteer schedules for events",
        "Handle event logistics and setup"
      ]
    },
    {
      title: "Foster Care Provider",
      description: "Provide temporary homes for pets who need extra care, are too young for adoption, or are recovering from medical procedures.",
      timeCommitment: "24/7 care for 2-8 weeks",
      requirements: ["Dedicated home environment", "Experience with pet care", "Emotional resilience"],
      icon: "🏠",
      tasks: [
        "Provide temporary housing for pets",
        "Administer medications if needed",
        "Socialize and train foster pets",
        "Prepare pets for permanent adoption"
      ]
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks, data entry, phone calls, and other administrative duties.",
      timeCommitment: "3-6 hours per week",
      requirements: ["Computer skills", "Attention to detail", "Professional communication"],
      icon: "💼",
      tasks: [
        "Data entry and record keeping",
        "Answer phones and emails",
        "Process adoption applications",
        "Maintain filing systems"
      ]
    }
  ];

  const benefits = [
    {
      title: "Make a Real Difference",
      description: "Directly impact the lives of animals in need and help them find loving homes.",
      icon: "❤️"
    },
    {
      title: "Gain Valuable Experience",
      description: "Develop skills in animal care, customer service, and nonprofit operations.",
      icon: "🎓"
    },
    {
      title: "Meet Like-Minded People",
      description: "Connect with other animal lovers and build lasting friendships.",
      icon: "👥"
    },
    {
      title: "Flexible Scheduling",
      description: "Choose volunteer opportunities that fit your availability and lifestyle.",
      icon: "⏰"
    },
    {
      title: "Training Provided",
      description: "Receive comprehensive training and ongoing support for all volunteer roles.",
      icon: "📚"
    },
    {
      title: "Recognition Programs",
      description: "Be recognized for your contributions through awards and appreciation events.",
      icon: "🏆"
    }
  ];

  const requirements = [
    "Must be 16 years or older (some positions require 18+)",
    "Complete volunteer application and background check",
    "Attend mandatory orientation session",
    "Commit to minimum time requirements for chosen role",
    "Follow all safety protocols and procedures",
    "Maintain confidentiality of sensitive information"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Dog Walker Volunteer",
      quote: "Volunteering here has been incredibly rewarding. Seeing the dogs' excitement when I arrive for walks makes my whole week!",
      duration: "2 years"
    },
    {
      name: "Mike Chen",
      role: "Foster Care Provider",
      quote: "Fostering has taught me so much about animal behavior and care. It's amazing to see shy pets transform into confident, loving companions.",
      duration: "3 years"
    },
    {
      name: "Emily Rodriguez",
      role: "Adoption Counselor",
      quote: "There's nothing quite like the joy of matching a family with their perfect pet. Every successful adoption feels like a victory!",
      duration: "1.5 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_6.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our passionate team of volunteers and make a meaningful difference in the lives of pets in need. Every hour you give helps save lives and create happy endings.
            </p>
            <Link
              href="#opportunities"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Opportunities
              <span className="ml-2">↓</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Volunteer Impact
            </h2>
            <p className="text-lg text-gray-600">
              See the incredible difference our volunteers make every year
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">250+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Pets Helped Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15,000+</div>
              <div className="text-gray-600">Volunteer Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Adoption Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="opportunities" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect volunteer role that matches your interests, skills, and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{opportunity.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700 inline-block">
                        {opportunity.timeCommitment}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Tasks:</h4>
                    <ul className="space-y-2">
                      {opportunity.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Volunteering with PetAdopt offers numerous benefits beyond the satisfaction of helping animals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              General Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Basic requirements for all volunteer positions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our amazing volunteers about their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl text-center mb-4">💬</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">Volunteering for {testimonial.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to begin your volunteer journey
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Application</h3>
                <p className="text-gray-600">Complete our online volunteer application form with your personal information and interests.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Background Check</h3>
                <p className="text-gray-600">Complete a background check process to ensure the safety of our animals and volunteers.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Attend Orientation</h3>
                <p className="text-gray-600">Join our comprehensive orientation session to learn about our mission, policies, and procedures.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Role-Specific Training</h3>
                <p className="text-gray-600">Receive specialized training for your chosen volunteer role with hands-on practice and mentorship.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Volunteering</h3>
                <p className="text-gray-600">Begin your volunteer work with ongoing support from our staff and experienced volunteers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join our volunteer family and help us save more lives. Your time and compassion can change everything for a pet in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply to Volunteer
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;