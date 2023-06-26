import Post from "../models/Post.js"
import User from "../models/User.js"

/* Create */
export const createPost = async (req,res)=>{
    try {const {userId,description, picturePath}= req.body;
    const user = await User.findById(userId)
    const newPost = ner Post({
        userId,
        first 
    })
        
    } catch (error) {
        
    }
}