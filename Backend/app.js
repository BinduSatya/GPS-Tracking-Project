const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const routes = require("./routes/userRoutes");

connectToDb();
app.use(cors());
app.use(express.json());

app.use("/users", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
