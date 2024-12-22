import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Style.css';


export const LoginForm = () => {
  const[input,setInput]=useState({ userName: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (e) =>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault(); 
        try{
     const response=await fetch("http://localhost:8081/user/login",{
        method:'post',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(input)
     })
     const contentType = response.headers.get('Content-Type');
      const isJson = contentType && contentType.includes('application/json');
     if(response.ok){
      const data = isJson ? await response.json() : null;     
       console.log('User registered successfully!', data);
        alert('User registered successfully!');
        navigate('/home');
     }
     else {
      const error = await response.json();
      console.error('Error:', error);
      alert('Error during registration: ' + error.message);
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Network error: Unable to reach the server.');
  }
};

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Email</label>
        <input type="email" 
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
