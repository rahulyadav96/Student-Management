const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema({
    tag:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("tag",tagSchema);