const Classroom = require("../models/Classroom");

const User = require("../models/User");


//createCourse handler function
const createClass = async (req, res) => {
    try {

        //fetch data 
        const {className, classDescription, whatYouWillLearn} = req.body;

        
        //validation
        if(!className || !classDescription || !whatYouWillLearn ) {
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            });
        }

        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);
        console.log("Instructor Details: " , instructorDetails);
       

        if(!instructorDetails || instructorDetails.accountType!=='Instructor' ) {
            return res.status(404).json({
                success:false,
                message:'Instructor Details not found',
            });
        }

        
       // const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        //create an entry for new Course
        const newClass = await Classroom.create({
            className,
            classDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn
            
        })
    
   
        //add the new course to the user schema of Instructor
        await User.findByIdAndUpdate(
            {_id: instructorDetails._id},
            {
                $push: {
                    courses: newClass._id,
                }
            },
            {new:true}
           
        );
        
       

        //return response
        return res.status(200).json({
            success:true,
            message:"Course Created Successfully",
            data:newClass,
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create Course',
            error: error.message,
        })
    }
};

const addStudent=async(req,res)=>{


    try {

        //fetch data 
        const {email , classId,token} = req.body;

        
        //validation
        if(!email ) {
            return res.status(400).json({
                success:false,
                message:'email field is required',
            });
        }

        const userId = req.user.id;
        const classRoomDetails = await Classroom.findById(classId);
        console.log("Instructor Details: " ,classRoomDetails.instructor);
       

        if(classRoomDetails.instructor!=userId ) {
            return res.status(404).json({
                success:false,
                message:'Instructor Details not found',
            });
        }
      const findStudent = await User.findOne({email:email}).exec();
        
      console.log("Student id : ",findStudent._id)
 
      
    
   
        //add the new course to the user schema of Instructor
        await Classroom.findByIdAndUpdate(
            {_id: classId},
            {
                $push: {
                    studentsEnrolled: findStudent._id,
                }
            },
            {new:true}
           
        );
        
        await User.findByIdAndUpdate(
            {_id: findStudent._id},
            {
                $push: {
                    courses: classId,
                }
            },
            {new:true}
           
        );
        

        //return response
        return res.status(200).json({
            success:true,
            message:"Student Added Successfully",
            
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create Course',
            error: error.message,
        })
    }
 
}





//getAllCourses handler function

const showAllClasses = async (req, res) => {
    try {
            //TODO: change the below statement incrementally
            const allClasses = await Classroom.find({});

            return res.status(200).json({
                success:true,
                message:'Data for all Classes fetched successfully',
                data:allClasses,
            })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Cannot Fetch Class data',
            error:error.message,
        })
    }
}

const getClassDetails = async (req, res) => {
    try {
            //get id
            const {courseId} = req.body;
            //find course details
            const courseDetails = await Course.find(
                                        {_id:courseId})
                                        .exec();

                //validation
                if(!courseDetails) {
                    return res.status(400).json({
                        success:false,
                        message:`Could not find the course with ${courseId}`,
                    });
                }
                //return response
                return res.status(200).json({
                    success:true,
                    message:"Course Details fetched successfully",
                    data:courseDetails,
                })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}

module.exports={createClass,addStudent,showAllClasses,getClassDetails}