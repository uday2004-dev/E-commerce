import React from 'react'
import Logo from "../assets/fevicon.png"
import { useNavigate } from 'react-router-dom'
import google from "../assets/googleimg.png"
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from 'react';

import { IoEyeSharp } from "react-icons/io5";
const Login = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    return (
        <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">

            {/* HEADER */}
            <div
                className='h-[80px] flex items-center gap-3 px-8 cursor-pointer'
                onClick={() => navigate("/")}
            >
                <img className='w-[40px]' src={Logo} alt="" />
                <h1 className='text-[22px]'>Shopping Cart</h1>
            </div>

            {/* CENTER CONTENT */}
            <div className="flex flex-col items-center justify-center gap-6 h-[calc(100vh-80px)]">

                <span className='text-[25px] font-semibold'>Registration Page</span>
                <span className='text-[19px]'>Welcome to Shopping Cart , Please register first than order</span>

                {/* FORM BOX */}
                <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <form action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                        <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
                            <img className="w-[20px]" src={google} alt="" />Registration with Google
                        </div>
                        <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">

                            <div className="w-[40%] h-[1px] bg-[#969635]"> </div>



                            OR

                            <div className="w-[40%] h-[1px] bg-[#969635]"> </div>
                        </div>
                        <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative ">

                        
                            <input
                                type="text"
                                className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none"
                                placeholder="User Email"
                            />
                            <input
                                type={show ? "text" : "password"}
                                className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none"
                                placeholder="User Password"
                            />


                            {show ? (
                                <BsFillEyeSlashFill
                                    className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[56%] "
                                    onClick={() => setShow(prev => !prev)}
                                />
                            ) : (
                                <IoEyeSharp
                                    className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[56%] "
                                    // onClick={() => setShow(true)}
                                    onClick={() => setShow(prev => !prev)}
                                />
                            )}





                            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer'>LogIn</button>
                            <p className="gap-[10px]">New account?  <span className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer" onClick={() => navigate("/signup")}>Create New Account</span></p>
                        </div>



                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login