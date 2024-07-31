const express = require("express");
const jwt = require("jsonwebtoken");
const { userSchema, updateSchema } = require("../Zod/zod");
const { createUser, checkUser, updateUser } = require("../dist/prisma");
const authMiddleware = require("../middleware/middleware");
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

  const id = await createUser(payLoad);
  console.log(id);
  if (id) {
    const token = jwt.sign({ id: id }, "satyam");
    res.json({
      token: token,
      message: "User Created!",
    });
    return;
  }

  res.status(400).json({
    message: "Some error occurred!",
  });
});

Router.post("/signin", async (req, res) => {
  const payLoad = req.body;
  const id = await checkUser(payLoad);
  if (id) {
    const token = jwt.sign({ id: id }, "satyam");
    res.json({
      message: "Signed In Successfully!",
      token: token,
    });
  } else {
    res.status(411).json({
      message: "User Not Found!",
    });
  }
});

Router.put("/updateUser", authMiddleware, async (req, res) => {
  const payLoad = req.body;
  payLoad.id = req.id;
  const { success } = updateSchema.safeParse(payLoad);
  if (!success) {
    res.status(411).json({
      message: "Invalid Input",
    });
    return;
  }

  const response = await updateUser(payLoad);
  if (!response) {
    res.status(400).json({
      message: "Some error occurred!",
    });
    return;
  }

  res.json({
    message: "User Updated!",
  });
});

module.exports = Router;
