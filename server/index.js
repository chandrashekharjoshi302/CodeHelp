const mongoose=require("mongoose")
const express=require("express")
const { connection } = require("./configs/db")
const cors=require("cors")
const { questionRouter } = require("./routes/question.route")
require("dotenv").config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/question",questionRouter)

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db")
    } catch (error) {
        console.log(error)
    }
})