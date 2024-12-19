import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deshbord from './Firebace/Deshbord'
import SingUp from './Firebace/SingUp'
import LogIn from './Firebace/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={SingUp}></Route>
      <Route path='LogIn' Component={LogIn}></Route>
      <Route path='/Deshbord' Component={Deshbord}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
