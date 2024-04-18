import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' exact Component={Home}/>
      </Routes>
      
    </div>
  );
}

export default App;
