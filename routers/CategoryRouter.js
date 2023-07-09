import express from "express";

import {  deleteCategoryAll } from "../controllers/CategoryController.js";



const CategoryRouter = express.Router(); 


CategoryRouter.delete('/category/delete/all',deleteCategoryAll);
export default CategoryRouter;