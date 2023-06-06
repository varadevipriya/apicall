const mongoose = require("mongoose");


const postShema = mongoose.Schema({
        title:String,
        message:String,
        creator:String,
        tags:[String],
        image:String,
        likeCount:{
            type:Number,
            default:0
        }

})

const Post = mongoose.model("Post",postShema) 
module.exports = Post;