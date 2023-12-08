import express from 'express';
import { deleteUser, getUserListings, updateUser, user } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = express.Router();

userRouter.get('/test', user);
userRouter.post('/update/:id', verifyToken, updateUser)
userRouter.delete('/delete/:id', verifyToken, deleteUser)
userRouter.get('/listings/:id', verifyToken, getUserListings)

export default userRouter;