import React from 'react';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Main content with creative card layout */}
        <div className="space-y-12">
          {/* Company description cards in a creative layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column - Main story cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                  We are a <span className="font-bold text-blue-600">new IT company</span> built by <span className="font-bold text-purple-600">experienced programmers </span>
                  who no longer want to work in large companies where projects involve many other people, because having
                  too many people on one project increases costs, reduces quality, and slows down delivery times.
                </p>
              </div>

              <div className="bg-gradient-to-tl from-purple-100 via-blue-100 to-purple-200 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                  That's why we want each person to manage their own project - acting as both <span className="font-bold text-blue-600">project manager</span> and <span className="font-bold text-purple-600">developer</span>,
                  meeting with clients and programming the solution. This makes the entire process much more <span className="font-bold text-blue-600">optimal</span>.
                </p>
              </div>
            </div>

            {/* Right column - Technology and pricing cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-bl from-blue-100 via-purple-100 to-blue-200 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                  We primarily use <span className="font-bold text-purple-600">JavaScript</span> as our main technology,
                  but we can adapt to use any other technology when needed. We also use AI,
                  specifically <span className="font-bold text-blue-600">Cursor and ChatGPT</span>, which helps us <span className="font-bold text-purple-600">minimize deadlines</span> and improve quality.
                </p>
              </div>

              <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-purple-200 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                  Our <span className="font-bold text-blue-600">pricing is competitive</span> because we don't have unnecessary people and our <span className="font-bold text-purple-600">optimized workflow</span>.
                  We aim to build long-term relationships for future projects with every client and demonstrate our
                  individuality and <span className="font-bold text-blue-600">professionalism</span> in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Key features in a creative grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-800 font-semibold">Individual Project Management</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-800 font-semibold">Modern Technologies</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-800 font-semibold">Competitive Pricing</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-800 font-semibold">Long-term Relationships</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
