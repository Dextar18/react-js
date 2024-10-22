import React from 'react'
import { useState } from 'react'

export default function Day10() {
 
 const [cat, setCat] = useState("");
 const [name, setName] = useState("");
 const [pass, setPass] = useState("");
 const [mail, setMail] = useState("");
 const [phonenumber, setPhoneNumber] = useState("");
 const [error, setError] = useState("");
 const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
 const handlesubmit = (e) => {
    e.preventDefault();
    if(!validatePhoneNumberRegex.test(validatePhoneNumberRegex)){
        setError("phone number is incorrect")
    } else {
        setError("")
    }
 }
    return (
    <div>
        <h1>DaynamicFormCom</h1>
        <form>
            <input type="text" placeholder='enter a name' onChange={(e) => setName(e.target.value)}/>
            <input type="password" placeholder='enter a password'  onChange={(e) => setPass(e.target.value)}/>
            <input type="email"  placeholder='enter a email'  onChange={(e) => setMail(e.target.value)}/>
            <input type="text" placeholder='enter a phoneNumber'  onChange={(e) => setPhoneNumber(e.target.value)}/>
            {error && <span style={{color: "red"}}>{error}</span>}
            <select onClick={(e) => setCat(e.target.value)}>
                <option hidden>category</option>
                <option value="clothes">clothes</option>
                <option value="shoes">shoes</option>
                <option value="electronics">electronics</option>
            </select>
            {cat == "clothes" && <input type='text' placeholder='enter return period'></input>}
            <button type='submit'>subim</button>
        </form>
    </div>
  )
}
1