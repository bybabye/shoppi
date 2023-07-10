import express from "express";

import { addUser, updateProfile } from "../controllers/UserControllers.js";



const UserRouter = express.Router(); 

UserRouter.post('/user/add',addUser);
UserRouter.post('/user/update',updateProfile)

export default UserRouter;