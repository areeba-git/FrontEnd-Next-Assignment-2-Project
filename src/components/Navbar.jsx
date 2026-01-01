'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getNavLinkClasses = (path, isButton = false) => {
    const baseClasses = isButton
      ? "px-4 py-2 rounded-md text-sm font-medium transition-colors"
      : "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    
    if (isActive(path)) {
      return isButton
        ? `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`
        : `${baseClasses} text-blue-600 bg-blue-50 font-semibold`;
    }
    
    return isButton
      ? `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`
      : `${baseClasses} text-gray-700 hover:text-blue-600`;
  };

  const getMobileNavLinkClasses = (path, isButton = false) => {
    const baseClasses = isButton
      ? "block px-3 py-2 rounded-md text-base font-medium transition-colors text-center"
      : "block px-3 py-2 rounded-md text-base font-medium transition-colors";
    
    if (isActive(path)) {
      return isButton
        ? `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`
        : `${baseClasses} text-blue-600 bg-blue-50 font-semibold`;
    }
    
    return isButton
      ? `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`
      : `${baseClasses} text-gray-700 hover:text-blue-600`;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-purple-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Pet Adoption Platform Home"
          >
            <span className="text-3xl">🐾</span>
            <span>Pupps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={getNavLinkClasses('/')}
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              href="/pets"
              className={getNavLinkClasses('/pets')}
              aria-label="Browse Pets"
            >
              Services
            </Link>
            
           
           

            <Link
              href="/about"
              className={getNavLinkClasses('/about')}
              aria-label="About Us"
            >
              About
            </Link>
            
            <Link
              href="/contact"
              className={getNavLinkClasses('/contact')}
              aria-label="Contact Us"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className={getNavLinkClasses('/login', true)}
              aria-label="Login"
            >
         Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              tabIndex="0"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={getMobileNavLinkClasses('/')}
                aria-label="Home"
              >
                Home
              </Link>
              <Link
                href="/pets"
                onClick={handleLinkClick}
                className={getMobileNavLinkClasses('/pets')}
                aria-label="Browse Pets"
              >
                Pets
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={getMobileNavLinkClasses('/about')}
                aria-label="About Us"
              >
                About
              </Link>
            
           
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={getMobileNavLinkClasses('/contact')}
                aria-label="Contact Us"
              >
                Contact
              </Link>
              <Link
                href="/login"
                onClick={handleLinkClick}
                className={getMobileNavLinkClasses('/login', true)}
                aria-label="Login"
              >
           Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;