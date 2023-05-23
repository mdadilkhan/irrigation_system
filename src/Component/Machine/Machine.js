
import React from 'react'
import "./Machine.css";
import { useNavigate,Link} from "react-router-dom";
import Controll from '../Controll/Controll';
import axios from 'axios';
import config from "../../config.json"



const Machine = ({data, reload, show}) => {
console.log("here",data._id);
// const navigate = useNavigate();


  // const appendUserId=()=>{
  //   console.log(">>>",data._id);
  //   window.location.href=`/machine/id:${data._id}`;
  //   navigate('/')
  // }
  const showDataUsage=()=>{
    console.log('show data usage');
  }
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleDelete=()=>{
    console.log("dd", data._id);
    axios.delete(`${config.apiUrl}/machine/delete/${data._id}`, {headers}) 
    .then((response)=>{
  
      
    reload()
    }).catch((error)=>{
      console.log(error)
    })
  }
  const handleShow=()=>{
    show(data._id)
  }
  return (

    
    <div className='card'>
       <div>
         <h1>{data.name}</h1>
         <h2 id='machineId'>{data.productKey}</h2>
         <h2>{data.address}</h2>
       </div>
      <div className='btn-box'>
       <button className='btn show' onClick={handleShow}><Link className='btn show anchor' to={`/control/${data._id}`}>Show</Link></button> 
        <button className='btn delete anchor' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Machine









