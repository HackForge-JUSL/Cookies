const Question=require('../models/Question')



const createQuestion= async(req,res)=>{


    const { description,   chapterName,  topicTag,  options,  correctAns, ans}=req.body;


    const newQuestion = new Question({
        description,
        chapterName, 
         topicTag, 
          options, 
           correctAns, 
           ans

    })


    try{
        await Question.save(newQuestion);

         res.status(200).json({
            success:false,
            message:' Question Created Successfully',
        });

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:'unable to create the Question',
        });

    }

    


}
module.exports={createQuestion}