import React from "react";
import "./buttons.css";
 const Buttons=(props)=>{
     return <div className="Buttons">
         <button style={{marginRight:10,backgroundColor: "rgba(0,0,255,0.8)"}} onClick={props.onclickblue}>Top Countries By Total Cases</button>
         <button style={{marginLeft:10,backgroundColor:"rgba(255,0,0,0.8)"}} onClick={props.onclickred}>Top Countries By Total Deaths</button>
     </div>
 }

 export default Buttons;