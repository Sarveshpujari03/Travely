import express from 'express'
import cookieParser from 'cookie-parser'
import ErrorMiddleware from './Middlewares/ErrorMiddleware.js'
import cors from 'cors'

//Basic Express setup

const app = express()

app.use(cors({
    origin: "http://localhost:5174", 
    credentials: true,   
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

app.use(cookieParser());

app.use(express.json({limit : '30kb'}));

app.use(express.urlencoded({extended : true , limit : '20kb'}));

app.use(express.static('public'));


//adding api key or routes from here

import userRouter from './Routes/user.routes.js'
import tripRouter from './Routes/trip.routes.js'
import cookieFetcher from './Middlewares/AuthUser.js';
import userProtectedRout from './Routes/user.protected.routes.js'
import upload from './Middlewares/Multer.js';

app.use('/api/v2/auth' , userRouter);

app.use(cookieFetcher);

app.use('/api/v2/user' , userProtectedRout);

app.use('/api/v2/trip' , tripRouter)

app.use(ErrorMiddleware)
export default app;