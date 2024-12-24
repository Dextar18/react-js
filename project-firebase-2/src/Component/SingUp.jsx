import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db, provider } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SingUp() {
    const [name,setName]=useState();
    const [city,setCity]=useState();
    const [age,setAge]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    const handleSingUp= async()=>{
        let user=await createUserWithEmailAndPassword(auth,email,password)
        .then((data)=>{
          setDoc(doc(db,"Users",data.user.uid),{name,city,age,email})
        console.log(data)
        navigate("/Deshboard")
    }
  )
  }
  const handlegooglesingup =async()=>{
    await signInWithPopup(auth,provider).then((data)=>{
      console.log(data)
      navigate("/Deshboard")
    })
  }
  return (
    <div>
 <div className="div1">
       <h1>Sing Up</h1>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/>
        <input type="text" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
        <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSingUp}>Sing Up</button><br /><br />
        <button onClick={handlegooglesingup}>Google</button>
        <span>
        <Link to={"/logIn"}>LogIn</Link>

        </span>
       </div>
    </div>
  )
}
