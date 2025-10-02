import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"


const App = () => {
  return (
        <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#FFF_60%,#5768FF_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
          </div>
  )
}

export default App;
