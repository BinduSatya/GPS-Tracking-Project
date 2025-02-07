const UserModel = require("../models/userModel");
const userService = require("../services/userServices");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  console.log("continued");

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Errors are there, correct it");
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, email, password } = req.body;
  //   console.log({ firstname, lastname, email, password });

  const hashedPassword = await UserModel.hashPassword(password);
  //   console.log(hashedPassword);

  //   const { firstname, lastname } = fullname;
  const user = await userService(
    {
      firstname,
      lastname,
      email,
      password: hashedPassword,
    },
    res
  );

  const token = await user.generateAuthToken();
  //   res.status(200).send("hello");
  res.status(201).json({ user, token });
};

module.exports = registerUser;
