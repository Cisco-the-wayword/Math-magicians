import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="calculator" element={<Calculator />}> </Route>
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;