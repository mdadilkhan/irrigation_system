import React,{useState}from 'react'
import "./Style.css";
import "boxicons/css/boxicons.min.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import config from "../../config.json"


const Accounts=()=>{
    const initialLoginValue={
        email:"",
        password:""
    }

    const initialSignupValue={
        name:"",
        email:"",
        password:""
    }

    const [account,setAccount]=useState("Login");
    const [login,setLoginValue]=useState(initialLoginValue);
    const [signup,setSignupValue]=useState(initialSignupValue);
    const [error,setError]=useState(false);
    const navigate=useNavigate();
    console.log(login);

    const onSubmitForm=(e)=>{
      e.preventDefault();
      e.target.reset();
    }

    const onInputLoginValueChange=(e)=>{

        setLoginValue({...login,[e.target.name]:e.target.value})
    }



    const onInputSignupValueChange=(e)=>{
      
        setSignupValue({...signup,[e.target.name]:e.target.value})
    }


        
  const signupUser=async()=>{
     try {
       const response=await axios.post(`${config.apiUrl}/user/register`,signup);
       setAccount("Login");

     } catch (error) {
      setError(true);

     }
     
  }


  const loginUser=()=>{
    axios.post(`${config.apiUrl}/user/login`,login)
    .then((response)=>{
  
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('username',response.data.email);
      localStorage.setItem('name',response.data.name);
      navigate('/')
    }).catch((error)=>{
  
      setError(true);
    })

 
  }
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
          <form action="" onSubmit={onSubmitForm}>
            <div className="input-box">
              <label>E-mail</label>
              <input 
                  type="email"
                  className="input-field" 
                  required 
                  name='email'
                  value={login.value}
                  onChange={onInputLoginValueChange}/>
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <label>Password</label>
              <input
               type="password"
               className="input-field"
               required 
               name='password'
               value={login.value}
               onChange={onInputLoginValueChange}/>
              <i className="bx bx-lock"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="input-submit" value="SIGN IN" onClick={()=>loginUser()}/>
            </div>
            {
              error && <p style={{color:'red'}}>Incorrect credentials </p>
            }
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
          <form action="" onSubmit={onSubmitForm}>
           <div className="input-box">
              <label>Name</label>
              <input 
              type="text" 
              className="input-field" 
              required 
              name='name'
              value={signup.value}
              onChange={onInputSignupValueChange}/>
             <i><PersonOutlineOutlinedIcon className='name'/></i> 
            </div>
            <div className="input-box">
              <label>E-mail</label>
              <input 
              type="email" 
              className="input-field" 
              required 
              name='email'
              value={signup.value}
              onChange={onInputSignupValueChange}
             />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <label>Password</label>
              <input 
              type="password"
              className="input-field" 
              required 
              name='password'
              value={signup.value}
              onChange={onInputSignupValueChange}
              />
              <i className="bx bx-lock"></i>
            </div>
            {
              error && <p style={{color:'red'}}>error in sigup</p>
            }
            <div className="input-box">
              <input type="submit" className="input-submit" value="REGISTER" onClick={()=>signupUser()} />
            </div>
            <div className="forgot">
              <span onClick={()=>{setAccount("Login")}}>Sign In</span>
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
