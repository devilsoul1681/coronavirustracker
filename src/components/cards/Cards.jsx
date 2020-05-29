import React from "react";
import "./cards.css";
import Card from "./card/Card"
const Cards=(props) =>{
    return (
        <div className="Cards">
          <Card name="Infected" value={props.confirmed} update={props.update} color='blue'/>
          <Card name="Recovered" value={props.recovered} update={props.update} color='green'/>
          <Card name="Deaths" value={props.deaths} update={props.update} color='red'/>
        </div>
    )
}
export default Cards