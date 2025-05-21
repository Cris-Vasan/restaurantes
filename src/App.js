import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/buscar">Buscar</Link> | 
        <Link to="/nuevo">Nuevo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/nuevo" element={<NewRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
