import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] =useState(0);

  const [second, setSecond] =useState(0);


  useEffect(() => {
    // seCount((prevState) =>prevState+ 1)
    setSecond(second +1)
  },[])
  const updateCount =() =>{
    setCount(count +1 )

  }
  

  return (
    <div>
      <h1>count : {count}</h1>
      <h1>Second : {second}</h1>
      <button onClick={updateCount}>Click</button>
    </div>
  )
}

export default App
