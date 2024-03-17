const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    tag:{
        type:String,
        required:true,
        trim:true
    },
    titile:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    }
})

const Blog=mongoose.model("Blog",blogSchema);

module.exports=Blog;