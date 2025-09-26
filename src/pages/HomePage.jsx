import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import { parseDateTimeInput, convertToBulgarianTime } from "../lib/utils";



const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  
  // Create form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [meetingDateTime, setMeetingDateTime] = useState("");
  const [createLoading, setCreateLoading] = useState(false);


  const handleCreateNote = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !email.trim() || !phone.trim() || !meetingDateTime.trim()) {
      toast.error("All fields are required");
      return;
    }

    setCreateLoading(true);
    try {
      // Parse datetime input into separate date, time, and timezone
      const { date, time, timezone } = parseDateTimeInput(meetingDateTime);
      
      // Calculate Bulgarian time
      const bgTime = convertToBulgarianTime(meetingDateTime);
      
      await api.post("/notes", {
        title,
        content,
        email,
        phone,
        meetingDate: date,
        meetingTime: time,
        meetingTimezone: timezone,
        BGtime: bgTime
      });

      toast.success("Consultation booked successfully!");
      
      // Reset form
      setTitle("");
      setContent("");
      setEmail("");
      setPhone("");
      setMeetingDateTime("");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're booking consultations too fast", {
          duration: 4000,
          icon: "❌",
        });
      } else {
        toast.error("Failed to book consultation");
      }
    } finally {
      setCreateLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar/>

      {isRateLimited && <RateLimitedUI/>}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Create Note Form */}
        {!isRateLimited && (
          <div id="create-form" className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
              
              {/* Main form card */}
              <div className="relative card bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
                {/* Header section */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-2">Book Consultation</h2>
                    <p className="text-center text-blue-100">Schedule your consultation with us</p>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg"></div>
                </div>

                <div className="p-8">
                  <form onSubmit={handleCreateNote} className="space-y-6">
                    {/* Name field */}
                    <div className="form-control group">
                      <label className="label">
                        <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Your Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name..."
                        className="input input-bordered w-full h-14 text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    {/* Project Description field */}
                    <div className="form-control group">
                      <label className="label">
                        <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          Project Description
                        </span>
                      </label>
                      <textarea
                        placeholder="Briefly describe what kind of project you would like us to work on..."
                        className="textarea textarea-bordered w-full h-32 text-lg transition-all duration-300 focus:scale-[1.01] focus:shadow-lg border-2 focus:border-purple-500 bg-white/80 backdrop-blur-sm resize-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>

                    {/* Contact information grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email field */}
                      <div className="form-control group">
                        <label className="label">
                          <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Address
                          </span>
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          className="input input-bordered w-full h-14 text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-green-500 bg-white/80 backdrop-blur-sm"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Phone field */}
                      <div className="form-control group">
                        <label className="label">
                          <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Phone Number
                          </span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+359 888 123 456"
                          className="input input-bordered w-full h-14 text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-orange-500 bg-white/80 backdrop-blur-sm"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Date & Time field */}
                    <div
  className="form-control group"
  onClick={() => document.getElementById("meetingDateTime").showPicker?.()}
>
  <label className="label">
    <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Consultation Date & Time
    </span>
  </label>

  <input
    id="meetingDateTime"
    type="datetime-local"
    className="input input-bordered w-full h-14 text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-indigo-500 bg-white"
    value={meetingDateTime}
    onChange={(e) => setMeetingDateTime(e.target.value)}
  />

  <label className="label">
    <span className="label-text-alt text-sm text-gray-500 flex items-center gap-1">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Enter the information in your time zone.
    </span>
  </label>
</div>

                    {/* Submit button */}
                    <div className="pt-6">
                      <button 
                        type="submit" 
                        className="btn btn-primary w-full h-16 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        disabled={createLoading}
                      >
                        {createLoading ? (
                          <div className="flex items-center gap-3">
                            <span className="loading loading-spinner loading-md"></span>
                            <span>Booking Consultation...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>Book Consultation</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;