const express = require("express");
const userRouter = require("./User");
const resourceRouter = require("./Resource");
const Router = express.Router();

Router.use("/user", userRouter);
Router.use("/resource", resourceRouter);

module.exports = Router;
