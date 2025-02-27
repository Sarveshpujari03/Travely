import AsyncHandler from '../Utils/AsyncHandler.js';
import ErrorHandler from '../Utils/ErrorHandler.js'
import ResponseHandler from '../Utils/ResponseHandler.js';
import {Trip} from '../Models/Trip.model.js';
import responseGeneration from '../Utils/GeminiAI.js';
import processJsonString from '../Utils/JSONconvt.js';

//creating a new trip
//deleting a previous trip
//fetching all the trips uncoming and in past trips

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

const planTrip = AsyncHandler( async (req , res)  => {

    const { destination , budget , Startdate , EndDate , travellers } = req.body;


    if(!destination || !budget || !Startdate || !EndDate || !travellers){
        throw new ErrorHandler(401 , "All info needed");
    }

    const response = await responseGeneration(`I want to plan a trip. Here are the details:
        Destination: ${destination}
        Budget: ${budget}
        Date: from ${Startdate} to ${EndDate}
        Number of travelers: ${travellers}
        Please suggest an itinerary with places to visit, activities, food recommendations, accommodation options, and travel tips within my budget`)

    if(response.success){
        throw new ErrorHandler(400 , "Failed to plan trip");
    }

    res.status(200)
    .json(new ResponseHandler(200 , "Trip planned successfully", response))
    
});

const saveTrip = AsyncHandler ( async ( req , res ) => {

    const { description } = req.body;

    if(!description){
        throw new ErrorHandler(401 , "Description needed");
    }

    const response = await responseGeneration(`create a title and short description, also destructure destinations ,total distance and budget for the following trip plan ${description} do not add next line symbols, with this schema: { "Title": str, "Description": str, "Destinations": [str], "TotalDist": int, "Budget": int }`)

    // console.log(JSON.parse(response));
    const jsonRes = processJsonString(response);
    console.log(jsonRes);

    const trip = await Trip.create({
        title : jsonRes.Title,
        description : jsonRes.Description,
        destinations : jsonRes.Destinations,
        totalDist : jsonRes.TotalDist,
        budget : jsonRes.Budget,
        createdBy : req.user._id,
    })
    

    res.status(200)
    .json(new ResponseHandler(200 , "Trip saved successfully", trip))

})

const completed = AsyncHandler( async (req , res)  => {

    const { title } = req.body

    if(!title){
        throw new ErrorHandler(404 , 'title required')
    }

    const trip = await Trip.findOneAndDelete({title});

    res.status(200)
    .json(new ResponseHandler(200 , "Trip deleted successfully" , trip));

})

export {
    completed,
    deleteTrip,
    getTrips,
    planTrip,
    saveTrip
}