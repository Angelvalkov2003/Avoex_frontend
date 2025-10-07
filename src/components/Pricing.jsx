import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 'basic-website',
      name: 'Basic Website Package',
      price: '200',
      currency: '$',
      description: 'Perfect solution for small businesses, restaurants, salons, law offices, and more.',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      features: [
        'Consultation and design discussion',
        'Modern, mobile-optimized design',
        'SEO optimization',
        'Contact form and social media integration',
        'Up to 2 small revisions included during development'
      ],
      hosting: {
        price: 10,
        period: 'month',
        features: [
          'Fast and secure hosting',
          'SSL certificate (https://)',
          'Backups and technical support'
        ]
      },
      maintenance: {
        price: 20,
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
      price: '500',
      currency: '$',
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
      hosting: {
        price: 40,
        period: 'month',
        features: [
          'High-performance hosting',
          'SSL certificate (https://)',
          'Automatic backups',
          '24/7 technical support'
        ]
      },
      maintenance: {
        price: 40,
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
      hosting: {
        price: 'Custom',
        period: '',
        features: [
          'Custom hosting solution',
          'SSL certificate (https://)',
          'Performance optimization',
          'Security monitoring',
          '24/7 technical support'
        ]
      },
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

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Pricing Plans
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include detailed consultation and ongoing support.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
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
                  {/* Hosting */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-semibold text-gray-800">Hosting</span>
                        <p className="text-sm text-gray-600">Optional</p>
                      </div>
                      <span className="font-bold text-blue-600">
                        {plan.hosting.price === 'Custom' ? 'Custom' : `${plan.currency}${plan.hosting.price}/${plan.hosting.period}`}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {plan.hosting.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Maintenance */}
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-semibold text-gray-800">Maintenance & Support</span>
                        <p className="text-sm text-gray-600">Recommended</p>
                      </div>
                      <span className="font-bold text-purple-600">
                        {plan.maintenance.price === 'Custom' ? 'Custom' : `${plan.currency}${plan.maintenance.price}/${plan.maintenance.period}`}
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
            </div>
          ))}
        </div>

        {/* Additional information */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-gray-500">
            Hosting and maintenance are optional - you can handle them yourself if preferred.
          </p>
          <p className="text-sm text-gray-600 font-medium">
            All prices are indicative. Final project, hosting, and maintenance prices are determined during consultation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
