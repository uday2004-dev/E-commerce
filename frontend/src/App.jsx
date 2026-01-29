import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
   <>
  <Routes>
<Route path='/signup' element={<Register/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>

  </Routes>
   </>
  )
}

export default App