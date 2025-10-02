import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Section title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Company description */}
            <div className="space-y-6 text-gray-700">
              <p className="text-xl leading-relaxed">
                We are a <span className="font-semibold text-blue-600">new small IT company</span> based in 
                <span className="font-semibold text-purple-600"> Bulgaria</span>, focused on innovative technology solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our mission is to provide high-quality web services and help businesses thrive in the digital era. 
                We work with modern technologies and follow industry best practices.
              </p>

              <p className="text-lg leading-relaxed">
                Although we are a young company, our team has extensive experience in web application development, 
                design, and digital marketing. We believe in a personalized approach to every project.
              </p>
            </div>

            {/* Key features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Modern Technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Personalized Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Quality Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Bulgarian Company</span>
              </div>
            </div>
          </div>

          {/* Right side - Simple Logo Images */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6">
              
              {/* Logo Image */}
              <div className="flex justify-center">
                <img 
                  src="/logo2.png" 
                  alt="AVOEX Logo" 
                  className="w-64 h-64 object-contain border-0"
                  style={{border: 'none', outline: 'none'}}
                />
              </div>

              {/* Photo Image */}
              <div className="flex justify-center">
                <img 
                  src="/photo1.png" 
                  alt="AVOEX Photo" 
                  className="w-64 h-64 object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
