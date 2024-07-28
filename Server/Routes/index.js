const express = require("express");
const userRouter = require("./User");
const Router = express.Router();

Router.use("/user", userRouter);

module.exports = Router;
