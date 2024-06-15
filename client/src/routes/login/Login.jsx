import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className="formContainer">
          <form>
            <h1>Welcome Back</h1>
            <input type="text" name="username" id="username" placeholder='Username'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <button>Login</button>
            <Link to={"/register"}>{"Don't"} you have an account</Link>
          </form>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Login