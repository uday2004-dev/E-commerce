import User from "../model/userModel.js"



export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId).select("-password")
        if (!user) {
            return res.status(400).json({ message: "user is not found" })
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "getCurrentUser error" })
    }

}