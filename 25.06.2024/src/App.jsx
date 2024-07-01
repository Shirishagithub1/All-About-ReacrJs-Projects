import { useState, useMemo } from "react";

import {caluclations} from './Calculations'
const App =() =>{
  

  const [count, setCount] =useState(0);

  const [number, setNumber] =useState(caluclations());
  const increment=() =>{
    setCount((preState) =>preState +1  )
  }


const lastIndex=  useMemo(() =>{

  console.log(number[0])
    return number.find((obj) => obj.index ===199999);
  },[number])
  const btnHund = () =>{
    setCount((prevState) => prevState +1)
  }
    
  
  return(
    <div>
      <h1>
        Count : {count}
      </h1>
      <h1>last index : </h1>
      <button onClick={increment}>ClickHere</button>
    </div>
  )
}
export default App;