import React from "react";
import Backdrop from "../Modal/Backdrop/Backdrop"
import axios from "axios";
import Countup from "react-countup";
import cross from "../../assest/images/download2.png"
import "./modal.css"
const Modal=(props)=>{
    let sss=""
    if(props.type==='Confirmed'){
        sss="Confirmed Cases"
    }
    else{
        sss="Deaths"
    }

    const [data,setdata]=React.useState([]);
    const [spinner,setspinner]=React.useState(true);
    const [error,seterror]=React.useState(false);
    let main=["modal"];
    React.useEffect(()=>{

        setspinner(true)
       axios.get("https://devilsoul1681-coronavirus.herokuapp.com/"+props.type)
       .then(res=>{
           setdata((prevalue)=>{
               return [...prevalue,...res.data];
           });
           setspinner(false)
       })
       .catch(error=>{
           seterror(true);
           setspinner(false)
       })

       return ()=>{
           setdata(null);
       }
    },[])
   
    if(error===true){
        return (
            <React.Fragment>
        <Backdrop />
        <div className={main.join(' ')}><img className="cross" src={cross} onClick={props.crossclick} />Network Error !!!</div>
    </React.Fragment>)
    }


    return (<React.Fragment>
        <Backdrop />
        <div className={main.join(' ')}>{spinner?<h1>Loading..</h1>:<div>
        <img className="cross" src={cross} onClick={props.crossclick} />
        <h2>Countries With Most {sss} </h2>
        <br/>
        {data.map((d,key)=>{
            return (<div className="item" key={key}>
            <img src={"https://www.countryflags.io/" + d.iso2+"/flat/64.png"} ></img>
            <h3>{d.country}</h3>
            <h3><Countup start={0} end={Number(d.value)} duration={1.5} separator="," /></h3>
            </div>
            )
        })}</div>}</div>
    </React.Fragment>)
}


export default Modal