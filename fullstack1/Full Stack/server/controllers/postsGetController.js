const Post = require("../models/postModel");

const getPost = async(req,res)=>{
    console.log("hshsh")
    try{
        const data = await Post.find({});
        res.status(200).json(data);
    }
    catch(error){
        res.state(404).json({message:error.message})
    }
}


module.exports = getPost