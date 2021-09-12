import React from "react";
import "./YourName.css";
const YourName = ({ yourName, setYourName }) => {
  return (
    <div className="your-name">
      <p className="text-2">Make it special, tell us your name!</p>
      <input
        className="input"
        placeholder="What should we call you?"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
    </div>
  );
};

export default YourName;
