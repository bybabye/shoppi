import express from "express";

import { addUser } from "../controllers/UserControllers.js";



const UserRouter = express.Router(); 

UserRouter.post('/user/add',addUser);


export default UserRouter;