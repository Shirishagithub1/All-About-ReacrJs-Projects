import React,{useState, createContext} from 'react'

import './App.css';
import Child1 from './components/Child1';

import Child2 from './components/Child2';

export const GloballData = createContext('');

export const ObjData = createContext('');
function App() {
  const [name,setName] =useState('SIRI');


  const [employee, setEmployee] =useState("Dhanu");

  const [counter, setCounter] =useState(0);
  const [course, setCourse] =useState({
    name : "Jaya",
    study: "ssc",
    course:"maths"
  });

  

  const [show ,setShow] =useState('')

  const changHund =(e) =>{

    setShow(e.target.value);
    setCounter((prevState) =>prevState +1);

  }

  const hundler=() =>{
    inputValue.current.style.color ="red";
    inputValue.current.textContent ="Hello"
  }

  return (
    <>
      <div>

        <input onChange={changHund}type="text" placeholder='enter valid one' />
        <h1>Your Name :{show}</h1>
        <h1>enter name :{counter} times</h1>
        <h1>This is Parent  App</h1>
        <h1>This name  {hundler}</h1>
        <GloballData.Provider value={employee}>
          <ObjData.Provider value ={course}>
        <Child1 name ={name}/>
        <Child2/>
        </ObjData.Provider>
        </GloballData.Provider>
        
        </div>
    </>
  )
}

export default App
