import dotenv from "dotenv"
import {dbConnection} from "./db/index.js"
import express from "express"
dotenv.config({
    path: './env'
})

const app = express()

dbConnection()
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${process.env.PORT}`)
})