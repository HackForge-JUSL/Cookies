const Blog = require("../models/blog");

async function postBlogs(req, res) {
    try {
        const blogData = await Blog.find({});
        console.log(blogData)
        return res.status(200).json({
            blogData
        });
    }
    catch (error) {
        console.error("Error generating createCustomizeQuiz ", error);
        return res.status(500).json({
            error: "Internal Server Error",
        })
    }
}

module.exports=postBlogs;