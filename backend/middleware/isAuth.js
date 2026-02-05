import jwt from "jsonwebtoken"

const isAuth=(req,res,next)=>{
    try{

        let {token}=req.cookies
        if(!token){
            return res.status(400).json({message:"User not have token"})
        }

        const verifyToken=jwt.verify(token,process.env.JWT_SECRET)

        if(!verifyToken){
            return res.status(400).json({message:"User not have valid token"}) 
        }
req.userId=verifyToken.userId
next()


    }catch(err){
  console.log("isAuth error", err)
    return res.status(500).json({ message: "isAuth error" })
    }

}

export default isAuth