import React, { useState } from 'react'
import './Style.css'
import Header from '../Header/Header'
import AddMachine from './AddMachine/AddMachine'

const Home = () => {



   
  return (
    <>
      <Header/>
      
      <div className='home_container'>
       <AddMachine/>
      </div>
   </>
  )
}

export default Home
