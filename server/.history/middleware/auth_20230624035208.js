import  jwt  from "jsonwebtoken";
export const verifyToken = async (req,res,next)=>{
    try {
        let token = req.header("Authorization")
        if(!token){
            return res.status(403).send("Access Denied");
        }
        if(token.startsWith("Bearer ")){
            toem
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}