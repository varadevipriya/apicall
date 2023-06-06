

const express = require("express");
const getProduct  = require('../controllers/postsGetController')
// const {getPost}= require('../controllers/posts')
const router = express.Router();


router.get('/',getProduct)

module.exports = router
