import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'

// the page code reads gsap / ScrollTrigger from window
window.gsap = gsap
window.ScrollTrigger = ScrollTrigger

createRoot(document.getElementById('root')).render(<App />)
