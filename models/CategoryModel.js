import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
    uid : {
        type : String,
        require : true,
    },
    name : {
        type : String,
        require : true,
    },
    image : {
        type : String,
        require : true,
    }
})


const CategoryModel = mongoose.model('categories',categoryModel);


export default CategoryModel;