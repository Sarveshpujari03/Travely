import mongoose from 'mongoose'

const Schema = mongoose.Schema

//adding schema of trip 

const tripSchema = new Schema({
    title : {
        type : String,
        required : true,
        minLength : 30
    },
    description : {
        type : String,
        required : true,
    },
    
    destinations : [{
        type : String,
    }],

    totalDist : {
        type : Number,
    },

    budget : {
        type : Number,
    },

    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },

    completed : {
        type : Boolean,
        default : false
    }

},{
    timestamps : true
});

export const Trip = mongoose.model('Trip' , tripSchema)