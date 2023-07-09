import CategoryModel from "../models/CategoryModel.js";

export const deleteCategoryAll = async (req,res) => {
    try {
        await CategoryModel.deleteMany();
        res.status(201).send("Deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error delete"); 
    }
}