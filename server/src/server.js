require("dotenv").config();

const port = process.env.PORT || 3210
const connect = require("./config/db");
const app = require("./index")

app.listen(port,async ()=>{
    try{
        await connect();
        console.log(`Listening at port number: ${port}`)
    }catch(err){
        console.log(err);
    }
})