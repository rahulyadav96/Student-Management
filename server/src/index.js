const express = require("express");
const app = express();
const { body, validationResult } = require('express-validator');
const {signIn,signUp} = require("./controllers/authController");
app.use(express.json());

const studentController = require("./controllers/studentController");
const userControloler = require("./controllers/userController");
const contestController = require("./controllers/contestController");

app.post("/signUp",
body("name").notEmpty().withMessage("Name cant be empty"),
body("email").custom(value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    const iserror =  re.test(String(value).toLowerCase());
    if(!iserror){
        throw new Error("Enter a valid email");
    }
    return iserror;
}),
body('password').isLength({min:8}).withMessage("password should be atleast 8 character"),
signUp
)


app.post("/signIn",
body("email").custom(value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    const iserror =  re.test(String(value).toLowerCase());
    if(!iserror){
        throw new Error("Enter a valid email");
    }
    return iserror;
}),
body('password').isLength({min:8}).withMessage("password should be atleast 8 character"),
signIn)

app.use("/students", studentController);
app.use("/contests",contestController);
app.use("/users",userControloler);



module.exports = app;