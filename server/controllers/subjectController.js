const Subject =require('../models/Subject')


const Question=require('../models/Question')



const createSubject= async(req,res)=>{


    const { name,topics,assignments,quizzes}=req.body;


    const newSubject= new Subject({
        name,topics,assignments,quizzes
    })


    try{
       const savedSubject= await newSubject.save(newSubject);

         res.status(200).json(savedSubject)

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'unable to create the Subject',
        });

    }

    


}


const getTopics=async(req,res)=>{
    const {subject}=req.body;

   try{ 
    
    const sub = await Subject.findOne({name:subject});
    console.log(sub.topics)

    res.status(200).json({data:sub.topics})

   }

   catch(err){
     console.log(req.body);
     res.status(500).json({
        message:"Unable to get the topics"
     })
   }
}
module.exports={createSubject,getTopics}