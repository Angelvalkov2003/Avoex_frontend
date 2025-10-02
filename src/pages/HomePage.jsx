import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import ConsultationForm from "../components/ConsultationForm";
import WorkProcessTree from "../components/WorkProcessTree";

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar/>

      {isRateLimited && <RateLimitedUI/>}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Work Process Tree */}
        {!isRateLimited && (
          <div id="work-process" className="mb-16">
            <WorkProcessTree />
          </div>
        )}

        {/* Create Note Form */}
        {!isRateLimited && (
          <div id="create-form">
            <ConsultationForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;