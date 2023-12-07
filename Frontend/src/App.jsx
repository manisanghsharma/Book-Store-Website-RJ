import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home.jsx'
import CreateBook from './Components/CreateBook.jsx'
import ShowBook from './Components/ShowBook.jsx'
import EditBook from './Components/EditBook.jsx'
import DeleteBook from './Components/DeleteBook.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete:id' element={<DeleteBook/>}/>
      </Routes>
    </>
  )
}

export default App