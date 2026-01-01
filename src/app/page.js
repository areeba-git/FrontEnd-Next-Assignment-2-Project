'use client'
import Image from "next/image";
import Link from "next/link";
import PetCard from "../components/PetCard";
import { pets } from "../data/pets";
import { 
  FaPaw, 
  FaShieldAlt, 
  FaTruck, 
  FaStar, 
  FaPlay,
  FaArrowRight,
  FaHeart,
  FaUserMd,
  FaClock,
  FaMapMarkerAlt
} from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [stats, setStats] = useState({ pets: 0, experts: 0, families: 0 });

  useEffect(() => {
    // Animate stats counting
    const animateStats = () => {
      const interval = setInterval(() => {
        setStats(prev => ({
          pets: prev.pets < 15342 ? prev.pets + 500 : 15342,
          experts: prev.experts < 47 ? prev.experts + 5 : 47,
          families: prev.families < 8921 ? prev.families + 300 : 8921
        }));
      }, 50);
      
      setTimeout(() => clearInterval(interval), 2000);
    };
    animateStats();
  }, []);

  const featuredPet = pets.find(pet => pet.featured);
  const recentPets = pets.slice(0, 6);

  const categories = [
    { icon: "🐕", name: "Dog Essentials", count: "243 products" },
    { icon: "🐱", name: "Cat Luxury", count: "187 products" },
    { icon: "🐦", name: "Small Pets", count: "92 products" },
    { icon: "🌿", name: "Natural Care", count: "156 products" }
  ];

  const services = [
    { 
      icon: <FaUserMd />, 
      title: "Vet Video Consultations", 
      desc: "24/7 access to certified veterinarians",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: <FaTruck />, 
      title: "Emergency Delivery", 
      desc: "Critical supplies in 30 minutes",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Health Guarantee", 
      desc: "100% satisfaction or your money back",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      icon: <FaHeart />, 
      title: "Personalized Plans", 
      desc: "Custom care for your pet's needs",
      color: "from-red-500 to-red-600"
    }
  ];

  const testimonials = [
    { 
      name: "Sarah & Luna", 
      text: "Luna's allergies disappeared with their personalized nutrition plan!",
      pet: "Golden Retriever, 3 years",
      rating: 5
    },
    { 
      name: "Mike & Whiskers", 
      text: "The 24/7 vet chat saved us during midnight emergency!",
      pet: "Persian Cat, 5 years",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* === HERO SECTION === */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center text-white">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 animate-[kenBurns_30s_ease-in-out_infinite_alternate]">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border-2 border-white/30">
                <FaPlay />
              </div>
              <p className="text-white/80">Happy Pets Video Background</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20">
              <FaShieldAlt className="text-green-400" />
              <span className="text-sm sm:text-base">Veterinarian Approved</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Where <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tails Wag</span> 
              <br />& <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Purrs Happen</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Veterinarian-Curated Care for Your Furry Family Members
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.pets.toLocaleString()}+</div>
                <div className="text-white/80">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.experts}+</div>
                <div className="text-white/80">Care Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.families.toLocaleString()}+</div>
                <div className="text-white/80">Trusting Families</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all hover:-translate-y-0.5 hover:shadow-xl text-base sm:text-lg">
                <FaPaw />
                Find Your Pet's Solution
                <FaArrowRight />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all hover:-translate-y-0.5 text-base sm:text-lg">
                <FaUserMd />
                Free Pet Consultation
              </button>
            </div>

            {/* Emergency Banner */}
            <div className="inline-flex items-center gap-2 bg-red-500/90 backdrop-blur-sm px-6 py-3 rounded-full animate-pulse">
              <FaClock className="animate-bounce" />
              <span className="font-medium">24/7 Emergency Vet Chat Available Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* === TRUST & URGENCY BAR === */}
      <section className="bg-white py-6 sm:py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 justify-center p-3 sm:p-4">
              <FaTruck className="text-blue-600 text-lg sm:text-xl" />
              <span className="font-semibold text-gray-800 text-sm sm:text-base">Free Delivery Over $49</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-3 sm:p-4">
              <FaShieldAlt className="text-blue-600 text-lg sm:text-xl" />
              <span className="font-semibold text-gray-800 text-sm sm:text-base">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-3 sm:p-4">
              <FaStar className="text-blue-600 text-lg sm:text-xl" />
              <span className="font-semibold text-gray-800 text-sm sm:text-base">Rated #1 Pet Store 2024</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-3 sm:p-4">
              <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
              <span className="font-semibold text-gray-800 text-sm sm:text-base">Local Stores Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* === PROBLEM-SOLUTION MATRIX === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Understand Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pet Parenting Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Common challenges, expert solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Problem Card 1 */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Picky Eaters</h3>
              <p className="text-gray-600 mb-6">Your pet turns away from food</p>
              <div className="text-3xl text-blue-600 text-center mb-4">→</div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-6 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-2">Personalized Nutrition Plans</h4>
                <p className="text-white/90">Tailored meals based on breed, age, and preferences</p>
              </div>
            </div>

            {/* Problem Card 2 */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Health Concerns</h3>
              <p className="text-gray-600 mb-6">Worried about allergies or weight</p>
              <div className="text-3xl text-blue-600 text-center mb-4">→</div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-6 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-2">Vet-Curated Products</h4>
                <p className="text-white/90">Science-backed solutions for optimal health</p>
              </div>
            </div>

            {/* Problem Card 3 */}
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Behavior Issues</h3>
              <p className="text-gray-600 mb-6">Training challenges and anxiety</p>
              <div className="text-3xl text-blue-600 text-center mb-4">→</div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 sm:p-6 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold mb-2">Expert Training Tools</h4>
                <p className="text-white/90">Positive reinforcement techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE ECOSYSTEM === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Complete <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pet Care Ecosystem</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-${service.color.split('-')[1]}-500`}>
                <div className={`text-4xl mb-6 bg-gradient-to-r ${service.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.desc}</p>
                <button className={`w-full py-3 border-2 border-${service.color.split('-')[1]}-500 text-${service.color.split('-')[1]}-500 rounded-full font-semibold hover:bg-gradient-to-r ${service.color} hover:text-white transition-all`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRODUCT CATEGORIES === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Shop <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Curated Collections</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden ${activeCategory === index ? 'ring-2 ring-blue-500' : ''}`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{category.name}</h3>
                <p className="text-gray-600 text-center">{category.count}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === INTERACTIVE PROFILER CTA === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Find Your Pet's Perfect Match in 60 Seconds
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Take our quick quiz and get personalized product recommendations
              </p>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all text-base sm:text-lg">
                Start Pet Quiz
                <FaArrowRight />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl animate-[float_3s_ease-in-out_infinite]">🐕</div>
              <div className="text-6xl sm:text-7xl lg:text-8xl animate-[float_3s_ease-in-out_infinite] animation-delay-500">🐱</div>
              <div className="text-6xl sm:text-7xl lg:text-8xl animate-[float_3s_ease-in-out_infinite] animation-delay-1000">🐦</div>
              <div className="text-6xl sm:text-7xl lg:text-8xl animate-[float_3s_ease-in-out_infinite] animation-delay-1500">🐰</div>
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pet Parents</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.pet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </div>
  );
}