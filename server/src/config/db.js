const mongoose  = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;
const connect = ()=>{
    return mongoose.connect(`mongodb+srv://mrahul:${password}@cluster0.gxoks.mongodb.net/studentManagement?retryWrites=true&w=majority`)
}
module.exports = connect;

//mongodb+srv://mrahul:<password>@cluster0.gxoks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority