import React from "react";
import "./card.css";
import CountUp from "react-countup";

const Card = ({ name, value, update, type, description }) => {
  return (
    <div className={`card-container ${type}`}>
      <div className="card-header">
        <span className="card-title">{name}</span>
        <div className={`status-dot ${type}`}></div>
      </div>
      <h3 className="card-value">
        <CountUp start={0} end={Number(value) || 0} duration={2} separator="," />
      </h3>
      <div className="card-footer">
        <span className="last-update-label">Last Updated:</span>
        <span className="last-update-date">
          {update ? new Date(update).toLocaleString() : "N/A"}
        </span>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;