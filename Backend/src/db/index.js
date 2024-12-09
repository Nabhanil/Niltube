import {DB_NAME} from "../constants.js"
import mongoose from "mongoose"

const dbConnection = async ()=>{
    try {
        const mongodbConnectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log("MongoDb host -",mongodbConnectionInstance.connection.host)
    } catch (error) {
        console.log("Error has occured!!!!",error)
        process.exit(1)
    }
}

export {dbConnection}