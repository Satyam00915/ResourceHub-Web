const express = require("express");
const { userSchema } = require("../Zod/zod");
const { createUser } = require("../dist/prisma");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json("Need to build the Backend");
});

Router.post("/signup", async (req, res) => {
  const payLoad = req.body;
  const { success } = userSchema.safeParse(payLoad);
  if (!success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }

  const resp = await createUser(payLoad);
  console.log(resp);
  if (resp) {
    res.json({
      message: "User Created!",
    });
    return;
  }

  res.status(400).json({
    message: "Some error occurred!",
  });
});

module.exports = Router;
