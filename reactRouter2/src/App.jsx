import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'

export default function App() {
  
  return (
      <div className="app-root">
        <header>
          <h1>React Router — Demo</h1>
        </header>

        <Navbar />

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </div>
  )
}

