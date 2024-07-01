
import React, {useContext} from 'react';

import { GloballData, ObjData } from '../App';


function Child2() {


  const personDatas =useContext(GloballData);

const drSiri =useContext(ObjData)
  console.log(personDatas, personDatas)
  return (
    <>
      <div>
        <h1>This is Second Child2</h1>
        </div>
    </>
  )
}

export default Child2;
