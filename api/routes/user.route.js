import express from 'express';
import { user } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/test', user);

export default userRouter;