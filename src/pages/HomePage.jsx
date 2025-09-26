import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";



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
      await api.post("/notes", {
        title,
        content,
        email,
        phone,
        meetingDateTime
      });

      toast.success("Note created successfully!");
      
      // Reset form
      setTitle("");
      setContent("");
      setEmail("");
      setPhone("");
      setMeetingDateTime("");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "❌",
        });
      } else {
        toast.error("Failed to create note");
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
          <div id="create-form" className="max-w-2xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Create New Note</h2>
                <form onSubmit={handleCreateNote}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Note Title"
                      className="input input-bordered"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Content</span>
                    </label>
                    <textarea
                      placeholder="Write your note here..."
                      className="textarea textarea-bordered h-32"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Note Email"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Note Phone"
                      className="input input-bordered"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Meeting Date & Time</span>
                    </label>
                    <input
                      type="datetime-local"
                      className="input input-bordered"
                      value={meetingDateTime}
                      onChange={(e) => setMeetingDateTime(e.target.value)}
                    />
                  </div>

                  <div className="card-actions justify-end">
                    <button type="submit" className="btn btn-primary" disabled={createLoading}>
                      {createLoading ? "Creating..." : "Create Note"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;