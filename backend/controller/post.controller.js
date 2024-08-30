const Post = require('../model/post')

const DisplayAllPosts = async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
}

const DisplayPost = async (req, res) => {
    const {id} = req.params
    const post = await Post.findById(id)
    if(!post){
        res.status(404).json({
            message:"Post Not Found"
        })
    }
    else{
        res.status(200).json({
            message:post
        })
    }
}

const AddPost = async (req, res) => {
    try {
        const { title, description, datePosted, tags } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newPost = await Post.create({
            title,
            description,
            datePosted, // Consistency in naming
            tags
        });

        res.status(201).json({
            message: "Post Created",
            newPost: newPost
        });

    } catch (error) {
        console.log('Error creating post:', error);
        res.status(500).json({ message: "Error creating post" });
    }
};


const EditPost = async (req, res) => {

    try {

        const {id} = req.params
        const updatedPost = req.body

        const post = await Post.findOneAndUpdate({_id:id}, updatedPost, {new:true})
        res.status(200).json({
            message:"Post Update",
            updatePost: post
        })
        
    } catch (error) {
        
        console.log(error)
        res.status(400).json({
            message:"Error"
        })
    }

}

const DeletePost = async (req, res) => {
    try{

        const {id} = req.params

        const post = await Post.findOneAndDelete(id)
        res.status(200).json({
            message:"Deleted Post",
            deletedPost:post
        })

    }catch(error){

        console.log(error)
        res.status(400).json({
            message:"Error"
        })
    }
}

module.exports = {DisplayAllPosts, DisplayPost, AddPost, EditPost, DeletePost}