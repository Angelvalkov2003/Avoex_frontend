import React, { useState } from 'react'
import { PlusIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCreateForm = () => {
    const createFormElement = document.getElementById('create-form');
    if (createFormElement) {
      createFormElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'ABOUT US', action: () => scrollToSection('about') },
    { name: 'PROCESS', action: () => scrollToSection('work-process') },
    { name: 'PRICING', action: () => scrollToSection('pricing') }
  ];

  return (
    <header className='bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-800 sticky top-0 z-50 shadow-xl border-b border-blue-200/30 backdrop-blur-sm'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className='flex items-center justify-between h-20'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <button 
                      onClick={scrollToTop}
                      className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300'
                    >
                      Avoex
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-10'>
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={item.action}
                            className='text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/50 rounded-lg relative group shadow-sm hover:shadow-md'
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </button>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className='hidden md:flex items-center'>
                    <button 
                        onClick={scrollToCreateForm} 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
                    >
                        Book Consultation
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-white/50 transition-all duration-300'
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-4 pt-4 pb-6 space-y-2 bg-white/80 backdrop-blur-sm rounded-xl mt-4 border border-blue-200/50 shadow-2xl'>
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={item.action}
                                className='text-gray-600 hover:text-gray-800 block px-4 py-3 text-base font-semibold uppercase tracking-wider w-full text-left hover:bg-blue-50 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md'
                            >
                                {item.name}
                            </button>
                        ))}
                        <button 
                            onClick={scrollToCreateForm}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider w-full text-left mt-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Book Consultation
                        </button>
                    </div>
                </div>
            )}
        </div>
    </header>
  )
}

export default Navbar;
