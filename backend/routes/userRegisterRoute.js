import express from "express"
import {userRegister,userLogin, userLogout }from "../controller/authController.js"
// import userLogin from "../controller/authController.js"

const userRoute=express.Router()
userRoute.post("/userRegister",userRegister)
userRoute.post("/userlogin",userLogin)
userRoute.get("/userLogout",userLogout)



export default userRoute