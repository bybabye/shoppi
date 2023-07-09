import { executeQuery } from "./database.js";



export const getProduct = async () => {
    const query = `SELECT _Name As name , Price As price ,Quantity As quantity,Color as color , 
    CategoryID ,_Image as image, _Description as description,SupplierID As supplierID
    FROM dbo.Product
    `;
    const data = await executeQuery(query);

    return data;
}