import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SERVER_URL } from '../ServerUrl';
import Spinner from '../components/Spinner';
import { MdAddBox } from "react-icons/md";
import {Link} from 'react-router-dom';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import BookCard from '../components/Home/BookCard.jsx'
import BooksTable from '../components/Home/BooksTable.jsx'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("table");

  const fetchBook = async() => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/book`);
      setBooks(resp.data.data);
      setLoading(false);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook()
  },[])

  return (
    <>
      <div className=''>
        <div className='text-3xl text-center bg-blue-300 p-2'>Book Store</div>
        <Link to='/books/create' className='text-sky-800 text-4xl'>
            <MdAddBox />
          </Link>
          <div className='space-x-4 align-middle'>
            <button className='text-1xl text-center bg-blue-300 p-3' onClick={() => setView("table")}>Table</button>
            <button className='text-1xl text-center bg-blue-300 p-3' onClick={() => setView("cards")}>Cards</button>
          </div>

          {loading ? (<Spinner/>): (
              <div className='flex flex-wrap justify-around'>
                {view === 'cards' && (
                <BookCard books={books}/>
            )}

            {view === 'table' && (
                <BooksTable books={books}/>
            )}
          </div>
          )}
        </div>
    </>
  )
}

export default Home
