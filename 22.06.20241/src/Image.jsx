import React from 'react'
import SubChild from './SubChild';
const Image =(props) =>{
    return(
        <div>
            <h1>Places with images</h1>
           <img height="400px" src={props.pic[0]} alt="Image" /> 
        <SubChild secondPic = {props.pic[1]}/>
        </div>
    )
}



export default Image