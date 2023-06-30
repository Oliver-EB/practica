import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/index';
import MainTypeScript from './typescript/mainevery';
import MainHooks from './Hooks/contador';

const App = () => {
  return (
    <Router>
  <Menu />
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/TypeScript" element={<MainTypeScript />} />
    <Route path="/Contador" element={<MainHooks/>} />
  </Routes>
</Router>

  );
};

export default App;
