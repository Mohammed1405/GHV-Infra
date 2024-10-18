import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';  // Ensure the path matches the case of the actual file
import Contact from './pages/contact';  // Ensure the path matches the case of the actual file
import WhatWeDo from './pages/WhatWeDo';
import Clients from './pages/Clients';
import './App.css';  // Import the new CSS file for styling

function App() {
  return (
    <Router>
      <div>
        {/* Header Section */}
        <header className="header-section">
          <div className="header-content">
            <div className="header-text">
              <h1>GHV Infra Projects Limited</h1>
              <p>Your Gateway to Infrastructure Excellence</p>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
