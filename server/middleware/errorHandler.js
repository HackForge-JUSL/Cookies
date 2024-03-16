
// to show error in json format
const {constants} = require("../Constants")
const errorHandler=  (err,req,res,next) =>{

    const statusCode = res.statusCode?res.statusCode : 500;

    switch(statusCode){

    case constants.SERVER_ERROR:

      res.json({title:"Validation Failed" ,
                message:err.message,
                 stackTrace:err.stack});
        break;

        
    case constants.VALIDATION_ERROR:

    res.json({title:"Validation Failed" ,
              message:err.message,
              stackTrace:err.stack});
      break;



default:
    break;
    }

};

module.exports = errorHandler;


