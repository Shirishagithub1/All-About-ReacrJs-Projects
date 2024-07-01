import { useState } from 'react'
import './App.css';

import UserList from './UsrList'

const App =() => {
  let  [name, setName] = useState("siri");


const person=["siri","jaya"];


  let [user,setUser]= useState('');




  const changeHundle=(event) =>{

    setName((prevState) =>prevState ="ale")
  }
  let [num ,setNum] =useState(10);

  const changeHundle1 =() =>{
    setNum((prevState) =>prevState + 12);
  }

  const changeNamehere =(event) =>{
    setUser((prevState) =>event.target.value)
  }
  return (
    <>
<div>

  <UserList  people = {person}/>
  <h1>Hey Hi {user} </h1>
  <input type="text " onChange={changeNamehere} placeholder='enter something here' />
</div>
      <div>
        <h1>HEY CAL </h1>
        <h1>Heeloo here {num}</h1>

        <button onClick={changeHundle1}>Clickme</button>
        </div>
        
    </>
  )
}

export default App
