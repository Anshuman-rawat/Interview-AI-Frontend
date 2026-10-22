import React, { useState } from 'react'
import "../auth.form.scss"
import bgImage from "../../../assets/Gemini_Generated_Image_3mwdtw3mwdtw3mwd.png"
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa"
import { useNavigate ,Link } from 'react-router'
import { useAuth } from '../Hooks/useAuth'

const Login = () => {

    const { loading , handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) =>{
      e.preventDefault()
      await handleLogin({email,password})
    }

    if(loading){
      return(<main><h1>Loading....</h1></main>)
    }

  return (
    <main>
      <div className='Image'>
        <img src ={bgImage} alt='background Image'/>
      </div>

      <div className='form-container'>
        <h1>Login</h1>
        <h3>Welcome to Interview Ai</h3>

        <form onSubmit={handleSubmit}>


          <div className='input-group'>
          <label htmlFor="email">Email Address:</label>
          <input  
          onChange={(e) =>{setEmail(e.target.value)}}
          type='email'id='email'name='email'placeholder='Enter Email Address'/>
          </div>

          <div className='input-group'>
          <label htmlFor="password">Password:</label>
          <input 
          onChange={(e) =>{setPassword(e.target.value)}}
          type='password'id='password'name='password'placeholder='Enter Your Password'/>
          </div>
          <button className='button primary-button'>Log in</button>
          <div className="social-icons">
            <FaApple />
            <FaGoogle />
            <FaFacebook />
          </div>
        </form>
        <p>Dont' have account ? <Link to={"/Register"}>Register</Link></p>

      </div>
    </main>
  )
}

export default Login 
