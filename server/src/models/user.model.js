const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:8},
    roles:[{type:String,required:true,default:"user"}]
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)