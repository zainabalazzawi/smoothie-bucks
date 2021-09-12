import React from "react";
import "./YourName.css";
const YourName = () => {
  return (
    <div className="your-name">
      <p className="text-2">Make it special, tell us your name!</p>
      <input className="input" placeholder="What should we call you?" />
    </div>
  );
};

export default YourName;
