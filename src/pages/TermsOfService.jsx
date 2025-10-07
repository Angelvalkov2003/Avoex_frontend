import React from 'react';
import { ArrowLeft, FileText, CheckCircle, CreditCard, Calendar, Shield, Scale, AlertCircle, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Acceptance of Terms",
      content: (
        <p>By accessing this website and booking a consultation, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.</p>
      )
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Services Provided",
      content: (
        <div className="space-y-4">
          <p>The website allows users to book consultations regarding web and software development projects.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The first consultation is free of charge. Additional consultations or project work may require payment, which can be made via Stripe, bank transfer, or other payment methods chosen by the client.</li>
            <li>Consultations are primarily conducted via Google Meet, but clients may request alternative platforms.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      title: "Booking and Cancellations",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Users may book consultations through the website by providing their name, email, date, and time.</li>
            <li>Changes to the consultation time may occasionally occur and will be communicated via email.</li>
            <li>Clients are allowed to cancel or reschedule consultations at any time.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Responsibilities and Limitations",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The initial consultation is intended to discuss project ideas and feasibility.</li>
            <li>This consultation does not guarantee any final product or outcome.</li>
            <li>If a full project meeting is scheduled, it will include a plan for delivering a demo and implementing subsequent minor changes as agreed.</li>
            <li>We are not responsible for any indirect or consequential losses arising from the consultation.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      title: "Payments",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Paid services are optional and agreed upon by the client.</li>
            <li>Payments may be made via Stripe, bank transfer, or another mutually agreed method.</li>
            <li>Refunds, if any, will be handled on a case-by-case basis.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Use of the Website",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The website is intended for all users seeking consultation on web or software development.</li>
            <li>Users must provide accurate information when booking consultations.</li>
            <li>Any misuse of the website, including submitting false information, is prohibited.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Privacy",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We collect personal data (name, email, reservation date/time, time zone) solely for the purpose of scheduling consultations.</li>
            <li>Data is stored securely and used only for providing and managing the consultation service.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-500" />,
      title: "Governing Law",
      content: (
        <div className="space-y-4">
          <p>These Terms of Service are governed by the laws of Bulgaria.</p>
          <p>Any disputes arising from these Terms will be resolved under Bulgarian jurisdiction.</p>
        </div>
      )
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
      title: "Changes to Terms",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We may update these Terms of Service from time to time.</li>
            <li>Users will be informed of any significant changes via the website or email.</li>
          </ul>
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
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Effective Date: <span className="font-semibold text-gray-800">May 25, 2025</span>
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Welcome to our website. By using our services, including booking a consultation, you agree to the following terms and conditions. Please read them carefully.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-green-50 px-8 py-6 border-b border-gray-200">
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
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Questions About These Terms?</h3>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service or need clarification on any point, 
                please contact us at{' '}
                <a href="mailto:avoex.contact@gmail.com" className="text-green-600 hover:text-green-800 font-medium">
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

export default TermsOfService;
