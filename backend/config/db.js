import mongoose, { mongo } from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (err) {
        console.log("DB error")
    }

}

export default connectdb;