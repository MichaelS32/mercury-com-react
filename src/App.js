import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Industries from './components/Industries';
import Layout from './components/Layout';
import Services2 from './components/Services2';
import './index.scss';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='industries' element={<Industries />} />
        <Route path='services2' element={<Services2 />} />
        {/* <Route path='' */}
      </Route>
    </Routes>
  );
}

export default App;
