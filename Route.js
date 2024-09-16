import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './Shop'; // Ensure this import is correct
import Home from './Home'; // Ensure this import is correct
import Cart from './Cart'; // Ensure this import is correct
import Contact from './Contact'; // Ensure this import is correct

const Rout = ({ setCart, cart, shop, Filter, allcatefilter, addtocart }) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />} 
      />
      <Route 
        path="/shop" 
        element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />} 
      />
      <Route 
        path="/cart" 
        element={<Cart cart={cart} setCart={setCart} />} // Ensure `setCart` is passed to Cart if needed
      />
      <Route 
        path="/contact" 
        element={<Contact />} 
      />
      {/* Add other routes here */}
    </Routes>
  );
};

export default Rout;
