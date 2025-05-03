const express = require("express");
const cors = require("cors");
const { login } = require("./controller/auth.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", login);

module.exports = app;
