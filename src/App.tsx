import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Item from './Pages/Item';
import  ShoppingCartProvider from './Context/ShoppingCartContext';
import React from 'react';


function App() {

  return (
  <ShoppingCartProvider>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path=":id" element={<Item />} />
      </Route>
    </Routes>
  </ShoppingCartProvider>
  )
}

export default App
