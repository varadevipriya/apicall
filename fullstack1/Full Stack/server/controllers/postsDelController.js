const Post = require("../models/postModel");

const deletePost = async(req,res)=>{
    console.log("seshu",req.params)
    try{
        const {id}=req.params;
        console.log(id,"id")
        const data = await Post.findByIdAndDelete(id);
        console.log(data,"data")
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
    }
}


module.exports = deletePost