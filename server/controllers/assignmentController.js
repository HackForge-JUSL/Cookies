const Assignment = require("../models/Assignment");
const Classroom = require("../models/Classroom");
const {uploadOnCloudinary}=require('../utils/cloudinary')
const User = require("../models/User");
//const upload = require('../middleware/multerMiddlware')

//createCourse handler function
const createAssignment = async (req, res) => {
    try {

        //fetch data 
        const {id, Name,Description,Document,startDate,dueDate,token} = req.body;

        
        //validation
        if(!id || !Name || !startDate || !dueDate ) {
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            });
        }
            
    
        const selectedClass = await Classroom.findById(id)  
        console.log(req.user.id)

        if(!selectedClass ) {
            return res.status(404).json({
                success:false,
                message:'Instructor Details not found',
            });
        }
           console.log(req.Files)
           const files = req.Files.file
        
           if(!files){
            return res.status(404).json({
                success:false,
                message:'file not found',
            });

           }
        try {const document = await uploadOnCloudinary(files);
        console.log(document)
        }
        catch(err){
            console.log(err);
        }
        //const response = JSON.stringify(document.url);

        //create an entry for new Course
        const newAssignment = await Assignment.create({
            Name,
            Description,
            Document,
            startDate,
            dueDate
            
            
        })
    
   
        //add the new course to the user schema of Instructor
        await Classroom.findByIdAndUpdate(
            {_id: selectedClass._id},
            {
                $push: {
                    assignments: newAssignment._id,
                }
            },
            {new:true}
           
        );
        
       

        //return response
        return res.status(200).json({
            success:true,
            message:"Assignment Created Successfully",
            data:newAssignment,
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create Assignment',
            error: error.message,
        })
    }
};


module.exports={createAssignment}