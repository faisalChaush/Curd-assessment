import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be required']
    },
    phone:{
        type:Number,
        required:[true,'phone must be required']
    },
    email:{
        type:String,
        required:[true,'email must be required']
    },
    password:{
        type:String,
        required:[true,'password must be required']
    }
})


const userModel=mongoose.model('user',userSchema)


export default userModel;