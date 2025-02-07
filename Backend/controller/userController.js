const UserModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blackListTokenModel");

const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  console.log({ firstname, lastname, email, password });

  const user = await UserModel.create({
    firstname,
    lastname,
    email,
    password,
  });

  return user;
};

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, email, password } = req.body;

  try {
    const hashedPassword = await UserModel.hashPassword(password);

    const user = await createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePasswords(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = await user.generateAuthToken();
  res.cookie = ("token", token, { httpOnly: true });

  console.log("User found here");

  res.status(200).json({ token, user });
};

const getUserProfile = (req, res, next) => {
  res.status(200).json(req.user);
};

const logOutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookie.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "Logged out successfully" });
};
module.exports = { registerUser, loginUser, getUserProfile };
