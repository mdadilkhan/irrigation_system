import React,{useState}from 'react'
import "./Style.css";
import "boxicons/css/boxicons.min.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Accounts=()=>{

    const [account,setAccount]=useState("Login");
    


    return(
        <>
            {
                account==="Login"?
                <div className="container">
        <div className="box">
          <div className="header">
            <header>
        
              <img src="images/logo.png" alt="" />
            </header>
            <p>Login</p>
          </div>
          <form action="">
            <div className="input-box">
              <label>E-mail</label>
              <input type="email" className="input-field" required />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <label>Password</label>
              <input type="password" className="input-field" required />
              <i className="bx bx-lock"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="input-submit" value="SIGN IN" />
            </div>
            <div className="forgot">
              <span onClick={()=>{setAccount("Signup")}}>Sign Up</span>
              <span>Forgot password?</span>
            </div>
          </form>
        </div>
        <div className="wrapper"></div>
      </div>
      :
                <div className="container">
        <div className="box">
          <div className="header">
            <header>
        
              <img src="images/logo.png" alt="" />
            </header>
            <p>Signup</p>
          </div>
          <form action="">
           <div className="input-box">
              <label>Name</label>
              <input type="text" className="input-field" required />
             <i><PersonOutlineOutlinedIcon className='name'/></i> 
            </div>
            <div className="input-box">
              <label>E-mail</label>
              <input type="email" className="input-field" required />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <label>Password</label>
              <input type="password" className="input-field" required />
              <i className="bx bx-lock"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="input-submit" value="SIGN IN" />
            </div>
            <div className="forgot">
              <span onClick={()=>{setAccount("Login")}}>Sign In</span>
              <span>Forgot password?</span>
            </div>
          </form>
        </div>
        <div className="wrapper"></div>
      </div>

            }
        </>


      
    )
}

export default Accounts
