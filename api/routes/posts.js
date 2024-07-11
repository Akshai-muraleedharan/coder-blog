const express = require('express');
const postBlog = require('../controller/post.controller')

const router = express.Router();

 router.get('/',postBlog)


 module.exports = router