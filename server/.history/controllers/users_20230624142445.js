import User from "../models/User.js";


/* READ */
export const getUser = async (req,res)=> {
    try {
        const {id}=req.params;
        const user = await User.findById
        
    } catch (error) {
        
    }
}