
const mongoose= require("mongoose")

const leaderboardSchema = mongoose.Schema({
email:String,
score:Number
})


const leaderboardModel= mongoose.model("leaderboarddata",leaderboardSchema)

module.exports={
    leaderboardModel
}