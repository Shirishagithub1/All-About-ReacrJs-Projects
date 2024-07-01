import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <h1>Hello, This child</h1>
        <h1>Siri {this.props.name}</h1>
      </div>
    )
  }
}
