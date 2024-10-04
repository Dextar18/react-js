import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     let arr = [1,2,3,4];
    let arr2 = [
      {name : "abhi"},
      {name : "abhi1"},
      {name : "abhi2"},
      {name : "abhi3"},
      {name : "abhi4"},
    ]
  return (
      <div>
        {
          arr.map((e,i)=>{
            return <div>
              <p key={i}>{e}</p>
            </div>
            
          })
        }
        {
           arr2.map((e,i)=>{
            return<div>
              <p key={i}>{e.name}</p>
            </div>
          })
        }
        
      </div>
  )
}

export default App 
