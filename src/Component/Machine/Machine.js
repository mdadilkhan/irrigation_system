
import React from 'react'
import "./Machine.css";
import { useNavigate,Link} from "react-router-dom";
import Controll from '../Controll/Controll';



const Machine = ({data}) => {
console.log(data);
// const navigate = useNavigate();


  // const appendUserId=()=>{
  //   console.log(">>>",data._id);
  //   window.location.href=`/machine/id:${data._id}`;
  //   navigate('/')
  // }
  const showDataUsage=()=>{
    console.log('show data usage');
  }
  return (

    
    <div className='card'>
       <div>
         <h1>{data.name}</h1>
         <h2 id='machineId'>{data.productKey}</h2>
         <h2>{data.address}</h2>
       </div>
      <div className='btn-box'>
       <button className='btn show' onClick={showDataUsage}><Link className='btn show anchor' to={`/control/${data._id}`}>Show</Link></button> 
        <Link className='btn delete anchor'>Delete</Link>
      </div>
    </div>
  )
}

export default Machine









