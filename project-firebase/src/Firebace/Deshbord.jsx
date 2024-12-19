import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import {CircleLoader} from 'react-spinners'

export default function Deshbord() {
    const [user,setUser]=useState()
    const [userData,setUserData]=useState()
    useEffect(()=>{
      onAuthStateChanged(auth,(data)=>{
        if(data){
          setUser(data.uid);
        }
      })
    },[])
    useEffect(()=>{
      fetchUser()
    },[user])
    const fetchUser=async()=>{
      if(user){
        await getDoc(doc(db,"Users",user)).then((data)=>{
          setUserData(data.data())
          console.log(data.data());
          
        })
      }
    }
  return (
    <div>
<div >
  {userData ? (
    <div className="main">
      <h2>Welcome to Dashboard!</h2>

      <ul>
        <li>
          <strong>Name:</strong>  {userData.name}
        </li>
        <li>
          <strong>City:</strong> {userData.city}
        </li>
        <li>
          <strong>Age:</strong> {userData.age}
        </li>
        <li>
          <strong>Email:</strong> {userData.email}
        </li>
      </ul>
    </div>
  ) : (
<CircleLoader/>  )}
</div>
    </div>
  )
}
