import React, { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

const WorkProcessTree = memo(() => {
  // Memoized scroll function
  const scrollToConsultationForm = useCallback(() => {
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
      consultationForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Memoize process steps to prevent re-creation
  const processSteps = useMemo(() => [
    {
      id: 1,
      title: "Book Consultation",
      description: "Schedule a free consultation to share your project idea and receive an initial price range.",
      icon: "📅",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Clarification Meeting",
      description: "We discuss all details, features, and design preferences. Once everything is clear, we prepare a final project proposal.",
      icon: "💬",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 3,
      title: "Deposit & Project Start",
      description: "After approval of the proposal, a 40% deposit is made to secure the project. We then begin development.",
      icon: "📝",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      id: 4,
      title: "Development & Demo",
      description: "We build your website using modern technologies. You receive a demo version and can request revisions and adjustments.",
      icon: "💻",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      title: "Final Payment & Launch",
      description: "Once the final version is approved, the remaining 60% is paid. We launch your website and provide hosting & support options.",
      icon: "🚀",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ], []);

  return (
    <motion.div 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
      
      <motion.div 
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-block relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Our Work Process
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
          From initial consultation to final delivery, we follow a structured approach 
          to ensure your project's success
        </p>
      </motion.div>

      {/* Mobile-first vertical layout */}
      <div className="block lg:hidden">
        <motion.div 
          className="space-y-8 pt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              
              <div className="flex items-start gap-4">
                {/* Step number circle with enhanced effects */}
                <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl z-20 relative flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <span className="relative z-10">{step.id}</span>
                </div>
                
                {/* Step card with enhanced effects */}
                <div className="flex-1">
                  <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 relative overflow-hidden`}>
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon with enhanced effects */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-xl shadow-lg flex-shrink-0 group-hover:rotate-12 transition-transform duration-300`}>
                        <div className="absolute inset-0 bg-white/30 rounded-xl animate-pulse"></div>
                        <span className="relative z-10">{step.icon}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop layout */}
      <motion.div 
        className="hidden lg:block relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Enhanced tree trunk/connector line with glow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-blue-300 via-purple-300 to-emerald-300 h-full rounded-full shadow-lg"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200 h-full rounded-full"></div>
        
        {/* Process steps */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 * index,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced step connector line to next step */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-gray-300 to-gray-400 h-12 top-20 z-0 rounded-full shadow-lg"></div>
              )}
              
              {/* Step content */}
              <div className={`relative z-10 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Step card with enhanced effects */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden group-hover:border-opacity-50`}>
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    
                    <div className="flex items-start gap-6 relative z-10">
                      {/* Enhanced icon with multiple effects */}
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative`}>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"></div>
                        <span className="relative z-10 drop-shadow-lg">{step.icon}</span>
                      </div>
                      
                      {/* Content with enhanced typography */}
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 group-hover:from-gray-900 group-hover:to-black transition-all duration-300">{step.title}</h3>
                        <p className="text-gray-600 text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced step number circle */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl z-20 relative group-hover:scale-125 transition-all duration-500 group-hover:shadow-3xl`}>
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                  <span className="relative z-10 drop-shadow-lg">{step.id}</span>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced bottom decoration */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.button 
          onClick={scrollToConsultationForm}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer border-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
          <span className="text-gray-700 font-semibold text-base group-hover:text-gray-800 transition-colors duration-300">Ready to start your project?</span>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
        </motion.button>
      </motion.div>
      </div>
    </motion.div>
  );
});

WorkProcessTree.displayName = 'WorkProcessTree';
export default WorkProcessTree;