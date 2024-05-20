import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Default from './Components/Default';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    </div>
  );
}

export default App;
