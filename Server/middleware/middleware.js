const { error } = require("console");
const { response } = require("express");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    res.json({
      message: "Invalid Token!",
    });
    return;
  }

  const finalToken = auth.split(" ")[1];

  try {
    const response = jwt.verify(finalToken, "satyam");
    req.id = response.id;
    next();
  } catch (e) {
    res.status(411).json({
      message: "Invalid Token ! No User Found",
      error: e,
    });
  }
}

module.exports = authMiddleware;
