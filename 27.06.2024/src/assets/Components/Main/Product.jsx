/* eslint-disable react/prop-types */
import React from 'react';

import EachProduct from '../EachProduct/EachProduct';

const Products = (props) => {

  const { allProducts } = props;


  const eachProductInfo = allProducts.map((product, index) => <EachProduct key={index} product={product} />)

  return (
    <div>
        <h1>Products</h1>
        <div className='d-flex justify-content-around flex-wrap' >
          {eachProductInfo}
        </div>
    </div>
  )
}

export default Products