import React from 'react'
 
import { Link } from 'react-router-dom'
const EachProduct = (props)=> {

    const {image_link,id,name,rating,price,description} =props.product
    return(
        <div className="border shadow" id= "pConntainer">
            <img id ="img"src={image_link} alt="" height="200px" />
            <div>
                <h6>Product id: {id}</h6>
                <h6 className='text-secondary'>{name}</h6>
                <h6 className='text-danger'>  &#x20b9; {price}</h6>
               { rating && <h6 >Rating :{rating }</h6>}
            </div>
            <p className='descr'> {description}</p>
            <Link to= { `/product/${id}`}  state={props.product} className='btn ' id ="btn4">Click For More Info</Link>
        </div>
    )
}
export default  EachProduct