import express from "express"
import {userRegister,userLogin }from "../controller/authController.js"
// import userLogin from "../controller/authController.js"

const userRoute=express.Router()
userRoute.post("/userRegister",userRegister)
userRoute.post("/userlogin",userLogin)



export default userRoute