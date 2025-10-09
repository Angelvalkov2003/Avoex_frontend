import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import useTimezone from '../hooks/useTimezone';

const Pricing = () => {
  const { region, isLoading } = useTimezone();

  // Функция за определяне на цените според региона
  const getPricingForRegion = () => {
    if (region === 'america') {
      return {
        basic: { price: '600', currency: '$' },
        booking: { price: '1000', currency: '$' },
        maintenance: {
          basic: { price: 15, currency: '$' },
          booking: { price: 30, currency: '$' }
        }
      };
    }
    // Европа и останалите региони
    return {
      basic: { price: '500', currency: '€' },
      booking: { price: '900', currency: '€' },
      maintenance: {
        basic: { price: 12, currency: '€' },
        booking: { price: 24, currency: '€' }
      }
    };
  };

  const regionalPricing = getPricingForRegion();

  const pricingPlans = [
    {
      id: 'basic-website',
      name: 'Static Website',
      price: regionalPricing.basic.price,
      currency: regionalPricing.basic.currency,
      description: 'Ideal for small businesses that want to showcase their brand, services, or contact info beautifully — without complex features.',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      features: [
        'Consultation and design discussion',
        'Modern, mobile-optimized design',
        'SEO optimization',
        'Contact form and social media integration',
        'Up to 2 small revisions included during development'
      ],
      maintenance: {
        price: regionalPricing.maintenance.basic.price,
        currency: regionalPricing.maintenance.basic.currency,
        period: 'month',
        features: [
          'Bug fixes and problem resolution',
          'Up to 2 hours of changes per month',
          'Updates and basic security',
          'Quick response to questions'
        ]
      },
      popular: false
    },
    {
      id: 'booking-website',
      name: 'Booking Website',
      price: regionalPricing.booking.price,
      currency: regionalPricing.booking.currency,
      description: 'Perfect for restaurants, hotels, salons, and services that need online booking functionality',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      features: [
        'Consultation and design discussion',
        'Up to 3 small revisions included during development',
        'Online booking system',
        'Calendar integration',
        'Email notifications',
        'Admin dashboard for managing bookings'
      ],
      maintenance: {
        price: regionalPricing.maintenance.booking.price,
        currency: regionalPricing.maintenance.booking.currency,
        period: 'month',
        features: [
          'Bug fixes and problem resolution',
          'Up to 4 hours of changes per month',
          'Regular updates',
          'Security monitoring',
          'Priority support'
        ]
      },
      popular: false
    },
    {
      id: 'custom-development',
      name: 'Custom Development',
      price: 'Custom',
      currency: '',
      description: 'Custom system or website development - everything is tailored to your specific needs',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      features: [
        'Detailed consultation and requirements analysis',
        'Custom functionality development',
        'Unique design tailored to your brand',
        'Advanced integrations and APIs',
        'Scalable architecture',
        'Ongoing development support'
      ],
      maintenance: {
        price: 'Custom',
        period: '',
        features: [
          'Custom maintenance plan',
          'Regular updates and improvements',
          'Security monitoring',
          'Priority support',
          'Flexible pricing for changes'
        ]
      },
      popular: false
    }
  ];

  // Показваме loading състояние докато определяме региона
  if (isLoading) {
    return (
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading pricing information...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      id="pricing" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 pb-1">
  Pricing Plans
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include detailed consultation and ongoing support.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
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

              <div className="p-8 flex flex-col h-full">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {plan.price !== 'Custom' && !plan.price.includes('+') && <span className="text-gray-500 mr-2">around</span>}
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price === 'Custom' ? 'Custom' : `${plan.currency}${plan.price}`}
                    </span>
                    {plan.price.includes('+') && <span className="text-gray-500 ml-2">starting from</span>}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Additional services */}
                <div className="space-y-6 pt-6 border-t border-gray-200 mt-auto">
                  {/* Maintenance */}
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-semibold text-gray-800">Maintenance & Support</span>
                        <p className="text-sm text-gray-600">Recommended</p>
                      </div>
                      <span className="font-bold text-purple-600">
                        {plan.maintenance.price === 'Custom' ? 'Custom' : `${plan.maintenance.currency}${plan.maintenance.price}/${plan.maintenance.period}`}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {plan.maintenance.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Plan Selection Help */}
        <motion.div 
          className="mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-green-600 text-lg">💡</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Not sure which plan is right for you? Just call or email us and we'll help you choose the perfect solution for your needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hosting Information Box */}
        <motion.div 
          className="mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-blue-600 text-lg">🌐</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Hosting is selected by the client, but we'll help if you need assistance with this part.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional information */}
        <motion.div 
          className="mt-8 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-600 font-medium">
            All prices are indicative. Final project and maintenance prices are determined during consultation.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Pricing;
