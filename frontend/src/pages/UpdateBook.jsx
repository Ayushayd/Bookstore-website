import { useEffect, useState } from "react";
import axios from 'axios'
import { SERVER_URL } from '../ServerUrl.js'
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [loading, setloading] = useState(false);
  const navigateTo = useNavigate();
  const {id} = useParams();
3
  const fetchBook = async () => {
    try {
      setloading(true);
      const {data} = await axios.get(`${SERVER_URL}/book/${id}`);
      console.log(data.data);
      setTitle(data.data.title);
      setAuthor(data.data.author);
      setYear(data.data.year);
      setloading(false);
      // navigateTo('/');
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchBook();
  },[]);

  const handleSave = async(e)=>{
    e.preventDefault();
    const updateData = {
      title, author, year
    }
    try{
      const {resp} = await axios.put(`${SERVER_URL}/book/${id}`, updateData, {
        withCredentials: true
      });
      setloading(true);
      navigateTo('/');
      console.log(resp);
    }
    catch (error){
      console.log(error);
      setloading(false);
    }
  }

  return (
  <>
  <div className="text-3xl text-center bg-red-300">UpdateBook</div>;
  <div className="my-4 flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto">
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-600">Title</label>
    <input
    type="text"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    className="border-2 border-gray-500 px-4 py-2 w-full"
    />
  </div>
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-600">Author</label>
    <input
    type="text"
    value={author}
    onChange={(e)=>setAuthor(e.target.value)}
    className="border-2 border-gray-500 px-4 py-2 w-full"
    />
  </div>
  <div className="my-4">
    <label className="text-xl mr-4 text-gray-600">Publish year</label>
    <input
    type="text"
    value={year}
    onChange={(e)=>setYear(e.target.value)}
    className="border-2 border-gray-500 px-4 py-2 w-full"
    />
  </div>
  <button className="p-2 bg-sky-700 m-8 text-white" onClick={handleSave}>Save</button>
  </div>
  </>
  )
};
export default UpdateBook;