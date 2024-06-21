const { getAllBlogs, addNewBlog, editBlog, deleteBlog } = require('../controller/blog.controller');

const router = require('express').Router();

router.get('/', getAllBlogs);
router.post('/addBlog', addNewBlog);
router.put('/editBlog/:id', editBlog)
router.delete('/deleteBlog/:id', deleteBlog);

module.exports = router;