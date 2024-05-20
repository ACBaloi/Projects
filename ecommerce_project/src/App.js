import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Details from './Components/Details';
import { Routes, Route } from 'react-router-dom';
import Default from './Components/Default';

function App() {
  return (
      <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details' element={<Details />} />
          <Route path='*' element={<Default />} />
      </Routes>
  );
}

export default App;
