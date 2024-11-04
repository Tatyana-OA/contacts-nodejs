const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route POST /users/register
//@access public

const registerUser = asyncHandler((req, res) => {
  res.json({ message: "Register the user" });
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
