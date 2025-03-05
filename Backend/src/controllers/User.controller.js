import { response } from 'express';
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

    const { displayName , password ,email ,mobNo } = req.body;

    if(!displayName || !password || (!email )){
        throw new ErrorHandler(401 , "All Info needed");
    }

    const userExists = await User.findOne({
        displayName
    })

    if(userExists){
        throw new ErrorHandler(405 , "User already exists");
    }

    
    // let avatarUrl;
    // if (req.files.Cover>0) {
    //     const avatar = req.files?.Avatar[0]?.path
    //     avatarUrl = await uploadFile(avatar);
    // } else {
    //     avatarUrl = "";
    // }
    
    const user = await User.create({
        displayName,
        password,
        email
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
        throw new ErrorHandler(400 , "password is incorrect",["password is incorrect"] )
    }

    const { accessToken , refreshToken } = await AccessTokenRefreshTokenGeneration(user._id);
    
    
    res.status(200)
    .cookie('accessToken' , accessToken , cookieOptions)
    .cookie('refreshToken' , refreshToken , cookieOptions)
    .json(
        new ResponseHandler(200 , "User created Successfully" , user)
    )


} );

const getAllUsers = AsyncHandler( async ( req , res ) => {

    const users = await User.find();

    res.json(
        new ResponseHandler(200 , "All Users" , users)
    )

} )

const changeName = AsyncHandler( async (req , res)  => {

    const { displayName , password } = req.body;
    
    const userId = req.user

    if(!userId){
        throw new ErrorHandler(404 , "Login First Protected Route")
    }

    if(!displayName || !password ){
        throw new ErrorHandler(400 , "All information required");
    }

    const user_Exists = await User.exists({displayName});

    if(user_Exists){
        res.status(201)
        .json(new ResponseHandler(200 , "User already exists"))
    }

    const user = await User.findById(userId);

    const passwordVerification = await user.passwordVerification(password);

    if(!passwordVerification){
        throw new ErrorHandler(400 , "password does not match");
    }

    user.displayName = displayName;

    await user.save({validateBeforeSave : false});

    res.status(200)
    .json(new ResponseHandler(200 , "user name changed successfully " , user))

})

const getProfileData = AsyncHandler ( async (req , res) => {

    const userId = req.user;

    if(!userId){
        throw new ErrorHandler(404 , "user not found!!");
    }

    const user = await User.findById(userId);

    res.status(200)
    .json(
        new ResponseHandler(200 , "Profile Data" , user)
    )

});

const updateAvatar = AsyncHandler ( async (req , res) => {

    const Avatar = req.files?.Avatar[0]?.path;

    if(!Avatar){
        throw new ErrorHandler(400, "No Avatar Provided");
    }

    const userId = req.user;

    if(!userId){
        throw new ErrorHandler(404, "User not found!!");
    }

    const user = await User.findById(userId);

    let avatarUrl;
    if (req.files.Cover>0) {
        avatarUrl = await uploadFile(Avatar);
    } else {
        avatarUrl = "";
    }    

    user.avatarUrl = avatarUrl;

    await user.save({validateBeforeSave : false});

    res.status(200)
   .json(new ResponseHandler(200 , "changed sucsess fully" , {user , avatarUrl}));

})

const deleteAvatar = AsyncHandler( async ( req , res ) => {

    const userId = req.user;

    if(!userId){
        throw new ErrorHandler(404, "User not found!!");
    }

    const user = await User.findById(userId);

    user.avatarUrl = "";

    await user.save({validateBeforeSave : false});

    res.status(200)
   .json(new ResponseHandler(200 , "avatar deleted successfully" , user));

})

export {
    userRegistration,
    userLogin,
    getAllUsers,
    changeName,
    getProfileData,
    updateAvatar,
    deleteAvatar
}