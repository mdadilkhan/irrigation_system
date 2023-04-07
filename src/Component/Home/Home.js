import React, { useState,useEffect } from 'react'
import './Style.css'
import Header from '../Header/Header'
import AddMachine from './AddMachine/AddMachine'
import Machine from '../Machine/Machine'
import axios from 'axios'

const Home = () => {


  const [machine,setMachine]=useState([]);

  const token=localStorage.getItem('token');
  const headers = {
    'Authorization': `Bearer ${token}`
  };
console.log('machines>>',machine);


const listOfMachine=()=>{
  axios.get('https://lucky-sunbonnet-fly.cyclic.app/user',{headers}).then((response)=>{
    console.log(">>",response.data.machines);
    setMachine(response.data.machines);
  }).catch((error)=>{
    console.log(error);
  })
 };


 
  useEffect(()=>{
     listOfMachine();
  },[])


  let box=document.querySelector('.machine-container');

  const pressPrev=()=>{
    let width=box.clientWidth;
    console.log(width);
    box.scrollLeft=box.scrollLeft-width;
  }
  const pressNext=()=>{
    let width=box.clientWidth;
    console.log(width);
    box.scrollLeft=box.scrollLeft+width;
  }

   
  return (
   
    <>
      <Header/>
      <div className='home_container'>
         <AddMachine/> 
      </div>
      <div className='carousel'>
         <button className='prev-btn' onClick={pressPrev}><p>&lt;</p></button>
         <button className='next-btn' onClick={pressNext}><p>&gt;</p></button>

      <div className='machine-container'>
         {
          machine.map((item,index)=>
            <Machine key={index} data={item}/>
          )
         }
       </div>  
      </div>
      
   </>
  )
}

export default Home
