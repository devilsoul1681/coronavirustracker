import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="modern-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Fetching latest data...</p>
    </div>
  );
};

export default Spinner;