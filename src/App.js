import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Navbar from './Navbar';

const App = () => {
  return (
    
      <>
      <Router>
        <div className="main-page">
        < Navbar/>
          <Routes>
          <Route key="Home" path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  </>
    
  )
}

export default App