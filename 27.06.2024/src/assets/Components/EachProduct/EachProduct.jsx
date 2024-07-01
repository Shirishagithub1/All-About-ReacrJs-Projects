/* eslint-disable react/prop-types */
import React from 'react'

const EachProduct = (props) => {

    const { image, category, price, description, title, rating } = props.product
  return (
    <div className='border w-25 text-center p-3 m-1' >
        <img src={image} height='150px' alt="image" />

        <h4>Title : {title}</h4>
        <div>
            <h6>{category}</h6>
            <h6>{price}</h6>
            <h6>{rating.rate}</h6>
        </div>

        <p>{description}</p>

        <button className='btn btn-success' >View More info</button>

    </div>
  )
}

export default EachProduct;