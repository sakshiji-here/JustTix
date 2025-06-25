import express from "express"
import { getFavourites, getUserBookings, updateFavorite } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/bookings',getUserBookings)
userRouter.post('/update-favorite',updateFavorite)
userRouter.get('/favorites',getFavourites)

export default userRouter