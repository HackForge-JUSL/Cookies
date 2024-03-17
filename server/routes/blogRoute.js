const route=require('express').Router();
const postBlogs=require('../controllers/blogsController')

route.get('/',postBlogs);

module.exports=route;