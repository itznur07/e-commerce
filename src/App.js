import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import CartDetails from './Components/CartDetails';
import Layout from './Components/Layout';
import WishList from './Components/WishList';
import Contact from './Pages/Contact';
import Home from './Pages/Home';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
