import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

/* Register User */

export const register = async (req,res)=>