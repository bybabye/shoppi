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
    const perPage = 10; // 10 san pham moi trang
    const totalProducts = await ProductModel.countDocuments() // đếm số lượng sản phẩm
    const toltalPages = Math.ceil(totalProducts / perPage); // Tổng số trang
    const page = parseInt(req.query.page) || 1; // trang mac dinh la trang 1
  
    const skip = (page - 1 ) * perPage ; // số sản phẩm cần bỏ qua 
    
    try {
        const data = await ProductModel.find().skip(skip).limit(perPage);
        return res.send({
            toltalPages,
            data
        });
    } catch (error) {
        return res.status(404).send("BAD REQUEST");
    }
}