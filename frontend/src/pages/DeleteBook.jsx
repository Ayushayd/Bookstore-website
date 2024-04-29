import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../ServerUrl';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const {id} = useParams();
  const [loading , setLoading] = useState(false);
  const navigateTo = useNavigate();
  const deleteBook = async () =>{
    try {
      setLoading(true);
      await axios.delete(`${SERVER_URL}/book/${id}`,{
        withCredentials: true
      });
      setLoading(false);
      navigateTo("/");
      console.log("successfully deleted");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    deleteBook();
  }, [id]);

  return (
    <>
     <div className='text-3xl text-center bg-red-300'>DeleteBook</div>;
     {loading ? <Spinner/>: ""} 
    </>
  )
}

export default DeleteBook
