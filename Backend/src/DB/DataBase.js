import mongoose from 'mongoose'
import ErrorHandler from '../Utils/ErrorHandler.js'
import { DataBase_Name } from '../constants.js'

const DataBase_Connection = async () => {
    try {
        
        await mongoose.connect(`${process.env.DATABASE_URL}/${DataBase_Name}`)
        console.log('Database connection established');
        


    } catch (error) {
        throw new ErrorHandler(500 , "Database connection error" , error)
    }
}

export default DataBase_Connection