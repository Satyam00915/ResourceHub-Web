const express = require("express");
const mainRouter = require("./Routes/index");
const app = express();

app.use(express.json());
app.use("/rh/v1", mainRouter);

app.listen(3000);
