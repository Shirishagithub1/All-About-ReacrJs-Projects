
import React, {useContext, useState } from 'react'

import { GloballData ,ObjData } from '../App';



function SubChild1({name}) {
    const data =useContext(GloballData);

    const personObj =useContext(ObjData)
  return (
    <>
      <div>
        <h1>This is  First SubChild for App.jsx {name } and {data}</h1>
        <h1>Child for the Child 1 of App.jsx</h1>
        </div>
    </>
  )
}

export default SubChild1;
