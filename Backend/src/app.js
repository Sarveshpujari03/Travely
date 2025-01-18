import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

//Basic Express setup

const app = express()

app.use(cors());

app.use(cookieParser());

app.use(express.json({limit : '30kb'}));

app.use(express.urlencoded({extended : true , limit : '20kb'}));

app.use(express.static('public'));

//adding api key or routes from here

import userRouter from './Routes/user.routes.js'

app.use('/api/v1/user' , userRouter);

export default app;