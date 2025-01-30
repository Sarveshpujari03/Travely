import jwt from 'jsonwebtoken';
import ErrorHandler from '../Utils/ErrorHandler.js'
import { cookieOptions } from '../constants.js';


const cookieFetcher = async (req , res ,next) => {
    try {
    
        const accessToken = await req.cookies.accessToken
        // console.log('enteres here' , accessToken);
        
        if(!accessToken){
            throw new ErrorHandler( 401 , "unAuthorized req" )
        }

        const accessTokenSimplified = jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET_KEY , cookieOptions);

        if(!accessTokenSimplified){
            throw new ErrorHandler( 401 , "unauthorized req" )
        }

        req.user = accessTokenSimplified._id

        next()

    } catch (error) {
        throw new ErrorHandler(500 , "internal server error, login again" ,error)
    }

}

export default cookieFetcher