const multer = require("multer");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      console.log(file)
      cb(null, '../uploads/temp')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
      //req.file=file;
    },
   
  })
  
  const upload = multer({ storage });

  module.exports= upload
