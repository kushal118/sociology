import  jwt  from "jsonwebtoken";
export const verifyToken = async (req,res,next)=>{
    try {
        let token = req.header("Authorization")
        if(!token){
            return res.status(403).send("Access Denied")
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}