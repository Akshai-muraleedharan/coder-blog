const postModel = require('../model/post.model')


// get all db
const getAllPosts = async (req,res) => {

    try {
        const allPosts = await postModel.find()
        if(!allPosts) throw Error("no data found")
            res.status(200).json(allPosts)
    } catch (err) {
        res.status(400).json(err)
    }
}

// post to db
const addPost =async (req,res) => {
    
    const newPost = new postModel(req.body)

    try {
        const post = await newPost.save()

        if(!post) throw Error("could not add post now!")
            res.status(200).json(post)
    } catch (err) {
      res.status(400).json(err)   
    }
}

// delete post

const deletePost = async (req,res) => {

    try {
        const postDelete = await postModel.findByIdAndDelete(req.params.id);
        if(!postDelete) throw Error("could not delete this item")
            res.status(200).json({msg:"delete succesfully"})
    } catch (error) {
        res.status(400).json(err)   
    }
}

// update post

const updatePost = async ( req,res) => {
    try{

        const postUpdate = await postModel.findByIdAndUpdate(req.params.id , req.body);
        if(!postUpdate) throw Error("could not update");
        res.status(200).json({msg:"update succesfully"})


    } catch(err){
        res.status(400).json(err)  
    }
}

// get one post

const getOnePost = async (req,res) => {
   try{
    const postOneGet = await postModel.findById(req.params.id)
    if(!postOneGet) throw Error("no items ")
     res.status(200).json(postOneGet)   
   }catch(err){
    res.status(400).json(err)  
   }
}  

module.exports = {addPost,getAllPosts,deletePost,updatePost,getOnePost}