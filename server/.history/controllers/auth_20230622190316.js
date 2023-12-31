import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

/* Register User */

export const register = async (req,res)=>{
    try {
        const{
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*10000),
            impressions:Math.floor(Math.rando)
        

        })
        
    } catch (error) {
        
    }
}