import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Red from './Red'
import Blue from './Blue'
import Home from './Home'



const App = () => {

  return (
    <>
    
    <div id="container">
      
      <div id="navbar">
        <Link to="/Blue">hello blue</Link>
        <Link to="/Red">hello red</Link>
        <Link to="/">Hello Home</Link>
      </div>

      <div id="main-section">
        <Routes>

          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </div>
      
    </>
  )
}


export default App
