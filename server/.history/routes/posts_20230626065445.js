import express from "express";
import {getFeedPosts,getUserPosts,likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

/* Read */
router.get("/",verifyToken,getFeedPosts);
router.get("/:userId/posts", verifyToken,getUserPosts);

/*Update*/
router.patch