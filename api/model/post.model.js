const mongoose = require('mongoose');


const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

const postModel = mongoose.model('Posts-content',postSchema)

module.exports = postModel;