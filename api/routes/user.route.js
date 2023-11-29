import express from 'express';
import { updateUser, user } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = express.Router();

userRouter.get('/test', user);
userRouter.post('/update/:id', verifyToken, updateUser)


export default userRouter;