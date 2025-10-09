import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))
const TermsOfService = lazy(() => import("./pages/TermsOfService"))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading loading-spinner loading-lg text-blue-600"></div>
  </div>
)


const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Visible and interesting gradient background covering entire site */}
      <div className="fixed inset-0 -z-10">
        {/* Main visible gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-purple-100/70 to-pink-100/80"></div>
        
        {/* More visible animated overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/40 via-transparent to-rose-200/40 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-200/30 via-transparent to-fuchsia-200/30 animate-pulse delay-2000"></div>
        
        {/* More visible floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Additional visible layers for depth */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-violet-200/35 to-blue-200/35 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-88 h-88 bg-gradient-to-r from-rose-200/35 to-pink-200/35 rounded-full blur-3xl animate-pulse delay-5000"></div>
        
        {/* More visible pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App;
