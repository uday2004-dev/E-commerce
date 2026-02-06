import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav'

const App = () => {
  return (
   <>
   <Nav/>
  <Routes>
<Route path='/signup' element={<Register/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>

  </Routes>
   </>
  )
}

export default App