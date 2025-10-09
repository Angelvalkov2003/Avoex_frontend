import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Main content with creative card layout */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Company description cards in a creative layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column - Main story cards */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  We are a <span className="font-bold text-blue-600">new IT company</span> built by <span className="font-bold text-purple-600">experienced programmers </span>
                  who no longer want to work in large companies where projects involve many other people, because having
                  too many people on one project increases costs, reduces quality, and slows down delivery times.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-tl from-purple-100 via-blue-100 to-purple-200 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotate: -1,
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  That's why we want each person to manage their own project - acting as both <span className="font-bold text-blue-600">project manager</span> and <span className="font-bold text-purple-600">developer</span>,
                  meeting with clients and programming the solution. This makes the entire process much more <span className="font-bold text-blue-600">optimal</span>.
                </p>
              </motion.div>
            </motion.div>

            {/* Right column - Technology and pricing cards */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-bl from-blue-100 via-purple-100 to-blue-200 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  We primarily use <span className="font-bold text-purple-600">JavaScript</span> as our main technology,
                  but we can adapt to use any other technology when needed. We also use AI,
                  specifically <span className="font-bold text-blue-600">Cursor and ChatGPT</span>, which helps us <span className="font-bold text-purple-600">minimize deadlines</span> and improve quality.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-tr from-purple-100 via-blue-100 to-purple-200 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  rotate: -1,
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  Our <span className="font-bold text-blue-600">pricing is competitive</span> because we don't have unnecessary people and our <span className="font-bold text-purple-600">optimized workflow</span>.
                  We aim to build long-term relationships for future projects with every client and demonstrate our
                  individuality and <span className="font-bold text-blue-600">professionalism</span> in everything we do.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Key features in a creative grid layout */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold">Individual Project Management</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold">Modern Technologies</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold">Competitive Pricing</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-semibold">Long-term Relationships</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutUs;
