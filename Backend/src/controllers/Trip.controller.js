import AsyncHandler from '../Utils/AsyncHandler.js';
import ErrorHandler from '../Utils/ErrorHandler.js'
import ResponseHandler from '../Utils/ResponseHandler.js';
import {Trip} from '../Models/Trip.model.js';

//creating a new trip
//deleting a previous trip
//fetching all the trips uncoming and in past trips

const createTrip = AsyncHandler( async ( req , res ) => {

    const { description , title } = req.body;

    if( !description || !title ){
        throw new ErrorHandler(401 , "All info needed");
    }
    
    const trip = await Trip.create({
        title,
        description,
        userId : req.user._id
    });

    if(!trip){
        throw new ErrorHandler(400 , "Failed to create trip");
    }

    res.status(200)
    .json(new ResponseHandler(200 , "Trip created successfully", trip))


});

const deleteTrip = AsyncHandler( async ( req , res ) => {

    const { title } = req.params;

    if(!title){
        throw new ErrorHandler(401 , "Title needed");
    }

    const trip = await Trip.findOneAndDelete({ title, userId : req.user._id });

    if(!trip){
        throw new ErrorHandler(404 , "No such trip found");
    }

    res.status(200)
    .json(new ResponseHandler(200 , "Trip deleted successfully", trip))

})

const getTrips = AsyncHandler( async ( req , res ) => {

    const trips = await Trip.find({userId : req.user});

    if(!trips){
        throw new ErrorHandler(404 , "No trips found");
    }

    res.status(200)
    .json(new ResponseHandler(200 , "Trips fetched successfully", trips))

})

export {
    createTrip,
    deleteTrip,
    getTrips
}