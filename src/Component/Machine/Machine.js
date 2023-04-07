
import React from 'react'
import "./Machine.css";
const Machine = ({data}) => {
console.log(data);
  return (

    
    <div className='card'>
       <div>
         <h1>{data.name}</h1>
         <h2>{data.productKey}</h2>
         <h2>{data.address}</h2>
       </div>
      <div className='btn-box'>
        <button className='btn show'>show</button>
        <button className='btn delete'>Delete</button>
      </div>

    </div>
  )
}

export default Machine









