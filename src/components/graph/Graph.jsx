import React from "react";
import {Bar, Line} from 'react-chartjs-2';
import "./graph.css"
function Graph(props){
    const state = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            backgroundColor: [" rgba(0,0,255,0.6)","rgba(0,255,0,0.6)","rgba(255,0,0,0.5)"],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [props.confirmed-props.recovered-props.deaths,props.recovered,props.deaths]
          }
        ]
      }
      if(props.country==="Global"){
          return(
              <div className="container">
              <Line
              data={{
                  labels:props.globaldata.map(({date}) =>date),
                  datasets:[{
                      data:props.globaldata.map(({confirmed}) =>confirmed),
                      label:"Total Cases",
                      borderColor:"#3333ff",
                      fill:true
                  },{
                      data:props.globaldata.map(({deaths}) =>deaths),
                      label:"Deaths",
                      borderColor:"red",
                      backgroundColor:"rgba(255,0,0,0.5)",
                      fill:true
                  }]
              }}
               />
            </div>   
          )
      }

      return (
        <div className="container">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Current state in '+props.country,
              fontSize:20
            },
            animation: {
            duration: 2000,
        },
        legend: {
        display: false
    }
          }}
        />
      </div>
      )

}

export default Graph