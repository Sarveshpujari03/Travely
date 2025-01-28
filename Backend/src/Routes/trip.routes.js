import { Router } from "express";
import {getAllUsers} from '../controllers/User.controller.js'

const router = Router();

// Importing the controller functions

router.route('/getallUsers').get(getAllUsers);

export default router;