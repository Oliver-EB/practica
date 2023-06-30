import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/index';

const App = () => {
  return (
    <Router>
  <Menu />
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/contacto" element={<Menu />} />
  </Routes>
</Router>

  );
};

export default App;
