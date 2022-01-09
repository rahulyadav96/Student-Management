const express = require("express");
const app = express();
app.use(express.json());

const studentController = require("./controllers/studentController");
const userControloler = require("./controllers/userController");
const contestController = require("./controllers/contestController");


app.use("/students", studentController);
app.use("/contests",contestController);
app.use("/users",userControloler);

module.exports = app;