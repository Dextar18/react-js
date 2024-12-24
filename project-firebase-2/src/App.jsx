import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Deshboard from "./Component/Deshboard"
import LogIn from "./Component/LogIn"
import SingUp from "./Component/SingUp"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={SingUp}></Route>
      <Route path='LogIn' Component={LogIn}></Route>
      <Route path='/Deshboard' Component={Deshboard}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
