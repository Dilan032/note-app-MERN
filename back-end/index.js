import express from "express"
import authRouter from './routes/auth.js'
import connecToMongoDB from "./database/db.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)

app.listen(3000, () =>{
    connecToMongoDB()
    console.log(" 😎👉 Server is running on port 3000");
    
})