import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'




const Header = () => {



const logout=()=>{
   localStorage.removeItem('username');
   localStorage.removeItem('name');
   localStorage.removeItem('token');
   window.location.href = '/accounts';

}


  return (
   <>
    <div className="navbar">
      <div className="logo">
        <label className='rainbow_label'>SiS</label>
      </div>
      <div className="header">
        <Link className='link'>About</Link>
        <Link className='link' onClick={()=>{logout()}}>Logout</Link>
      </div>
    </div>
   </>
  )
}

export default Header