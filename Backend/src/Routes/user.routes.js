import { Router } from "express";
import { userLogin , userRegistration } from '../controllers/User.controller.js'


const router = Router();

router.route('/signin').post(userLogin);

router.route('/register').post(userRegistration);

export default router;