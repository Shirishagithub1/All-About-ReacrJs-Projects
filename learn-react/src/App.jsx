import React ,{useState} from 'react';
import Info from './Info';


import './App.css';




const App= ()  => {

  const [state, setState] = useState(''); 
    
  const handler = (event) => { 
      
    setState(event.key); 
  }; 
 let getName =useState("Ale");
 const student =getName[0];
 const setStudent =getName[1];

const ClickHundle =(event) =>{
  setStudent((prevState) =>prevState="Sai" );
}

  let name ="siri";

  


const changeHundler =(event) =>{
  console.log(event.target.value)
}

const emailHundler =() =>{
console.log(event.target.value)}
  
const changeHundler1 =(event) =>{
  console.log(event.target.value)
}

use
let studentName ="siri";
const changeName=(event) =>{

}


let getName1 =useState("siri");

const student1 =getName1[0];

const setStudent1 =getName1[1];

const changes=(event) =>{
  setStudent1((prevState) => prevState ="ggg")
}

  return (
    <div>
      <h1>Hey HI sir ,{student1}</h1>
      <button onChange={changeName}>Don'tClick</button>
<button onClick={changes}>change</button>
<input type="text" onClick={changeHundler1} placeholder="enter valid name" />


<h1>Hi Sirisha</h1> 
        
<p>Key pressed is: {state}</p> 
  
        
      <input type="text" onKeyPress={(e) => handler(e)} /> 


      <h1>Hey {student}</h1>
<h1 style ={{color : "red"}}>Events</h1>


<input type="mail" onChange={emailHundler}  placeholder='enter Volid mail'/>
<br /><br />
<input type="text" onChange={changeHundler} placeholder='enter something' />
     

     <br />
     <br />
     <br />
      <button onClick={ClickHundle}>Click me to change name</button>   
    </div>
  )

};






export default App;