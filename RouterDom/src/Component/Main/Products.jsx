import React from 'react'
 

import EachProduct from '../EachProduct/Eachproduct';
const Products =(props) =>{

    const  {allProduct} =props;

    const setProductInfo =allProduct.map((product, index) =><EachProduct key= {index} product={product}/>)
    
    return(
        <div >
            <h1 id="pr-info">Products Info</h1>
            <div className='container'>
                {setProductInfo}
            </div>
        </div>
    )
}
export default Products;