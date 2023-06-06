

const express = require("express");
const createPost = require("./controllers/postsCreateController");
const deletePost = require("./controllers/postsDelController");
const editPost = require("./controllers/postsEditController");
const getPost  = require('./controllers/postsGetController')
const upload = require('./controllers/mul')
// const {getPost}= require('../controllers/posts')
const router = express.Router();
const multer = require("multer")


console.log(upload)

router.get('/',getPost)
router.post('/add',upload.single('image'),createPost)
router.put('/edit',editPost)
router.delete('/delete/:id',deletePost)

module.exports = router
