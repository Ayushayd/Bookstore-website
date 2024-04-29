import { useState } from "react";
import axios from 'axios'
import { SERVER_URL } from '../ServerUrl.js'
import {useNavigate} from 'react-router-dom'

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setyear] = useState('');
  const [loading, setloading] = useState(false);
  const navigateTo = useNavigate();
  const handleSave = async()=>{
    const data ={title,author,year};
    try{
      await axios.post(`${SERVER_URL}/book`,data);
      setloading(true);
      navigateTo('/')
      console.log(data);
    }
    catch (error){
      console.log(error);
      setloading(false);
    }
  }
  return (
  <>
  <div className="text-3xl text-center bg-red-300">CreateBook</div>;
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
    onChange={(e)=>setyear(e.target.value)}
    className="border-2 border-gray-500 px-4 py-2 w-full"
    />
  </div>
  <button className="p-2 bg-sky-700 m-8 text-white" onClick={handleSave}>Save</button>
  </div>
  </>
  )
};
export default CreateBook;