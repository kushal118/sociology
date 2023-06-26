import  jwt  from "jsonwebtoken";
export const verifyToken = async (req,res,next)=>{
    try {
        let token = req.header("Authorization")
        
    } catch (error) {
        res.status(500).json({er})
    }
}