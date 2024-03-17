const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    className: {
        type:String,
    },
    classDescription: {
        type:String,
    },
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    
    },

    whatYouWillLearn: {
        type:String,
    },
     studentsEnrolled: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }]
    ,
    assignments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment"
    }]


},
{
    timestamps:true,
});

module.exports = mongoose.model("Classroom", courseSchema);