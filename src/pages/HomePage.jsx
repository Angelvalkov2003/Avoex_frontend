import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import ConsultationForm from "../components/ConsultationForm";
import WorkProcessTree from "../components/WorkProcessTree";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import PersuasionHero from "../components/PersuasionHero";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar/>

      {isRateLimited && <RateLimitedUI/>}

      {/* Persuasion Hero Section */}
      {!isRateLimited && <PersuasionHero />}

      {/* About Us Section */}
      {!isRateLimited && <AboutUs />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Work Process Tree */}
        {!isRateLimited && (
          <div id="work-process" className="mb-16">
            <WorkProcessTree />
          </div>
        )}
      </div>

      {/* Pricing Section */}
      {!isRateLimited && <Pricing />}

      <div className="max-w-7xl mx-auto p-4 mt-6">

        {/* Create Note Form */}
        {!isRateLimited && (
          <div id="create-form">
            <ConsultationForm />
          </div>
        )}
      </div>

      {/* Footer */}
      {!isRateLimited && <Footer />}
    </div>
  );
};

export default HomePage;