import React from 'react';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex justify-content-around align-items-center bg-warning text-white' >
        <div>
            <h1><Link to='/' className='text-decoration-none text-dark' >Babu online site</Link></h1>
        </div>
        <div>
            <ul className='d-flex list-unstyled align-items-center justify-content-center' >
                <li className='ms-3' > <Link to='/products' className='text-decoration-none text-dark' >Products</Link> </li>
                <li className='ms-3' > <Link to='/user-login' className='text-decoration-none text-dark' >Login</Link> </li>
                <li className='ms-3' ><Link to='/signup' className='text-decoration-none text-dark' >Signup</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;