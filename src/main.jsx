import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game.jsx' // <-- Change here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game /> {/* <-- Change here */}
  </StrictMode>,
)
