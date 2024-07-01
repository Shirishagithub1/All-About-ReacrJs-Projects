import React, { Component } from "react";


import Child from "./Child";

class App extends Component{

  constructor(){
    super();
    this.state = { name : 'Hello Jay' }
    this.changeName = this.changeName.bind(this)
  }

 changeName(e){
    console.log(e)
    this.setState({
      name : "Hi"
    })
  }




  render(){
    return(
    <div>
      <h1>{this.state.name}</h1>
      <h1>Hello</h1>

      <button onClick={this.changeName} >Click</button>
      <Child  name={this.state.name} />
    </div>
    
  )
  }

}


export default App;


