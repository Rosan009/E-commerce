import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Style.css';

export const SignIn = () => {
const[user,setUser]=useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:''});
const navigat = useNavigate();

const handleUser=(e)=>{
  const {  value,name } = e.target;
  setUser({...user,[name]:value});
}
const passwordFieldStyle = user.password && user.confirmPassword && user.password !== user.confirmPassword ? { border: '1px solid red' } : {};
const confirmPasswordFieldStyle = user.password && user.confirmPassword && user.password !== user.confirmPassword ? { border: '1px solid red' } : {};

  return (
    <>
      <h1>Sign In</h1>
      <form action="/">
        <label htmlFor="firstName">First Name</label>
        <input type="text"
         name="firstName" 
         id="firstName" 
         onChange={handleUser}
         required
         />
        <label htmlFor="lastName">Last Name</label>
        <input type="text"
         name="lastName"
          id="lastName"
          onChange={handleUser} 
          required
          />
        <label htmlFor="email">email</label>
        <input type="email"
         name="email"
          id="email"
          onChange={handleUser} 
          required
          />
        <label htmlFor="password">Password</label>
        <input type="password" 
        name="password"
         id="password"
        onChange={handleUser} 
        style={passwordFieldStyle}
        required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"
         name="confirmPassword" 
         id="confirmPassword"
         onChange={handleUser}
         style={confirmPasswordFieldStyle}
         required
          />
        <button type="submit" disabled={user.password !== user.confirmPassword}>Sign In</button>
        <div>
          <p>if already have account ?</p>
          <button type="button" onClick={()=>navigat('/')}>Login</button>
        </div>
      </form>
    </>
  )
}
