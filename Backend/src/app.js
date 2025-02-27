import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//Basic Express setup

const app = express()

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,  
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

export default app;