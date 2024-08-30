const express = require("express");
const postController = require('../controller/post.controller.js')
const {DisplayAllPosts, DisplayPost, AddPost, EditPost, DeletePost} = postController

const router = express.Router()

router.get('/', DisplayAllPosts)
router.get('/:id', DisplayPost)
router.post('/add', AddPost)
router.delete('/:id', DeletePost)
router.put('/:id', EditPost)

module.exports = router