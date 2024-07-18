import express from 'express'
import { CreateUser,AllUserData,UpdateUser,deleteUser } from '../controllers/UserController.js';

const userRouter=express.Router()

userRouter.post('/create',CreateUser)
userRouter.get('/get-all',AllUserData)
userRouter.put('/update/:id',UpdateUser)
userRouter.delete('/delete/:id',deleteUser)


export default userRouter;