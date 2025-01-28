import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const Schema = mongoose.Schema

//defining schema

const UserSchema = new Schema({

    displayName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 10
    },

    password : {
        type : String,
        required : true,
        minLength : 6
    },

    email : {
        type : String,
        required : true,
    },

    avatarUrl : {
        type : String
    },

    mobNo : {
        type : Number,
        minLength : 10,
        maxLength : 10
    },

    refreshToken : {
        type : String,
    }

} , {
    timestamps: true,
});

//adding user functions to be used while processing

UserSchema.pre('save' ,async function (next){
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
});

UserSchema.methods.passwordVerification = async function (password) {
    return await bcrypt.compare(password , this.password)
}

UserSchema.methods.AccessTokenGeneration = async function(){
    return jwt.sign({
        _id : this._id,
        displayName : this.displayName
    },
        process.env.ACCESS_TOKEN_SECRET_KEY,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

UserSchema.methods.RefreshTokenGeneration = async function(){
    return jwt.sign({
        _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const User = mongoose.model('User' , UserSchema)