const bcrypt = require("bcrypt");
const User = require ("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler=require('express-async-handler');
const OTP=require('../models/OTP')
const registerUser = asyncHandler(async (req,res)=>
{
    const { firstName ,lastName,email,password,accountType}=req.body;

    if(!firstName || !email || !password){
        res.status(400);
        throw new Error("All fields mandatory");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){

        res.status(400);
        throw new Error("already exists");
    }
  const hashedPassword = await bcrypt.hash(password,10);
  console.log("hashed password : ",hashedPassword);
  //req.body.password=hashedPassword;

    //res.json({message: "Register the user"});

   
 
   
    const newUser = new User({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        accountType


    });

    try{

        const  savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
catch(err){
    res.status(500).json(err);
}
});

const loginUser = async (req, res) => {
    try {
        //get data from req body
        const {email, password} = req.body;
        // validation data
        if(!email || !password) {
            return res.status(403). json({
                success:false,
                message:'All fields are required, please try again',
            });
        }
        //user check exist or not
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({
                success:false,
                message:"User is not registrered, please signup first",
            });
        }
        //generate JWT, after password matching
        let passKey="";
        if( passKey=await bcrypt.compare(password, user.password)) {
           
            const payload = {
                email: user.email,
                id: user._id,
                accountType:user.accountType,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"10h",
            });
            user.token = token;
            user.password= undefined;

            //create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in successfully',
            })

        }
        else {
            console.log(passKey);
            return res.status(401).json({
                success:false,
                message:'Password is incorrect',
            });
        }
        
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure, please try again',
        });
    }
};

const changePassword = async (req, res) => {
    //get data from req body
    //get oldPassword, newPassword, confirmNewPassowrd
    //validation

    //update pwd in DB
    //send mail - Password updated
    //return response
}
module.exports={registerUser,loginUser,changePassword};
