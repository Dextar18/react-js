import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './component/Nav.jsx'
import Slider from './component/Slider.jsx'
import Mediamimage from './component/Mediamimage.jsx'
import Item from './component/Item.jsx'
import P from './component/P.jsx'
import Fotar from './component/Fotar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Slider/>
    <Mediamimage/>
    <Item/>
    <P/>
    <Fotar/>
  </StrictMode>,
)
