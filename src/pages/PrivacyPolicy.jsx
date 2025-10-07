import React from 'react';
import { ArrowLeft, Shield, Mail, Clock, User, Database, Lock, AlertCircle, Target, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>When you book a consultation, we collect and store the following information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>ID (system-generated)</li>
            <li>Name / Client identifier</li>
            <li>Content (your entered name or details)</li>
            <li>Email address</li>
            <li>Reservation date and time (your local time zone)</li>
            <li>Reservation date and time in Bulgaria (system time)</li>
            <li>Creation and update timestamps</li>
          </ul>
          <p className="text-gray-600">We do not collect any other personal information unless you voluntarily provide it.</p>
        </div>
      )
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Purpose of Collecting Data",
      content: (
        <div className="space-y-4">
          <p>We collect this information in order to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Schedule your consultation at the correct time according to your time zone</li>
            <li>Contact you regarding your booking (confirmation, changes, reminders)</li>
            <li>Improve our service and ensure smooth communication</li>
          </ul>
          <p className="text-gray-600">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </div>
      )
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-500" />,
      title: "Legal Basis",
      content: (
        <p>We process your data under legitimate interest (to provide consultation services that you requested) and/or with your consent when submitting the booking form.</p>
      )
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Data Retention",
      content: (
        <p>We keep your reservation details only as long as necessary to provide the service. After consultations are completed, data may be retained for record-keeping and business analysis, but not longer than legally required.</p>
      )
    },
    {
      icon: <Lock className="w-6 h-6 text-red-500" />,
      title: "Data Security",
      content: (
        <p>We take appropriate technical and organizational measures to protect your data from unauthorized access, loss, misuse, or disclosure.</p>
      )
    },
    {
      icon: <User className="w-6 h-6 text-indigo-500" />,
      title: "Your Rights (under GDPR)",
      content: (
        <div className="space-y-4">
          <p>As a user, you have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access the personal data we store about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw your consent at any time</li>
            <li>File a complaint with your local data protection authority</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-500" />,
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <p>If you have questions about this Privacy Policy or wish to exercise your rights, you can contact us at:</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Email: <a href="mailto:avoex.contact@gmail.com" className="text-blue-600 hover:text-blue-800">avoex.contact@gmail.com</a></p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Effective Date: <span className="font-semibold text-gray-800">May 25, 2025</span>
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, and protect your personal information when you make a consultation reservation through our website. By using our service, you agree to the terms described below.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {index + 1}. {section.title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-gray max-w-none">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Questions or Concerns?</h3>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us at{' '}
                <a href="mailto:avoex.contact@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  avoex.contact@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
