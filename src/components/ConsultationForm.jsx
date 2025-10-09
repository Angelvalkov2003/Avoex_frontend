import React, { useState, memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import api from "../lib/axios";
import { parseDateTimeInput, convertToBulgarianTime, convertFromBulgarianTime, generateTimeSlots, isUserFromUS, getUserTimezone, generateBlockedSlots } from "../lib/utils";

const ConsultationForm = memo(() => {
  // Create form states
  const [client, setClient] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [createLoading, setCreateLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Get user's timezone automatically - memoized
  const userTimezone = useMemo(() => getUserTimezone(), []);
  
  // Generate time slots based on user's timezone - memoized
  const timeSlots = useMemo(() => generateTimeSlots(userTimezone), [userTimezone]);

  // Memoized function to load booked slots for a specific date
  const loadBookedSlots = useCallback(async (date) => {
    if (!date) return;
    
    setLoadingSlots(true);
    try {
      const response = await api.get(`/meetings/booked-slots/${date}?timezone=${encodeURIComponent(userTimezone)}`);
      const { bookedSlots } = response.data;
      
      // Generate all blocked slots (Monday, Wednesday, Friday, daily)
      const blockedSlots = generateBlockedSlots(date, userTimezone);
      
      // Combine booked slots from backend with all blocked slots
      const allBlockedSlots = [...bookedSlots, ...blockedSlots];
      
      // Store the booked slots directly as they come from the backend in the client's timezone
      setBookedSlots({
        bgTimes: allBlockedSlots, // These are already in client timezone from backend
        clientTimes: allBlockedSlots
      });
    } catch (error) {
      console.error("Error loading booked slots:", error);
      toast.error("Failed to load available time slots");
    } finally {
      setLoadingSlots(false);
    }
  }, [userTimezone]);

  const handleCreateMeeting = async (e) => {
    e.preventDefault();

    if (!client.trim() || !content.trim() || !email.trim() || !selectedDate.trim() || !selectedTime.trim()) {
      toast.error("All fields are required");
      return;
    }

    // Show confirmation modal
    setShowConfirmation(true);
  };

  const confirmBooking = async () => {
    setCreateLoading(true);
    setShowConfirmation(false);
    try {
      // Parse separate date and time inputs into combined date/time and timezone
      const { clientsDate, clientsTimeZone } = parseDateTimeInput(selectedDate, selectedTime, userTimezone);
      
      // Calculate Bulgarian time
      const dateTimeString = `${selectedDate}T${selectedTime}`;
      const { bgDate, bgTime } = convertToBulgarianTime(dateTimeString, userTimezone);
      
      await api.post("/meetings", {
        client,
        content,
        email,
        ClientsDate: clientsDate,
        ClientsTimeZone: clientsTimeZone,
        BGdate: bgDate,
        BGtime: bgTime
      });

      toast.success("Consultation booked successfully!");
      
      // Reset form
      setClient("");
      setContent("");
      setEmail("");
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.log("Error creating meeting", error);
      
      if (error.response) {
        const { status, data } = error.response;
        
        switch (status) {
          case 400:
            if (data.code === "PAST_DATETIME") {
              toast.error("Cannot book consultations in the past or within 2 hours of current time", {
                duration: 5000,
                icon: "⏰",
              });
            } else if (data.code === "INVALID_EMAIL") {
              toast.error("Please enter a valid email address", {
                duration: 4000,
                icon: "📧",
              });
            } else if (data.code === "MISSING_FIELDS") {
              toast.error("Please fill in all required fields", {
                duration: 4000,
                icon: "⚠️",
              });
            } else {
              toast.error(data.message || "Invalid input. Please check your information", {
                duration: 4000,
                icon: "⚠️",
              });
            }
            break;
          case 409:
            toast.error("This time slot is already booked. Please choose a different time.", {
              duration: 5000,
              icon: "⏰",
            });
            break;
          case 429:
            toast.error("Slow down! You're booking consultations too fast", {
              duration: 4000,
              icon: "❌",
            });
            break;
          case 500:
            toast.error("Server error. Please try again later", {
              duration: 5000,
              icon: "🔧",
            });
            break;
          default:
            toast.error(data.message || "Failed to book consultation. Please try again", {
              duration: 4000,
              icon: "❌",
            });
        }
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection", {
          duration: 5000,
          icon: "🌐",
        });
      } else {
        toast.error("An unexpected error occurred. Please try again", {
          duration: 4000,
          icon: "❌",
        });
      }
    } finally {
      setCreateLoading(false);
    }
  };

  return (
    <motion.div 
      id="consultation-form"
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative">
        
        {/* Main form card */}
        <motion.div 
          className="relative card bg-white shadow-2xl border border-gray-200 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.15 }
          }}
        >
          {/* Header section */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
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
              <div className="mt-4 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-medium">Automatically detect your time zone to adjust the available times accordingly.</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg"></div>
          </motion.div>

          <motion.div 
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <form onSubmit={handleCreateMeeting} className="space-y-6">
              {/* Name field */}
              <motion.div 
                className="form-control group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.4 }}
              >
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
                    className="input input-bordered w-full h-14 text-lg transition-all duration-150 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  />
              </motion.div>

              {/* Project Description field */}
              <motion.div 
                className="form-control group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.5 }}
              >
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
                  className="textarea textarea-bordered w-full h-32 text-lg transition-all duration-150 focus:scale-[1.01] focus:shadow-lg border-2 focus:border-purple-500 bg-white/80 backdrop-blur-sm resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </motion.div>

              {/* Email field */}
              <motion.div 
                className="form-control group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.6 }}
              >
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
                  className="input input-bordered w-full h-14 text-lg transition-all duration-150 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-green-500 bg-white/80 backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

               {/* Date & Time field */}
               <motion.div 
                 className="form-control group"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.3, delay: 0.7 }}
               >
                 <label className="label">
                   <span className="label-text text-lg font-semibold text-gray-700 flex items-center gap-2">
                     <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                     Consultation Date & Time
                   </span>
                 </label>
                 
                 <div className="space-y-4">
                   {/* Date input */}
                   <div 
                     className="relative cursor-pointer"
                     onClick={() => {
                       const dateInput = document.getElementById('date-input');
                       if (dateInput) {
                         dateInput.showPicker();
                       }
                     }}
                   >
                     <input
                       id="date-input"
                       type="date"
                       className="input input-bordered w-full h-14 text-lg transition-all duration-150 focus:scale-[1.02] focus:shadow-lg border-2 focus:border-indigo-500 bg-white cursor-pointer"
                       value={selectedDate}
                       onChange={(e) => {
                         setSelectedDate(e.target.value);
                         // Reset time when date changes
                         setSelectedTime("");
                         // Load booked slots for the selected date
                         loadBookedSlots(e.target.value);
                       }}
                       min={new Date().toISOString().split('T')[0]}
                       placeholder="Select date"
                     />
                   </div>
                   
                   {/* Custom Time Picker - only show if date is selected */}
                   {selectedDate && (
                     <div className="animate-fadeIn">
                       <div className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                         <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         Choose your preferred time
                         {loadingSlots && (
                           <span className="loading loading-spinner loading-sm text-indigo-500"></span>
                         )}
                       </div>
                       
                       <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-200">
                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                           {timeSlots.map((slot) => {
                             const isSelected = selectedTime === slot.value;
                             // Check if this time slot is booked in client time
                             const isBooked = bookedSlots.clientTimes && bookedSlots.clientTimes.includes(slot.value);
                             
                             // Check if this time slot is in the past (current hour + next 2 hours) - only for today
                             const now = new Date();
                             const today = now.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
                             const currentHour = now.getHours();
                             const slotHour = parseInt(slot.value.split(':')[0]);
                             const isPastTime = selectedDate === today && slotHour <= currentHour + 2;
                             
                             const isMorning = parseInt(slot.value.split(':')[0]) >= 8 && parseInt(slot.value.split(':')[0]) < 12;
                             const isAfternoon = parseInt(slot.value.split(':')[0]) >= 12 && parseInt(slot.value.split(':')[0]) < 18;
                             const isEvening = parseInt(slot.value.split(':')[0]) >= 18;
                             
                             return (
                               <button
                                 key={slot.value}
                                 type="button"
                                 onClick={() => !isBooked && !isPastTime && setSelectedTime(slot.value)}
                                 disabled={isBooked || isPastTime}
                                   className={`
                                   relative p-3 rounded-xl text-sm font-medium transition-all duration-150 transform hover:scale-105 active:scale-95
                                   ${isBooked || isPastTime
                                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                                     : isSelected 
                                       ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg ring-2 ring-indigo-200' 
                                       : 'bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 shadow-sm hover:shadow-md border border-gray-200 hover:border-indigo-300'
                                   }
                                 `}
                               >
                                 <div className="flex flex-col items-center gap-1">
                                   <span className="text-lg font-semibold">{slot.label}</span>
                                   <div className="flex items-center gap-1">
                                     {isBooked ? (
                                       <>
                                         <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                         <span className="text-xs opacity-75">Booked</span>
                                       </>
                                     ) : isPastTime ? (
                                       <>
                                         <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                         <span className="text-xs opacity-75">Past</span>
                                       </>
                                     ) : (
                                       <>
                                         <div className={`
                                           w-2 h-2 rounded-full
                                           ${isMorning ? 'bg-blue-400' : isAfternoon ? 'bg-yellow-400' : 'bg-purple-400'}
                                         `}></div>
                                         <span className="text-xs opacity-75">
                                           {isMorning ? 'Morning' : isAfternoon ? 'Afternoon' : 'Evening'}
                                         </span>
                                       </>
                                     )}
                                   </div>
                                 </div>
                                 
                                 {/* Selection indicator */}
                                 {isSelected && (
                                   <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                                     <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                     </svg>
                                   </div>
                                 )}
                               </button>
                             );
                           })}
                         </div>
                         
                         {/* Time period legend */}
                         <div className="mt-4 pt-4 border-t border-gray-200">
                           <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                             <div className="flex items-center gap-2">
                               <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                               <span>Morning</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                               <span>Afternoon</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                               <span>Evening</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                               <span>Booked</span>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
                 
                 

                 <label className="label">
                   <span className="label-text-alt text-sm text-gray-500 flex items-center gap-1">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Times are displayed in your local timezone
                   </span>
                 </label>
                 
                 {/* Region detection info */}
                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                   <div className="flex items-start gap-3">
                     <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                     <div className="text-sm">
                       <p className="font-medium text-blue-800 mb-1">Location & Timezone Detection</p>
                       <p className="text-blue-700">
                         We automatically detect and save your region to ensure accurate scheduling. 
                         Your consultation will be scheduled in your local time, and we'll handle all timezone conversions for you.
                       </p>
                     </div>
                   </div>
                 </div>
               </motion.div>

              {/* Submit button */}
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.8 }}
              >
                <button 
                  type="submit" 
                  className="btn btn-primary w-full h-16 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-150 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <motion.div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Your Booking</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to book a consultation for:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <div className="space-y-2">
                  <div><strong>Name:</strong> {client}</div>
                  <div><strong>Email:</strong> {email}</div>
                  <div><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}</div>
                  <div><strong>Time:</strong> {selectedTime}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-150"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
});

ConsultationForm.displayName = 'ConsultationForm';
export default ConsultationForm;
