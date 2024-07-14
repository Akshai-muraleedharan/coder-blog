const express = require('express');
const {addPost,getAllPosts,deletePost,updatePost,getOnePost} = require('../controller/post.controller')

const router = express.Router();

 router.get('/',getAllPosts)
       .post('/',addPost)
       .delete('/:id',deletePost)
       .put('/:id',updatePost)
       .get('/:id',getOnePost)


 module.exports = router