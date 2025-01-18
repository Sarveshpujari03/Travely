import { cookieOptions } from '../constants.js';
import { User } from '../Models/User.model.js';
import AsyncHandler from '../Utils/AsyncHandler.js';
import ErrorHandler from '../Utils/ErrorHandler.js'
import ResponseHandler from '../Utils/ResponseHandler.js';

// Creating or Registering User Account
// Logging in user into Account
// creating Token
// Updating User Info

const AccessTokenRefreshTokenGeneration = async (userId) => {

    try {
        const user = await User.findById(userId);
    
        const accessToken =await user.AccessTokenGeneration();
    
        const refreshToken =await user.RefreshTokenGeneration();
        
        user.refreshToken = refreshToken;

        await user.save({validateBeforeSave : false});
        
        return { accessToken , refreshToken };

    } catch (error) {
        throw new ErrorHandler(500 , "Token Generation failed" , error)
    }
}

const userRegistration = AsyncHandler ( async (req , res) => {

    const { displayName , password   } = req.body;

    if(!displayName || !password){
        throw new ErrorHandler(401 , "All Info needed");
    }

    const userExists = await User.findOne({
        displayName
    })

    if(userExists){
        throw new ErrorHandler(405 , "User already exists");
    }

    const user = await User.create({
        displayName,
        password
    })

    if(!user){
        throw new ErrorHandler(500 , "Internal Server Error");
    }

    const { accessToken , refreshToken } = AccessTokenRefreshTokenGeneration(user._id);

    res
    .status(200)
    .cookie( 'accessToken' , accessToken, cookieOptions )
    .cookie( 'refreshToken' , refreshToken , cookieOptions )
    .json(
        new ResponseHandler(200 , "UserRegistered Successfully" , user)
    )

} );

const userLogin = AsyncHandler( async ( req , res ) => {

    const { displayName , password } = req.body

    const user = await User.findOne({
        displayName
    });

    if(!user){
        throw new ErrorHandler(404 , " user not found");
    }

    const passwordVerification = await user.passwordVerification(password);

    if(!passwordVerification){
        throw new ErrorHandler(400 , "password is incorrect" )
    }

    const { accessToken , refreshToken } = await AccessTokenRefreshTokenGeneration(user._id);
    
    
    res.status(200)
    .cookie('accessToken' , accessToken , cookieOptions)
    .cookie('refreshToken' , refreshToken , cookieOptions)
    .json(
        new ResponseHandler(200 , "User created Successfully" , user)
    )


} );

export {
    userRegistration,
    userLogin
}