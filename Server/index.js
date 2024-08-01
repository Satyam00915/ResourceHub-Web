const express = require("express");
const mainRouter = require("./Routes/index");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/rh/v1", mainRouter);

app.listen(3000);
