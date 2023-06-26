import mongoose from "mongoose";
const postSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required
        }
    }
)