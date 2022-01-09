const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    education:{type:String,required:true}

},{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model("student",studentSchema);
//Accept name, city, age, education, gender, contact 