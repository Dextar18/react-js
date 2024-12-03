import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Crud from './Compo/Crud'
import {store} from './App/Store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Crud/>
    </Provider>
    </>
  )
}

export default App
