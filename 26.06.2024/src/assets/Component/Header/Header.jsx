import React from'react'

const Header =() =>{
    return(

        <div className=' bg-danger text-center d-flex justify-conten-around  align-items-center'>
            <div>
                <h1> Girls Makeup Shopping</h1>
            </div>
            <div>
                <ul className='d-flex list-unstyled align-items-center justify-content-center'>
                    <li className='ms-3'> Prodcuts</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
    )
}
export default Header