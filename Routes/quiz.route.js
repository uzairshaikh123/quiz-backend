const express = require('express')
const { quizModel } = require('../Models/quiz.model')
const quizrouter = express.Router()


quizrouter.get("/",async (req,res)=>{


try {
    let data = await quizModel.find()
    res.status(200).send({data:data})
} catch (error) {
    res.status(500).send({"msg":error.message})
}



})
quizrouter.post("/add",async (req,res)=>{





try {
    let data =new quizModel(req.body)
    await data.save()
    res.status(200).send({"msg":"Quiz Created Successfully"})
} catch (error) {
    res.status(500).send({"msg":error.message})
}



})

module.exports={quizrouter}