import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        firstName :{
            type:String,
            required:true,
            min:2,
            max:50
        
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true,

        },
        {
            type:String,
            require:true,
            
            max:50
        }


    }
)