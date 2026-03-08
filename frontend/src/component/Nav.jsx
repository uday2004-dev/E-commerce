import React from 'react'
import logo from "../assets/fevicon.png"

const Nav = () => {
  return (
    <div className='w-screen h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
      <div className='w-[30%] flex items-center justify-start gap-[10px]'>
        <img src={logo} alt=""  className='w-[30px] '/>
        <h1 className=' text-[25px] text-[black] font-sans'>Shopping Cart</h1>
      </div>
    </div>
  )
}

export default Nav