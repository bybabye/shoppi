import ProductModel from "../models/ProductModel.js";




export const addProduct = async (req,res) => {
    // try {
    //     const data = await getProduct();

    //     data.map(product => {
    //         const {name,price,quantity,color,CategoryID,image,description,supplierID} = product;

    //         const newProduct = new ProductModel({
    //             name,price,quantity,color,categoryId : CategoryID,image,
    //             description,supplierID
    //         });
    //         newProduct.save();
    //         console.log("oke");
    //     })
    //     res.send("ok");
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send("Failed"); 
    // }
}


export const SearchProductForId = async (req,res) => {
    const uid = req.params.id;
    try {
        const data = await ProductModel.findById(uid);
        return res.send(data);
    } catch (error) {
        return res.status(404).send("BAD REQUEST");
    }
}

export const SearchProduct = async (req,res) => {
    const uid = req.query.categoryId;
    console.log(uid);
    try {
        if(!uid) {
            const data = await ProductModel.find();
            return res.send(data);
        }
        const data = await ProductModel.find({categoryId : uid});
        return res.send(data);
    } catch (error) {
        return res.status(404).send("BAD REQUEST");
    }
}