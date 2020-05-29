import React from "react";
import "./card.css";
import Countup from "react-countup";
const Card=(props) =>{
   let classe=["Card",props.color];
   let info="";
   if(props.name==="Infected"){
       info="Number of total cases of COVID-19";
   }
   if(props.name==="Recovered"){
    info="Number of recovered cases of COVID-19";
   }
   if(props.name==="Deaths"){
    info="Number of deaths caused by COVID-19";
   }
    return (
        <div className={classe.join(" ")}>
            <p  style={{color:"grey",marginBottom:0}}>{props.name}</p>
            <h3><Countup start={0} end={Number(props.value)} duration={2.5} separator="," /></h3>
            <p style={{fontSize:10,color:"grey"}}>Last Update</p>
            <p>{new Date(props.update).toDateString()}</p>
            <p style={{fontWeight:"bold"}}>{info}</p>
        </div>
    );
}

export default Card