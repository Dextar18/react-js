import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Day6 from'./hoocks/Component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day6/>
  </StrictMode>,
)
