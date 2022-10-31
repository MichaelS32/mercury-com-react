import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Industries from './components/Industries';
import Layout from './components/Layout';
import Services from './components/Services';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='industries' element={<Industries />} />
        <Route path='services' element={<Home><Services /></Home>} />
        {/* <Route path='' */}
      </Route>
    </Routes>
  );
}

export default App;
