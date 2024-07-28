const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json("Need to build the Backend");
});

module.exports = Router;
