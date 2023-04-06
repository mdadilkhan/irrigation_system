import React,{useState}from 'react'
import "./Style.css";
import "boxicons/css/boxicons.min.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

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
  
    console.log(login.value);
    const onSubmitForm=(e)=>{
      e.preventDefault();
      e.target.reset();
    }

    const onInputLoginValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setLoginValue({...login,[e.target.name]:e.target.value})
    }

console.log("login>>>",login);
console.log("signup>>>",signup);

    const onInputSignupValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setSignupValue({...signup,[e.target.name]:e.target.value})
    }


        
  const loginUser=()=>{

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
