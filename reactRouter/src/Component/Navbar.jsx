import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
export default function Navbar() {
    
  return (
    <div>
      <h1>Navbar</h1>
      <Link to = "/Home">Home</Link> |
      <Link to = "/About">About</Link> |
      <Link to = "/Contact">Contact</Link>

      
    </div>
  )
}
