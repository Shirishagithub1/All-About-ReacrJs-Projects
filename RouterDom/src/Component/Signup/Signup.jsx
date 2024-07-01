import React from 'react'

const Signup =() =>{
    return(
        <div id ="signup"className='d-flex justify-content-center align-items-center'>
            
            <form>
            <img height="100px" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />

                <br />
                <input lassName='mt-2' type="text" placeholder='Enter something'/> <br /> 
<br />
                <input  lassName='mt-2' type="text" placeholder='Enter something' /> <br /><br />
                <button id ="btn-1"className='btn btn-dark'>Signup</button>

            </form>
        </div>
    )
}
export default Signup