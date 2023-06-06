const Post = require("../models/postModel");

const editPost = async(req,res)=>{
    console.log(req.body,"sjshj")
    try{
        const data = await Post.findByIdAndUpdate(req.body._id, req.body);
        console.log(data,"data")
        res.status(200).json(data);
    }
    catch(error){
        console.log(error)
    }
}


module.exports = editPost