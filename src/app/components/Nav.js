"use client";
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Import sun, moon, bars, and times icons

const Navbar = ({setColor , color}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme is light
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    // Apply the theme to the body background
    if (theme === 'dark') {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setColor(!color)
  };
  return (
    <nav className={` ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'} left-5 right-5 fixed lg:top-0 top-1 z-10 bg-opacity-50 text-white shadow-md w-[90%] rounded-full m-auto ${theme === 'dark' ? 'dark' : ''} lg:mt-20 mt-10 sm:mt-8`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white h-[30px] w-[30px] flex gap-3">
              <img src='/logo.png' alt='logo' className='max-h-full max-w-full rounded-full' />
              <p className={` ${theme === 'dark' ? 'text-slate-700' : 'text-gray-300'} font-cursive text-nowrap`}><span className='text-5xl'>G</span>hion tech solution</p>
            </a>
          </div>

          {/* Navbar links for larger screens */}
          <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>

          {/* Right section: Language Selector and Theme Toggle */}
          <div className="flex items-center space-x-4">

            {/* Theme Toggle Button (Sun/Moon) */}
            <button 
              onClick={toggleTheme} 
              className={`hover:text-${theme === 'light' ? 'black' : 'white'} text-${theme === 'light' ? 'white' : 'black'}`}
            >
              {theme === 'light' ? (
                <FaSun className="w-6 h-6 text-yellow-500" /> // Sun icon
              ) : (
                <FaMoon className="w-6 h-6 text-blue-500" /> // Moon icon
              )}
            </button>

            {/* Hamburger Icon for Mobile */}
            <button 
              onClick={toggleMobileMenu} 
              className="sm:hidden text-white hover:text-gray-400"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" /> // Close icon
              ) : (
                <FaBars className="w-6 h-6" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
  <div className="inset-0 w-[80%] bg-black fixed gap-10 flex flex-col justify-center items-center text-white px-2 pt-2 pb-3 space-y-1 z-10 sm:hidden">
    <a href="#home" className="block text-gray-300 hover:text-white" onClick={()=>{setIsMobileMenuOpen(false)}}>Home</a>
    <a href="#about" className="block text-gray-300 hover:text-white" onClick={()=>{setIsMobileMenuOpen(false)}}>About</a>
    <a href="#services" className="block text-gray-300 hover:text-white" onClick={()=>{setIsMobileMenuOpen(false)}}>Services</a>
      <a href="#contact" className="block text-gray-300 hover:text-white" onClick={()=>{setIsMobileMenuOpen(false)}}>Contact</a>
  </div>
)}



    </nav>
  );
};

export default Navbar;
