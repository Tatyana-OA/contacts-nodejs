const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@desc Register a user
//@route POST /users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already taken");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  if (user) {
    res.status(201).json({
      message: "User Registered",
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login user
//@route POST /users/login
//@access public

const loginUser = asyncHandler((req, res) => {
  res.json({ message: "Login the user" });
});

//@desc Get Current user
//@route GET /users/current
//@access public

const getCurrentUserInfo = asyncHandler((req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, getCurrentUserInfo };
