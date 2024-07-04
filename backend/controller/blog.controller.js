const Blog = require('../models/Blog.model');
const User = require('../models/User.model');

const getAllBlogs = async (req, res) => {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (error) {
        console.error(error.message);
    }

    if (!blogs) {
        return res.status(204).send({
            success: false,
            message: 'No Blogs found'
        });
    }

    return res.status(200).send({ blogs })
}

const getBlogById = async (req, res) => {
    const id = req.params.id;
    let blog;

    try {
        blog = await Blog.findById(id)
    } catch (error) {
        console.error(error.message);
        return res.send({
            success: false,
            message: 'Internal server error'
        });
    }

    if(!blog){
        return res.status(204).send({
            success: false,
            message: 'No Blog found'
        });
    }

    return res.status(200).send({
        success: true,
        message: 'Blog found',
        blog
    })
}

const addNewBlog = async (req, res) => {
    const { title, content, id } = req.body;
    console.log(title, content, id);
    try {
        const user = await User.findById(id);
        // console.log(user);

        const newBlog = new Blog({
            title,
            content,
            author: user.name,
            authorId: id
        })
        // console.log(newBlog);
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: 'New Blog created',
        })

    } catch (error) {
        return res.send({
            success: false,
            message: 'Internal server error',
        })
    }
}

const editBlog = async (req, res) => {
    const id = req.params.id;
    const { title, content, author } = req.body;
    // console.log(id, title, content);

    let currentBlog;

    try {
        currentBlog = await Blog.findByIdAndUpdate(id, {
            title,
            content,
            // author
        })
    } catch (error) {
        return res.send({
            success: false,
            message: "Something went wrong! Please try again"
        })
    }

    if (!currentBlog) {
        return res.send({
            success: false,
            message: "Unable to edit the blog"
        })
    }

    return res.status(200).send({
        success: true,
        message: "Blog edited successfully",
        currentBlog
    });
}

const deleteBlog = async (req, res) => {
    const id = req.params.id;

    try {
        await Blog.findByIdAndDelete(id);
    } catch (error) {
        return res.send({
            success: false,
            message: "Unable to delete the blog"
        })
    }

    return res.status(200).send({
        success: true,
        message: 'Blog deleted'
    })
}


module.exports = {
    getAllBlogs,
    getBlogById,
    addNewBlog,
    editBlog,
    deleteBlog
}