const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const registerUser = require("../controller/userController"); // Import directly

router.post(
  "/register",
  //   [
  //     body("email").isEmail().withMessage("Invalid Email"),
  //     body("firstname").isString().withMessage("Invalid Firstname"),
  //     body("firstname")
  //       .isLength({ min: 3 })
  //       .withMessage("Firstname must be at least 3 characters"),
  //     body("password")
  //       .isLength({ min: 6 })
  //       .withMessage("Password must be at least 6 characters"),
  //   ],
  registerUser
);

module.exports = router;
