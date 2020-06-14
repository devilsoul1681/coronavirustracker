import React from "react";
import Cards from "./components/cards/Cards"
import "./App.css";
import Aux from "./hoc/Auxillary/Auxillary"
import axios from "axios"
import Box from "./components/box/Box";
import Graph from "./components/graph/Graph";
import Spinner from "./components/Spinner/Spinner";
import image from "../src/assest/images/download.jpg"
import Modal from "./components/Modal/Modal";
import Buttons from "./components/Buttons/Buttons";
const App=() =>{
  const [data,setdata]=React.useState({
    confirmed:"",
    recovered:"",
    deaths:""
  })
  const [spinner,setspinner]=React.useState(false);
  const [countries,setcountries]=React.useState(["Global"])
  const [lastupdate,setlastupdate]=React.useState("")
  const [country,setcountry]=React.useState("Global");
  const [overall,setoverall]=React.useState([]);
  const [error,seterror]=React.useState(false);
  const [show,setshow]=React.useState(false);
  const [type,settype]=React.useState("");
  function onchange(events){
    setcountry(events.target.value)
  }

  React.useEffect(()=>{
    axios.get("https://covid19.mathdro.id/api/countries")
    .then(res=>{
      let infocountries=[]
      for(var i=0;i<res.data.countries.length;i++){
           infocountries.push(res.data.countries[i].name);
      }
      setcountries((prevalue) =>{
        return [...prevalue,...infocountries]
      })
    })
  },[])

  React.useEffect(()=>{
    axios.get("https://covid19.mathdro.id/api/daily")
    .then(res=>{
      let initial=[]
      res.data.map((dailydata) =>{
         initial.push({
           confirmed:dailydata.confirmed.total,
           deaths:dailydata.deaths.total,
           date:dailydata.reportDate
         })
      })
      setoverall((prevalue)=>{
        return [...prevalue,...initial]
      })
    })
  },[])

  React.useEffect(() =>{
    setspinner(true)
     if(country==="Global"){
       axios.get('https://covid19.mathdro.id/api')
       .then(res =>{
         setdata((prevalue) =>{
           return {
             ...prevalue,
            confirmed:res.data.confirmed.value,
            recovered:res.data.recovered.value,
            deaths:res.data.deaths.value
           }
         })
         setlastupdate(res.data.lastUpdate)
         setspinner(false)    
       })
       .catch(err =>{
         setspinner(false)
         seterror(true)
       })
     }
     else{
       axios.get("https://covid19.mathdro.id/api/countries/"+country)
       .then(res =>{
        setdata((prevalue) =>{
          return {
            ...prevalue,
           confirmed:res.data.confirmed.value,
           recovered:res.data.recovered.value,
           deaths:res.data.deaths.value
          }
        })
        setlastupdate(res.data.lastUpdate)
        setspinner(false)
       })
       .catch(err=>{
         setspinner(false)
         seterror(true)
       })
     }
  },[country])

  function onclickblue(){
    setshow(true);
    settype("Confirmed");
  }

  function onclickred(){
    setshow(true);
    settype("Deaths");
  }

  function crossclick(){
    setshow(false);
    settype("");
  }

  if(spinner===true){
    return <Spinner />
  }
  if(error===true){
    return <h1 style={{textAlign:"center",marginTop:300}}>Network Error !!!!!!</h1>
  }
  return(
    <Aux>
    <img src={image}></img>
    <Cards {...data} update={lastupdate} />
    {show?<Modal show={show} type={type} crossclick={crossclick}/>:null}
    <Box countries={countries} clicked={onchange} value={country}/>
    <Buttons onclickred={onclickred} onclickblue={onclickblue}/>
    <Graph {...data} globaldata={overall} country={country}/>
    </Aux>
  )
}

export default App;