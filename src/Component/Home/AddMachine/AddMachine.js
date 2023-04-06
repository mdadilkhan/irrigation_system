import React, { useState } from 'react'
import './AddMachine.css'
import axios from 'axios'
const AddMachine = () => {

const myStyle={
  height:'400px',
  margin:'20px 20px',
  position:'absolute',
}
const headingStyle={
   margin:'0px 0px 0px 115px'
}


const initialValue={
  name:"",
  productKey:"",
  address:"",
}
const [machine,setMachine]=useState(initialValue);


const onSubmitForm=(e)=>{
  e.preventDefault();
  setMachine(initialValue);
}

const onMachineValueChnage=(e)=>{
  console.log(e.target.name,": ",e.target.value,);
  setMachine({...machine,[e.target.name]:e.target.value})
}

console.log(machine);


const token=localStorage.getItem('token');
const headers = {
  'Authorization': `Bearer ${token}`
};


const addMachine=()=>{
   axios.post('https://lucky-sunbonnet-fly.cyclic.app/machine/register',machine,{headers})
   .then((response)=>{
    console.log(response.data);
   }).catch((error)=>{
    console.log(error);
   })


  // console.log("machine value>>>",machine);
//  console.log(localStorage.getItem('token'));

}


  return (
    <div className='box' style={myStyle}>
         <div className={headingStyle}><h1>Add Machine</h1></div>
         <form action="" onSubmit={onSubmitForm}>
           
            <div className="input-box">
              <label>Name</label>
              <input type="text" name="name"
                className="input-field"
                value={machine.name}
                onChange={onMachineValueChnage}
              />
            </div>
            <div className="input-box">
              <label>Product key</label>
              <input type="text" name="productKey"
                className="input-field"
                value={machine.productKey}
                onChange={onMachineValueChnage}
              />
            </div>
            <div className="input-box">
              <label>Address</label>
              <input type="text" name="address"
                className="input-field"
                value={machine.address}
                onChange={onMachineValueChnage}
              />
            </div>
            <div className="input-box">
              <input type="submit" className="input-submit" value="Add Machine" onClick={addMachine}/>
            </div>
            
          </form>
    </div>
  )
}

export default AddMachine



