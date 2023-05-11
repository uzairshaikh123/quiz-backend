const express = require("express")
const { leaderboardModel } = require("../Models/leaderboard.model")
const leaderboardroute = express.Router()


leaderboardroute.get("/",async (req,res)=>{

    try {
        let data = await leaderboardModel.find()
        res.status(200).send({data:data})
    } catch (error) {
        res.status(200).send({"msg":error.message})
        
    }

})
leaderboardroute.post("/add",async (req,res)=>{

    try {
        let data = new leaderboardModel(req.body)
        await data.save()
        res.status(200).send({"msg":"User added in leaderboard"})
    } catch (error) {
        res.status(200).send({"msg":error.message})
        
    }

})

module.exports={
    leaderboardroute
}