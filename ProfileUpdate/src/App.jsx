import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Spinner } from "react-bootstrap";


import UsersData from "./Components/UsersData/UsersData";
import UserCreation from "./Components/Signup/UserCreation";

import './App.css'



const App = () => {
  const API = "https://the-techie-crud.onrender.com";

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [userCreation, setUserCreation] = useState(null);

  const [deletedUser, setDeletedUser] = useState(null);

  const [profile, setProfile] = useState(null);

  const [loader, setLoader] = useState(false);


  const [update, setUpdate] = useState(null)

  

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      try {
        const getAllUsers = await axios.get(`${API}/users`, { headers: { cors: 'no-cors' } })
        setUsers(getAllUsers.data.data);
        setLoading(false)
      } catch (error) {
        toast.error(error.message);
        setLoading(false)
      }
    };

    getUsers();
  }, [userCreation, deletedUser, profile, update]);


  const createUser = async (data, setData) => {
    try{
      setLoader(true)

      const userData = await axios.post(`${API}/user-creation`, data);

      console.log(userData);

      if(userData.data){
        setLoader(false)
        setUserCreation(userData.data);
        toast.success("User added successfully..!")
      }


    } catch(e){
      console.log(e);
      setLoader(false)
      toast.error(e.response.data)
    }

  }


  const deleteUser = async (id) => {
    try{
      setLoader(true)
      const userDelation = await axios.delete(`${API}/delete-user/${id}`);

      if(userDelation.status===200){
        setLoader(false)
        setDeletedUser(userDelation.data)
        toast.success("Successfully deleted the user")
      }
    }catch(e){
      setLoader(false)
      toast.error(err.message);
    }

  }


  const profilePicUploader = async (id, image) => {
    try{
      setLoader(true)

      const formData = new FormData();

      formData.append('image', image);

      const uploadProfileOfUser = await axios.post(`${API}/upload/${id}`, formData);

      if(uploadProfileOfUser.data){
        setLoader(false)
        setProfile(uploadProfileOfUser.data)
        toast.success("Successfully uploaded user-profile pic")
      }


    }catch(e){
      setLoader(false)
      toast.error(e.message)
    }

  }
  // setUpdate
  const updateUserInfo = async (userInformation) => {
    try{


      const updateTheUser = await axios.put(`${API}/update-user-info/${userInformation._id}`, userInformation);

      console.log(updateTheUser)

      if(updateTheUser.data){
        setUpdate(updateTheUser.data);
        toast.success("User data is updated..!!")
      }


    }catch(e){
    console.log(e.message);
    toast.error(e.message)
    }
  }



  return (
    <div>
      <div>
        {loader && <h1 className="loader" >Loading......</h1>}
      </div>
      <div className="text-center bg-primary text-white p-2">
        <h1>Profiles </h1>
      </div>
      <UserCreation createUser={createUser} />
      <div className="spinner" >
          {loading && <Spinner className="spinner-1" /> }
      </div>
        <UsersData updateUser = {updateUserInfo} profilePicUploader={profilePicUploader} deleteUser={deleteUser} users={users} />
    </div>
  );
};

export default App;
