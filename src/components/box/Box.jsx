import React from "react";
import "./box.css"
function Box(props){
    return (
              <select name="country" className="Select" onChange={props.clicked} value={props.value}>
                    {props.countries.map((value,key)=>{
                        return <option key={key} value={value}>{value}</option>
                    })}
              </select>
    )
}

export default Box;