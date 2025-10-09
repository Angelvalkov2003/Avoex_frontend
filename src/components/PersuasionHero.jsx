import React, { memo, useMemo } from 'react';
import { CheckCircle, Star, Shield, Globe, Users, TrendingUp } from 'lucide-react';
import { motion } from "framer-motion";

const PersuasionHero = memo(() => {
  // Memoize static data to prevent re-creation on every render
  const benefits = useMemo(() => [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "24/7 Online Presence",
      description: "Your business never sleeps - customers can find you anytime, anywhere"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Reach More Customers",
      description: "Expand beyond your local area and tap into global markets"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Increase Sales",
      description: "Professional online presence converts visitors into paying customers"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Build Trust",
      description: "Modern website builds credibility and professional image"
    }
  ], []);

  const whyUsBenefits = useMemo(() => [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Free Consultation",
      description: "Our consultation is completely free and fast, and you'll hear the price without any obligation afterwards, so why not?"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Modern Technologies",
      description: "We use the latest and most secure technologies on the market, making our projects faster, more secure, and more efficient."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Individual Approach",
      description: "Each project is handled by an individual programmer, making the project faster and more personal."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Experienced Team",
      description: "We're suitable for all types of projects because our team consists of experienced programmers."
    }
  ], []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Main content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Star className="w-4 h-4 text-blue-600" />
              </motion.div>
              <span className="text-sm font-semibold text-blue-800">Your Digital Success Starts Here</span>
            </motion.div>

            {/* Main headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Your Business
                </motion.span>
                <br />
                <motion.span 
                  className="text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Deserves a
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Professional Website
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <strong className="text-gray-800"> Having a professional website isn't optional</strong> - 
                it's essential for your business success.
              </motion.p>
            </motion.div>

            {/* Benefits grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right side - Why Us section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Why Us section */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Why Choose Us
              </motion.h3>
              
              <div className="space-y-6">
                {whyUsBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm"
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
    </motion.div>
  );
});

PersuasionHero.displayName = 'PersuasionHero';
export default PersuasionHero;
