import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import LandingPage from './routingProject/LandingPage';
import Dashboard from './routingProject/Dashboard';
import Cart from './routingProject/Cart';

function App() {
  const products = [{id: 1, title: 'Product 1', quantity: 1, description: 'This is product 1'}, {id: 2, title: 'Product 2', quantity: 1, description: 'This is product 2'}, {id: 3, title: 'Product 3', quantity: 1, description: 'This is product 3'}, {id: 4, title: 'Product 4', quantity: 1, description: 'This is product 4'}];
  const [cart,setCart] = React.useState([]);
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard products={products} cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
