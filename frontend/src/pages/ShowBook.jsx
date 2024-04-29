import React, { useEffect } from 'react'
import axios from 'axios'
import { SERVER_URL } from '../ServerUrl'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const getBook = async() => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/book/${id}`)
      setBook(resp.data);
      console.log(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    getBook();
  }, [])

  return (
    <>
    <div className='text-3xl text-center'>ShowBooks</div>
      {
        loading? <Spinner/> : (
          <>
            <div className='my-4'>
              <span className='text-2xl mr-4 text-grey-500'>Id</span>
              <span>{book.data._id}</span><br />
            <div/>
              <span>{book.data.title}</span><br />
              <span>{book.data.author}</span><br />
              <span>{book.data.year}</span><br />
            </div>
          </>
        )
      }
      </>
  )
}

export default ShowBook
