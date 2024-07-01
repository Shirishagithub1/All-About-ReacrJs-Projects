import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

import axios from 'axios';

import useAxios from './UseAxios';
const  App =() => {

 
let fakeAPI ='https://fakestoreapi.com/products';

const [fakeAPIData, setFakeApiData] =useState([])


let makueupAPI='https://makeup-api.herokuapp.com/api/v1/products.json'
  
const  [makeup, setMakeup] =useState([])

let picAPI ='https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer';

const[api,setApi] =useState([])


useEffect(() =>{
  let fakeAPIInfo = async() =>{

   const data = await axios.get(fakeAPI);
   setFakeApiData(data.data)
  }

  const makeupAPI1 = async() =>{ 

    const data = await axios.get(makueupAPI);
    setMakeup(data.data)
   }

   const PlaceHolder = async () =>{

    const data = await axios.get(picAPI);
    setApi(data.data)
   }
   fakeAPIInfo()
   makeupAPI1()
   PlaceHolder()
},[]);

console.log(makeup)



return (
    <>

      <div>
        </div>
    </>
  )
}

export default App
