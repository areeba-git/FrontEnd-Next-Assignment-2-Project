import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-blue-300 transition-colors mb-4"
              aria-label="Pet Adoption Platform Home"
            >
              <span className="text-3xl">🐾</span>
              <span>PetAdopt</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting loving families with pets in need of homes. Every pet deserves a second chance at happiness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label="Follow us on Facebook"
                tabIndex="0"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label="Follow us on Twitter"
                tabIndex="0"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label="Follow us on Instagram"
                tabIndex="0"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-3.323 9.781c-2.448 0-4.474-2.026-4.474-4.474s2.026-4.474 4.474-4.474 4.474 2.026 4.474 4.474-2.026 4.474-4.474 4.474z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/pets" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Browse all pets"
                >
                  Browse Pets
                </Link>
              </li>
              <li>
                <Link 
                  href="/pets?species=Dog" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Browse dogs"
                >
                  Dogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/pets?species=Cat" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Browse cats"
                >
                  Cats
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="About us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Contact us"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:help@petadopt.com" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Email support"
                >
                  help@petadopt.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1-555-PET-LOVE" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Call support"
                >
                  (555) PET-LOVE
                </a>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Frequently asked questions"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/adoption-process" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Adoption process"
                >
                  Adoption Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/volunteer" 
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                  aria-label="Volunteer opportunities"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <footer className="text-center text-gray-300 py-4 text-sm">
         © {new Date().getFullYear()} PetAdopt. All rights reserved. Made with ❤️ for pets in need. Develper <a href="http://pixelandcode.pro">Aziz Khan</a> Email: sunrise300@gmail.com
        </footer>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-blue-300 text-sm transition-colors"
              aria-label="Privacy policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-300 hover:text-blue-300 text-sm transition-colors"
              aria-label="Terms of service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;