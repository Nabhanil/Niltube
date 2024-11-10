
import DB_Name from '../constants.js'
import mongoose from "mongoose"

const db_func = async ()=>{
    try{
       const mongObj = await mongoose.connect(`${process.env.DB_URI}/${DB_Name}`)
        console.log("MongoDB connected succesfully")
        console.log(mongObj.connection.host)
    } catch (error) {
        console.log("error", error)
        process.exit(1)
    }

}

export default db_func;