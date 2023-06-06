const Post = require("../models/postModel");

 const getPost = async(req,res)=>{
    console.log("hshsh")
    try{
        const data = await Product.find({});
        console.log(data,"data")
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
    }
}
module.exports = getPost;