const mongoose = require("mongoose");


const productShema = mongoose.Schema({
        name:{
            type:String,
            required:true

        },
        quantity:{
            type:Number,
            required:true,
            default:0
        }
})

const Product = mongoose.model("Product",productShema) 
module.exports = Product;