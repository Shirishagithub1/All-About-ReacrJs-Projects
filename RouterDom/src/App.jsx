import React from 'react'

import {useState, useEffect} from 'react'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'

import Header from './Component/Header/Header'

import Products from './Component/Main/Products';
import Home from './Component/Home/Home';
import NotFound from './Component//NotFound/Notfound'

import Info from './Component/ProductInformation/Info/'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import axios from 'axios'
const App =() =>{

  const [products,setProducts] =useState([])

  useEffect(() =>{
    const getProducts =async () =>{
      try{

        const data =await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        setProducts(data.data) 
          
      }catch(error){
        console.log(error)

      }
    }
    getProducts()
  },[])
  return(

    <div>

<BrowserRouter>
<Header/>
<Routes>
  <Route  path='/' element={ <Home/>}/>
  <Route  path='/Login' element={ <Login/>}/>
  <Route  path='/Signup' element={ <Signup/>}/>
  <Route  path='/Products' element={ <Products allProduct={products}/>}/>
  <Route path='/product/:id' element ={< Info/>}/>
  < Route  path='*' element={ <NotFound />}/>



  </Routes>
</BrowserRouter>
      
    </div>
  )
}
export default App