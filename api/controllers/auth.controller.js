import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    next(error);
  }
};
