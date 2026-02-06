import React from 'react'
import logo from "../assets/fevicon.png"

const Nav = () => {
  return (
  <>
  <header>


       <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">


        <div className="w-[30%] flex items-center justify-start gap-[10px]">

            <img className='w-[40px]' src={logo} alt="" />
            <h1 className='text-[25px] text-[black] font-sans'>Shopping cart</h1>
        </div>
       </div>
  </header>




   
  </>
  )
}

export default Nav