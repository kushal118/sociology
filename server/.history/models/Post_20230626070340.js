import mongoose from "mongoose";
const postSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        
        firstName:{
            type:String,
            required:true,
        },
        :{
            type:String,
            required:true,
        },
        

    }
)