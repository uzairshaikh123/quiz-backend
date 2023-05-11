const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const {userRouter } = require("./Routes/user.route")

require("dotenv").config()
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)



app.listen(process.env.port, () => {

    try {
        mongoose.connect(process.env.url).then(() => {
            console.log("connected")
        }).catch(() => {
            console.log("error")
        })
    } catch (error) {

    }
    console.log(`app is connected on port ${process.env.port}`)
})
