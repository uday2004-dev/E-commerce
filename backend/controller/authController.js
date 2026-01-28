
import User from "../model/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import genToken from "../config/token.js"

export const userRegister = async (req, res) => {

    try {
        console.log("Controller hit")
        const { name, email, password } = req.body

        const existsUser = await User.findOne({
            email
        })


        if (existsUser) {
            return res.status(400).json({ message: "user already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter valid email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter strong password" })
        }


        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashPassword })
        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({ message: "User Register" })


    } catch (err) {

        console.log("error")
        return res.status(500).json({ message: `Register error ${err}` })
    }


}



 export const userLogin = async (req, res) => {

   try{
const {email,password}=req.body
const user=await User.findOne({email})
if(!user){
    return res.status(400).json({message:"User not found"})
}
const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
return res.status(400).json({message:"Password is not matching"})
}
const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({ message: "User Login" })


   }catch(err){

   }
}
