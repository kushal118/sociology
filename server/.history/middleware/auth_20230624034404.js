import  jwt  from "jsonwebtoken";
export const verifyToken = async (req,res,next)=>{
    try {
        let token = req.header("Authorization")
        if(!token){
            return res.status
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}