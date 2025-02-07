const userModel = require("../models/userModel");

const createUser = async ({ firstname, lastname, email, password }, res) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res
      .status(500)
      .json({ error: "User with this email already exists" });
  }
  console.log({ firstname, lastname, email, password });

  const user = await userModel.create({
    firstname,
    lastname,
    email,
    password,
  });

  return user;
};

module.exports = createUser;
