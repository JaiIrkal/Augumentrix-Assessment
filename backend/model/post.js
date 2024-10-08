const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    datePosted:{
        type:String,
        required:true
    },
    tags:{
        type:String
    }
})

const Post = mongoose.model("Posts", postSchema)
module.exports = Post