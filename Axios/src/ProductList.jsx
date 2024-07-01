// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id="colors">
      <h2 className='pr-container'>Products</h2>
      <div   className='container'>
        {products.map((product) => (
          <h1 key={product.id}>
            <strong className='name1'>{product.name}</strong> 
            <h1 className='Price1'> Price : ${product.price} </h1>
            
            <img className="image"src={product.image_link} alt="image" />
            <h1 className="description"><spam className="text-primary">About : </spam> ${product.description} </h1>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
