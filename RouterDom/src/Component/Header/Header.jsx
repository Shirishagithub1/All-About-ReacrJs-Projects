import React from 'react';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex justify-content-around align-items-center bg-secondery  text-align-center' >
        <div>
            <h1><Link to='/' id="pr-container" className='text-decoration-none  text-center ' >Makeup Products</Link></h1>
        </div>
        <div>
            <ul className='d-flex list-unstyled align-items-center justify-content-center mt-5 bolder ' >
                <li className='ms-3' > <Link to='/products' className='text-decoration-none text-dark' >Products</Link> </li>
                <li className='ms-3' > <Link to='/Login' className='text-decoration-none text-dark' >Login</Link> </li>
                <li className='ms-3' ><Link to='/signup' className='text-decoration-none text-dark' >Signup</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;