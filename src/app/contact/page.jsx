'use client';

import { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaVideo,
  FaUserMd,
  FaShieldAlt,
  FaArrowRight,
  FaWhatsapp,
  FaCalendarAlt,
  FaStethoscope,
  FaDog,
  FaCat,
  FaHeart
} from 'react-icons/fa';

const ContactPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  const handleEmergencyClick = () => {
    setIsEmergency(true);
    document.getElementById('emergency-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-red-500" />,
      title: "24/7 Emergency Line",
      description: "Life-threatening situations",
      contact: "(555) PET-HELP",
      response: "Instant",
      color: "red",
      type: "emergency"
    },
    {
      icon: <FaWhatsapp className="text-green-500" />,
      title: "Urgent Vet Chat",
      description: "Quick health questions",
      contact: "Chat Now",
      response: "2-5 minutes",
      color: "green",
      type: "chat"
    },
    {
      icon: <FaVideo className="text-blue-500" />,
      title: "Video Consultation",
      description: "Virtual vet appointments",
      contact: "Schedule Call",
      response: "Within 1 hour",
      color: "blue",
      type: "video"
    },
    {
      icon: <FaEnvelope className="text-purple-500" />,
      title: "Email Support",
      description: "General inquiries",
      contact: "info@pupps.com",
      response: "4-6 hours",
      color: "purple",
      type: "email"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Emergency Veterinarian",
      status: "Available",
      statusColor: "bg-green-500",
      specialty: "Critical Care",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&q=80"
    },
    {
      name: "Dr. Mike Chen",
      role: "Behavior Specialist",
      status: "In Consultation",
      statusColor: "bg-yellow-500",
      specialty: "Training & Anxiety",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
    },
    {
      name: "Emma Rodriguez",
      role: "Nutrition Expert",
      status: "Available",
      statusColor: "bg-green-500",
      specialty: "Diet Planning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    }
  ];

  const faqItems = [
    {
      question: 'What qualifies as a pet emergency?',
      answer: 'Difficulty breathing, uncontrolled bleeding, seizures lasting over 2 minutes, collapse, sudden paralysis, or any life-threatening situation requires immediate emergency care. When in doubt, call our emergency line.'
    },
    {
      question: 'How quickly can I get a virtual consultation?',
      answer: 'Urgent video consultations are available within 1 hour. For non-emergency matters, you can schedule same-day or next-day appointments through our booking system.'
    },
    {
      question: 'Do you provide emergency transportation?',
      answer: 'We coordinate with local pet ambulance services and can arrange emergency transport to our nearest partner clinic. Call our emergency line for immediate assistance with transport needs.'
    },
    {
      question: 'What information should I have ready for an emergency call?',
      answer: 'Have your pets age, weight, breed, current medications, vaccination history, and a brief description of symptoms ready. Also note any recent changes in behavior or appetite.'
    },
    {
      question: 'Can I get prescription refills through virtual care?',
      answer: 'Yes, our veterinarians can evaluate your pets condition and provide prescription refills during virtual consultations, ensuring continuity of care without the stress of clinic visits.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="animate-pulse">
              <FaStethoscope className="text-xl" />
            </div>
            <span className="font-semibold text-lg">24/7 Emergency Vet Line:</span>
            <a href="tel:5557387435" className="text-white hover:text-yellow-200 text-lg font-bold">
              (555) PET-HELP
            </a>
          </div>
          <button 
            onClick={handleEmergencyClick}
            className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-yellow-100 transition-all duration-300 flex items-center gap-2"
          >
            <FaStethoscope />
            Emergency Help
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/animals_8.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaShieldAlt />
            Your Pet's Safety is Our Priority
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            When Every 
            <span className="text-yellow-300"> Second </span>
            Counts for Your Pet
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Immediate expert care for emergencies, compassionate guidance for concerns, 
            and lifelong support for your furry family member's wellbeing.
          </p>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
            <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FaStethoscope className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Emergency Care</div>
                  <div className="text-xs opacity-90">24/7 Available</div>
                </div>
              </div>
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Urgent Chat</div>
                  <div className="text-xs opacity-90">Live Now</div>
                </div>
              </div>
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Nearest Clinic</div>
                  <div className="text-xs opacity-90">Find Location</div>
                </div>
              </div>
            </button>

            <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FaCalendarAlt className="text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Symptom Check</div>
                  <div className="text-xs opacity-90">Quick Assessment</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-blue-600">Contact Method</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our expert team based on your needs and urgency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${
                    method.color === 'red' ? 'bg-red-100' :
                    method.color === 'green' ? 'bg-green-100' :
                    method.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{method.title}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{method.contact}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      method.color === 'red' ? 'bg-red-100 text-red-800' :
                      method.color === 'green' ? 'bg-green-100 text-green-800' :
                      method.color === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {method.response}
                    </span>
                  </div>
                  
                  <button className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 ${
                    method.color === 'red' ? 'bg-red-500 hover:bg-red-600 text-white' :
                    method.color === 'green' ? 'bg-green-500 hover:bg-green-600 text-white' :
                    method.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}>
                    Connect
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Availability */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Live <span className="text-blue-600">Expert Availability</span>
              </h2>
              <p className="text-xl text-gray-600">Real-time status of our care team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 w-4 h-4 ${member.statusColor} rounded-full border-2 border-white`}></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={`w-2 h-2 ${member.statusColor} rounded-full`}></div>
                        <span className="text-xs text-gray-500">{member.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Specialty: {member.specialty}</div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {/* Topic Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What can we help you with?
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  aria-label="Select inquiry topic"
                >
                  <option value="">Select a topic</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="consultation">Virtual Consultation</option>
                  <option value="prescription">Prescription Refill</option>
                  <option value="nutrition">Nutrition Advice</option>
                  <option value="behavior">Behavior Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-md">
                <ContactForm
                  petName=""
                  shelterEmail="info@pupps.com"
                  onSubmit={handleContactSubmit}
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 mb-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Help */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Need More Help?
                </h3>
                <p className="text-blue-800 mb-4">
                  Can't find what you're looking for? Our support team is available Monday through Friday, 9 AM to 6 PM EST.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:info@pupps.com"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                    aria-label="Email our support team"
                  >
                    Email Support
                  </a>
                  <a
                    href="tel:+1-555-738-5683"
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors text-center"
                    aria-label="Call our support team"
                  >
                    Call Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="emergency-section" className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStethoscope className="text-2xl text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Emergency Care Protocol</h2>
              <p className="text-gray-600">Immediate assistance for critical situations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-900">🚨 Critical Symptoms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Difficulty breathing or choking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Unconsciousness or collapse
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Severe bleeding or trauma
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Seizures that won't stop
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-900">🆘 Immediate Actions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Call (555) PET-HELP immediately
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Keep your pet calm and still
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Have medical history ready
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Prepare for transport if needed
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="tel:5557387435" 
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaPhone className="text-xl" />
                Call Emergency Line: (555) PET-HELP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Support</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Virtual Consultations</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Monday - Sunday:</span> 7:00 AM - 11:00 PM EST</p>
                  <p><span className="font-medium">Emergency Virtual:</span> 24/7 Available</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Care</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">24/7 Emergency Line:</span></p>
                  <p className="text-red-600 font-medium text-lg">(555) PET-HELP</p>
                  <p className="text-sm text-gray-600">For urgent pet health or safety concerns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;