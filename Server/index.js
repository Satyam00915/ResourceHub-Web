const express = require("express");
const mainRouter = require("./Routes/index");
const app = express();

app.use("/rh/v1", mainRouter);
app.use(express.json());

app.listen(3000);
