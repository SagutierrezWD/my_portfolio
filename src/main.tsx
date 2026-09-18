import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './about.tsx'
import ContactMe from './contactMe.tsx'
import { Navbar } from './nav.tsx'

const menuItem = [
  {label:"Home", href:"/home"},
  {label:"About Me", href:"/about_me"},
  {label:"Contact Me", href:"/contact_me"}
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar logo="My portfolio" items={menuItem}/>
    <App />
    <About />
    <ContactMe />
  </StrictMode>,
)
