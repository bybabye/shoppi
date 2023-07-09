import express from "express";
import {  getCategories, getCategoriesForUid, testapi } from "../controllers/OpenControllers.js";



const OpenRouter = express.Router(); 

OpenRouter.get('/testapi',testapi);
OpenRouter.get('/categories',getCategories);
OpenRouter.get('/categories/:id',getCategoriesForUid);
export default OpenRouter;