
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
      <div className='show-btn'>
        <button>show</button>
      </div>

    </div>
  )
}

export default Machine









