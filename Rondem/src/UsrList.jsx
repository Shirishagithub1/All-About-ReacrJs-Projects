import React,{useState} from 'react';
const UserList =(props) =>{

const {people} =props;
const [students,setStudents] =useState(people)


    
    return(
<div>
<h1>Hiiiii...</h1>
{students.map((student,index) => <h1 key= {index}>{student} </h1>)}

</div>
    )
}
export default  UserList;
