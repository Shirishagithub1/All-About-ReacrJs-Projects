

import React from 'react'

import SubChild1 from './SubChild1';


function Child1({name}) {

  return (
    <>
      <div>
        <h1>This is  First Child1</h1>
        <SubChild1 name ={name}/>
        </div>
    </>
  )
}

export default Child1
