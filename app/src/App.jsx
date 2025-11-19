import React from 'react'
import Contact from './Contact.jsx';
import Count from './Count.jsx';

export default function App() {
  let name = "Dipak";
  return (
    <div>
      <h1>My name is Dipak</h1>
      <Contact fn = {name}/>
      <Count />
    </div>
  )
}
