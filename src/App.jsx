// this file sets up routing for the react app using hashrouter so github pages can handle routes properly
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
