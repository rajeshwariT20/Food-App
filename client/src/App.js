import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
