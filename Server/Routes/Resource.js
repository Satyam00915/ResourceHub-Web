const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    message: "Resource Route is working fine!",
  });
});

Router.post();

module.exports = Router;
