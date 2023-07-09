
import CategoryModel from "../models/CategoryModel.js";
import { getProduct } from "../sqldatabase/query.js";



export const testapi = async (req,res) => {
    const data = await getProduct();
    return res.send({"data" : data});
}



export const getCategories = async (req,res) => {
    try {
        const data = await CategoryModel.find();
        return res.send(data);
    } catch (error) {
        return res.status(404).send("BAD REQUEST");
    }
}

export const getCategoriesForUid = async (req,res) => {
    const uid = req.params.id;
    try {
        const data = await CategoryModel.findOne({uid});
        return res.send(data);
    } catch (error) {
        return res.status(404).send("BAD REQUEST");
    }
}