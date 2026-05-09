import React from "react";
import "./box.css";

function Box({ countries, clicked, value }) {
  return (
    <div className="select-container">
      <label htmlFor="country-select" className="select-label">Select Location</label>
      <select 
        id="country-select"
        name="country" 
        className="custom-select" 
        onChange={clicked} 
        value={value}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Box;