import React from 'react'
import Navbar from './Component/Navbar.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import { Route , Routes} from 'react-router-dom'


export default function App() {
  
  return (
    <div>
      <h1>Jai Maa Dakhinakali</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
     
     
    </div>
  )
}
