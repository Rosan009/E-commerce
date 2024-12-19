import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Style.css';


export const LoginForm = () => {
  const[input,setInput]=useState({ userName: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (e) =>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  return (
    <>
      <h1>Login Form</h1>
      <form >
        <label htmlFor="userName">User Name</label>
        <input type="text" 
        name="userName" id="userName" 
        onChange={handleInput}
        required
        />
        <label htmlFor="password">Password</label>
        <input type="password"
         name="password" 
         id="password" 
         onChange={handleInput}
         required
         />
        <button type="submit">Login</button>
        <div>
          <p>Do not have account ?</p>
        <button type="button" onClick={() => navigate('/signin')}>SignIn</button>
        </div>
      </form>
    </>
  )
}
