import React,{useState} from 'react'

const UserList =(props) =>{

const {people}  =props;
    const [users, setUsers] =useState(people);

    return (
        <div>
           <h1>Company Employees</h1>
           {users.map((user) => <h1>{user}</h1>)}   
        </div>
    )
}
export default UserList;