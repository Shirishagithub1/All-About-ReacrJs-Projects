/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './Users.css';

import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const UsersData = ({ users, deleteUser, profilePicUploader, updateUser: updateUserData }) => {

    
    const [show, setShow] = useState(false);

    const [updateUser, setUpdateUser] = useState({
        firstName: '',
        lastName : '',
        email : '',
        mobile : '',
        address: '',
        _id: ''
    });

    const deleteUserHandler = (id) => {
        deleteUser(id);
    }

    const imageUploader = (e, id) => {
        const image = e.target.files[0];
        profilePicUploader(id, image)
    }
   

    const handleClose = () => {
        updateUserData(updateUser)
        setShow(false);
    }
    const handleShow = (user) =>{
        setShow(true);

        setUpdateUser({
            firstName: user.firstName,
            lastName : user.lastName,
            email : user.email,
            mobile : user.mobile,
            address: user.address,
            _id : user._id
        })
    }

    const updateHandler = (e) => {

        const { name, value } = e.target;

        setUpdateUser({
            ...updateUser,
            [name] : value
        })


    }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className='text-center w-50 m-auto'>
            <input value={updateUser.firstName}  onChange={updateHandler} name='firstName'  className='form-control user-creation' type="text" placeholder='First name' />
            <input value={updateUser.lastName}  onChange={updateHandler} name='lastName'  className='form-control user-creation' type="text" placeholder='Last name' />
            <input value={updateUser.email}  onChange={updateHandler} name='email'  className='form-control user-creation' type="text" placeholder='Email' />
            <input value={updateUser.mobile}  onChange={updateHandler} name='mobile' className='form-control user-creation' type="text" placeholder='Mobile' />
            <input value={updateUser.address}  onChange={updateHandler} name='address' className='form-control user-creation' type="text" placeholder='Address' />
        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <div className='grid-container' >
        { users.map((each, i) => {
            const {firstName, lastName,mobile,address, email, profilePic, _id  } = each
            return (
                <div key={i} className='d-flex justify-content-evenly align-items-center  profile-conatainer' >
                    <div>
                    {profilePic ?  <img className={profilePic ? 'profile' : '' }  src={profilePic} alt="pic" /> : <CgProfile size={250} />}
                    </div>
                    <div>
                        <h2>{firstName + lastName}</h2>
                        <h4>Phone: {mobile}</h4>
                        <h4>Email : {email}</h4>
                        <h6>Address : {address}</h6>
                        <input onChange={(e) => imageUploader(e, _id)} type="file" className='form-control' />
                        <div className='d-flex justify-content-between' >
                            <Button className=' m-2 btn btn-warning' variant="primary" onClick={() => handleShow(each)} >Update</Button>
                            <button onClick={() => deleteUserHandler(_id)} className=' m-1 btn btn-dark' >Delete</button>
                        </div>
                    </div>
                </div>
            )
        }) }
    </div>
    </>
  )
}

export default UsersData