if (!localStorage.getItem('cleaned')) {
  localStorage.removeItem('leaderboard')
  localStorage.setItem('cleaned', 'true')
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
