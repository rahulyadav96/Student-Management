const mongoose  = require("mongoose");
require("dotenv").config();
const connect = ()=>{
    return mongoose.connect(`mongodb+srv://Rahulyadav:${process.env.MONGO_PWD}@cluster0.olguo.mongodb.net/StudentManagement?retryWrites=true&w=majority`)
}
module.exports = connect;
