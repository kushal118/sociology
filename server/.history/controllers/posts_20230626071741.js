import Post from "../models/Post.js"
import User from "../models/User.js"

/* Create */
export const createPost = async (req,res)=>{
    try {const {userId,description, picturePath}= req.body;
    const user = await User.findById(userId)
    const newPost = new Post({
        userId,
        firstName :user.firstName,
        lastName:user.lastName,
        location:user.location,
        description,
        userPicturePath: user.picturePath ,
        picturePath,
        likes:
    })
        
    } catch (error) {
        
    }
}