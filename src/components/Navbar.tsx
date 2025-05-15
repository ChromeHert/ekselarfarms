import { useState } from 'react';
import Logo from "..//assets/efLogo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white py-1 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Ekselar Farms Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold text-farm-green">Ekselar Farms</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-farm-gray hover:text-farm-green transition-colors">About Us</a>
          <a href="#products" className="text-farm-gray hover:text-farm-green transition-colors">Our Products</a>
          <a href="#contact" className="text-farm-gray hover:text-farm-green transition-colors">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-farm-gray focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-farm-gray hover:text-farm-green transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-farm-gray hover:text-farm-green transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#products" className="text-farm-gray hover:text-farm-green transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Products</a>
            <a href="#contact" className="text-farm-gray hover:text-farm-green transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;