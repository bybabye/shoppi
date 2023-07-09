


import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    
    name : {
        type : String,
        require : true,
    },
    price : {
        type : String,
        require : true,
    },
    quantity : {
        type : String,
    },
    color : {
        type : String,
    },
    categoryId : {
        type : String,
        require : true,
    },
    image : {
        type : String,
        require : true,
    },
    description : {
        type : String,
    },
    supplierID : {
        type : String,
        require : true,
    }
},{timestamps: true})


const ProductModel = mongoose.model('products',productModel);


export default ProductModel;