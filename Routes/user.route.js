const express = require("express")
const { userModel } = require("../Models/user.models")
const userRouter = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



userRouter.post("/signup",async (req,res)=>{
    let {email,password}=req.body

    try {
        let findemail= await userModel.find({email})
        if(findemail.length){
            res.status(200).send({"msg":"User Already Exist"})
        }else{
            bcrypt.hash(password, 5, async function(err, hash) {
              let data = new userModel({email,password:hash})
              await data.save()
              res.status(200).send({"msg":"User Registerd Successfully"})
            });
        }
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }




})


userRouter.post("/login",async (req,res)=>{
    let {email,password}=req.body

    try {
        let findemail= await userModel.find({email})
       let hash = findemail[0].password
        bcrypt.compare(password, hash, function(err, result) {
           if(result){
            res.status(200).send({"msg":"User LoggedIn Successfully",token:jwt.sign({ userID: findemail[0]._id }, 'user')})
        }else{
            res.status(404).send({"msg":"User Not Found"})
            
           }
        });
      
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }




})

module.exports={
    userRouter
}