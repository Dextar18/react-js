import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day10 from './Day10/Day10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Day10/>
    </>
  )
}

export default App
