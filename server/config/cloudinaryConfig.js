const cloudinary = require('cloudinary').v2
require('dotenv').config();     
     
const cloudinaryConnect = ()=>{
   try{ 
    cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD, 
  api_key: process.env.CLOUDINARY_API_SECRET, 
 api_secret: process.env.CLOUDINARY_API_KEY 
   

});

   }
   catch(err){
    console.log(err);
   }


}

module.exports={cloudinaryConnect}