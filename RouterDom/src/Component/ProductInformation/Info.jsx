import React from 'react' 
import { useLocation} from 'react-router-dom'
const ProductInfo=() =>{

    const {state, }  =useLocation();

    const {image_link,id,name,description ,price} =state

    return (
        <div className='text-center w-50 ms-5 vh-100 shadow' id="info-container">
            <h1 className='fs-1'>Product Info</h1>
            <h2 className='fs-1'>{name}</h2>
            <img src={image_link} alt="im" height="200px" />
<br />

<div className='m-2 mt-4 text-center'>

<button className=' btn btn-warning text-white'> Add Cart</button>
<button className=' btn btn-dark '>Buy now</button>
</div>
            <div>
                <h4>Price :${price}</h4>
                
            </div>
            <div>
                <h6 className='fs-6'>{description}</h6>
            </div>
        </div>
    )
}
export default ProductInfo