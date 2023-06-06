const Post = require("../models/postModel");


const createPost = async (req, res) => {
  console.log(req.body, "sjsh",req.file);
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = createPost;
