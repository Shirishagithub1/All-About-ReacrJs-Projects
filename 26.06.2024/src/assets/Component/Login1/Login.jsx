import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center -aling-items-center vh-100' >
        <form>
            <input className='mt-2' type="text" /> <br />
            <input className='mt-2' type="text" /> <br />
            <button className='btn btn-primary mt-2' >Login</button>
        </form>
    </div>
  )
}

export default Login