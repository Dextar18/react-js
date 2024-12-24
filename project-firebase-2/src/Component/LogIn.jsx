import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function LogIn() {
  const [password,setPassword]=useState()
  const [email,setEmail]=useState()
  const navigate=useNavigate()
  const handleLogin=async()=>{
      let user=await signInWithEmailAndPassword(auth,email,password)
      .then((data)=>{
          console.log(data);
          navigate("/Deshboard",{replace:true})
      })
  }
    return (
      <div className="div">
      <h1>Login</h1>
      <input className='N1' type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input className="N1"type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button className="B1"onClick={handleLogin}>Login</button>
      <span>
      <Link to={"/"}>SingUp</Link>
      </span>
      </div>
      );
    }
