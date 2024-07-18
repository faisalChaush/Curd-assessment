import express from 'express'
import 'dotenv/config'
import ConnectDB from './db/connectDB.js'
import userRouter from './routes/UserRouter.js'
const port = process.env.PORT
ConnectDB()
const app = express()
app.use(express.json())
app.use('/api/user',userRouter)

app.listen(port , (req ,res)=>{
  console.log('user post started at '+ port)
})