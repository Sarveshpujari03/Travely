import { Router } from "express";
import { userLogin , userRegistration } from '../controllers/User.controller.js'
import upload from "../Middlewares/Multer.js";


const router = Router();

router.route('/signin').post(userLogin);

router.route('/register').post(upload.fields([
    {
        name : 'Avatar',
        maxCount: 1
    }
]) , userRegistration);

export default router;