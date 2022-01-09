const mongoose = require("mongoose");
const contestSchema = new mongoose.Schema({
    title:{type:String,required:true},
    contest_type:{type:String,required:true},
    deadline:{type:String,required:true},
    tags:[{type:mongoose.Schema.Types.ObjectId, ref:"tags", required:false}],
    start_time:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})
module.exports = mongoose.model("contest",contestSchema)