import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const[password, setPassword]= useState("") // Repeate
  const[email, setEmail]= useState("")

  function login(){
    console.log(email)
    console.log(password)
  }
  return (
    <div className='w-full h-screen bg-[url(./background.jpg)] bg-cover bg-center flex justify-center items-center'>

      <div className='w-[500px] h-[500px] backdrop-blur-sm rounded-[30px] shadow-2xl text-white flex flex-col items-center justify-center relative gap-[20px]'>
        <h1 className='absolute top-[20px] text-2xl font-bold text-center my-5'>Log In</h1>
        <div className='w-[350px] flex flex-col  '>
          <span className='text-lg  '>Email</span>
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} type="text" className='w-[350px] h-[60px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black'/>
        </div>
        <div className='w-[350px] flex flex-col  '>
          <span className='text-lg  '>Password</span>
          <input onChange={(e)=>{
            setPassword(e.target.value)
            }} type="password" className='w-[350px] h-[60px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black'/>
        </div>

        <button onClick={login} className='w-[350px] h-[40px] bg-blue-700 rounded-xl text-white text-lg mt-5 hover:bg-blue-500 transition-all duration-300'>Login</button>
        <p>Don't have an account? <Link to='/register' className='text-blue-500'>Sign Up</Link> from here.</p>
      </div>
        
      
    </div>
  )
}
