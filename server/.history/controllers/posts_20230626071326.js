import Post from "../models/Post.js"
import User from "../models/User.js"

/* Create */
export const createPost = async (req,res)=>{
    try {const {userId,description, picturePath}= req.body;
    const user = await User.find
        
    } catch (error) {
        
    }
}