import React, { useState, memo, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";

// Lazy load heavy components
const ConsultationForm = lazy(() => import("../components/ConsultationForm"));
const WorkProcessTree = lazy(() => import("../components/WorkProcessTree"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Pricing = lazy(() => import("../components/Pricing"));
const PersuasionHero = lazy(() => import("../components/PersuasionHero"));
const Footer = lazy(() => import("../components/Footer"));

// Loading component for lazy loaded components
const ComponentLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="loading loading-spinner loading-md text-blue-600"></div>
  </div>
);

const HomePage = memo(() => {
  const [isRateLimited, setRateLimited] = useState(false);

  if (isRateLimited) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <RateLimitedUI />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Persuasion Hero Section */}
      <Suspense fallback={<ComponentLoader />}>
        <PersuasionHero />
      </Suspense>

      {/* About Us Section */}
      <Suspense fallback={<ComponentLoader />}>
        <AboutUs />
      </Suspense>

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Work Process Tree */}
        <div id="work-process" className="mb-16">
          <Suspense fallback={<ComponentLoader />}>
            <WorkProcessTree />
          </Suspense>
        </div>
      </div>

      {/* Pricing Section */}
      <Suspense fallback={<ComponentLoader />}>
        <Pricing />
      </Suspense>

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Create Note Form */}
        <div id="create-form">
          <Suspense fallback={<ComponentLoader />}>
            <ConsultationForm />
          </Suspense>
        </div>
      </div>

      {/* Footer */}
      <Suspense fallback={<ComponentLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

HomePage.displayName = 'HomePage';
export default HomePage;