import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Filter from './Compo/Filter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filter/>
  </StrictMode>,
)
