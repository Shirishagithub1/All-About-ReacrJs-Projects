import React from 'react'

import {useSelector , useDispatch}  from 'react-redux'
import { decrement,increment } from './Redux/Reducer/Couter'

const App= () =>{

  const count =useSelector((state) =>state.counter)
  
  const dispatch =useDispatch();
  const incrementBtn =() =>{
dispatch(increment())
  };
  const decrementBtn =() =>{
dispatch(decrement())
  };

  return (
    <div>
<h1 className='text-center'>Counter App</h1>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='text-center'>
<h1>Counter  : {count}</h1>
    <button onClick={incrementBtn}className='btn btn-primary ml-3'>+</button>
    <button onClick={decrementBtn} className='btn btn-dark'>-</button>
</div>
        </div>
    </div>
  )
}
export default App;