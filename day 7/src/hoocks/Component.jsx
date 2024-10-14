import React , { useEffect, useState} from 'react'

export default function UseEffect() {
    const [num, setNum] = useState(0)
  
    useEffect(()=>{
        //MOUNTING 
        console.log("mounting");
    },[num])
  
  
    return (
    <div>
        <h1>UseEffect</h1>
        <h1>{num}</h1>
        <button onClick={()=> setNum(num + 1)}>+</button>
    </div>
  )
}
