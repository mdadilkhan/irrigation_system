

import React, { useState } from "react";
import "./Controll.css"; // import CSS file
import axios from "axios";




const Slider=(props)=> {
  const [value, setValue] = useState(50);
  console.log(props);
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  props.auto(value);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
      />
      <p>Threshold- {value}%</p>
    </div>
  );
}



const Controll= (props) =>{
  const [mode, setMode] = useState(false);
  const [switchOnOff,setSwitchOnOff]=useState(true);
  console.log(props);



  const token=localStorage.getItem('token');
  const headers = {
     'Authorization': `Bearer ${token}`
  };


  const handleToggle = () => {
    console.log(mode);
    setMode(!mode);
    if(mode===false){
    
    }
  };

  
  const handleOnOff=()=>{
    console.log(switchOnOff);
    props.fun.manual(switchOnOff);
    setSwitchOnOff(!switchOnOff)
  }





  return (
    <div className="card">
    <h2>Motor Controll</h2>
    <h2 className="controll-heading">Mode</h2>
      <label className="switch">
        <input type="checkbox" checked={mode} onChange={handleToggle}/>
        <span className="slider round"></span>
      </label>
      {
        mode===true?<span className="controll-res">Automatic</span>:<span className="controll-res">Custom</span>
      }
      {
        mode===true?<Slider  auto={props.fun.auto}/>:<button className="btn" onClick={handleOnOff}>{switchOnOff===true?"ON":"OFF"}</button>
      }
    </div>
  );
}

export default Controll;
