import React from 'react';
import { Facebook, Phone, Linkedin, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Avoex
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                We are a new small IT company based in Bulgaria, focused on innovative technology solutions 
                and helping businesses thrive in the digital era.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Bulgaria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Every day: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>avoex.contact@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#work-process" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Our Process
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#create-form" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
            
            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579585838703"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Facebook</p>
                  <p className="text-sm text-gray-400">Follow us</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/109167112/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-sm text-gray-400">Connect with us</p>
                </div>
              </a>

              <a
                href="tel:+359877836667"
                className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm text-gray-400">+359 87 783 6667</p>
                </div>
              </a>

              <a
                href="mailto:avoex.contact@gmail.com"
                className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-gray-400">avoex.contact@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Avoex. All rights reserved. Made with ❤️ in Bulgaria.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
