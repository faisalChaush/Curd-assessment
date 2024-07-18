import mongoose from "mongoose";

const ConnectDB=async()=>{
    try {
    await mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    console.log('db connection successfully')
    } catch (error) {
        console.log('error while connecting db')
    }
}

export default ConnectDB;

