import express from "express";


import { SearchProduct, SearchProductForId, addProduct } from "../controllers/ProductController.js";



const ProductRouter = express.Router(); 


ProductRouter.post('/product/add',addProduct);
ProductRouter.get('/product/:id',SearchProductForId);
ProductRouter.get('/product',SearchProduct);
export default ProductRouter;