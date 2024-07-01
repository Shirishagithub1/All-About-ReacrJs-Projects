import {useState, useEffect} from 'react'

import axios from 'axios';

const useAxios =(API) =>{
    
    const [data, setData] =useState([]);

    useEffect(() =>{
        const apiData =async () =>{
            const datInfo =await axios.get(API);
            setData(datInfo.data)
        }
        apiData()

    },[API]);
    return data;

}
export default  useAxios
