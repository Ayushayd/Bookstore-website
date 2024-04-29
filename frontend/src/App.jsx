import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import UpdateBook from './pages/UpdateBook.jsx'
import AboutBook from './pages/About.jsx'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/books/create' element={<CreateBook/>}></Route>
          <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
          <Route path='/books/about/:id' element={<AboutBook/>}></Route>
          <Route path='/books/:id' element={<ShowBook/>}></Route>
          <Route path='/books/update/:id' element={<UpdateBook/>}></Route>
        </Routes>      
    </div>
  )
}

export default App
