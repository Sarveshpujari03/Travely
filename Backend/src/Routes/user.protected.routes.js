import { Router } from "express";
import { changeName, deleteAvatar, getProfileData, updateAvatar } from "../controllers/User.controller.js";

const router = Router();

router.route('/update/avatar').post(updateAvatar);

router.route('/delete/avatar').post(deleteAvatar);

router.route('/data/profile').post(getProfileData);

router.route('/update/userName').post(changeName);

export default router;