import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    uid : {
        type : String,
        require : true,
    },
    name : {
        type : String,
        require : true,
    },
    cmnd : {
        type : String,
        require : true
    },
    avatar : {
        type : String,

    },
    supplierId : {
        type : String,
        require : true
    }
})


const UserModel = mongoose.model('users',userModel);


export default UserModel;