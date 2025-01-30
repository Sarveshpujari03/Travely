import { Router } from "express";
import {getAllUsers} from '../controllers/User.controller.js'
import { completed, deleteTrip, getTrips, planTrip, saveTrip } from "../controllers/Trip.controller.js";

const router = Router();

// Importing the controller functions

router.route('/getTrips').get(getTrips);

router.route('/deleteTrip').delete(deleteTrip)

router.route('/plan').post(planTrip);

router.route('/save').post(saveTrip);

router.route('/completed').post(completed)

export default router;