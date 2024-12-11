import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './app/Store'
import Apii from './fechars/Apii'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (

       <Provider store={store}>
        <Apii/>
      </Provider>
    
  )
}

export default App
