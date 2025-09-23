import React from "react";
import toast from "react-hot-toast"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-primary" onClick={() => toast.success("gg")}>Click me</button>
    </div>
  );
};

export default HomePage;