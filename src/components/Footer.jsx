import Link from 'next/link';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaPinterest, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, 
  FaPaw, FaShieldAlt, FaCreditCard, FaShippingFast 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-green-400 via-blue-400 to-purple-500 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Company Info Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <FaPaw className="text-3xl sm:text-4xl text-white filter drop-shadow-md" />
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Pupp's Pet Care
              </h3>
            </div>
            
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Your trusted partner in pet wellness. Providing exceptional care, 
              products, and services for your furry family members since 2020.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
              <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border border-white/15">
                <FaShieldAlt className="text-white text-sm sm:text-base" /> SSL Secured
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border border-white/15">
                <FaCreditCard className="text-white text-sm sm:text-base" /> Secure Payments
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm border border-white/15">
                <FaShippingFast className="text-white text-sm sm:text-base" /> Free Shipping
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded"></span>
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pets" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  Browse Pets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-all duration-300 hover:pl-1 sm:hover:pl-2 block py-1 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded"></span>
            </h4>
            
            <ul className="space-y-2 sm:space-y-4 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3 text-white/90 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-lg sm:text-xl mt-0.5 flex-shrink-0" />
                <span>123 Pet Street, Animal City, PC 12345</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-base">
                <FaPhone className="text-lg sm:text-xl flex-shrink-0" />
                <span>+1 (555) 123-PETS</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-base">
                <FaEnvelope className="text-lg sm:text-xl flex-shrink-0" />
                <span>support@puppspetcare.com</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-white/90 text-sm sm:text-base">
                <FaEnvelope className="text-lg sm:text-xl flex-shrink-0" />
                <span className="text-sm">emergency@puppspetcare.com</span>
              </li>
            </ul>
            
            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
              <h5 className="font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">Business Hours</h5>
              <p className="text-white/80 text-xs sm:text-sm">Mon-Fri: 9AM - 8PM</p>
              <p className="text-white/80 text-xs sm:text-sm">Sat-Sun: 10AM - 6PM</p>
              <p className="text-white/80 text-xs sm:text-sm">Emergency: 24/7</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative pb-2">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded"></span>
            </h4>
            
            <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4">
              Subscribe for pet care tips and exclusive offers!
            </p>
            
            <form className="mb-4 sm:mb-6">
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                  required
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div>
              <h5 className="font-semibold text-white text-sm sm:text-base mb-2 sm:mb-3">Follow Us</h5>
              <div className="flex gap-2 sm:gap-3">
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaFacebook className="text-sm sm:text-lg" />
                </a>
                <a 
                  href="#" 
                  aria-label="Twitter"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaTwitter className="text-sm sm:text-lg" />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaInstagram className="text-sm sm:text-lg" />
                </a>
                <a 
                  href="#" 
                  aria-label="Pinterest"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <FaPinterest className="text-sm sm:text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Copyright */}
            <div className="text-white/80 text-xs sm:text-sm text-center sm:text-left">
              <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 flex-wrap justify-center sm:justify-start">
                <span>© {currentYear} Pupp's Pet Care. All Rights Reserved.</span>
                <span className="flex items-center gap-1">
                  Made with <FaHeart className="text-red-400 animate-pulse text-sm" /> for pets everywhere.
                </span>
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <Link 
                href="/privacy-policy" 
                className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <span className="text-white/40 hidden sm:inline">|</span>
              <Link 
                href="/terms-of-service" 
                className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <span className="text-white/40 hidden sm:inline">|</span>
              <Link 
                href="/cookie-policy" 
                className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Cookie Policy
              </Link>
              <span className="text-white/40 hidden sm:inline">|</span>
              <Link 
                href="/sitemap" 
                className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                Sitemap
              </Link>
            </div>
            
            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center">
              <span className="text-white/80 text-xs sm:text-sm whitespace-nowrap">Accepted Payments:</span>
              <div className="flex gap-1">
                <span className="text-lg sm:text-xl">💳</span>
                <span className="text-lg sm:text-xl">🛡️</span>
                <span className="text-lg sm:text-xl">💰</span>
                <span className="text-lg sm:text-xl">🏦</span>
              </div>
            </div>
          </div>
          
          {/* Accreditation Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
            <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-white/15 whitespace-nowrap">
              🐾 Certified Pet Care
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-white/15 whitespace-nowrap">
              ⭐ BBB Accredited
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-white/15 whitespace-nowrap">
              🏆 Vet Approved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;