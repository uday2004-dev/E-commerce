import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRegisterRoute.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 6000



app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", userRoute)
app.get("/", (req, res) => {
  res.send("Home page")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)


  connectdb()
})



