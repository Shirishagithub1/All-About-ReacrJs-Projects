import React, { useState, useEffect } from 'react';

import Header from './assets/Components/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Singup/Signup';
import Products from './Components/Main/Products';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get('https://fakestoreapi.com/products');
        setProducts(data.data);
        console.log('jhdbsj')
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, []);

  return (
    <BrowserRouter>
     <Header />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/user-login' element={ <Login /> }   />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/products' element={ <Products allProducts={products} />} />
          <Route path='*' element={<NotFound /> } />
      </Routes>
      
    </BrowserRouter>

  )
}

export default App;