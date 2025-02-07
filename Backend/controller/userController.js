const UserModel = require("../models/userModel");
const userService = require("../services/userServices");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Errors are there, correctt");
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, email, password } = req.body;
  //   console.log({ firstname, lastname, email, password });

  const hashedPassword = await UserModel.hashPassword(password);

  //   const { firstname, lastname } = fullname;
  const user = await userService({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = await user.generateAuthToken();
  console.log(firstname);
  res.status(200).send("hello");
  //   res.status(201).json({ user, token });
};

module.exports = registerUser;
