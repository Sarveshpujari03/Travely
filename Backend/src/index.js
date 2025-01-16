import app from "./app.js";
import dotenv from 'dotenv'
import DataBase_Connection from './DB/DataBase.js'

dotenv.config({
    path : './.env'
})


DataBase_Connection().then(() => {
    app.listen( process.env.PORT || 1000 , () => {
        console.log('Server is Running on port  : ' , process.env.PORT);
        
    })
}).catch(err => {
    console.log('Did not listen on port : ' , err);
    
})