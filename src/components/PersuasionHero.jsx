import React from 'react';
import { CheckCircle, Star, Shield, Globe, Users, TrendingUp } from 'lucide-react';

const PersuasionHero = () => {
  const benefits = [
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
  ];

  const whyUsBenefits = [
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
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Main content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Your Digital Success Starts Here</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Business
                </span>
                <br />
                <span className="text-gray-800">
                  Deserves a
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Professional Website
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Don't let your competitors get ahead. In today's digital world, 
                <strong className="text-gray-800"> having a professional website isn't optional</strong> - 
                it's essential for your business success.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right side - Why Us section */}
          <div className="space-y-8">
            {/* Why Us section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Why Choose Us
              </h3>
              
              <div className="space-y-6">
                {whyUsBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PersuasionHero;
