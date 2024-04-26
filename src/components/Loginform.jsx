import React from 'react'
import {Link} from 'react-router-dom'
import './loginform.css'
const Loginform = () => {
  return (
    <body>
    <div class="container">
            <form action="#" id="loginform">
                <h1>Login</h1>
                <h4>Welcome back!</h4>
                <div className="logininputs">
                    <label for="username">Username</label>
                    <input type="text" id="user" name="username"/>
                </div>
                <div className="logininputs">
                    <label for="pwd">Password</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <Link className='loginlink'>Forgot password</Link>

                <button className='loginbtn'>Login</button>
                <div className="register-link">
                    <p>Don't have an account?<Link className='loginlink'>Register</Link></p>
                </div>    
            </form>
        </div>   
        </body> 
  )
}

export default Loginform