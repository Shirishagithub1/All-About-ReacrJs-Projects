import React, { useState , useEffect} from 'react'
import './App.css'

function App() {
 const [count, setCount] =useState(0);
  return (
   <div>
    <h1>count :{count}</h1>
      <button>Count</button>
   </div>
  )
}

export default App
