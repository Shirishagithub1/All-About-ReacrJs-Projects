
import React, { useState } from 'react'
import UserList from './UserList';

const App =() =>{


const empoloyee =["siri","jay","dhan","sun","nani"]

let [name, setName] = useState("SIRI");
// let index0= name[0]
// let setIndex0=name[1];

let [inputName,setInputName]  =useState('');


const changeHundler=()=>{

  setName((preState) => preState ="ALE")
 }



 
 const changeName=(event)=>{
  setInputName((preState) => event.target.value)
 }

 const emailHundler =(event)=>{
  console.log(event.target.value)}
  
const changeHundler1 =(event)=>{
console.log(event.target.value)}



  return (
    <div>
<h2>ELECTRIC</h2>
<UserList people  ={empoloyee}/>
      <h1>Hi,Students  {name}</h1>
      <input type="text" onClick={emailHundler} placeholder='enter here'/>
<button onClick={changeHundler1}>Click me Here</button>
      <br /><br />
      <button onClick={changeHundler}>Click Here</button>
      <br /><br />
      <h1>Hello, Hyderabad {inputName}</h1>
      <input onChange={changeName} type="text" placeholder='enter name' />

    </div>
    
  )
}
export default App;