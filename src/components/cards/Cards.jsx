import React from "react";
import "./cards.css";
import Card from "./card/Card";

const Cards = (props) => {
  return (
    <div className="cards-grid">
      <Card 
        name="Confirmed" 
        value={props.confirmed} 
        update={props.updated} 
        type="confirmed"
        description="Total laboratory-confirmed cases"
      />
      <Card 
        name="Recovered" 
        value={props.recovered} 
        update={props.updated} 
        type="recovered"
        description="Total patients who have recovered"
      />
      <Card 
        name="Deaths" 
        value={props.deaths} 
        update={props.updated} 
        type="deaths"
        description="Total deaths caused by the virus"
      />
    </div>
  );
};

export default Cards;